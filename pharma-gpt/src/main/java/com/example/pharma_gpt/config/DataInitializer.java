package com.example.pharma_gpt.config;

import com.example.pharma_gpt.entity.ForumPost;
import com.example.pharma_gpt.entity.User;
import com.example.pharma_gpt.repository.DirectConversationRepository;
import com.example.pharma_gpt.repository.DirectMessageRepository;
import com.example.pharma_gpt.repository.ForumCommentRepository;
import com.example.pharma_gpt.repository.ForumLikeRepository;
import com.example.pharma_gpt.repository.ForumPostRepository;
import com.example.pharma_gpt.repository.UserRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.SmartInitializingSingleton;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Profile;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;
import org.springframework.transaction.PlatformTransactionManager;
import org.springframework.transaction.TransactionDefinition;
import org.springframework.transaction.support.TransactionTemplate;

import java.time.Instant;

@Component
@Profile("!prod")
public class DataInitializer implements SmartInitializingSingleton {

    private static final Logger log = LoggerFactory.getLogger(DataInitializer.class);

    private static final String SEED_PASSWORD = "password123";

    private final UserRepository userRepository;
    private final ForumPostRepository forumPostRepository;
    private final ForumCommentRepository forumCommentRepository;
    private final ForumLikeRepository forumLikeRepository;
    private final DirectMessageRepository directMessageRepository;
    private final DirectConversationRepository directConversationRepository;
    private final PasswordEncoder passwordEncoder;
    private final TransactionTemplate transactionTemplate;

    private final boolean fullResetOnStartup;

    public DataInitializer(UserRepository userRepository,
                           ForumPostRepository forumPostRepository,
                           ForumCommentRepository forumCommentRepository,
                           ForumLikeRepository forumLikeRepository,
                           DirectMessageRepository directMessageRepository,
                           DirectConversationRepository directConversationRepository,
                           PasswordEncoder passwordEncoder,
                           PlatformTransactionManager transactionManager,
                           @Value("${pharma.seed.full-reset-on-startup:false}") boolean fullResetOnStartup) {
        this.userRepository = userRepository;
        this.forumPostRepository = forumPostRepository;
        this.forumCommentRepository = forumCommentRepository;
        this.forumLikeRepository = forumLikeRepository;
        this.directMessageRepository = directMessageRepository;
        this.directConversationRepository = directConversationRepository;
        this.passwordEncoder = passwordEncoder;
        this.transactionTemplate = new TransactionTemplate(transactionManager);
        this.transactionTemplate.setPropagationBehavior(TransactionDefinition.PROPAGATION_REQUIRES_NEW);
        this.fullResetOnStartup = fullResetOnStartup;
    }

    @Override
    public void afterSingletonsInstantiated() {
        try {
            if (fullResetOnStartup) {
                // Tranzacție separată: altfel, la orice eșec după purge (ex. forum), rollback-ul readuce userii vechi.
                transactionTemplate.executeWithoutResult(status -> {
                    purgeAllUserRelatedData();
                    seedTenUsers();
                });
                transactionTemplate.executeWithoutResult(status -> seedForumPosts());
            } else {
                transactionTemplate.executeWithoutResult(status -> {
                    legacySeedIfMissing();
                    seedForumPostsIfEmpty();
                });
            }
        } catch (Exception e) {
            log.error("DataInitializer: eșec la seed/reset. Verifică logurile și baza folosită (H2 ./data vs PostgreSQL).", e);
            throw e;
        }
    }

    private void purgeAllUserRelatedData() {
        long dm = directMessageRepository.count();
        long dc = directConversationRepository.count();
        long fl = forumLikeRepository.count();
        long fc = forumCommentRepository.count();
        long fp = forumPostRepository.count();
        long u = userRepository.count();
        directMessageRepository.deleteAll();
        directConversationRepository.deleteAll();
        forumLikeRepository.deleteAll();
        forumCommentRepository.deleteAll();
        forumPostRepository.deleteAll();
        userRepository.deleteAll();
        userRepository.flush();
        log.info(
            "Reset date: șterse mesaje directe={}, conversații={}, like-uri={}, comentarii={}, postări={}, utilizatori={}",
            dm, dc, fl, fc, fp, u
        );
    }

    private void seedTenUsers() {
        for (SeedUserSpec spec : TEN_USERS) {
            if (userRepository.existsByEmailIgnoreCase(spec.email)) {
                log.info("Utilizator seed deja prezent, sar: {}", spec.email);
                continue;
            }
            createUserFromSpec(spec);
            log.info("Utilizator seed: {}", spec.email);
        }
    }

    private void legacySeedIfMissing() {
        for (SeedUserSpec spec : LEGACY_USERS) {
            if (userRepository.findByEmailIgnoreCase(spec.email).isPresent()) {
                continue;
            }
            createUserFromSpec(spec);
            log.info("Seed user creat (legacy): {}", spec.email);
        }
    }

    private void createUserFromSpec(SeedUserSpec spec) {
        User u = new User();
        u.setEmail(spec.email);
        u.setPassword(passwordEncoder.encode(SEED_PASSWORD));
        u.setFirstName(spec.firstName);
        u.setLastName(spec.lastName);
        u.setPhoneNumber(spec.phoneNumber);
        u.setParafa(spec.parafa);
        u.setProviderType(spec.providerType);
        u.setSpecialty(spec.specialty);
        u.setMedicGrade(spec.medicGrade);
        u.setAcademicTitles(spec.academicTitles);
        u.setRole("ROLE_USER");
        u.syncFullName();
        userRepository.save(u);
    }

    private void seedForumPostsIfEmpty() {
        if (forumPostRepository.count() > 0) {
            return;
        }
        seedForumPostsWithEmails(
            "andrei.popescu@pharma-gpt.ro",
            "maria.ionescu@pharma-gpt.ro",
            "alexandru.stan@pharma-gpt.ro",
            "elena.dumitru@pharma-gpt.ro",
            "razvan.marin@pharma-gpt.ro",
            "ioana.neagu@pharma-gpt.ro"
        );
    }

    private void seedForumPosts() {
        seedForumPostsWithEmails(
            "andrei.vasile@pharma-gpt.ro",
            "maria.georgescu@pharma-gpt.ro",
            "cristina.popa@pharma-gpt.ro",
            "elena.dobre@pharma-gpt.ro",
            "mihai.radu@pharma-gpt.ro",
            "ioana.stoica@pharma-gpt.ro"
        );
    }

    private void seedForumPostsWithEmails(
        String e1, String e2, String e3, String e4, String e5, String e6
    ) {
        Long u1 = userRepository.findByEmailIgnoreCase(e1).map(User::getId).orElse(null);
        Long u2 = userRepository.findByEmailIgnoreCase(e2).map(User::getId).orElse(null);
        Long u3 = userRepository.findByEmailIgnoreCase(e3).map(User::getId).orElse(null);
        Long u4 = userRepository.findByEmailIgnoreCase(e4).map(User::getId).orElse(null);
        Long u5 = userRepository.findByEmailIgnoreCase(e5).map(User::getId).orElse(null);
        Long u6 = userRepository.findByEmailIgnoreCase(e6).map(User::getId).orElse(null);
        if (u1 == null || u2 == null || u3 == null || u4 == null || u5 == null || u6 == null) {
            log.warn("Forum seed omis: lipsesc utilizatori pentru emailurile configurate.");
            return;
        }

        Instant base = Instant.now();
        int h = 0;
        savePost(u1, base.minusSeconds(++h * 3600L),
            "Interacție claritromicină + simvastatină la pacient cu pneumonie",
            "Am un pacient de 68 ani, pneumonie comunitară tratată cu claritromicină orală. "
                + "Are și simvastatină 40 mg seara pentru dislipidemie. Știu că macrolidele cresc riscul de rabdomioliză cu statine. "
                + "Practic opresc simvastatina pe durata tratamentului + câteva zile după sau o schimb temporar? Ce alternativă ați folosi (doză redusă rosuvastatină, altă clasă)? Mulțumesc.");

        savePost(u2, base.minusSeconds(++h * 3600L),
            "Insulină glargină: când treceți pacientul de pe o dată pe zi la două injecții?",
            "Pacient diabet tip 2, glargină 24 UI seara, HbA1c 8.2%, glicemii dimineața ridicate (post-prandial ok). "
                + "Aveți un prag practic (diferență basală vs. profil) înainte să împărțiți doza sau preferați mai întâi ajustarea bolusului? "
                + "Menționez că refuză pump.");

        savePost(u3, base.minusSeconds(++h * 3600L),
            "Copil 4 ani, alergie la ou: se poate vaccina anti-gripal cu vaccin inactivat?",
            "Mama e foarte îngrijorată. Istoric de urticarie la ou acum 1 an. "
                + "Am citit că majoritatea vaccinurilor gripale actuale nu mai conțin cantități relevante de ovalbumină, dar vreau să fiu aliniat la protocol. "
                + "Cine face observație în cabinet și cât timp recomandați?");

        savePost(u4, base.minusSeconds(++h * 3600L),
            "Hipertensiune la adolescent: când investigați secundar și ce primă linie folosiți?",
            "Adolescent 16 ani, TA repetat 150/95, fără simptome, IMC la limită. "
                + "Părinți cu HTA. Ați începe întotdeauna cu RMN renal + analize înainte de tratament sau aveți pași diferiți sub 18 ani?");

        savePost(u5, base.minusSeconds(++h * 3600L),
            "Anticoagulant perioperator: întrerupere apixaban pentru colecistectomie programată",
            "Pacient FA, apixaban 5 mg BID, clearance creatinină ok, risc hemoragic intermediar pentru operație. "
                + "Ce schemă de stop/restart folosiți (ultima doză înainte de incizie, bridging, când reluați)? "
                + "Dacă aveți un link la ghid recent, apreciez.");

        savePost(u6, base.minusSeconds(++h * 3600L),
            "Cefalee nouă la pacient cu anticoagulare: CT non-contrast suficient în urgență?",
            "Pacient 72 ani, warfarină, debut cefalee severă „ca un tun” în această seară, neurologic stabil la examen. "
                + "În lipsă de CT imediat, trimiteți mai departe sau considerați că non-contrastul exclude hemoragie suficient pentru decizie inițială?");

        savePost(u2, base.minusSeconds(++h * 3600L),
            "Ajustare doză metformină la insuficiență renală ușoară (eGFR 48)",
            "Pacient nou diagnosticat T2DM, eGFR 48 ml/min/1.73m², fără acidoză. "
                + "În practică reduceți metformina sub 45 sau o evitați complet până la reevaluare? Cum documentați consimțământul pacientului pentru riscul de acidoză lactică?");

        savePost(u1, base.minusSeconds(++h * 3600L),
            "IECA + diuretic la vârstnic: monitorizare creatinină și K+ la câte zile?",
            "Initiez perindopril la pacient 78 ani care ia deja indapamidă. "
                + "În protocolul vostru, primul control al ionogramei/creatininei e la 1 săptămână sau mai devreme dacă e fragil?");

        savePost(u3, base.minusSeconds(++h * 3600L),
            "Stocare insuline deschise: temperatură cameră după prima utilizare",
            "Pacient întreabă dacă poate ține pen-ul de insulină rapidă în geantă vara (30°C). "
                + "Ce recomandați practic: max câte zile la temperaturi ridicate înainte să schimbe fiola?");

        savePost(u4, base.minusSeconds(++h * 3600L),
            "Bronhodilatator la copil cu wheezing: diferență salbutamol vs. levalbuterol în practică",
            "Spirometrie nu e fezabilă la 3 ani. În exacerbări ușoare, folosiți levalbuterol doar dacă există tachicardie sau e indiferent la vârstă mică?");

        log.info("Forum seed: {} postări create.", forumPostRepository.count());
    }

    private void savePost(Long authorUserId, Instant createdAt, String title, String content) {
        ForumPost p = new ForumPost();
        p.setAuthorUserId(authorUserId);
        p.setTitle(title);
        p.setContent(content);
        p.setCreatedAt(createdAt);
        forumPostRepository.save(p);
    }

    private record SeedUserSpec(
        String email,
        String firstName,
        String lastName,
        String phoneNumber,
        String parafa,
        String providerType,
        String specialty,
        String medicGrade,
        String academicTitles
    ) {}

    /** 10 utilizatori noi — parolă pentru toți: password123 */
    private static final SeedUserSpec[] TEN_USERS = new SeedUserSpec[] {
        new SeedUserSpec(
            "andrei.vasile@pharma-gpt.ro", "Andrei", "Vasile", "+40 721 100 001", "MED-RO-10001",
            "medic", "Cardiologie", "specialist", "Dr. med., competență ecocardiografie"
        ),
        new SeedUserSpec(
            "maria.georgescu@pharma-gpt.ro", "Maria", "Georgescu", "+40 722 100 002", "MED-RO-10002",
            "medic", "Medicină internă", "primar", "Dr. med. primar, doctor în științe medicale"
        ),
        new SeedUserSpec(
            "cristina.popa@pharma-gpt.ro", "Cristina", "Popa", "+40 723 100 003", "FAR-RO-20001",
            "farmacist", null, null, "Farmacist specialist, farmacie clinică"
        ),
        new SeedUserSpec(
            "elena.dobre@pharma-gpt.ro", "Elena", "Dobre", "+40 724 100 004", "MED-RO-10004",
            "medic", "Pediatrie", "rezident", "Dr. rezident, anul III"
        ),
        new SeedUserSpec(
            "mihai.radu@pharma-gpt.ro", "Mihai", "Radu", "+40 725 100 005", "MED-RO-10005",
            "medic", "Chirurgie generală", "specialist", "Dr. med., competență laparoscopie"
        ),
        new SeedUserSpec(
            "ioana.stoica@pharma-gpt.ro", "Ioana", "Stoica", "+40 726 100 006", "MED-RO-10006",
            "medic", "Neurologie", "specialist", "Dr. med., competență EEG"
        ),
        new SeedUserSpec(
            "daniel.toma@pharma-gpt.ro", "Daniel", "Toma", "+40 727 100 007", "FAR-RO-20002",
            "farmacist", null, null, "Farmacist coordonator, OF"
        ),
        new SeedUserSpec(
            "ana.munteanu@pharma-gpt.ro", "Ana", "Munteanu", "+40 728 100 008", "MED-RO-10008",
            "medic", "Anestezie și terapie intensivă", "primar", "Dr. med. primar ATI"
        ),
        new SeedUserSpec(
            "serban.iliescu@pharma-gpt.ro", "Șerban", "Iliescu", "+40 729 100 009", "MED-RO-10009",
            "medic", "Medicină de familie", "specialist", "Dr. med., competență paliație"
        ),
        new SeedUserSpec(
            "bianca.enache@pharma-gpt.ro", "Bianca", "Enache", "+40 730 100 010", "FAR-RO-20003",
            "farmacist", null, null, "Farmacist, farmacie spitalicească"
        ),
    };

    /** Comportament vechi — doar dacă full-reset e dezactivat */
    private static final SeedUserSpec[] LEGACY_USERS = new SeedUserSpec[] {
        new SeedUserSpec("andrei.popescu@pharma-gpt.ro", "Andrei", "Popescu", "+40 711 111 111", "MED-RO-00123",
            "medic", "Cardiologie", "specialist", null),
        new SeedUserSpec("maria.ionescu@pharma-gpt.ro", "Maria", "Ionescu", "+40 712 222 222", "MED-RO-00456",
            "medic", "Medicină internă", "specialist", null),
        new SeedUserSpec("alexandru.stan@pharma-gpt.ro", "Alexandru", "Stan", "+40 713 333 333", "FAR-RO-01987",
            "farmacist", null, null, null),
        new SeedUserSpec("elena.dumitru@pharma-gpt.ro", "Elena", "Dumitru", "+40 714 444 444", "MED-RO-07890",
            "medic", "Pediatrie", "specialist", null),
        new SeedUserSpec("razvan.marin@pharma-gpt.ro", "Răzvan", "Marin", "+40 715 555 555", "MED-RO-02345",
            "medic", "Chirurgie generală", "specialist", null),
        new SeedUserSpec("ioana.neagu@pharma-gpt.ro", "Ioana", "Neagu", "+40 716 666 666", "MED-RO-05678",
            "medic", "Neurologie", "specialist", null),
    };
}
