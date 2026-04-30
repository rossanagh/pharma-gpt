if(window['pdfjsLib'])pdfjsLib.GlobalWorkerOptions.workerSrc='https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js';

/* ============ TRANSLATIONS ============ */
const T = {
  en:{
    "Anatomie":"Anatomy","Fiziologie":"Physiology","Biochimie":"Biochemistry",
    "Histologie și anatomie patologică":"Histology & Pathology",
    "Farmacologie":"Pharmacology","Fiziopatologie":"Pathophysiology",
    "Microbiologie și boli infecțioase":"Microbiology & Infectious Diseases",
    "Cardiologie și chirurgie cardiovasculară":"Cardiology & Cardiovascular Surgery",
    "Medicină internă":"Internal Medicine",
    "Gastroenterologie și chirurgie digestivă":"Gastroenterology & Digestive Surgery",
    "Nefrologie și urologie":"Nephrology & Urology",
    "Pneumologie":"Pulmonology",
    "Neurologie și neurochirurgie":"Neurology & Neurosurgery",
    "Psihiatrie":"Psychiatry",
    "Endocrinologie și diabet":"Endocrinology & Diabetes",
    "Hematologie și oncologie":"Haematology & Oncology",
    "Reumatologie":"Rheumatology",
    "Chirurgie generală":"General Surgery",
    "Ortopedie și traumatologie":"Orthopaedics & Traumatology",
    "Pediatrie și chirurgie pediatrică":"Paediatrics & Paediatric Surgery",
    "Obstetrică-ginecologie":"Obstetrics & Gynaecology",
    "Medicină de urgență și ATI":"Emergency Medicine & ICU",
    "Dermatovenerologie":"Dermatology & Venereology",
    "Oftalmologie":"Ophthalmology","ORL":"ENT",
    "Medicină legală":"Forensic Medicine",
    "Medicină de familie":"Family Medicine",
    "Radiologie și imagistică":"Radiology & Imaging",
    "Chimie generală și anorganică":"General & Inorganic Chemistry",
    "Chimie organică și analitică":"Organic & Analytical Chemistry",
    "Farmacognozie și fitoterapie":"Pharmacognosy & Phytotherapy",
    "Chimie farmaceutică":"Pharmaceutical Chemistry",
    "Tehnologie farmaceutică":"Pharmaceutical Technology",
    "Farmacologie și farmacoterapie":"Pharmacology & Pharmacotherapy",
    "Biofarmacie și farmacocinetică":"Biopharmacy & Pharmacokinetics",
    "Toxicologie":"Toxicology",
    "Farmacie clinică și spitalicească":"Clinical & Hospital Pharmacy",
    "Legislație și management farmaceutic":"Pharmacy Law & Management",
    "Morfologia și fiziologia aparatului dento-maxilar":"Dento-Maxillary Morphology & Physiology",
    "Odontologie conservatoare și endodonție":"Conservative Dentistry & Endodontics",
    "Parodontologie":"Periodontology",
    "Protetică dentară":"Dental Prosthetics",
    "Ortodonție și ortopedie dento-facială":"Orthodontics",
    "Pedodonție":"Paediatric Dentistry",
    "Chirurgie orală și dento-alveolară":"Oral Surgery",
    "Chirurgie maxilo-facială":"Maxillofacial Surgery",
    "Radiologie dento-maxilară":"Dental Radiology",
    "Farmacologie și anestezie în stomatologie":"Dental Pharmacology & Anaesthesia",
    "Materiale dentare":"Dental Materials",
    "Deontologie și legislație stomatologică":"Dental Ethics & Law",
    "Medicină":"Medicine","Farmacie":"Pharmacy","Stomatologie":"Dentistry",
    "Medicine (MG)":"Medicine (MG)",
    "Niciun test încă":"No tests yet"
  },
  ro:{
    "Consultation":"Consultație","AI Tools":"Instrumente AI","Guidelines":"Ghiduri clinice","Drugs":"Medicamente","News":"Știri","Radiology":"Radiologie","Rezidentiat":"Rezidențiat",
    "AI Tutor":"Tutor AI","Sign In":"Conectare","Get Free Access":"Acces gratuit","Sign out":"Deconectare",
    "Trusted by clinicians across Europe":"De încredere pentru clinicieni din toată Europa",
    "Evidence.":"Evidență.","Not opinion.":"Nu opinie.",
    "Instant, evidence-based responses from global clinical guidelines, drug databases and pharmaceutical research. Free for verified clinicians.":"Răspunsuri instant, bazate pe evidențe, din ghiduri clinice globale, baze de date de medicamente și cercetare farmaceutică. Gratuit pentru clinicieni verificați.",
    "Ask any clinical question — doses, interactions, guidelines…":"Întreabă orice întrebare clinică — doze, interacțiuni, ghiduri…",
    "First-line treatment for T2DM with high cardiovascular risk?":"Tratament de primă linie pentru DZ2 cu risc cardiovascular crescut?",
    "Check interactions: warfarin + aspirin + omeprazole":"Verifică interacțiuni: warfarină + aspirină + omeprazol",
    "ESC 2024 hypertension — key recommendations summary":"ESC 2024 hipertensiune — rezumat recomandări cheie",
    "Verified clinicians":"Clinicieni verificați","AI consultations":"Consultații AI","Guidelines indexed":"Ghiduri indexate","Validated accuracy":"Acuratețe validată",
    "Data sources & institutional partners":"Surse de date & parteneri instituționali",
    "Every answer, fully traceable.":"Fiecare răspuns, complet trasabil.",
    "European Medicines Agency":"Agenția Europeană a Medicamentului","Cardiology Guidelines":"Ghiduri Cardiologie","Diabetes Guidelines":"Ghiduri Diabet","Oncology Guidelines":"Ghiduri Oncologie","Respiratory Society":"Societatea Respiratorie","World Health Organization":"Organizația Mondială a Sănătății","Systematic Reviews":"Reviste Sistematice","Biomedical Literature":"Literatură Biomedicală",
    "Built for decisions that matter":"Construit pentru decizii care contează",
    "Clinical intelligence,":"Inteligență clinică,","refined.":"rafinată.",
    "Every answer traceable. Every source verifiable. Free for verified clinicians — funded by pharmaceutical education, not paywalls.":"Fiecare răspuns trasabil. Fiecare sursă verificabilă. Gratuit pentru clinicieni verificați — finanțat prin educație farmaceutică, nu paywall-uri.",
    "For physicians":"Pentru medici","Clinical guidelines, drug interactions, differential diagnosis — contextual answers for the patient in front of you.":"Ghiduri clinice, interacțiuni medicamentoase, diagnostic diferențial — răspunsuri contextuale pentru pacientul din fața ta.",
    "For pharmacists":"Pentru farmaciști","Brand names + INN recognition, interaction screening, dispensing protocols — all unified.":"Recunoaștere denumiri comerciale + DCI, screening interacțiuni, protocoale de eliberare — totul unificat.",
    "Radiology second-opinion":"A doua opinie radiologică","Upload imaging for an evidence-based AI second read — differential, confidence scores and recommended next steps.":"Încarcă imagistică pentru o a doua citire AI bazată pe evidențe — diferențial, scoruri de încredere și pași recomandați.",
    "Rezidenţiat & students":"Rezidențiat & studenți","Adaptive quizzes generated live by AI, case-based learning, exam preparation tracks across every specialty.":"Chestionare adaptive generate live de AI, învățare pe bază de cazuri, trasee de pregătire examen pentru fiecare specialitate.",
    "Free for verified clinicians":"Gratuit pentru clinicieni verificați",
    "Where medicine":"Unde medicina","finds its evidence.":"își găsește evidența.",
    "Join thousands of physicians and pharmacists already using MedicinEvidence for faster, better-informed clinical decisions.":"Alătură-te miilor de medici și farmaciști care folosesc deja MedicinEvidence pentru decizii clinice mai rapide și mai bine informate.",
    "Request Free Access":"Solicită Acces Gratuit","Verification required · No credit card · Ad-free for users":"Verificare necesară · Fără card · Fără reclame pentru utilizatori",
    "Good morning,":"Bună dimineața,","Good afternoon,":"Bună ziua,","Good evening,":"Bună seara,","Good night,":"Noapte bună,",
    "Doctor":"Medic","Pharmacist":"Farmacist","Student":"Student",
    "Physician":"Medic","Main":"Principal","Drug Database":"Bază Medicamente","Learning":"Învățare",
    "Clinical":"Consultație","consultation.":"clinică.","Patient context → personalised evidence-based guidance (streaming AI)":"Context pacient → ghidaj personalizat bazat pe evidențe (AI streaming)",
    "Patient context":"Context pacient","Age":"Vârstă","Sex":"Sex","Select…":"Selectează…","Male":"Bărbat","Female":"Femeie","Weight (kg)":"Greutate (kg)","Conditions":"Afecțiuni","Type 2 diabetes, hypertension…":"Diabet zaharat tip 2, hipertensiune…","Current medications":"Medicație curentă","Metformin 1000mg bid, Ramipril 5mg…":"Metformin 1000mg x2/zi, Ramipril 5mg…",
    "Clinical query":"Întrebare clinică","Contextual · evidence-based · always cited · streaming":"Contextual · bazat pe evidențe · întotdeauna citat · streaming",
    "Ready when you are.":"Gata când ești tu.","Enter patient context on the left, then ask your clinical question. Every response is tailored and cited.":"Introdu contextul pacientului în stânga, apoi pune întrebarea clinică. Fiecare răspuns este personalizat și citat.",
    "Ask a clinical question…":"Pune o întrebare clinică…","Always cited":"Întotdeauna citat",
    "Tools":"Instrumente","Precision":"Precizie","in seconds.":"în secunde.",
    "Focused utilities for the most common clinical decisions":"Utilități focusate pentru cele mai comune decizii clinice",
    "Drug Interactions":"Interacțiuni Medicamentoase",
    "Ask in Consultation: \"Check interactions between X, Y, Z\" — streaming answer with severity + mechanism.":"Întreabă în Consultație: \"Verifică interacțiuni între X, Y, Z\" — răspuns streaming cu severitate + mecanism.",
    "Drug Lookup":"Căutare Medicament",
    "Brand or generic — type Nurofen, Concor, Augmentin, metformin. AI identifies active ingredient and full fact sheet.":"Comercial sau generic — tastează Nurofen, Concor, Augmentin, metformin. AI identifică substanța activă și fișa completă.",
    "ESC, EASD, ERS, ESMO, GOLD, CNAS — key recommendations at a glance.":"ESC, EASD, ERS, ESMO, GOLD, CNAS — recomandări cheie dintr-o privire.",
    "Radiology AI":"AI Radiologie","Upload an image — AI provides structured read with differential and confidence score.":"Încarcă o imagine — AI oferă citire structurată cu diferențial și scor de încredere.",
    "Differential Diagnosis":"Diagnostic Diferențial","Ask in Consultation with patient context — AI ranks differentials with red flags.":"Întreabă în Consultație cu context pacient — AI ordonează diferențiale cu semne de alarmă.",
    "AI Tutor (Praxis)":"Tutor AI (Praxis)","Pick a subject and chat with an AI tutor for board prep and clinical knowledge.":"Alege o materie și conversează cu un tutor AI pentru pregătire examene și cunoștințe clinice.",
    "Current.":"Actual.","Cited.":"Citat.","Clinical Guidelines":"Ghiduri Clinice","Indexed, searchable, always current":"Indexate, căutabile, mereu actuale",
    "April 2024":"Aprilie 2024","Jan 2024":"Ian 2024",
    "Management of Arterial Hypertension":"Managementul Hipertensiunii Arteriale","Target 130/80 mmHg · First-line ACEi/ARB + CCB · Updated high-risk thresholds":"Țintă 130/80 mmHg · Prima linie IECA/BRA + BCC · Praguri actualizate pentru risc crescut",
    "Management of Hyperglycaemia in Type 2 Diabetes":"Managementul Hiperglicemiei în Diabet Zaharat Tip 2","SGLT2i first-line for T2DM + CKD regardless of HbA1c · GLP-1 RA in CVD":"SGLT2i prima linie pentru DZ2 + BRC indiferent de HbA1c · GLP-1 RA în BCV",
    "Heart Failure — Diagnosis and Treatment":"Insuficiență Cardiacă — Diagnostic și Tratament","Four-pillar therapy for HFrEF · SGLT2i for all EF < 40%":"Terapie pe patru piloni pentru ICFER · SGLT2i pentru toți FE < 40%",
    "Global Strategy for COPD":"Strategia Globală pentru BPOC","LAMA monotherapy first-line · Dual bronchodilation if persistent symptoms":"Monoterapie LAMA prima linie · Dublă bronhodilatație la simptome persistente",
    "Breast Cancer — Clinical Practice Guidelines":"Cancer Mamar — Ghiduri de Practică Clinică","Updated HER2+ first-line therapy · New biomarker-driven recommendations":"Terapie actualizată HER2+ prima linie · Recomandări noi bazate pe biomarkeri",
    "Protocoale Terapeutice Naționale România":"Protocoale Terapeutice Naționale România","Compensated medicines protocols updated · Diabetes type 2 algorithm revised":"Protocoale medicamente compensate actualizate · Algoritm diabet tip 2 revizuit",
    "Drug database":"Bază medicamente","Brand + INN":"Comercial + DCI","Search by brand name or INN · AI recognizes Romanian & European commercial names":"Caută după denumire comercială sau DCI · AI recunoaște denumirile comerciale românești și europene",
    "Nurofen, Concor, Augmentin, metformin, warfarin…":"Nurofen, Concor, Augmentin, metformin, warfarină…","Search":"Caută",
    "Try:":"Încearcă:","Nurofen, Concor, Tertensif, Prestarium, Augmentin, Xarelto, metformin, semaglutide, ramipril":"Nurofen, Concor, Tertensif, Prestarium, Augmentin, Xarelto, metformin, semaglutidă, ramipril",
    "Medical news":"Știri medicale","Daily.":"Zilnic.","Curated.":"Selectat.","Breaking research, approvals and guideline updates":"Cercetări de ultimă oră, aprobări și actualizări de ghiduri",
    "2 hours ago":"acum 2 ore","5 hours ago":"acum 5 ore","1 day ago":"acum 1 zi","2 days ago":"acum 2 zile","3 days ago":"acum 3 zile","4 days ago":"acum 4 zile","5 days ago":"acum 5 zile",
    "New hypertension guidelines: treat at 130/80 mmHg in high-risk patients":"Ghiduri noi HTA: tratament la 130/80 mmHg la pacienții cu risc crescut",
    "ESC lowers threshold following analysis of cardiovascular risk data from European cohorts.":"ESC scade pragul după analiza datelor de risc cardiovascular din cohortele europene.",
    "Ianalumab approved for primary Sjögren's syndrome — first biologic indication":"Ianalumab aprobat pentru sindrom Sjögren primar — primă indicație biologică",
    "Anti-BAFF monoclonal antibody shows significant symptom improvement in phase III.":"Anticorpul monoclonal anti-BAFF arată ameliorare semnificativă a simptomelor în faza III.",
    "Semaglutide cuts CV events 20% in non-diabetic obese patients":"Semaglutida reduce evenimentele CV cu 20% la pacienți obezi non-diabetici",
    "SELECT trial results expand indication rationale beyond glycaemic control.":"Rezultatele studiului SELECT extind raționamentul indicației dincolo de controlul glicemic.",
    "SGLT2i now first-line for T2DM with CKD regardless of HbA1c":"SGLT2i acum prima linie pentru DZ2 cu BRC indiferent de HbA1c",
    "Updated algorithm emphasizes renal protection as primary driver of choice.":"Algoritmul actualizat subliniază protecția renală ca factor principal.",
    "Praxis.":"Praxis.","Learn by doing.":"Învață făcând.",
    "Adaptive learning":"Învățare adaptivă","Praxis AI":"Praxis AI","— your personal tutor.":"— tutorele tău personal.",
    "Pick a subject and ask anything. Evidence-based tutoring for medical students and residents. Same engine clinicians use.":"Alege o materie și întreabă orice. Predare bazată pe evidențe pentru studenți la medicină și rezidenți. Același motor pe care îl folosesc clinicienii.",
    "Pick a subject":"Alege o materie",
    "Cardiology":"Cardiologie","Endocrinology":"Endocrinologie","Neurology":"Neurologie","Pharmacology":"Farmacologie","Infectious diseases":"Boli infecțioase","Haematology":"Hematologie","Pulmonology":"Pneumologie","Gastroenterology":"Gastroenterologie","Nephrology":"Nefrologie","Oncology":"Oncologie","Psychiatry":"Psihiatrie","Pediatrics":"Pediatrie",
    "Tutor —":"Tutor —","Ask any question · Socratic · evidence-based · streaming":"Pune orice întrebare · Socratic · bazat pe evidențe · streaming",
    "Ready to learn.":"Gata să înveți.","Pick a subject above, then ask me anything — mechanisms, landmark trials, clinical reasoning.":"Alege o materie mai sus, apoi întreabă-mă orice — mecanisme, studii importante, raționament clinic.",
    "Ask anything about the subject…":"Întreabă orice despre materie…",
    "AI-generated":"Generat AI","quizzes.":"chestionare.",
    "Click a specialty → AI generates 5 fresh clinical vignette questions with answers and explanations":"Click pe o specialitate → AI generează 5 întrebări noi cu vignete clinice, răspunsuri și explicații",
    "AI-generated questions":"Întrebări generate AI","Specialties":"Specialități","Questions per set":"Întrebări per set","Difficulty levels":"Niveluri dificultate",
    "Difficulty":"Dificultate","Beginner":"Începător","Intermediate":"Intermediar","Advanced":"Avansat",
    "Specialties — click to generate quiz":"Specialități — click pentru quiz",
    "Medicină internă":"Medicină internă","Chirurgie generală":"Chirurgie generală","Pediatrie":"Pediatrie","Obstetrică-ginecologie":"Obstetrică-ginecologie","Cardiologie":"Cardiologie","Neurologie":"Neurologie","Psihiatrie":"Psihiatrie","Farmacologie":"Farmacologie","Anatomie patologică":"Anatomie patologică","Boli infecțioase":"Boli infecțioase","Radiologie":"Radiologie","ATI":"ATI",
    "AI quiz · 5 questions":"Quiz AI · 5 întrebări",
    "AI Vision":"AI Vision","second-opinion.":"a doua opinie.",
    "Upload imaging for an evidence-based second-opinion · JPG, PNG · AI Vision":"Încarcă imagistică pentru a doua opinie bazată pe evidențe · JPG, PNG · AI Vision",
    "Drop imaging here or click to upload":"Trage imagistica aici sau click pentru încărcare",
    "Supports JPG, PNG · HIPAA/GDPR compliant · Anonymized at upload · Max 5MB":"Suportă JPG, PNG · Conform HIPAA/GDPR · Anonimizat la încărcare · Max 5MB",
    "Analyze with AI":"Analizează cu AI","Clear":"Șterge",
    "Fast turnaround":"Rezultate rapide","Results typically under 30 seconds":"Rezultate de obicei sub 30 secunde",
    "Structured read":"Citire structurată","Findings + differential with confidence":"Constatări + diferențial cu încredere",
    "Guidelines-backed":"Susținut de ghiduri","Recommendations link to evidence":"Recomandările au link către evidență",
    "Clinical disclaimer:":"Aviz clinic:",
    "Radiology AI provides decision-support only. It is not a substitute for formal radiological interpretation by a licensed radiologist. All findings must be clinically correlated and verified.":"AI-ul radiologic oferă doar suport pentru decizii. Nu înlocuiește interpretarea radiologică formală de către un radiolog autorizat. Toate constatările trebuie corelate clinic și verificate.",
    "Platform":"Platformă","Privacy Policy":"Politică Confidențialitate","Terms of Use":"Termeni de Utilizare",
    "Evidence-based clinical decision support for verified healthcare professionals across Europe.":"Suport decizional clinic bazat pe evidențe pentru profesioniști medicali verificați din toată Europa.",
    "© 2026 MedicinEvidence. All rights reserved. Clinical information for healthcare professionals only — not medical advice.":"© 2026 MedicinEvidence. Toate drepturile rezervate. Informații clinice doar pentru profesioniști medicali — nu constituie sfat medical.",
    "Welcome back":"Bun venit înapoi","Sign in to your verified account":"Conectează-te la contul tău verificat","Email":"Email","Password":"Parolă","No account yet?":"Nu ai cont încă?","Register free":"Înregistrează-te gratuit",
    "Create your account":"Creează-ți contul","Free for verified healthcare professionals":"Gratuit pentru profesioniști medicali verificați",
    "🔐 Verified access only.":"🔐 Doar acces verificat.","We verify credentials to keep the community clinically focused and ad-free for users.":"Verificăm credențialele pentru a menține comunitatea focalizată clinic și fără reclame pentru utilizatori.",
    "I am a…":"Sunt…","Doctor":"Medic","Pharmacist":"Farmacist","Student":"Student","Full name":"Nume complet","Institutional email":"Email instituțional","At least 8 characters":"Cel puțin 8 caractere","Create free account":"Creează cont gratuit","Already registered?":"Ești deja înregistrat?",
    "Pick your faculty, year, and subject. Upload your course, ask anything, test yourself — Praxis AI evaluates your level and guides you where to focus.":"Alege facultatea, anul și materia. Încarcă cursul, întreabă orice, testează-te — Praxis AI îți evaluează nivelul și te ghidează unde să aprofundezi.",
    "Choose faculty, year & subject":"Alege facultatea, anul și materia",
    "Faculty":"Facultate","Year of study":"Anul de studiu","Subject":"Materie",
    "Medicine (6 years)":"Medicină Generală (6 ani)","Pharmacy (5 years)":"Farmacie (5 ani)","Dentistry (6 years)":"Medicină Dentară (6 ani)",
    "Medicine":"Medicină","Pharmacy":"Farmacie","Dentistry":"Medicină Dentară",
    "Year I":"Anul I","Year II":"Anul II","Year III":"Anul III","Year IV":"Anul IV","Year V":"Anul V","Year VI":"Anul VI",
    "Year":"Anul",
    "Current selection:":"Selecție curentă:",
    "Your course material (optional)":"Materialul tău de curs (opțional)",
    "Upload a PDF of your course or paste text. Praxis AI will use it to answer your questions and generate quizzes tailored to your material. If you skip this step, the AI uses its general medical knowledge.":"Încarcă un PDF al cursului tău sau lipește text. Praxis AI îl va folosi pentru a răspunde la întrebări și a genera teste personalizate pe materialul tău. Dacă sari acest pas, AI-ul folosește cunoștințele sale medicale generale.",
    "📝 Paste text":"📝 Lipește text","📄 Upload PDF":"📄 Încarcă PDF",
    "Paste your course notes or textbook chapter here…":"Lipește aici notițele cursului sau un capitol din manual…",
    "Drop PDF here or click to select":"Trage PDF-ul aici sau click pentru a selecta",
    "Only text-based PDFs work (not scanned images) · Max 20 MB":"Funcționează doar PDF-uri text (nu scanate ca imagini) · Max 20 MB",
    "Reading PDF…":"Se citește PDF-ul…","Reading page":"Se citește pagina",
    "PDF too large (max 20MB).":"PDF prea mare (max 20MB).",
    "PDF reader not loaded. Please refresh the page.":"Cititorul PDF nu s-a încărcat. Reîncarcă pagina.",
    "Very little text extracted. This PDF may be a scanned image (OCR not supported).":"S-a extras foarte puțin text. Acest PDF este probabil scanat ca imagine (OCR nesuportat).",
    "PDF loaded successfully:":"PDF încărcat cu succes:","pages":"pagini","words":"cuvinte","chars":"caractere",
    "Failed to read PDF:":"Eroare la citirea PDF:",
    "No course loaded yet.":"Niciun curs încărcat încă.","Course loaded:":"Curs încărcat:",
    "Clear":"Șterge",
    "Ask anything":"Întreabă orice","Test yourself":"Testează-te","My level":"Nivelul meu",
    "Ask your tutor —":"Întreabă tutorul —",
    "Ask any question · evidence-based · uses your course if uploaded · streaming":"Pune orice întrebare · bazat pe evidențe · folosește cursul tău dacă e încărcat · streaming",
    "Pick your subject above, optionally upload your course, then ask anything — mechanisms, definitions, clinical reasoning.":"Alege materia mai sus, opțional încarcă cursul, apoi întreabă orice — mecanisme, definiții, raționament clinic.",
    "Ask anything about your subject…":"Întreabă orice despre materia ta…",
    "Number of questions":"Număr de întrebări","Difficulty":"Dificultate",
    "Easy":"Ușor","Medium":"Mediu","Hard":"Greu",
    "Start quiz":"Începe testul",
    "Generating your quiz…":"Se generează testul tău…","Praxis AI is creating":"Praxis AI creează","questions on":"întrebări despre",
    "Error parsing quiz":"Eroare la interpretarea testului","Try again":"Încearcă din nou",
    "Empty quiz returned.":"Test gol returnat.",
    "Question":"Întrebarea","answered":"răspunse","correct":"corecte","wrong":"greșite",
    "Explanation":"Explicație",
    "Quiz complete!":"Test finalizat!","Your level:":"Nivelul tău:",
    "Expert":"Expert","Advanced":"Avansat","Intermediate":"Intermediar","Beginner":"Începător",
    "New quiz":"Test nou","Ask about my mistakes":"Întreabă despre greșelile mele",
    "I got everything right on the quiz. Can you give me some advanced questions on this subject to push further?":"Am răspuns corect la toate. Poți să-mi dai câteva întrebări avansate pe acest subiect pentru a mă împinge mai departe?",
    "I just took a quiz on":"Tocmai am făcut un test la","and got these questions wrong:":"și am greșit la următoarele întrebări:",
    "My answer:":"Răspunsul meu:","Correct:":"Corect:",
    "Please explain the concepts behind these mistakes so I understand them deeply.":"Te rog explică-mi conceptele din spatele acestor greșeli ca să le înțeleg profund.",
    "Could not generate recommendation:":"Nu am putut genera recomandarea:",
    "Your learning level":"Nivelul tău de învățare",
    "Take quizzes to build your level. Praxis AI tracks your accuracy per subject and tells you exactly where to focus.":"Dă teste pentru a-ți construi nivelul. Praxis AI urmărește acuratețea pe fiecare materie și îți spune exact unde să te concentrezi.",
    "No quiz attempts yet. Start a quiz above to begin.":"Niciun test încercat încă. Începe un test mai sus pentru a porni.",
    "attempts":"încercări",
    "Anatomie":"Anatomie","Biochimie":"Biochimie","Biologie celulară și moleculară":"Biologie celulară și moleculară","Biofizică":"Biofizică","Biostatistică":"Biostatistică","Introducere în medicină":"Introducere în medicină","Limba engleză medicală":"Limba engleză medicală","Psihologie medicală":"Psihologie medicală","Igienă și nutriție":"Igienă și nutriție","Bioetică":"Bioetică",
    "Fiziologie":"Fiziologie","Biochimie clinică":"Biochimie clinică","Histologie":"Histologie","Genetică medicală":"Genetică medicală","Farmacologie generală":"Farmacologie generală","Microbiologie":"Microbiologie","Imunologie":"Imunologie","Radiologie generală":"Radiologie generală","Neuroștiințe":"Neuroștiințe",
    "Anatomie patologică":"Anatomie patologică","Farmacologie clinică":"Farmacologie clinică","Microbiologie clinică":"Microbiologie clinică","Imunopatologie":"Imunopatologie","Fiziopatologie":"Fiziopatologie","Semiologie medicală":"Semiologie medicală","Semiologie chirurgicală":"Semiologie chirurgicală","Hematologie generală":"Hematologie generală","Imagistică medicală":"Imagistică medicală","Medicina de laborator":"Medicina de laborator",
    "Cardiologie":"Cardiologie","Pneumologie":"Pneumologie","Gastroenterologie":"Gastroenterologie","Nefrologie":"Nefrologie","Endocrinologie":"Endocrinologie","Hematologie clinică":"Hematologie clinică","Boli infecțioase":"Boli infecțioase","Oncologie":"Oncologie","Neurologie":"Neurologie","Psihiatrie":"Psihiatrie","Oftalmologie":"Oftalmologie","ORL":"ORL",
    "Chirurgie generală":"Chirurgie generală","Chirurgie cardiovasculară":"Chirurgie cardiovasculară","Ortopedie și traumatologie":"Ortopedie și traumatologie","Pediatrie":"Pediatrie","Obstetrică-ginecologie":"Obstetrică-ginecologie","Medicină de urgență":"Medicină de urgență","Anestezie și terapie intensivă":"Anestezie și terapie intensivă","Dermatologie":"Dermatologie","Urologie":"Urologie","Stomatologie generală":"Stomatologie generală","Medicină de familie":"Medicină de familie",
    "Medicină internă":"Medicină internă","Chirurgie clinică":"Chirurgie clinică","Pediatrie clinică":"Pediatrie clinică","OBGYN clinică":"OBGYN clinică","Urgențe medico-chirurgicale":"Urgențe medico-chirurgicale","Medicină legală":"Medicină legală","Sănătate publică și management":"Sănătate publică și management","Farmacologie clinică avansată":"Farmacologie clinică avansată","Pregătire Rezidențiat":"Pregătire Rezidențiat",
    "Exam prep.":"Pregătire examen.","Serious.":"Serios.",
    "Residency exam preparation":"Pregătire examen Rezidențiat",
    "Rezidențiat AI":"Rezidențiat AI","— the complete prep engine.":"— motorul complet de pregătire.",
    "All specialties across Medicine, Pharmacy and Dentistry. AI-generated exam-level questions with academic explanations. Track progress, simulate real exams, practice clinical cases, repeat your mistakes.":"Toate specialitățile de la Medicină, Farmacie și Medicină Dentară. Întrebări de nivel examen generate de AI cu explicații academice. Urmărește progresul, simulează examene reale, exersează cazuri clinice, repetă greșelile.",
    "Choose faculty & specialty":"Alege facultatea și specialitatea",
    "Medicine Residency":"Rezidențiat Medicină","Pharmacy Residency":"Rezidențiat Farmacie","Dentistry Residency":"Rezidențiat Stomatologie",
    "Specialty":"Specialitate",
    "tests":"teste","avg":"medie","No tests yet":"Niciun test încă",
    "Practice test":"Test practică","Exam simulation":"Simulare examen","Clinical case":"Caz clinic","Review mistakes":"Revizuire greșeli","History":"Istoric",
    "Start practice test":"Începe testul de practică",
    "Real exam simulation":"Simulare examen real",
    "100 mixed-difficulty questions · 2 hours timer · no going back to correct · pass = 50%":"100 întrebări cu dificultate mixtă · cronometru 2 ore · nu poți reveni să corectezi · promovare = 50%",
    "Questions drawn from easy/medium/hard mix (30/50/20)":"Întrebări din mix ușor/mediu/greu (30/50/20)",
    "You cannot pause once started":"Nu poți pauza odată început",
    "Auto-submits when timer runs out":"Se trimite automat când expiră timpul",
    "Explanations unlocked after submission":"Explicațiile se deblochează după trimitere",
    "Pass threshold: 50% (Promovat) · Distinction at 75%":"Prag promovare: 50% (Promovat) · Distincție la 75%",
    "Exam size":"Mărime examen",
    "Q · 60 min":"Î · 60 min","Q · 120 min":"Î · 120 min","Q · 180 min":"Î · 180 min",
    "Start exam simulation":"Începe simularea examenului",
    "Clinical case simulation":"Simulare caz clinic",
    "A realistic patient is generated based on your specialty. Ask any question — request symptoms, order labs, imaging, physical exam findings. When ready, submit your diagnosis. AI evaluates what you caught, what you missed, and teaches you the reasoning.":"Se generează un pacient realist bazat pe specialitatea ta. Pune orice întrebare — cere simptome, analize, imagistică, examen fizic. Când ești gata, trimite diagnosticul. AI-ul evaluează ce ai prins, ce ai ratat, și te învață raționamentul.",
    "Generate new case":"Generează caz nou",
    "Review your mistakes (spaced repetition)":"Revizuire greșeli (repetiție spațiată)",
    "Questions you got wrong come back here at intervals based on memory science — 1 day, 3 days, 7 days, 21 days. Answer correctly 3 times and it retires.":"Întrebările la care ai greșit revin aici la intervale bazate pe știința memoriei — 1 zi, 3 zile, 7 zile, 21 zile. Răspunde corect de 3 ori și dispare.",
    "Your residency prep history":"Istoric pregătire Rezidențiat",
    "All tests, all specialties. See your evolution and weak topics.":"Toate testele, toate specialitățile. Vezi evoluția și subiectele slabe.",
    "Generating your test…":"Se generează testul tău…",
    "Could not generate test.":"Nu s-a putut genera testul.",
    "Test complete!":"Test complet!","New test":"Test nou","Review flagged":"Revizuiește marcate",
    "Flag for review":"Marchează pentru revizuire",
    "No flagged questions.":"Nicio întrebare marcată.",
    "Professor's lecture":"Lecție de la profesor","Loading…":"Se încarcă…",
    "Teach me like a professor":"Învață-mă ca un profesor",
    "Preparing exam…":"Se pregătește examenul…","questions":"întrebări",
    "This may take 20-40 seconds for large exams.":"Poate dura 20-40 secunde pentru examene mari.",
    "Could not generate enough questions.":"Nu s-au putut genera suficiente întrebări.",
    "Remaining":"Rămas","answered":"răspunse","Pass threshold:":"Prag promovare:","Submit exam":"Trimite examenul",
    "You have":"Ai","unanswered questions. Submit anyway?":"întrebări fără răspuns. Trimiți oricum?",
    "Exam complete":"Examen complet","Time used:":"Timp folosit:",
    "Distinction — excellent":"Distincție — excelent","Passed (Promovat)":"Promovat","Not passed":"Nepromovat",
    "New exam":"Examen nou","Review mistakes later":"Revizuiește greșelile mai târziu",
    "Creating patient…":"Se creează pacientul…",
    "Could not parse case.":"Nu s-a putut interpreta cazul.",
    "Patient":"Pacient","Chief complaint:":"Motivul prezentării:",
    "Vital signs?":"Semne vitale?","Physical exam?":"Examen fizic?",
    "Order CBC + BMP":"Cere HLG + biochimie","PMH?":"APP?","ECG":"ECG","Chest X-ray":"RX torace",
    "Ask questions about the patient or order investigations below.":"Pune întrebări despre pacient sau cere investigații mai jos.",
    "Ask a question or order a test…":"Pune o întrebare sau cere o analiză…",
    "Ask":"Întreabă","Submit diagnosis":"Trimite diagnosticul",
    "Enter your diagnosis and reasoning:":"Introdu diagnosticul și raționamentul:",
    "Your diagnosis:":"Diagnosticul tău:","New clinical case":"Caz clinic nou",
    "Due now":"Scadente acum","Upcoming":"Viitoare","Mastered":"Stăpânite",
    "No reviews due right now. Come back later — next review is scheduled.":"Nu sunt revizuiri scadente acum. Revino mai târziu — următoarea e programată.",
    "No mistakes in the queue yet. Take a practice test — any questions you get wrong will be scheduled here for spaced repetition review.":"Nicio greșeală în coadă încă. Dă un test de practică — orice întrebare la care greșești va fi programată aici pentru revizuire cu repetiție spațiată.",
    "Stage":"Etapa","Streak:":"Serie:",
    "No tests yet. Take a practice test or exam simulation to start building your history.":"Niciun test încă. Dă un test de practică sau o simulare pentru a-ți construi istoricul.",
    "Evolution —":"Evoluție —","oldest":"cele mai vechi","tests shown":"teste afișate","most recent":"cele mai recente",
    "Attempts":"Încercări","Avg score":"Scor mediu","Trend":"Tendință","Last test":"Ultimul test",
    "Cardiologie":"Cardiologie","Chirurgie cardiovasculară":"Chirurgie cardiovasculară","Chirurgie plastică și microchirurgie reconstructivă":"Chirurgie plastică și microchirurgie reconstructivă","Ortopedie și traumatologie":"Ortopedie și traumatologie","Neurochirurgie":"Neurochirurgie","Chirurgie toracică":"Chirurgie toracică","Urologie":"Urologie","Obstetrică-ginecologie":"Obstetrică-ginecologie","Neurologie":"Neurologie","Psihiatrie":"Psihiatrie","Psihiatrie pediatrică":"Psihiatrie pediatrică","Oftalmologie":"Oftalmologie","ORL":"ORL","Dermatovenerologie":"Dermatovenerologie","Boli infecțioase":"Boli infecțioase","Oncologie medicală":"Oncologie medicală","Radioterapie":"Radioterapie","Hematologie":"Hematologie","Pneumologie":"Pneumologie","Gastroenterologie":"Gastroenterologie","Nefrologie":"Nefrologie","Endocrinologie":"Endocrinologie","Reumatologie":"Reumatologie","Medicină de urgență":"Medicină de urgență","Anestezie și terapie intensivă":"Anestezie și terapie intensivă","Radiologie-imagistică medicală":"Radiologie-imagistică medicală","Medicină de laborator":"Medicină de laborator","Genetică medicală":"Genetică medicală","Medicină de familie":"Medicină de familie","Medicina muncii":"Medicina muncii","Recuperare medicală":"Recuperare medicală","Medicină sportivă":"Medicină sportivă","Geriatrie și gerontologie":"Geriatrie și gerontologie","Epidemiologie":"Epidemiologie","Medicină nucleară":"Medicină nucleară","Neurologie pediatrică":"Neurologie pediatrică","Chirurgie orală și maxilo-facială":"Chirurgie orală și maxilo-facială","Chirurgie pediatrică":"Chirurgie pediatrică",
    "Farmacie clinică":"Farmacie clinică","Farmacie industrială":"Farmacie industrială","Laborator farmaceutic":"Laborator farmaceutic","Farmacie comunitară":"Farmacie comunitară","Farmacologie clinică":"Farmacologie clinică","Toxicologie":"Toxicologie","Farmacognozie":"Farmacognozie","Chimie farmaceutică":"Chimie farmaceutică","Farmacie spitalicească":"Farmacie spitalicească","Biofarmacie":"Biofarmacie",
    "Stomatologie generală":"Stomatologie generală","Ortodonție și ortopedie dento-facială":"Ortodonție și ortopedie dento-facială","Endodonție":"Endodonție","Parodontologie":"Parodontologie","Protetică dentară":"Protetică dentară","Chirurgie orală":"Chirurgie orală","Chirurgie dento-alveolară":"Chirurgie dento-alveolară","Chirurgie maxilo-facială":"Chirurgie maxilo-facială","Pedodonție":"Pedodonție","Implantologie":"Implantologie","Odontologie":"Odontologie","Radiologie dento-maxilară":"Radiologie dento-maxilară"
  ,"— exactly like the real exam.":"— exact ca examenul real.","Choose your faculty and study topic. Practice with 10-25 questions or simulate the full 200-question exam. Every mistake gets a star and a professor's explanation. Track your heatmap and know exactly where to focus.":"Alege facultatea și tema de studiu. Exersează cu 10-25 întrebări sau simulează examenul complet de 200 grile. Fiecare greșeală primește o stea și explicație de la profesor.","Residency exam preparation":"Pregătire examen Rezidențiat","Pharmacy":"Farmacie","Dentistry":"Medicină Dentară","Full exam (200)":"Examen complet (200)","Start full exam simulation":"Începe simularea completă","Full exam simulation — exactly like the real thing":"Simulare examen complet — exact ca cel real","200 questions · 4 hours · mixed topics · pass = 50% · explanations unlocked after submission":"200 întrebări · 4 ore · teme mixte · promovare = 50%","This takes 30-60 seconds. Please wait.":"Durează 30-60 secunde. Vă rugăm așteptați.","Retry mistakes":"Reia greșelile","total time":"timp total","Your mistakes":"Greșelile tale","Not tested yet":"Netestată","Strong":"Puternic","Developing":"În dezvoltare","Weak":"Slab","Topics tested":"Teme testate","Overall average":"Media generală","Quick session — weakest topics":"Sesiune rapidă — temele cele mai slabe","My preparation heatmap":"Heatmap pregătire","View heatmap":"Vezi heatmap","Professor's lecture":"Lecție de la profesor","Add a personal note…":"Adaugă o notă personală…","No tests yet. Start a practice test or full exam to build your history.":"Niciun test încă. Începe un test pentru a construi istoricul.","Pass":"Promovat","Merit":"Merit","Fail — needs work":"Nepromovat — necesită studiu","Distinction — Excellent":"Distincție — Excelent","(auto)":"(auto)","Age":"Vârstă","Sex":"Sex","Weight (kg)":"Greutate (kg)","Male":"Bărbat","Female":"Femeie","Key labs & vitals":"Analize cheie & vitale","Demographics":"Date demografice","Active conditions / diagnoses":"Afecțiuni active / Diagnostice","Current medications":"Medicație curentă","Recent investigations / imaging":"Investigații recente / Imagistică","Additional notes":"Note adiționale","Other labs":"Alte analize","Allergies":"Alergii","Smoking":"Fumat","Pregnancy":"Sarcină","Never":"Niciodată","Former":"Fost fumător","Current":"Curent","Not pregnant":"Nesărcinată","Pregnant":"Însărcinată","Breastfeeding":"Alăptare","Patient profile":"Profil pacient","Fill in only what's relevant to your query":"Completați doar ce este relevant pentru întrebare","Clear patient":"Șterge pacient","Clear consultation":"Șterge consultația","Clinical":"Clinic","Clinical query":"Întrebare clinică","Contextual · evidence-based · always cited · streaming":"Contextual · bazat pe evidențe · întotdeauna citat · streaming","Ready when you are.":"Gata când ești tu.","Patient-tailored":"Personalizat pe pacient","Real-time streaming":"Streaming în timp real","Guideline citations":"Citări ghiduri","Renal & hepatic adjustments":"Ajustări renale & hepatice","Quick actions":"Acțiuni rapide","Quick ask:":"Întrebare rapidă:","Differential Dx":"Diagnostic diferențial","Drug interactions":"Interacțiuni medicamentoase","Relevant guidelines":"Ghiduri relevante","Dosing & adjustments":"Dozare & ajustări","🔍 Differential diagnosis":"🔍 Diagnostic diferențial","⚗️ Drug interactions":"⚗️ Interacțiuni medicamentoase","📋 Current guidelines":"📋 Ghiduri actuale","💊 Dosing & renal adjustment":"💊 Dozare & ajustare renală","❤️ Cardiovascular risk":"❤️ Risc cardiovascular","All guidelines":"Toate ghidurile","Clinical Guidelines":"Ghiduri clinice","850+ guidelines indexed · Always current":"850+ ghiduri indexate · Mereu actuale","Search guideline, topic, or ask a question…":"Caută ghid, temă sau pune o întrebare…","Guidelines indexed":"Ghiduri indexate","Societies":"Societăți","Languages":"Limbi","Shown":"Afișate","Categories":"Categorii","Diabetes & Endocrinology":"Diabet & Endocrinologie","Infectious Diseases":"Boli infecțioase","WHO & Global":"OMS & Global","Romania / CNAS Protocols":"România / Protocoale CNAS","Management of Arterial Hypertension":"Managementul hipertensiunii arteriale","Management of Hyperglycaemia in T2DM":"Managementul hiperglicemiei în DZ2","Heart Failure — Diagnosis & Treatment":"Insuficiență cardiacă — Diagnostic & Tratament","Acute Coronary Syndromes":"Sindroame coronariene acute","Cardiovascular Prevention":"Prevenție cardiovasculară","Atrial Fibrillation":"Fibrilație atrială","Dyslipidemia — Cholesterol Management":"Dislipidemie — Managementul colesterolului","Breast Cancer — Early & Advanced":"Cancer mamar — Precoce & Avansat","Lung Cancer — NSCLC & SCLC":"Cancer pulmonar — NSCLC & SCLC","Colorectal Cancer":"Cancer colorectal","COPD — Global Strategy (GOLD 2024)":"BPOC — Strategie globală (GOLD 2024)","Asthma — Global Strategy (GINA 2024)":"Astm — Strategie globală (GINA 2024)","Idiopathic Pulmonary Fibrosis (IPF)":"Fibroză pulmonară idiopatică (FPI)","Ischaemic Stroke & TIA":"AVC ischemic & AIT","Epilepsy — Diagnosis & Treatment":"Epilepsie — Diagnostic & Tratament","Sepsis & Septic Shock":"Sepsis & Șoc septic","Community-Acquired Pneumonia":"Pneumonie comunitară","HIV — Antiretroviral Therapy":"HIV — Terapie antiretrovirală","WHO Essential Medicines List":"Lista medicamentelor esențiale OMS","Beta-Blockers Post-MI — Cochrane Review":"Beta-blocante post-IM — Revizuire Cochrane","Thyroid Nodule Management":"Managementul nodulilor tiroidieni","Standards of Care in Diabetes":"Standarde de îngrijire în diabet","Diabetes & Cardiovascular Disease":"Diabet & Boli cardiovasculare","AI Synthesis":"Sinteză AI","Sources:":"Surse:","Ask follow-up":"Pune o întrebare suplimentară","Follow-up question:":"Întrebare suplimentară:","Ask a follow-up question about this guideline:":"Pune o întrebare suplimentară despre acest ghid:","Drug Database":"Bază de date medicamente","Drug database":"Bază de date medicamente","Brand + INN":"Comercial + DCI","Search by brand name or INN · AI recognizes Romanian & European commercial names":"Caută după denumire comercială sau DCI · AI recunoaște denumirile comerciale","Try:":"Încearcă:","Welcome back":"Bun venit înapoi","Sign in to your verified account":"Conectează-te la contul tău verificat","Email":"Email","Password":"Parolă","Sign in":"Conectare","No account yet?":"Nu ai cont încă?","Register free":"Înregistrează-te gratuit","Create your account":"Creează-ți contul","Free for verified healthcare professionals":"Gratuit pentru profesioniști medicali verificați","🔐 Verified access only.":"🔐 Doar acces verificat.","We verify credentials to keep the community clinically focused and ad-free for users.":"Verificăm credențialele pentru a menține comunitatea focalizată clinic.","I am a…":"Sunt…","Full name":"Nume complet","Institutional email":"Email instituțional","At least 8 characters":"Cel puțin 8 caractere","Create free account":"Creează cont gratuit","Already registered?":"Ești deja înregistrat?","Nurse / PA":"Asistent / PA","Student":"Student","Pharmacist":"Farmacist","Tools":"Instrumente","Platform":"Platformă","Legal":"Legal","Privacy Policy":"Politică de confidențialitate","Terms of Use":"Termeni de utilizare","GDPR":"GDPR","Verified clinicians":"Clinicieni verificați","AI consultations":"Consultații AI","Validated accuracy":"Acuratețe validată","Trusted by clinicians across Europe":"De încredere pentru clinicieni din toată Europa","Data sources & institutional partners":"Surse de date & parteneri instituționali","Every answer, fully traceable.":"Fiecare răspuns, complet trasabil.","Built for decisions that matter":"Construit pentru decizii care contează","Clinical intelligence,":"Inteligență clinică,","refined.":"rafinată.","Free for verified clinicians":"Gratuit pentru clinicieni verificați","Where medicine":"Unde medicina","finds its evidence.":"își găsește evidența.","Request Free Access":"Solicită acces gratuit","Verification required · No credit card · Ad-free for users":"Verificare necesară · Fără card · Fără reclame","Radiology second-opinion":"A doua opinie radiologică","Rezidenţiat & students":"Rezidențiat & studenți","Focused utilities for the most common clinical decisions":"Utilități focusate pentru cele mai comune decizii clinice","Drug Interactions":"Interacțiuni medicamentoase","Drug Lookup":"Căutare medicamente","Differential Diagnosis":"Diagnostic diferențial","AI Tutor (Praxis)":"Tutor AI (Praxis)","Radiology AI":"Radiologie AI","AI Vision":"AI Vision","Precision":"Precizie","in seconds.":"în secunde.","Current.":"Actual.","Cited.":"Citat.","Daily.":"Zilnic.","Curated.":"Selectat.","Medical News":"Știri medicale","Medical news":"Știri medicale","Breaking research, approvals and guideline updates":"Cercetări de ultimă oră, aprobări și actualizări","1 day ago":"acum 1 zi","2 days ago":"acum 2 zile","2 hours ago":"acum 2 ore","5 hours ago":"acum 5 ore","Adaptive learning":"Învățare adaptivă","— your personal professor.":"— profesorul tău personal.","Praxis.":"Praxis.","Praxis AI":"Praxis AI","Learn by doing.":"Învățare prin practică.","Ask your tutor —":"Întreabă tutorul tău —","Ask any question · evidence-based · uses your course if uploaded · streaming":"Pune orice întrebare · bazat pe evidențe · streaming","Year of study":"Anul de studiu","Subject":"Materie","Your course material (optional)":"Materialul tău de curs (opțional)","Upload a PDF or paste your course notes. Praxis AI will tailor all explanations, quizzes and connections to YOUR material.":"Încarcă un PDF sau lipește notițele. Praxis AI va personaliza totul pe materialul tău.","📝 Paste text":"📝 Lipește text","📄 Upload PDF":"📄 Încarcă PDF","Drop PDF here or click to select":"Trage PDF-ul aici sau click pentru a selecta","Only text-based PDFs work (not scanned images) · Max 20 MB":"Funcționează doar PDF-uri text (nu scanate) · Max 20 MB","No course loaded yet.":"Niciun curs încărcat încă.","Your learning level":"Nivelul tău de învățare","No quiz attempts yet. Start a quiz above to begin.":"Niciun test încercat. Începe un test pentru a porni.","Socratic mode — learn by questioning":"Mod socratic — învățare prin întrebări","Instead of telling you the answer, Praxis AI asks you guided questions so you discover the answer yourself. Proven to improve retention by 40% vs passive reading.":"În loc să îți dea răspunsul, Praxis AI îți pune întrebări ghidate ca să ajungi singur la răspuns. Îmbunătățește retenția cu 40%.","Start a Socratic dialogue.":"Începe un dialog socratic.","Tell me a topic you want to understand deeply — e.g. \"heart failure mechanisms\" or \"antibiotic resistance\". I will guide you through it with questions.":"Spune-mi un subiect pe care vrei să-l înțelegi profund. Te voi ghida prin întrebări.","Type a topic or your answer…":"Scrie un subiect sau răspunsul tău…","Topic connections map":"Hartă de conexiuni între teme","See how":"Vezi cum","connects to other subjects. Click any topic to start studying it.":"se conectează cu alte materii. Click pe orice temă pentru a o studia.","Strong connection":"Conexiune puternică","Related":"Conexat","Background context":"Context de fundal","Tell me about the connections between":"Spune-mi despre conexiunile dintre","and":"și","Regenerate map":"Regenerează harta","Your learning progress":"Progresul tău de învățare","All subjects you have tested yourself on.":"Toate materiile la care te-ai testat.","AI study plan":"Plan de studiu AI","Generate personalized study plan":"Generează plan de studiu personalizat","Professor explains":"Profesorul explică","Professor's lecture":"Lecție de la profesor","Add a personal note…":"Adaugă o notă personală…","Retry mistakes":"Reia greșelile","View progress":"Vezi progresul","second-opinion.":"a doua opinie.","Upload imaging for an evidence-based second-opinion · JPG, PNG · AI Vision":"Încarcă imagistică pentru a doua opinie · JPG, PNG · AI Vision","Drop imaging here or click to upload":"Trage imagistica aici sau click pentru încărcare","Supports JPG, PNG · HIPAA/GDPR compliant · Anonymized at upload · Max 5MB":"Suportă JPG, PNG · Conform HIPAA/GDPR · Anonimizat la încărcare · Max 5MB","Analyze with AI":"Analizează cu AI","Fast turnaround":"Rezultate rapide","Results typically under 30 seconds":"Rezultate de obicei sub 30 secunde","Structured read":"Citire structurată","Findings + differential with confidence":"Constatări + diferențial cu încredere","Guidelines-backed":"Susținut de ghiduri","Recommendations link to evidence":"Recomandările au link la evidențe","Clinical disclaimer:":"Aviz clinic:","For physicians":"Pentru medici","For pharmacists":"Pentru farmaciști","Pick a subject and chat with an AI tutor for board prep and clinical knowledge.":"Alege o materie și conversează cu un tutor AI.","ESC, EASD, ERS, ESMO, GOLD, CNAS — key recommendations at a glance.":"ESC, EASD, ERS, ESMO, GOLD, CNAS — recomandări cheie dintr-o privire.","First-line treatment for T2DM with high cardiovascular risk?":"Tratament de primă linie pentru DZ2 cu risc cardiovascular crescut?","Check interactions: warfarin + aspirin + omeprazole":"Verifică interacțiuni: warfarină + aspirină + omeprazol","ESC 2024 hypertension — key recommendations summary":"ESC 2024 hipertensiune — rezumat recomandări cheie","Cardiology Guidelines":"Ghiduri cardiologie","Diabetes Guidelines":"Ghiduri diabet","Oncology Guidelines":"Ghiduri oncologie","Respiratory Society":"Societatea respiratorie","World Health Organization":"Organizația Mondială a Sănătății","Systematic Reviews":"Revizuiri sistematice","Biomedical Literature":"Literatură biomedicală","European Medicines Agency":"Agenția Europeană a Medicamentului","consultation.":"consultație clinică.","Anatomy":"Anatomie","Selected:":"Selectat:","Start quiz":"Începe quiz-ul","Always cited":"Întotdeauna citat","Difficulty":"Dificultate","SGLT2i first-line for CKD · GLP-1 RA for CVD · Personalized HbA1c targets":"SGLT2i prima linie pentru BCR · GLP-1 RA pentru BCV · Ținte HbA1c personalizate","New hypertension guidelines: treat at 130/80 mmHg in high-risk patients":"Ghiduri noi HTA: tratament la 130/80 mmHg la pacienții cu risc crescut","Auto-submits when time runs out":"Se trimite automat când expiră timpul","200 questions from all topics of your faculty, mixed difficulties":"200 întrebări din toate temele facultății tale, dificultate mixtă","Explanations + professor mode unlocked after you submit":"Explicații + modul profesor deblocat după trimitere","Psychiatry":"Psihiatrie","Nephrology":"Nefrologie","Rheumatology":"Reumatologie","Gastroenterology":"Gastroenterologie","Ophthalmology":"Oftalmologie","ENT":"ORL","Dermatology":"Dermatologie","Surgery & ICU":"Chirurgie & ATI","Cardiology":"Cardiologie","Diabetes & Endo":"Diabet & Endocrinologie","Oncology":"Oncologie","Pulmonology":"Pneumologie","Neurology":"Neurologie","Infectious":"Boli infecțioase","Valvular Heart Disease":"Boli valvulare","Cardiomyopathies":"Cardiomiopatii","Cardiac Pacing & CRT":"Stimulare cardiacă & CRT","Type 1 Diabetes & Technology":"Diabet tip 1 & Tehnologie","Obesity Management":"Managementul obezității","Hypo & Hyperthyroidism":"Hipo- & Hipertiroidism","Prostate Cancer":"Cancer de prostată","Gastric & Esophageal Cancer":"Cancer gastric & esofagian","Lymphoma — Hodgkin & DLBCL":"Limfom — Hodgkin & DLBCL","Melanoma":"Melanom","Pulmonary Hypertension":"Hipertensiune pulmonară","Obstructive Sleep Apnea":"Apnee în somn obstructivă","Bronchiectasis (non-CF)":"Bronșiectazie (non-CF)","Multiple Sclerosis":"Scleroză multiplă","Parkinson's Disease":"Boala Parkinson","Stroke Secondary Prevention":"Prevenție secundară AVC","Dementia & Alzheimer's":"Demență & Alzheimer","Migraine — Acute & Prevention":"Migrenă — Acut & Prevenție","C. difficile Infection":"Infecție C. difficile","Urinary Tract Infections":"Infecții urinare","Tuberculosis":"Tuberculoză","Invasive Candidiasis":"Candidoză invazivă","AI summary →":"Sinteză AI →","Tests taken":"Teste efectuate","Questions answered":"Întrebări răspunse","Performance by subject":"Performanță pe materie","Strong 💪":"Solid 💪","Developing 📈":"În progres 📈","Needs work 📖":"Necesită studiu 📖","Last":"Ultima dată","Based on your results, Praxis AI generates a personalized study plan.":"Pe baza rezultatelor tale, Praxis AI generează un plan de studiu personalizat.","Generate my personalized plan":"Generează planul meu personalizat","View my level":"Vezi nivelul meu","Needs more practice":"Mai necesită practică"},
  de:{"Consultation":"Konsultation","AI Tools":"KI-Tools","Guidelines":"Leitlinien","Drugs":"Medikamente","News":"Nachrichten","Radiology":"Radiologie","Rezidentiat":"Facharztausbildung","AI Tutor":"KI-Tutor","Sign In":"Anmelden","Get Free Access":"Kostenlosen Zugang","Sign out":"Abmelden","Evidence.":"Evidenz.","Not opinion.":"Keine Meinung.","Where medicine":"Wo Medizin","finds its evidence.":"ihre Evidenz findet.","Request Free Access":"Kostenlosen Zugang beantragen","Good morning,":"Guten Morgen,","Physician":"Arzt","Exam prep.":"Prüfungsvorbereitung.","Serious.":"Ernsthaft.","Residency exam preparation":"Facharztprüfung Vorbereitung","Rezidențiat AI":"Facharzt AI","— the complete prep engine.":"— die komplette Vorbereitungsmaschine.","All specialties across Medicine, Pharmacy and Dentistry. AI-generated exam-level questions with academic explanations. Track progress, simulate real exams, practice clinical cases, repeat your mistakes.":"Alle Fachgebiete aus Medizin, Pharmazie und Zahnmedizin. KI-generierte Prüfungsfragen mit akademischen Erklärungen.","Choose faculty & specialty":"Fakultät und Fachgebiet wählen","Faculty":"Fakultät","Specialty":"Fachgebiet","Medicine Residency":"Medizin Facharzt","Pharmacy Residency":"Pharmazie Facharzt","Dentistry Residency":"Zahnmedizin Facharzt","Current selection:":"Aktuelle Auswahl:","Practice test":"Übungstest","Exam simulation":"Prüfungssimulation","Clinical case":"Klinischer Fall","Review mistakes":"Fehler wiederholen","History":"Verlauf","Number of questions":"Anzahl der Fragen","Easy":"Leicht","Medium":"Mittel","Hard":"Schwer","Start practice test":"Übungstest starten","Start exam simulation":"Prüfungssimulation starten","Generate new case":"Neuen Fall generieren","Generating your test…":"Test wird generiert…","Test complete!":"Test abgeschlossen!","New test":"Neuer Test","Question":"Frage","answered":"beantwortet","correct":"richtig","wrong":"falsch","Explanation":"Erklärung","Teach me like a professor":"Erkläre mir wie ein Professor","Submit exam":"Prüfung abgeben","Remaining":"Verbleibend","Exam complete":"Prüfung abgeschlossen","Passed (Promovat)":"Bestanden","Not passed":"Nicht bestanden","Distinction — excellent":"Auszeichnung — ausgezeichnet","New exam":"Neue Prüfung","Creating patient…":"Patient wird erstellt…","Patient":"Patient","Chief complaint:":"Hauptbeschwerde:","Ask":"Fragen","Submit diagnosis":"Diagnose einreichen","Due now":"Jetzt fällig","Upcoming":"Bevorstehend","Mastered":"Beherrscht","All guidelines":"Alle Leitlinien","Cardiology":"Kardiologie","Diabetes & Endo":"Diabetes & Endokrinologie","Oncology":"Onkologie","Pulmonology":"Pneumologie","Neurology":"Neurologie","Infectious":"Infektiologie","Romania / CNAS":"Rumänien / CNAS","AI Synthesis":"KI-Synthese","Sources:":"Quellen:","Ask follow-up":"Nachfrage stellen","Search":"Suchen","Clear":"Löschen","Learning":"Lernen","Main":"Haupt","Ask anything":"Alles fragen","Test yourself":"Selbst testen","My level":"Mein Niveau","Ready to learn.":"Bereit zu lernen.","Cardiologie":"Kardiologie","Medicină internă":"Innere Medizin","Chirurgie generală":"Allgemeinchirurgie","Pediatrie":"Pädiatrie","Obstetrică-ginecologie":"Geburtshilfe und Gynäkologie","Neurologie":"Neurologie","Psihiatrie":"Psychiatrie","Anestezie și terapie intensivă":"Anästhesiologie","Radiologie-imagistică medicală":"Radiologie","Medicină de familie":"Allgemeinmedizin","Boli infecțioase":"Infektionskrankheiten","Dermatovenerologie":"Dermatologie","Oftalmologie":"Augenheilkunde","ORL":"HNO","Pneumologie":"Pneumologie","Gastroenterologie":"Gastroenterologie","Nefrologie":"Nephrologie","Endocrinologie":"Endokrinologie","Reumatologie":"Rheumatologie","Hematologie":"Hämatologie","Oncologie medicală":"Onkologie","Chirurgie cardiovasculară":"Herzchirurgie","Ortopedie și traumatologie":"Orthopädie und Traumatologie","Neurochirurgie":"Neurochirurgie","Medicină de urgență":"Notfallmedizin","Urologie":"Urologie","Farmacie clinică":"Klinische Pharmazie","Farmacie industrială":"Industriepharmazie","Stomatologie generală":"Allgemeine Zahnmedizin","Ortodonție și ortopedie dento-facială":"Kieferorthopädie","Chirurgie orală":"Oralchirurgie","Parodontologie":"Parodontologie","Endodonție":"Endodontie","attempts":"Versuche","tests":"Tests","avg":"Durchschn.","No tests yet":"Noch keine Tests","Year I":"Jahr I","Year II":"Jahr II","Year III":"Jahr III","Year IV":"Jahr IV","Year V":"Jahr V","Year VI":"Jahr VI","Year":"Jahr","Choose faculty, year & subject":"Fakultät, Jahr und Fach wählen","Medicine (6 years)":"Medizin (6 Jahre)","Pharmacy (5 years)":"Pharmazie (5 Jahre)","Dentistry (6 years)":"Zahnmedizin (6 Jahre)","Gastroenterologie și chirurgie digestivă":"Gastroenterologie und Viszeralchirurgie","Histologie și anatomie patologică":"Histologie und Pathologie","Nefrologie și urologie":"Nephrologie und Urologie","Neurologie și neurochirurgie":"Neurologie und Neurochirurgie","Hematologie și oncologie":"Hämatologie und Onkologie","Ortopedie și traumatologie":"Orthopädie und Traumatologie","Pediatrie și chirurgie pediatrică":"Pädiatrie und Kinderchirurgie","Obstetrică-ginecologie":"Gynäkologie und Geburtshilfe","Medicină de urgență și ATI":"Notfallmedizin und Intensivmedizin","Dermatovenerologie":"Dermatologie und Venerologie","Radiologie și imagistică":"Radiologie und Bildgebung","Fiziopatologie":"Pathophysiologie","Farmacologie":"Pharmakologie","Anatomie":"Anatomie","Fiziologie":"Physiologie","Biochimie":"Biochemie","Microbiologie și boli infecțioase":"Mikrobiologie und Infektionskrankheiten","Cardiologie și chirurgie cardiovasculară":"Kardiologie und Herzchirurgie","Medicină legală":"Rechtsmedizin","Chimie generală și anorganică":"Allgemeine und anorganische Chemie","Chimie organică și analitică":"Organische und analytische Chemie","Farmacognozie și fitoterapie":"Pharmakognosie und Phytotherapie","Chimie farmaceutică":"Pharmazeutische Chemie","Tehnologie farmaceutică":"Pharmazeutische Technologie","Farmacologie și farmacoterapie":"Pharmakologie und Pharmakotherapie","Biofarmacie și farmacocinetică":"Biopharmazie und Pharmakokinetik","Toxicologie":"Toxikologie","Farmacie clinică și spitalicească":"Klinische Pharmazie","Legislație și management farmaceutic":"Pharmazeutisches Recht","Morfologia și fiziologia aparatului dento-maxilar":"Morphologie des Kausystems","Odontologie conservatoare și endodonție":"Konservierende Zahnheilkunde","Protetică dentară":"Zahnprothetik","Ortodonție și ortopedie dento-facială":"Kieferorthopädie","Pedodonție":"Kinderzahnheilkunde","Chirurgie orală și dento-alveolară":"Oralchirurgie","Radiologie dento-maxilară":"Dentale Radiologie","Farmacologie și anestezie în stomatologie":"Pharmakologie in der Zahnmedizin","Materiale dentare":"Dentalwerkstoffe","Deontologie și legislație stomatologică":"Zahnärztliches Recht","Not tested yet":"Noch nicht getestet","Strong":"Stark","Developing":"In Entwicklung","Weak":"Schwach","Quick session":"Schnelle Sitzung","My heatmap":"Meine Heatmap","Medicine (MG)":"Medizin (MG)","Study topic":"Studienthema","Full exam (200)":"Vollprüfung (200)","questions":"Fragen","total time":"Gesamtzeit","Your mistakes":"Ihre Fehler","Professor's lecture":"Professorenvorlesung","Add a personal note…":"Persönliche Notiz…","Retry mistakes":"Fehler wiederholen","— exactly like the real exam.":"— genau wie die echte Prüfung.","Choose faculty & study topic":"Fakultät und Studienthema wählen","Quick session — weakest topics":"Schnelle Sitzung — schwächste Themen","My preparation heatmap":"Meine Vorbereitungs-Heatmap","Topics tested":"Getestete Themen","Overall average":"Gesamtdurchschnitt","View heatmap":"Heatmap anzeigen","Full exam (200)":"Vollprüfung (200)","— exactly like the real exam.":"— genau wie die echte Prüfung.","Choose your faculty and study topic. Practice with 10-25 questions or simulate the full 200-question exam. Every mistake gets a star and a professor's explanation. Track your heatmap and know exactly where to focus.":"Wählen Sie Ihre Fakultät und Ihr Studienthema. Üben Sie mit 10-25 Fragen oder simulieren Sie die vollständige 200-Fragen-Prüfung. Jeder Fehler erhält einen Stern und eine Professorenerklärung.","Residency exam preparation":"Facharztprüfung Vorbereitung","Rezidențiat AI":"Facharzt AI","Pharmacy":"Pharmazie","Dentistry":"Zahnmedizin","Full exam (200)":"Vollprüfung (200)","My heatmap":"Meine Heatmap","History":"Verlauf","Quick session":"Schnelle Sitzung","Practice test":"Übungstest","Start practice test":"Übungstest starten","Full exam simulation — exactly like the real thing":"Vollständige Prüfungssimulation — genau wie die echte","200 questions · 4 hours · mixed topics · pass = 50% · explanations unlocked after submission":"200 Fragen · 4 Stunden · gemischte Themen · bestanden = 50%","Start full exam simulation":"Vollständige Prüfungssimulation starten","This takes 30-60 seconds. Please wait.":"Das dauert 30-60 Sekunden. Bitte warten.","— exactly like the real exam.":"— genau wie die echte Prüfung.","Choose your faculty and study topic. Practice with 10-25 questions or simulate the full 200-question exam. Every mistake gets a star and a professor's explanation. Track your heatmap and know exactly where to focus.":"Wählen Sie Ihre Fakultät und Ihr Studienthema. Üben Sie mit 10-25 Fragen oder simulieren Sie die vollständige 200-Fragen-Prüfung. Jeder Fehler erhält einen Stern und eine Professorenerklärung.","Start full exam simulation":"Vollständige Prüfungssimulation starten","Full exam simulation — exactly like the real thing":"Vollständige Prüfungssimulation — genau wie die echte","200 questions · 4 hours · mixed topics · pass = 50% · explanations unlocked after submission":"200 Fragen · 4 Stunden · gemischte Themen · bestanden = 50%","This takes 30-60 seconds. Please wait.":"Das dauert 30-60 Sekunden. Bitte warten.","(auto)":"(auto)","Age":"Alter","Sex":"Geschlecht","Weight (kg)":"Gewicht (kg)","Male":"Männlich","Female":"Weiblich","Key labs & vitals":"Wichtige Laborbefunde & Vitalzeichen","Demographics":"Demographische Daten","Active conditions / diagnoses":"Aktuelle Erkrankungen / Diagnosen","Current medications":"Aktuelle Medikation","Recent investigations / imaging":"Aktuelle Untersuchungen / Bildgebung","Additional notes":"Zusätzliche Hinweise","Other labs":"Weitere Laborwerte","Allergies":"Allergien","Smoking":"Rauchen","Pregnancy":"Schwangerschaft","Never":"Nie","Former":"Ehemalig","Current":"Aktuell","Not pregnant":"Nicht schwanger","Pregnant":"Schwanger","Breastfeeding":"Stillend","Patient profile":"Patientenprofil","Fill in only what's relevant to your query":"Nur das ausfüllen, was für Ihre Anfrage relevant ist","Clear patient":"Patient löschen","Clear consultation":"Beratung löschen","Clinical":"Klinisch","Clinical query":"Klinische Anfrage","Contextual · evidence-based · always cited · streaming":"Kontextuell · evidenzbasiert · immer zitiert · streaming","Ready when you are.":"Bereit, wenn Sie es sind.","Patient-tailored":"Patientenspezifisch","Real-time streaming":"Echtzeit-Streaming","Guideline citations":"Leitlinien-Zitate","Renal & hepatic adjustments":"Renale & hepatische Anpassungen","Quick actions":"Schnellaktionen","Quick ask:":"Schnellanfrage:","Differential Dx":"Differentialdiagnose","Drug interactions":"Arzneimittelinteraktionen","Relevant guidelines":"Relevante Leitlinien","Dosing & adjustments":"Dosierung & Anpassungen","🔍 Differential diagnosis":"🔍 Differentialdiagnose","⚗️ Drug interactions":"⚗️ Arzneimittelinteraktionen","📋 Current guidelines":"📋 Aktuelle Leitlinien","💊 Dosing & renal adjustment":"💊 Dosierung & renale Anpassung","❤️ Cardiovascular risk":"❤️ Kardiovaskuläres Risiko","All guidelines":"Alle Leitlinien","Clinical Guidelines":"Klinische Leitlinien","850+ guidelines indexed · Always current":"850+ Leitlinien indexiert · Immer aktuell","Search guideline, topic, or ask a question…":"Leitlinie, Thema suchen oder Frage stellen…","Guidelines indexed":"Leitlinien indexiert","Societies":"Gesellschaften","Languages":"Sprachen","Shown":"Angezeigt","Categories":"Kategorien","Diabetes & Endocrinology":"Diabetes & Endokrinologie","Infectious Diseases":"Infektionskrankheiten","WHO & Global":"WHO & Global","Romania / CNAS Protocols":"Rumänien / CNAS-Protokolle","Management of Arterial Hypertension":"Management der arteriellen Hypertonie","Management of Hyperglycaemia in T2DM":"Management der Hyperglykämie bei T2DM","Heart Failure — Diagnosis & Treatment":"Herzinsuffizienz — Diagnose & Behandlung","Acute Coronary Syndromes":"Akute Koronarsyndrome","Cardiovascular Prevention":"Kardiovaskuläre Prävention","Atrial Fibrillation":"Vorhofflimmern","Dyslipidemia — Cholesterol Management":"Dyslipidämie — Cholesterin-Management","Breast Cancer — Early & Advanced":"Brustkrebs — Früh & Fortgeschritten","Lung Cancer — NSCLC & SCLC":"Lungenkrebs — NSCLC & SCLC","Colorectal Cancer":"Kolorektales Karzinom","COPD — Global Strategy (GOLD 2024)":"COPD — Globale Strategie (GOLD 2024)","Asthma — Global Strategy (GINA 2024)":"Asthma — Globale Strategie (GINA 2024)","Idiopathic Pulmonary Fibrosis (IPF)":"Idiopathische Lungenfibrose (ILF)","Ischaemic Stroke & TIA":"Ischämischer Schlaganfall & TIA","Epilepsy — Diagnosis & Treatment":"Epilepsie — Diagnose & Behandlung","Sepsis & Septic Shock":"Sepsis & Septischer Schock","Community-Acquired Pneumonia":"Ambulant erworbene Pneumonie","HIV — Antiretroviral Therapy":"HIV — Antiretrovirale Therapie","WHO Essential Medicines List":"WHO-Liste unentbehrlicher Arzneimittel","Beta-Blockers Post-MI — Cochrane Review":"Betablocker nach Herzinfarkt — Cochrane-Review","Thyroid Nodule Management":"Management von Schilddrüsenknoten","Standards of Care in Diabetes":"Versorgungsstandards bei Diabetes","Diabetes & Cardiovascular Disease":"Diabetes & Herz-Kreislauf-Erkrankungen","AI Synthesis":"KI-Synthese","Sources:":"Quellen:","Ask follow-up":"Nachfrage stellen","Follow-up question:":"Folgefrage:","Ask a follow-up question about this guideline:":"Stellen Sie eine Folgefrage zu dieser Leitlinie:","Drug Database":"Arzneimitteldatenbank","Drug database":"Arzneimitteldatenbank","Brand + INN":"Handelsname + INN","Search by brand name or INN · AI recognizes Romanian & European commercial names":"Suche nach Handelsname oder INN · KI erkennt rumänische & europäische Handelsnamen","Try:":"Probieren Sie:","Welcome back":"Willkommen zurück","Sign in to your verified account":"Melden Sie sich bei Ihrem verifizierten Konto an","Email":"E-Mail","Password":"Passwort","Sign in":"Anmelden","No account yet?":"Noch kein Konto?","Register free":"Kostenlos registrieren","Create your account":"Konto erstellen","Free for verified healthcare professionals":"Kostenlos für verifizierte Gesundheitsfachkräfte","🔐 Verified access only.":"🔐 Nur verifizierter Zugang.","We verify credentials to keep the community clinically focused and ad-free for users.":"Wir überprüfen Anmeldedaten, damit die Community klinisch fokussiert bleibt.","I am a…":"Ich bin…","Full name":"Vollständiger Name","Institutional email":"Institutionelle E-Mail","At least 8 characters":"Mindestens 8 Zeichen","Create free account":"Kostenloses Konto erstellen","Already registered?":"Bereits registriert?","Nurse / PA":"Pflegefachkraft / PA","Student":"Student","Pharmacist":"Apotheker","Tools":"Werkzeuge","Platform":"Plattform","Legal":"Rechtliches","Privacy Policy":"Datenschutzrichtlinie","Terms of Use":"Nutzungsbedingungen","GDPR":"DSGVO","Verified clinicians":"Verifizierte Kliniker","AI consultations":"KI-Beratungen","Validated accuracy":"Validierte Genauigkeit","Trusted by clinicians across Europe":"Von Klinikern in ganz Europa geschätzt","Data sources & institutional partners":"Datenquellen & institutionelle Partner","Every answer, fully traceable.":"Jede Antwort, vollständig nachverfolgbar.","Built for decisions that matter":"Entwickelt für wichtige Entscheidungen","Clinical intelligence,":"Klinische Intelligenz,","refined.":"verfeinert.","Free for verified clinicians":"Kostenlos für verifizierte Kliniker","Where medicine":"Wo die Medizin","finds its evidence.":"ihre Evidenz findet.","Request Free Access":"Kostenlosen Zugang beantragen","Verification required · No credit card · Ad-free for users":"Verifizierung erforderlich · Keine Kreditkarte · Werbefrei","Radiology second-opinion":"Radiologische Zweitmeinung","Rezidenţiat & students":"Facharztausbildung & Studenten","Focused utilities for the most common clinical decisions":"Fokussierte Werkzeuge für die häufigsten klinischen Entscheidungen","Drug Interactions":"Arzneimittelwechselwirkungen","Drug Lookup":"Arzneimittelsuche","Differential Diagnosis":"Differentialdiagnose","AI Tutor (Praxis)":"KI-Tutor (Praxis)","Radiology AI":"Radiologie-KI","AI Vision":"KI-Vision","Precision":"Präzision","in seconds.":"in Sekunden.","Current.":"Aktuell.","Cited.":"Zitiert.","Daily.":"Täglich.","Curated.":"Kuratiert.","Medical News":"Medizinische Nachrichten","Medical news":"Medizinische Nachrichten","Breaking research, approvals and guideline updates":"Aktuelle Forschung, Zulassungen und Leitlinienaktualisierungen","1 day ago":"vor 1 Tag","2 days ago":"vor 2 Tagen","2 hours ago":"vor 2 Stunden","5 hours ago":"vor 5 Stunden","Adaptive learning":"Adaptives Lernen","— your personal professor.":"— Ihr persönlicher Professor.","Praxis.":"Praxis.","Praxis AI":"Praxis KI","Learn by doing.":"Lernen durch Tun.","Ask your tutor —":"Fragen Sie Ihren Tutor —","Ask any question · evidence-based · uses your course if uploaded · streaming":"Jede Frage stellen · evidenzbasiert · nutzt Ihren Kurs · Streaming","Year of study":"Studienjahr","Subject":"Fach","Your course material (optional)":"Ihr Kursmaterial (optional)","Upload a PDF or paste your course notes. Praxis AI will tailor all explanations, quizzes and connections to YOUR material.":"Laden Sie ein PDF hoch oder fügen Sie Ihre Kursnotizen ein. Praxis KI passt alle Erklärungen an Ihr Material an.","📝 Paste text":"📝 Text einfügen","📄 Upload PDF":"📄 PDF hochladen","Drop PDF here or click to select":"PDF hier ablegen oder zum Auswählen klicken","Only text-based PDFs work (not scanned images) · Max 20 MB":"Nur textbasierte PDFs funktionieren (keine gescannten Bilder) · Max 20 MB","No course loaded yet.":"Noch kein Kurs geladen.","Your learning level":"Ihr Lernstand","No quiz attempts yet. Start a quiz above to begin.":"Noch keine Quizversuche. Starten Sie ein Quiz, um zu beginnen.","Socratic mode — learn by questioning":"Sokratische Methode — durch Fragen lernen","Instead of telling you the answer, Praxis AI asks you guided questions so you discover the answer yourself. Proven to improve retention by 40% vs passive reading.":"Anstatt Ihnen die Antwort zu geben, stellt Praxis KI geführte Fragen, damit Sie die Antwort selbst entdecken. Bewiesen 40% bessere Merkfähigkeit.","Start a Socratic dialogue.":"Beginnen Sie einen sokratischen Dialog.","Tell me a topic you want to understand deeply — e.g. \"heart failure mechanisms\" or \"antibiotic resistance\". I will guide you through it with questions.":"Nennen Sie mir ein Thema, das Sie tief verstehen möchten. Ich werde Sie mit Fragen führen.","Type a topic or your answer…":"Thema oder Antwort eingeben…","Topic connections map":"Themenkarte der Verbindungen","See how":"Sehen Sie, wie","connects to other subjects. Click any topic to start studying it.":"mit anderen Fächern verbunden ist. Klicken Sie auf ein Thema, um es zu studieren.","Strong connection":"Starke Verbindung","Related":"Verwandt","Background context":"Hintergrundkontext","Tell me about the connections between":"Erzählen Sie mir über die Verbindungen zwischen","and":"und","Regenerate map":"Karte neu generieren","Your learning progress":"Ihr Lernfortschritt","All subjects you have tested yourself on.":"Alle Fächer, die Sie getestet haben.","AI study plan":"KI-Studienplan","Generate personalized study plan":"Personalisierten Studienplan erstellen","Professor explains":"Professor erklärt","Professor's lecture":"Professorenvorlesung","Add a personal note…":"Persönliche Notiz hinzufügen…","Retry mistakes":"Fehler wiederholen","View progress":"Fortschritt anzeigen","second-opinion.":"Zweitmeinung.","Upload imaging for an evidence-based second-opinion · JPG, PNG · AI Vision":"Bildgebung für evidenzbasierte Zweitmeinung hochladen · JPG, PNG · KI-Vision","Drop imaging here or click to upload":"Bildgebung hier ablegen oder zum Hochladen klicken","Supports JPG, PNG · HIPAA/GDPR compliant · Anonymized at upload · Max 5MB":"Unterstützt JPG, PNG · HIPAA/DSGVO-konform · Beim Upload anonymisiert · Max 5MB","Analyze with AI":"Mit KI analysieren","Fast turnaround":"Schnelle Ergebnisse","Results typically under 30 seconds":"Ergebnisse in der Regel unter 30 Sekunden","Structured read":"Strukturierter Befund","Findings + differential with confidence":"Befunde + Differentialdiagnose mit Konfidenz","Guidelines-backed":"Leitlinienbasiert","Recommendations link to evidence":"Empfehlungen verlinken zu Evidenz","Clinical disclaimer:":"Klinischer Haftungsausschluss:","For physicians":"Für Ärzte","For pharmacists":"Für Apotheker","Pick a subject and chat with an AI tutor for board prep and clinical knowledge.":"Wählen Sie ein Fach und chatten Sie mit einem KI-Tutor.","ESC, EASD, ERS, ESMO, GOLD, CNAS — key recommendations at a glance.":"ESC, EASD, ERS, ESMO, GOLD, CNAS — Schlüsselempfehlungen auf einen Blick.","First-line treatment for T2DM with high cardiovascular risk?":"Erstlinienbehandlung bei T2DM mit hohem kardiovaskulären Risiko?","Check interactions: warfarin + aspirin + omeprazole":"Wechselwirkungen prüfen: Warfarin + Aspirin + Omeprazol","ESC 2024 hypertension — key recommendations summary":"ESC 2024 Hypertonie — Zusammenfassung der Schlüsselempfehlungen","Cardiology Guidelines":"Kardiologie-Leitlinien","Diabetes Guidelines":"Diabetes-Leitlinien","Oncology Guidelines":"Onkologie-Leitlinien","Respiratory Society":"Atemwegsgesellschaft","World Health Organization":"Weltgesundheitsorganisation","Systematic Reviews":"Systematische Übersichten","Biomedical Literature":"Biomedizinische Literatur","European Medicines Agency":"Europäische Arzneimittel-Agentur","consultation.":"klinische Beratung.","Anatomy":"Anatomie","Selected:":"Ausgewählt:","Start quiz":"Quiz starten","Always cited":"Immer zitiert","Difficulty":"Schwierigkeitsgrad","1-hour bundle · Broad-spectrum antibiotics · Fluid resuscitation · Vasopressors":"1-Stunden-Bündel · Breitbandantibiotika · Flüssigkeitsresuszitation · Vasopressoren","SGLT2i first-line for CKD · GLP-1 RA for CVD · Personalized HbA1c targets":"SGLT2i Erstlinie bei CKD · GLP-1 RA bei CVD · Personalisierte HbA1c-Ziele","CHA₂DS₂-VASc · DOAC first-line · AF ablation expanded indications":"CHA₂DS₂-VASc · DOAK Erstlinie · Erweiterte Indikationen für AF-Ablation","LDL targets by risk · Statin intensity · PCSK9 inhibitors indications":"LDL-Ziele nach Risiko · Statinintensität · PCSK9-Hemmer-Indikationen","NSTEMI/STEMI unified pathway · Antiplatelet strategy · Early invasive approach":"NSTEMI/STEMI vereinter Pfad · Thrombozytenaggregationshemmer · Frühzeitiger invasiver Ansatz","Four-pillar therapy HFrEF · SGLT2i for all EF &lt;40% · HFpEF algorithm":"Vier-Säulen-Therapie HFrEF · SGLT2i für alle EF <40% · HFpEF-Algorithmus","SCORE2 risk algorithm · Lifestyle interventions · Polypill strategy":"SCORE2-Risiko-Algorithmus · Lebensstilinterventionen · Polypill-Strategie","LAMA monotherapy first-line · LAMA+LABA for persistent · ICS narrow indications":"LAMA-Monotherapie Erstlinie · LAMA+LABA bei persistierenden · ICS enge Indikationen","ICS-formoterol reliever · Biologics for severe asthma · Step-up/down protocol":"ICS-Formoterol Bedarfsmedikation · Biologika bei schwerem Asthma · Stufenprotokoll","IV thrombolysis up to 4.5h · Thrombectomy up to 24h · Secondary prevention":"IV-Thrombolyse bis 4,5h · Thrombektomie bis 24h · Sekundärprävention","HER2+ first-line therapy · CDK4/6 inhibitors · Neoadjuvant strategies":"HER2+ Erstlinientherapie · CDK4/6-Hemmer · Neoadjuvante Strategien","Biomarker-driven therapy · EGFR/ALK/ROS1 · Immunotherapy combinations":"Biomarkergesteuerte Therapie · EGFR/ALK/ROS1 · Immuntherapie-Kombinationen","MSI testing · Adjuvant chemotherapy selection · Metastatic CRC sequencing":"MSI-Testung · Adjuvante Chemotherapieauswahl · Metastatische KRK-Sequenzierung","Classification · Diagnostic criteria · Glycemic targets · Technology in diabetes":"Klassifikation · Diagnosekriterien · Glykämische Ziele · Technologie bei Diabetes","CVOT evidence · Cardioprotective agents · Risk stratification in T2DM":"CVOT-Evidenz · Kardioprotektive Wirkstoffe · Risikostratifikation bei T2DM","CRB-65 severity score · Empirical antibiotic therapy · Biomarker-guided duration":"CRB-65-Schweregrad · Empirische Antibiotikatherapie · Biomarkergesteuerte Dauer","Bictegravir/TAF/FTC preferred · Two-drug regimens · Opportunistic infections":"Bictegravir/TAF/FTC bevorzugt · Zwei-Medikamenten-Regimes · Opportunistische Infektionen","First seizure management · AED selection · Drug-resistant epilepsy pathway":"Erstanfall-Management · AED-Auswahl · Therapierefraktäre Epilepsie","23% mortality reduction confirmed · Optimal duration · Patient subgroups":"23% Mortalitätsreduktion bestätigt · Optimale Dauer · Patientensubgruppen","23rd edition · 15 new additions · Novel antibiotics · Antivirals updated":"23. Ausgabe · 15 neue Zusätze · Neue Antibiotika · Antivirale aktualisiert","Ianalumab approved for primary Sjögren's syndrome — first biologic indication":"Ianalumab für primäres Sjögren-Syndrom zugelassen — erste biologische Indikation","New hypertension guidelines: treat at 130/80 mmHg in high-risk patients":"Neue Hypertonierichtlinien: Behandlung bei 130/80 mmHg bei Hochrisikopatienten","SGLT2i now first-line for T2DM with CKD regardless of HbA1c":"SGLT2i jetzt Erstlinie für T2DM mit CKD unabhängig von HbA1c","SELECT trial results expand indication rationale beyond glycaemic control.":"SELECT-Studienergebnisse erweitern die Indikation über die glykämische Kontrolle hinaus.","Auto-submits when time runs out":"Automatische Abgabe bei Zeitablauf","Pass: 50% · Merit: 70% · Distinction: 85% · AI estimates your national ranking":"Bestanden: 50% · Gut: 70% · Ausgezeichnet: 85% · KI schätzt Ihr nationales Ranking","200 questions from all topics of your faculty, mixed difficulties":"200 Fragen aus allen Themen Ihrer Fakultät, gemischte Schwierigkeiten","Explanations + professor mode unlocked after you submit":"Erklärungen + Professormodus nach Abgabe freigeschaltet","Psychiatry":"Psychiatrie","Nephrology":"Nephrologie","Rheumatology":"Rheumatologie","Gastroenterology":"Gastroenterologie","Ophthalmology":"Augenheilkunde","ENT":"HNO","Dermatology":"Dermatologie","Surgery & ICU":"Chirurgie & Intensivmedizin","Cardiology":"Kardiologie","Diabetes & Endo":"Diabetes & Endokrinologie","Oncology":"Onkologie","Pulmonology":"Pneumologie","Neurology":"Neurologie","Infectious":"Infektiologie","Valvular Heart Disease":"Herzklappenerkrankungen","Ventricular Arrhythmias & SCD":"Ventrikuläre Arrhythmien & SCD","Cardiomyopathies":"Kardiomyopathien","Cardiac Pacing & CRT":"Herzschrittmacher & CRT","Type 1 Diabetes & Technology":"Typ-1-Diabetes & Technologie","Obesity Management":"Adipositasmanagement","Hypo & Hyperthyroidism":"Hypo- & Hyperthyreose","Prostate Cancer":"Prostatakarzinom","Gastric & Esophageal Cancer":"Magen- & Ösophaguskarzinom","Lymphoma — Hodgkin & DLBCL":"Lymphom — Hodgkin & DLBCL","Melanoma":"Melanom","Pulmonary Hypertension":"Pulmonale Hypertonie","Obstructive Sleep Apnea":"Obstruktive Schlafapnoe","Bronchiectasis (non-CF)":"Bronchiektasen (nicht-CF)","Multiple Sclerosis":"Multiple Sklerose","Parkinson's Disease":"Parkinson-Krankheit","Stroke Secondary Prevention":"Sekundärprävention Schlaganfall","Dementia & Alzheimer's":"Demenz & Alzheimer","Migraine — Acute & Prevention":"Migräne — Akut & Prävention","C. difficile Infection":"C.-difficile-Infektion","Urinary Tract Infections":"Harnwegsinfektionen","Tuberculosis":"Tuberkulose","Invasive Candidiasis":"Invasive Kandidose","AI summary →":"KI-Zusammenfassung →","Sinteză AI →":"KI-Synthese →","Tests taken":"Absolvierte Tests","Questions answered":"Beantwortete Fragen","Performance by subject":"Leistung nach Fach","Strong 💪":"Stark 💪","Developing 📈":"In Entwicklung 📈","Needs work 📖":"Braucht Übung 📖","Last":"Zuletzt","Based on your results, Praxis AI generates a personalized study plan.":"Basierend auf Ihren Ergebnissen erstellt Praxis KI einen personalisierten Lernplan.","Generate my personalized plan":"Meinen personalisierten Plan erstellen","View my level":"Mein Niveau anzeigen","Needs more practice":"Braucht mehr Übung"},
  fr:{"Consultation":"Consultation","AI Tools":"Outils IA","Guidelines":"Directives","Drugs":"Médicaments","News":"Actualités","Radiology":"Radiologie","Rezidentiat":"Internat","AI Tutor":"Tuteur IA","Sign In":"Se connecter","Get Free Access":"Accès gratuit","Sign out":"Se déconnecter","Evidence.":"Preuves.","Not opinion.":"Pas d'opinion.","Where medicine":"Où la médecine","finds its evidence.":"trouve ses preuves.","Request Free Access":"Demander un accès gratuit","Good morning,":"Bonjour,","Physician":"Médecin","Medicine Residency":"Résidanat Médecine","Pharmacy Residency":"Résidanat Pharmacie","Dentistry Residency":"Résidanat Dentisterie","Choose faculty & specialty":"Choisir faculté et spécialité","Practice test":"Test pratique","Exam simulation":"Simulation d'examen","Clinical case":"Cas clinique","Review mistakes":"Réviser les erreurs","History":"Historique","Easy":"Facile","Medium":"Moyen","Hard":"Difficile","Number of questions":"Nombre de questions","Start practice test":"Commencer le test","Start exam simulation":"Démarrer la simulation","Generate new case":"Générer un nouveau cas","Generating your test…":"Génération du test…","Test complete!":"Test terminé!","New test":"Nouveau test","Question":"Question","answered":"répondues","correct":"correctes","wrong":"incorrectes","Explanation":"Explication","Teach me like a professor":"Enseignez-moi comme un professeur","Submit exam":"Soumettre l'examen","Remaining":"Restant","Exam complete":"Examen terminé","Passed (Promovat)":"Reçu","Not passed":"Échoué","Distinction — excellent":"Mention — excellent","All guidelines":"Toutes les directives","Cardiology":"Cardiologie","Diabetes & Endo":"Diabète & Endocrinologie","Oncology":"Oncologie","Pulmonology":"Pneumologie","Neurology":"Neurologie","Infectious":"Maladies infectieuses","Romania / CNAS":"Roumanie / CNAS","AI Synthesis":"Synthèse IA","Sources:":"Sources:","Ask follow-up":"Question de suivi","Search":"Rechercher","Clear":"Effacer","Learning":"Apprentissage","Main":"Principal","Ask anything":"Posez une question","Test yourself":"Testez-vous","My level":"Mon niveau","attempts":"tentatives","tests":"tests","avg":"moy.","No tests yet":"Aucun test encore","Year I":"Année I","Year II":"Année II","Year III":"Année III","Year IV":"Année IV","Year V":"Année V","Year VI":"Année VI",
    "Gastroenterologie și chirurgie digestivă":"Gastroentérologie et chirurgie digestive",
    "Histologie și anatomie patologică":"Histologie et anatomie pathologique",
    "Nefrologie și urologie":"Néphrologie et urologie",
    "Neurologie și neurochirurgie":"Neurologie et neurochirurgie",
    "Hematologie și oncologie":"Hématologie et oncologie",
    "Chirurgie generală":"Chirurgie générale",
    "Ortopedie și traumatologie":"Orthopédie et traumatologie",
    "Pediatrie și chirurgie pediatrică":"Pédiatrie et chirurgie pédiatrique",
    "Obstetrică-ginecologie":"Gynécologie-obstétrique",
    "Medicină de urgență și ATI":"Urgences et réanimation",
    "Dermatovenerologie":"Dermatologie et vénérologie",
    "Radiologie și imagistică":"Radiologie et imagerie",
    "Fiziopatologie":"Physiopathologie",
    "Farmacologie":"Pharmacologie",
    "Anatomie":"Anatomie","Fiziologie":"Physiologie","Biochimie":"Biochimie",
    "Microbiologie și boli infecțioase":"Microbiologie et maladies infectieuses",
    "Cardiologie și chirurgie cardiovasculară":"Cardiologie et chirurgie cardiovasculaire",
    "Medicină internă":"Médecine interne","Medicină de familie":"Médecine de famille",
    "Medicină legală":"Médecine légale",
    "Not tested yet":"Non testé encore","Strong":"Fort","Developing":"En développement","Weak":"Faible",
    "Quick session":"Session rapide","My heatmap":"Ma carte thermique",
    "Medicine (MG)":"Médecine (MG)","Study topic":"Sujet d'étude",
    "Full exam (200)":"Examen complet (200)","questions":"questions",
    "total time":"temps total","Your mistakes":"Vos erreurs",
    "Professor's lecture":"Cours du professeur",
    "Add a personal note…":"Ajouter une note personnelle…",
    "Retry mistakes":"Reprendre les erreurs"
  ,"— exactly like the real exam.":"— exactement comme le vrai examen.","Choose your faculty and study topic. Practice with 10-25 questions or simulate the full 200-question exam. Every mistake gets a star and a professor's explanation. Track your heatmap and know exactly where to focus.":"Choisissez votre faculté et votre sujet. Pratiquez avec 10-25 questions ou simulez l'examen complet de 200 questions. Chaque erreur reçoit une étoile et une explication du professeur.","Residency exam preparation":"Préparation à l'internat","Pharmacy":"Pharmacie","Dentistry":"Médecine dentaire","Full exam (200)":"Examen complet (200)","Start full exam simulation":"Démarrer la simulation complète","Full exam simulation — exactly like the real thing":"Simulation complète — exactement comme le vrai","200 questions · 4 hours · mixed topics · pass = 50% · explanations unlocked after submission":"200 questions · 4 heures · sujets mixtes · reçu = 50%","This takes 30-60 seconds. Please wait.":"Cela prend 30-60 secondes. Veuillez patienter.","Retry mistakes":"Reprendre les erreurs","total time":"temps total","Your mistakes":"Vos erreurs","Not tested yet":"Non testé","Strong":"Fort","Developing":"En développement","Weak":"Faible","Topics tested":"Sujets testés","Overall average":"Moyenne générale","Quick session — weakest topics":"Session rapide — sujets les plus faibles","My preparation heatmap":"Ma carte de préparation","View heatmap":"Voir la carte","Professor's lecture":"Cours du professeur","Add a personal note…":"Ajouter une note…","No tests yet. Start a practice test or full exam to build your history.":"Aucun test encore. Commencez un test pour construire votre historique.","Pass":"Reçu","Merit":"Mention","Fail — needs work":"Échoué — à travailler","Distinction — Excellent":"Mention — Excellent","(auto)":"(auto)","Age":"Âge","Sex":"Sexe","Weight (kg)":"Poids (kg)","Male":"Homme","Female":"Femme","Key labs & vitals":"Biologie clé & constantes","Demographics":"Démographie","Active conditions / diagnoses":"Pathologies actives / Diagnostics","Current medications":"Médicaments actuels","Recent investigations / imaging":"Examens récents / Imagerie","Additional notes":"Notes supplémentaires","Other labs":"Autres bilans","Allergies":"Allergies","Smoking":"Tabagisme","Pregnancy":"Grossesse","Never":"Jamais","Former":"Ancien fumeur","Current":"Actuel","Not pregnant":"Non enceinte","Pregnant":"Enceinte","Breastfeeding":"Allaitante","Patient profile":"Profil patient","Fill in only what's relevant to your query":"Remplissez uniquement ce qui est pertinent","Clear patient":"Effacer patient","Clear consultation":"Effacer consultation","Clinical":"Clinique","Clinical query":"Question clinique","Contextual · evidence-based · always cited · streaming":"Contextuel · basé sur les preuves · toujours cité · streaming","Ready when you are.":"Prêt quand vous l'êtes.","Patient-tailored":"Personnalisé au patient","Real-time streaming":"Streaming en temps réel","Guideline citations":"Citations de directives","Renal & hepatic adjustments":"Ajustements rénal & hépatique","Quick actions":"Actions rapides","Quick ask:":"Question rapide:","Differential Dx":"Diagnostic différentiel","Drug interactions":"Interactions médicamenteuses","Relevant guidelines":"Directives pertinentes","Dosing & adjustments":"Posologie & ajustements","🔍 Differential diagnosis":"🔍 Diagnostic différentiel","⚗️ Drug interactions":"⚗️ Interactions médicamenteuses","📋 Current guidelines":"📋 Directives actuelles","💊 Dosing & renal adjustment":"💊 Posologie & ajustement rénal","❤️ Cardiovascular risk":"❤️ Risque cardiovasculaire","All guidelines":"Toutes les directives","Clinical Guidelines":"Directives cliniques","850+ guidelines indexed · Always current":"850+ directives indexées · Toujours à jour","Search guideline, topic, or ask a question…":"Chercher une directive, un sujet ou poser une question…","Guidelines indexed":"Directives indexées","Societies":"Sociétés","Languages":"Langues","Shown":"Affiché","Categories":"Catégories","Diabetes & Endocrinology":"Diabète & Endocrinologie","Infectious Diseases":"Maladies infectieuses","WHO & Global":"OMS & Mondial","Romania / CNAS Protocols":"Roumanie / Protocoles CNAS","Management of Arterial Hypertension":"Prise en charge de l'hypertension artérielle","Management of Hyperglycaemia in T2DM":"Prise en charge de l'hyperglycémie dans le DT2","Heart Failure — Diagnosis & Treatment":"Insuffisance cardiaque — Diagnostic & Traitement","Acute Coronary Syndromes":"Syndromes coronariens aigus","Cardiovascular Prevention":"Prévention cardiovasculaire","Atrial Fibrillation":"Fibrillation auriculaire","Dyslipidemia — Cholesterol Management":"Dyslipidémie — Gestion du cholestérol","Breast Cancer — Early & Advanced":"Cancer du sein — Précoce & Avancé","Lung Cancer — NSCLC & SCLC":"Cancer du poumon — CBNPC & CPC","Colorectal Cancer":"Cancer colorectal","COPD — Global Strategy (GOLD 2024)":"BPCO — Stratégie mondiale (GOLD 2024)","Asthma — Global Strategy (GINA 2024)":"Asthme — Stratégie mondiale (GINA 2024)","Idiopathic Pulmonary Fibrosis (IPF)":"Fibrose pulmonaire idiopathique (FPI)","Ischaemic Stroke & TIA":"AVC ischémique & AIT","Epilepsy — Diagnosis & Treatment":"Épilepsie — Diagnostic & Traitement","Sepsis & Septic Shock":"Sepsis & Choc septique","Community-Acquired Pneumonia":"Pneumonie communautaire","HIV — Antiretroviral Therapy":"VIH — Thérapie antirétrovirale","WHO Essential Medicines List":"Liste des médicaments essentiels de l'OMS","Beta-Blockers Post-MI — Cochrane Review":"Bêta-bloquants post-IDM — Revue Cochrane","Thyroid Nodule Management":"Prise en charge des nodules thyroïdiens","Standards of Care in Diabetes":"Standards de soins du diabète","Diabetes & Cardiovascular Disease":"Diabète & Maladies cardiovasculaires","AI Synthesis":"Synthèse IA","Sources:":"Sources:","Ask follow-up":"Poser une question de suivi","Follow-up question:":"Question de suivi:","Ask a follow-up question about this guideline:":"Posez une question de suivi sur cette directive:","Drug Database":"Base de données médicamenteuse","Drug database":"Base de données médicamenteuse","Brand + INN":"Marque + DCI","Search by brand name or INN · AI recognizes Romanian & European commercial names":"Chercher par nom de marque ou DCI · L'IA reconnaît les noms commerciaux","Try:":"Essayez:","Welcome back":"Bon retour","Sign in to your verified account":"Connectez-vous à votre compte vérifié","Email":"E-mail","Password":"Mot de passe","Sign in":"Se connecter","No account yet?":"Pas encore de compte?","Register free":"S'inscrire gratuitement","Create your account":"Créer votre compte","Free for verified healthcare professionals":"Gratuit pour les professionnels de santé vérifiés","🔐 Verified access only.":"🔐 Accès vérifié uniquement.","We verify credentials to keep the community clinically focused and ad-free for users.":"Nous vérifions les accréditations pour garder la communauté cliniquement focalisée.","I am a…":"Je suis…","Full name":"Nom complet","Institutional email":"E-mail institutionnel","At least 8 characters":"Au moins 8 caractères","Create free account":"Créer un compte gratuit","Already registered?":"Déjà inscrit?","Nurse / PA":"Infirmier/ère / PA","Student":"Étudiant","Pharmacist":"Pharmacien","Tools":"Outils","Platform":"Plateforme","Legal":"Légal","Privacy Policy":"Politique de confidentialité","Terms of Use":"Conditions d'utilisation","GDPR":"RGPD","Verified clinicians":"Cliniciens vérifiés","AI consultations":"Consultations IA","Validated accuracy":"Précision validée","Trusted by clinicians across Europe":"Approuvé par les cliniciens de toute l'Europe","Data sources & institutional partners":"Sources de données & partenaires institutionnels","Every answer, fully traceable.":"Chaque réponse, entièrement traçable.","Built for decisions that matter":"Conçu pour les décisions importantes","Clinical intelligence,":"Intelligence clinique,","refined.":"raffinée.","Free for verified clinicians":"Gratuit pour les cliniciens vérifiés","Where medicine":"Où la médecine","finds its evidence.":"trouve ses preuves.","Request Free Access":"Demander un accès gratuit","Verification required · No credit card · Ad-free for users":"Vérification requise · Sans carte bancaire · Sans publicité","Radiology second-opinion":"Deuxième avis radiologique","Rezidenţiat & students":"Internat & étudiants","Focused utilities for the most common clinical decisions":"Utilitaires ciblés pour les décisions cliniques courantes","Drug Interactions":"Interactions médicamenteuses","Drug Lookup":"Recherche médicamenteuse","Differential Diagnosis":"Diagnostic différentiel","AI Tutor (Praxis)":"Tuteur IA (Praxis)","Radiology AI":"Radiologie IA","AI Vision":"Vision IA","Precision":"Précision","in seconds.":"en secondes.","Current.":"Actuel.","Cited.":"Cité.","Daily.":"Quotidien.","Curated.":"Sélectionné.","Medical News":"Actualités médicales","Medical news":"Actualités médicales","Breaking research, approvals and guideline updates":"Dernières recherches, approbations et mises à jour","1 day ago":"il y a 1 jour","2 days ago":"il y a 2 jours","2 hours ago":"il y a 2 heures","5 hours ago":"il y a 5 heures","Adaptive learning":"Apprentissage adaptatif","— your personal professor.":"— votre professeur personnel.","Praxis.":"Praxis.","Praxis AI":"Praxis IA","Learn by doing.":"Apprendre en faisant.","Ask your tutor —":"Demandez à votre tuteur —","Ask any question · evidence-based · uses your course if uploaded · streaming":"Posez n'importe quelle question · basé sur les preuves · streaming","Year of study":"Année d'études","Subject":"Matière","Your course material (optional)":"Votre matériel de cours (optionnel)","Upload a PDF or paste your course notes. Praxis AI will tailor all explanations, quizzes and connections to YOUR material.":"Téléchargez un PDF ou collez vos notes. Praxis IA adaptera tout à votre matériel.","📝 Paste text":"📝 Coller du texte","📄 Upload PDF":"📄 Télécharger PDF","Drop PDF here or click to select":"Déposez le PDF ici ou cliquez pour sélectionner","Only text-based PDFs work (not scanned images) · Max 20 MB":"Seuls les PDF textuels fonctionnent (pas les images scannées) · Max 20 Mo","No course loaded yet.":"Aucun cours chargé encore.","Your learning level":"Votre niveau d'apprentissage","No quiz attempts yet. Start a quiz above to begin.":"Aucune tentative de quiz. Commencez un quiz pour débuter.","Socratic mode — learn by questioning":"Méthode socratique — apprendre par les questions","Instead of telling you the answer, Praxis AI asks you guided questions so you discover the answer yourself. Proven to improve retention by 40% vs passive reading.":"Au lieu de vous donner la réponse, Praxis IA pose des questions guidées pour que vous découvriez la réponse vous-même. Amélioration prouvée de 40%.","Start a Socratic dialogue.":"Commencez un dialogue socratique.","Tell me a topic you want to understand deeply — e.g. \"heart failure mechanisms\" or \"antibiotic resistance\". I will guide you through it with questions.":"Dites-moi un sujet que vous souhaitez comprendre en profondeur. Je vous guiderai avec des questions.","Type a topic or your answer…":"Saisir un sujet ou votre réponse…","Topic connections map":"Carte des connexions thématiques","See how":"Voyez comment","connects to other subjects. Click any topic to start studying it.":"se connecte à d'autres matières. Cliquez sur un sujet pour commencer à l'étudier.","Strong connection":"Connexion forte","Related":"Lié","Background context":"Contexte de fond","Tell me about the connections between":"Parlez-moi des connexions entre","and":"et","Regenerate map":"Régénérer la carte","Your learning progress":"Votre progression d'apprentissage","All subjects you have tested yourself on.":"Toutes les matières sur lesquelles vous vous êtes testé.","AI study plan":"Plan d'études IA","Generate personalized study plan":"Générer un plan d'études personnalisé","Professor explains":"Le professeur explique","Professor's lecture":"Cours du professeur","Add a personal note…":"Ajouter une note personnelle…","Retry mistakes":"Reprendre les erreurs","View progress":"Voir la progression","second-opinion.":"deuxième avis.","Upload imaging for an evidence-based second-opinion · JPG, PNG · AI Vision":"Télécharger des images pour un deuxième avis · JPG, PNG · Vision IA","Drop imaging here or click to upload":"Déposez les images ici ou cliquez pour télécharger","Supports JPG, PNG · HIPAA/GDPR compliant · Anonymized at upload · Max 5MB":"Supporte JPG, PNG · Conforme HIPAA/RGPD · Anonymisé au chargement · Max 5Mo","Analyze with AI":"Analyser avec IA","Fast turnaround":"Résultats rapides","Results typically under 30 seconds":"Résultats généralement en moins de 30 secondes","Structured read":"Lecture structurée","Findings + differential with confidence":"Résultats + différentiel avec confiance","Guidelines-backed":"Soutenu par les directives","Recommendations link to evidence":"Recommandations liées aux preuves","Clinical disclaimer:":"Avertissement clinique:","For physicians":"Pour les médecins","For pharmacists":"Pour les pharmaciens","Pick a subject and chat with an AI tutor for board prep and clinical knowledge.":"Choisissez un sujet et discutez avec un tuteur IA.","ESC, EASD, ERS, ESMO, GOLD, CNAS — key recommendations at a glance.":"ESC, EASD, ERS, ESMO, GOLD, CNAS — recommandations clés en un coup d'œil.","First-line treatment for T2DM with high cardiovascular risk?":"Traitement de première ligne pour le DT2 avec risque cardiovasculaire élevé?","Check interactions: warfarin + aspirin + omeprazole":"Vérifier les interactions: warfarine + aspirine + oméprazole","ESC 2024 hypertension — key recommendations summary":"ESC 2024 hypertension — résumé des recommandations clés","Cardiology Guidelines":"Directives de cardiologie","Diabetes Guidelines":"Directives sur le diabète","Oncology Guidelines":"Directives en oncologie","Respiratory Society":"Société respiratoire","World Health Organization":"Organisation mondiale de la santé","Systematic Reviews":"Revues systématiques","Biomedical Literature":"Littérature biomédicale","European Medicines Agency":"Agence européenne des médicaments","consultation.":"clinique.","Anatomy":"Anatomie","Selected:":"Sélectionné:","Start quiz":"Commencer le quiz","Always cited":"Toujours cité","Difficulty":"Difficulté","SGLT2i first-line for CKD · GLP-1 RA for CVD · Personalized HbA1c targets":"SGLT2i première ligne pour MRC · GLP-1 AR pour MCV · Cibles HbA1c personnalisées","New hypertension guidelines: treat at 130/80 mmHg in high-risk patients":"Nouvelles directives: traiter à 130/80 mmHg chez les patients à haut risque","Auto-submits when time runs out":"Soumission automatique à la fin du temps","200 questions from all topics of your faculty, mixed difficulties":"200 questions de tous les sujets de votre faculté, difficultés mixtes","Psychiatry":"Psychiatrie","Nephrology":"Néphrologie","Rheumatology":"Rhumatologie","Gastroenterology":"Gastroentérologie","Ophthalmology":"Ophtalmologie","ENT":"ORL","Dermatology":"Dermatologie","Surgery & ICU":"Chirurgie & Réanimation","Cardiology":"Cardiologie","Diabetes & Endo":"Diabète & Endocrinologie","Oncology":"Oncologie","Pulmonology":"Pneumologie","Neurology":"Neurologie","Infectious":"Maladies infectieuses","Valvular Heart Disease":"Valvulopathies","Cardiomyopathies":"Cardiomyopathies","Obesity Management":"Prise en charge de l'obésité","Prostate Cancer":"Cancer de la prostate","Melanoma":"Mélanome","Pulmonary Hypertension":"Hypertension pulmonaire","Obstructive Sleep Apnea":"Apnée du sommeil obstructive","Multiple Sclerosis":"Sclérose en plaques","Parkinson's Disease":"Maladie de Parkinson","Stroke Secondary Prevention":"Prévention secondaire AVC","Dementia & Alzheimer's":"Démence & Alzheimer","Migraine — Acute & Prevention":"Migraine — Aigu & Prévention","C. difficile Infection":"Infection à C. difficile","Urinary Tract Infections":"Infections urinaires","Tuberculosis":"Tuberculose","AI summary →":"Résumé IA →","Tests taken":"Tests effectués","Questions answered":"Questions répondues","Performance by subject":"Performance par matière","Strong 💪":"Fort 💪","Developing 📈":"En progrès 📈","Needs work 📖":"À améliorer 📖","Last":"Dernière fois","Based on your results, Praxis AI generates a personalized study plan.":"Sur la base de vos résultats, Praxis IA génère un plan d'étude personnalisé.","Generate my personalized plan":"Générer mon plan personnalisé","View my level":"Voir mon niveau","Needs more practice":"Besoin de plus de pratique"},
  it:{"Consultation":"Consultazione","AI Tools":"Strumenti IA","Guidelines":"Linee guida","Drugs":"Farmaci","News":"Notizie","Radiology":"Radiologia","Rezidentiat":"Specializzazione","AI Tutor":"Tutor IA","Sign In":"Accedi","Get Free Access":"Accesso gratuito","Sign out":"Esci","Evidence.":"Evidenza.","Not opinion.":"Non opinione.","Where medicine":"Dove la medicina","finds its evidence.":"trova le sue prove.","Request Free Access":"Richiedi accesso gratuito","Good morning,":"Buongiorno,","Physician":"Medico","Medicine Residency":"Specializzazione Medicina","Pharmacy Residency":"Specializzazione Farmacia","Dentistry Residency":"Specializzazione Odontoiatria","Choose faculty & specialty":"Scegli facoltà e specialità","Practice test":"Test di pratica","Exam simulation":"Simulazione esame","Clinical case":"Caso clinico","Review mistakes":"Rivedere gli errori","History":"Cronologia","Easy":"Facile","Medium":"Medio","Hard":"Difficile","Number of questions":"Numero di domande","Start practice test":"Inizia il test","Start exam simulation":"Avvia simulazione","Generate new case":"Genera nuovo caso","Generating your test…":"Generazione del test…","Test complete!":"Test completato!","New test":"Nuovo test","Question":"Domanda","answered":"risposte","correct":"corrette","wrong":"errate","Explanation":"Spiegazione","Teach me like a professor":"Insegnami come un professore","All guidelines":"Tutte le linee guida","AI Synthesis":"Sintesi IA","Search":"Cerca","Clear":"Cancella","attempts":"tentativi","tests":"test","avg":"media","No tests yet":"Nessun test ancora","Year I":"Anno I","Year II":"Anno II","Year III":"Anno III","Year IV":"Anno IV","Year V":"Anno V","Year VI":"Anno VI",
    "Gastroenterologie și chirurgie digestivă":"Gastroenterologia e chirurgia digestiva",
    "Histologie și anatomie patologică":"Istologia e anatomia patologica",
    "Nefrologie și urologie":"Nefrologia e urologia",
    "Neurologie și neurochirurgie":"Neurologia e neurochirurgia",
    "Hematologie și oncologie":"Ematologia e oncologia",
    "Chirurgie generală":"Chirurgia generale",
    "Ortopedie și traumatologie":"Ortopedia e traumatologia",
    "Pediatrie și chirurgie pediatrică":"Pediatria e chirurgia pediatrica",
    "Obstetrică-ginecologie":"Ginecologia e ostetricia",
    "Medicină de urgență și ATI":"Medicina d'urgenza e rianimazione",
    "Dermatovenerologie":"Dermatologia e venereologia",
    "Radiologie și imagistică":"Radiologia e imaging",
    "Anatomie":"Anatomia","Fiziologie":"Fisiologia","Biochimie":"Biochimica",
    "Farmacologie":"Farmacologia","Fiziopatologie":"Fisiopatologia",
    "Microbiologie și boli infecțioase":"Microbiologia e malattie infettive",
    "Cardiologie și chirurgie cardiovasculară":"Cardiologia e chirurgia cardiovascolare",
    "Medicină internă":"Medicina interna","Medicină de familie":"Medicina di famiglia",
    "Not tested yet":"Non ancora testato","Strong":"Forte","Developing":"In sviluppo","Weak":"Debole",
    "Quick session":"Sessione rapida","My heatmap":"La mia heatmap",
    "Medicine (MG)":"Medicina (MG)","Study topic":"Argomento di studio",
    "Full exam (200)":"Esame completo (200)","questions":"domande",
    "total time":"tempo totale","Your mistakes":"I tuoi errori",
    "Professor's lecture":"Lezione del professore",
    "Add a personal note…":"Aggiungi una nota personale…",
    "Retry mistakes":"Riprova gli errori"
  ,"— exactly like the real exam.":"— esattamente come l'esame reale.","Choose your faculty and study topic. Practice with 10-25 questions or simulate the full 200-question exam. Every mistake gets a star and a professor's explanation. Track your heatmap and know exactly where to focus.":"Scegli la facoltà e l'argomento. Pratica con 10-25 domande o simula l'esame completo di 200 domande. Ogni errore riceve una stella e la spiegazione del professore.","Residency exam preparation":"Preparazione alla specializzazione","Pharmacy":"Farmacia","Dentistry":"Odontoiatria","Full exam (200)":"Esame completo (200)","Start full exam simulation":"Avvia la simulazione completa","Full exam simulation — exactly like the real thing":"Simulazione completa — esattamente come il vero","200 questions · 4 hours · mixed topics · pass = 50% · explanations unlocked after submission":"200 domande · 4 ore · argomenti misti · superato = 50%","This takes 30-60 seconds. Please wait.":"Questo richiede 30-60 secondi. Attendere prego.","Retry mistakes":"Riprova gli errori","total time":"tempo totale","Your mistakes":"I tuoi errori","Not tested yet":"Non testato","Strong":"Forte","Developing":"In sviluppo","Weak":"Debole","Topics tested":"Argomenti testati","Overall average":"Media generale","Quick session — weakest topics":"Sessione rapida — argomenti più deboli","My preparation heatmap":"La mia mappa di preparazione","View heatmap":"Vedi la mappa","Professor's lecture":"Lezione del professore","Add a personal note…":"Aggiungi una nota…","No tests yet. Start a practice test or full exam to build your history.":"Nessun test ancora. Inizia un test per costruire la tua cronologia.","Pass":"Superato","Merit":"Merito","Fail — needs work":"Non superato — da rivedere","Distinction — Excellent":"Lode — Eccellente","(auto)":"(auto)","Age":"Età","Sex":"Sesso","Weight (kg)":"Peso (kg)","Male":"Maschio","Female":"Femmina","Key labs & vitals":"Lab chiave & parametri vitali","Demographics":"Dati anagrafici","Active conditions / diagnoses":"Condizioni attive / Diagnosi","Current medications":"Farmaci attuali","Recent investigations / imaging":"Indagini recenti / Imaging","Additional notes":"Note aggiuntive","Other labs":"Altri esami","Allergies":"Allergie","Smoking":"Fumo","Pregnancy":"Gravidanza","Never":"Mai","Former":"Ex fumatore","Current":"Attuale","Not pregnant":"Non incinta","Pregnant":"Incinta","Breastfeeding":"Allattamento","Patient profile":"Profilo paziente","Fill in only what's relevant to your query":"Compila solo ciò che è rilevante","Clear patient":"Cancella paziente","Clear consultation":"Cancella consultazione","Clinical":"Clinico","Clinical query":"Quesito clinico","Contextual · evidence-based · always cited · streaming":"Contestuale · basato su evidenze · sempre citato · streaming","Ready when you are.":"Pronto quando sei pronto.","Patient-tailored":"Personalizzato per il paziente","Real-time streaming":"Streaming in tempo reale","Guideline citations":"Citazioni di linee guida","Renal & hepatic adjustments":"Aggiustamenti renali & epatici","Quick actions":"Azioni rapide","Quick ask:":"Domanda rapida:","Differential Dx":"Diagnosi differenziale","Drug interactions":"Interazioni farmacologiche","Relevant guidelines":"Linee guida pertinenti","Dosing & adjustments":"Dosaggio & aggiustamenti","🔍 Differential diagnosis":"🔍 Diagnosi differenziale","⚗️ Drug interactions":"⚗️ Interazioni farmacologiche","📋 Current guidelines":"📋 Linee guida attuali","💊 Dosing & renal adjustment":"💊 Dosaggio & aggiustamento renale","❤️ Cardiovascular risk":"❤️ Rischio cardiovascolare","All guidelines":"Tutte le linee guida","Clinical Guidelines":"Linee guida cliniche","850+ guidelines indexed · Always current":"850+ linee guida indicizzate · Sempre aggiornate","Search guideline, topic, or ask a question…":"Cerca linee guida, argomento o fai una domanda…","Guidelines indexed":"Linee guida indicizzate","Societies":"Società","Languages":"Lingue","Shown":"Mostrato","Categories":"Categorie","Diabetes & Endocrinology":"Diabete & Endocrinologia","Infectious Diseases":"Malattie infettive","WHO & Global":"OMS & Globale","Romania / CNAS Protocols":"Romania / Protocolli CNAS","Management of Arterial Hypertension":"Gestione dell'ipertensione arteriosa","Management of Hyperglycaemia in T2DM":"Gestione dell'iperglicemia nel T2DM","Heart Failure — Diagnosis & Treatment":"Insufficienza cardiaca — Diagnosi & Trattamento","Acute Coronary Syndromes":"Sindromi coronariche acute","Cardiovascular Prevention":"Prevenzione cardiovascolare","Atrial Fibrillation":"Fibrillazione atriale","Dyslipidemia — Cholesterol Management":"Dislipidemia — Gestione del colesterolo","Breast Cancer — Early & Advanced":"Cancro al seno — Precoce & Avanzato","Lung Cancer — NSCLC & SCLC":"Cancro al polmone — NSCLC & SCLC","Colorectal Cancer":"Cancro del colon-retto","COPD — Global Strategy (GOLD 2024)":"BPCO — Strategia globale (GOLD 2024)","Asthma — Global Strategy (GINA 2024)":"Asma — Strategia globale (GINA 2024)","Idiopathic Pulmonary Fibrosis (IPF)":"Fibrosi polmonare idiopatica (FPI)","Ischaemic Stroke & TIA":"Ictus ischemico & TIA","Epilepsy — Diagnosis & Treatment":"Epilessia — Diagnosi & Trattamento","Sepsis & Septic Shock":"Sepsi & Shock settico","Community-Acquired Pneumonia":"Polmonite acquisita in comunità","HIV — Antiretroviral Therapy":"HIV — Terapia antiretrovirale","WHO Essential Medicines List":"Lista dei medicinali essenziali dell'OMS","Beta-Blockers Post-MI — Cochrane Review":"Beta-bloccanti post-IMA — Revisione Cochrane","Thyroid Nodule Management":"Gestione dei noduli tiroidei","Standards of Care in Diabetes":"Standard di cura nel diabete","Diabetes & Cardiovascular Disease":"Diabete & Malattie cardiovascolari","AI Synthesis":"Sintesi IA","Sources:":"Fonti:","Ask follow-up":"Fare una domanda di approfondimento","Follow-up question:":"Domanda di approfondimento:","Ask a follow-up question about this guideline:":"Fai una domanda di approfondimento su questa linea guida:","Drug Database":"Database farmaci","Drug database":"Database farmaci","Brand + INN":"Marchio + INN","Search by brand name or INN · AI recognizes Romanian & European commercial names":"Cerca per nome commerciale o INN · L'IA riconosce i nomi commerciali","Try:":"Prova:","Welcome back":"Bentornato","Sign in to your verified account":"Accedi al tuo account verificato","Email":"Email","Password":"Password","Sign in":"Accedi","No account yet?":"Non hai un account?","Register free":"Registrati gratuitamente","Create your account":"Crea il tuo account","Free for verified healthcare professionals":"Gratuito per i professionisti sanitari verificati","🔐 Verified access only.":"🔐 Solo accesso verificato.","We verify credentials to keep the community clinically focused and ad-free for users.":"Verifichiamo le credenziali per mantenere la comunità clinicamente focalizzata.","I am a…":"Sono…","Full name":"Nome completo","Institutional email":"Email istituzionale","At least 8 characters":"Almeno 8 caratteri","Create free account":"Crea account gratuito","Already registered?":"Già registrato?","Nurse / PA":"Infermiere / PA","Student":"Studente","Pharmacist":"Farmacista","Tools":"Strumenti","Platform":"Piattaforma","Legal":"Legale","Privacy Policy":"Informativa sulla privacy","Terms of Use":"Termini di utilizzo","GDPR":"GDPR","Verified clinicians":"Clinici verificati","AI consultations":"Consultazioni IA","Validated accuracy":"Accuratezza validata","Trusted by clinicians across Europe":"Affidato dai clinici in tutta Europa","Data sources & institutional partners":"Fonti dati & partner istituzionali","Every answer, fully traceable.":"Ogni risposta, completamente tracciabile.","Built for decisions that matter":"Costruito per decisioni importanti","Clinical intelligence,":"Intelligenza clinica,","refined.":"raffinata.","Free for verified clinicians":"Gratuito per clinici verificati","Where medicine":"Dove la medicina","finds its evidence.":"trova le sue prove.","Request Free Access":"Richiedi accesso gratuito","Verification required · No credit card · Ad-free for users":"Verifica richiesta · Senza carta di credito · Senza pubblicità","Radiology second-opinion":"Seconda opinione radiologica","Rezidenţiat & students":"Specializzazione & studenti","Focused utilities for the most common clinical decisions":"Strumenti mirati per le decisioni cliniche più comuni","Drug Interactions":"Interazioni farmacologiche","Drug Lookup":"Ricerca farmaco","Differential Diagnosis":"Diagnosi differenziale","AI Tutor (Praxis)":"Tutor IA (Praxis)","Radiology AI":"Radiologia IA","AI Vision":"Visione IA","Precision":"Precisione","in seconds.":"in secondi.","Current.":"Attuale.","Cited.":"Citato.","Daily.":"Quotidiano.","Curated.":"Selezionato.","Medical News":"Notizie mediche","Medical news":"Notizie mediche","Breaking research, approvals and guideline updates":"Ultime ricerche, approvazioni e aggiornamenti","1 day ago":"1 giorno fa","2 days ago":"2 giorni fa","2 hours ago":"2 ore fa","5 hours ago":"5 ore fa","Adaptive learning":"Apprendimento adattivo","— your personal professor.":"— il tuo professore personale.","Praxis.":"Praxis.","Praxis AI":"Praxis IA","Learn by doing.":"Imparare facendo.","Ask your tutor —":"Chiedi al tuo tutor —","Ask any question · evidence-based · uses your course if uploaded · streaming":"Fai qualsiasi domanda · basato su evidenze · streaming","Year of study":"Anno di studio","Subject":"Materia","Your course material (optional)":"Il tuo materiale del corso (opzionale)","Upload a PDF or paste your course notes. Praxis AI will tailor all explanations, quizzes and connections to YOUR material.":"Carica un PDF o incolla i tuoi appunti. Praxis IA adatterà tutto al tuo materiale.","📝 Paste text":"📝 Incolla testo","📄 Upload PDF":"📄 Carica PDF","Drop PDF here or click to select":"Trascina il PDF qui o clicca per selezionare","Only text-based PDFs work (not scanned images) · Max 20 MB":"Funzionano solo i PDF testuali (non immagini scansionate) · Max 20 MB","No course loaded yet.":"Nessun corso caricato ancora.","Your learning level":"Il tuo livello di apprendimento","No quiz attempts yet. Start a quiz above to begin.":"Nessun tentativo di quiz. Inizia un quiz per cominciare.","Socratic mode — learn by questioning":"Metodo socratico — imparare attraverso domande","Instead of telling you the answer, Praxis AI asks you guided questions so you discover the answer yourself. Proven to improve retention by 40% vs passive reading.":"Invece di darti la risposta, Praxis IA ti pone domande guidate perché tu scopra la risposta da solo. Provato migliorare la ritenzione del 40%.","Start a Socratic dialogue.":"Inizia un dialogo socratico.","Tell me a topic you want to understand deeply — e.g. \"heart failure mechanisms\" or \"antibiotic resistance\". I will guide you through it with questions.":"Dimmi un argomento che vuoi capire a fondo. Ti guiderò attraverso domande.","Type a topic or your answer…":"Digita un argomento o la tua risposta…","Topic connections map":"Mappa delle connessioni tra argomenti","See how":"Vedi come","connects to other subjects. Click any topic to start studying it.":"si collega ad altre materie. Clicca su un argomento per iniziare a studiarlo.","Strong connection":"Connessione forte","Related":"Correlato","Background context":"Contesto di sfondo","Tell me about the connections between":"Dimmi le connessioni tra","and":"e","Regenerate map":"Rigenera la mappa","Your learning progress":"Il tuo progresso di apprendimento","All subjects you have tested yourself on.":"Tutte le materie su cui ti sei testato.","AI study plan":"Piano di studio IA","Generate personalized study plan":"Genera un piano di studio personalizzato","Professor explains":"Il professore spiega","Professor's lecture":"Lezione del professore","Add a personal note…":"Aggiungi una nota personale…","Retry mistakes":"Riprova gli errori","View progress":"Vedi il progresso","second-opinion.":"seconda opinione.","Upload imaging for an evidence-based second-opinion · JPG, PNG · AI Vision":"Carica immagini per una seconda opinione · JPG, PNG · IA Vision","Drop imaging here or click to upload":"Trascina le immagini qui o clicca per caricare","Supports JPG, PNG · HIPAA/GDPR compliant · Anonymized at upload · Max 5MB":"Supporta JPG, PNG · Conforme HIPAA/GDPR · Anonimizzato al caricamento · Max 5MB","Analyze with AI":"Analizza con IA","Fast turnaround":"Risultati veloci","Results typically under 30 seconds":"Risultati generalmente in meno di 30 secondi","Structured read":"Lettura strutturata","Findings + differential with confidence":"Risultati + differenziale con confidenza","Guidelines-backed":"Basato su linee guida","Recommendations link to evidence":"Raccomandazioni collegate alle evidenze","Clinical disclaimer:":"Avvertenza clinica:","For physicians":"Per i medici","For pharmacists":"Per i farmacisti","Pick a subject and chat with an AI tutor for board prep and clinical knowledge.":"Scegli una materia e chatta con un tutor IA.","ESC, EASD, ERS, ESMO, GOLD, CNAS — key recommendations at a glance.":"ESC, EASD, ERS, ESMO, GOLD, CNAS — raccomandazioni chiave a colpo d'occhio.","First-line treatment for T2DM with high cardiovascular risk?":"Trattamento di prima linea per T2DM con alto rischio cardiovascolare?","Check interactions: warfarin + aspirin + omeprazole":"Controllare interazioni: warfarin + aspirina + omeprazolo","ESC 2024 hypertension — key recommendations summary":"ESC 2024 ipertensione — sintesi delle raccomandazioni chiave","Cardiology Guidelines":"Linee guida di cardiologia","Diabetes Guidelines":"Linee guida sul diabete","Oncology Guidelines":"Linee guida di oncologia","Respiratory Society":"Società respiratoria","World Health Organization":"Organizzazione mondiale della sanità","Systematic Reviews":"Revisioni sistematiche","Biomedical Literature":"Letteratura biomedica","European Medicines Agency":"Agenzia europea dei medicinali","consultation.":"clinica.","Anatomy":"Anatomia","Selected:":"Selezionato:","Start quiz":"Inizia il quiz","Always cited":"Sempre citato","Difficulty":"Difficoltà","SGLT2i first-line for CKD · GLP-1 RA for CVD · Personalized HbA1c targets":"SGLT2i prima linea per MRC · GLP-1 RA per MCV · Obiettivi HbA1c personalizzati","Auto-submits when time runs out":"Invio automatico alla scadenza del tempo","200 questions from all topics of your faculty, mixed difficulties":"200 domande da tutti gli argomenti della tua facoltà, difficoltà miste","Psychiatry":"Psichiatria","Nephrology":"Nefrologia","Rheumatology":"Reumatologia","Gastroenterology":"Gastroenterologia","Ophthalmology":"Oftalmologia","ENT":"ORL","Dermatology":"Dermatologia","Surgery & ICU":"Chirurgia & Terapia Intensiva","Cardiology":"Cardiologia","Diabetes & Endo":"Diabete & Endocrinologia","Oncology":"Oncologia","Pulmonology":"Pneumologia","Neurology":"Neurologia","Infectious":"Malattie infettive","Multiple Sclerosis":"Sclerosi multipla","Parkinson's Disease":"Malattia di Parkinson","Dementia & Alzheimer's":"Demenza & Alzheimer","Melanoma":"Melanoma","Tuberculosis":"Tubercolosi","AI summary →":"Sintesi IA →"},
  es:{"Consultation":"Consulta","AI Tools":"Herramientas IA","Guidelines":"Guías","Drugs":"Medicamentos","News":"Noticias","Radiology":"Radiología","Rezidentiat":"Residencia","AI Tutor":"Tutor IA","Sign In":"Iniciar sesión","Get Free Access":"Acceso Gratuito","Sign out":"Cerrar sesión","Evidence.":"Evidencia.","Not opinion.":"No opinión.","Where medicine":"Donde la medicina","finds its evidence.":"encuentra su evidencia.","Request Free Access":"Solicitar Acceso Gratuito","Good morning,":"Buenos días,","Physician":"Médico","Medicine Residency":"Residencia Medicina","Pharmacy Residency":"Residencia Farmacia","Dentistry Residency":"Residencia Odontología","Choose faculty & specialty":"Elegir facultad y especialidad","Practice test":"Test de práctica","Exam simulation":"Simulación de examen","Clinical case":"Caso clínico","Review mistakes":"Revisar errores","History":"Historial","Easy":"Fácil","Medium":"Medio","Hard":"Difícil","Number of questions":"Número de preguntas","Start practice test":"Iniciar test","Start exam simulation":"Iniciar simulación","Generate new case":"Generar nuevo caso","Generating your test…":"Generando tu test…","Test complete!":"¡Test completado!","New test":"Nuevo test","Question":"Pregunta","answered":"respondidas","correct":"correctas","wrong":"incorrectas","Explanation":"Explicación","Teach me like a professor":"Enséñame como un profesor","All guidelines":"Todas las guías","AI Synthesis":"Síntesis IA","Search":"Buscar","Clear":"Limpiar","attempts":"intentos","tests":"tests","avg":"prom.","No tests yet":"Ningún test aún","Year I":"Año I","Year II":"Año II","Year III":"Año III","Year IV":"Año IV","Year V":"Año V","Year VI":"Año VI",
    "Gastroenterologie și chirurgie digestivă":"Gastroenterología y cirugía digestiva",
    "Histologie și anatomie patologică":"Histología y anatomía patológica",
    "Nefrologie și urologie":"Nefrología y urología",
    "Neurologie și neurochirurgie":"Neurología y neurocirugía",
    "Hematologie și oncologie":"Hematología y oncología",
    "Chirurgie generală":"Cirugía general",
    "Ortopedie și traumatologie":"Ortopedia y traumatología",
    "Pediatrie și chirurgie pediatrică":"Pediatría y cirugía pediátrica",
    "Obstetrică-ginecologie":"Ginecología y obstetricia",
    "Medicină de urgență și ATI":"Urgencias y medicina intensiva",
    "Dermatovenerologie":"Dermatología y venereología",
    "Radiologie și imagistică":"Radiología e imagen",
    "Anatomie":"Anatomía","Fiziologie":"Fisiología","Biochimie":"Bioquímica",
    "Farmacologie":"Farmacología","Fiziopatologie":"Fisiopatología",
    "Microbiologie și boli infecțioase":"Microbiología y enfermedades infecciosas",
    "Cardiologie și chirurgie cardiovasculară":"Cardiología y cirugía cardiovascular",
    "Medicină internă":"Medicina interna","Medicină de familie":"Medicina de familia",
    "Not tested yet":"Aún no probado","Strong":"Fuerte","Developing":"En desarrollo","Weak":"Débil",
    "Quick session":"Sesión rápida","My heatmap":"Mi mapa de calor",
    "Medicine (MG)":"Medicina (MG)","Study topic":"Tema de estudio",
    "Full exam (200)":"Examen completo (200)","questions":"preguntas",
    "total time":"tiempo total","Your mistakes":"Tus errores",
    "Professor's lecture":"Lección del profesor",
    "Add a personal note…":"Añadir una nota personal…",
    "Retry mistakes":"Reintentar errores"
  ,"— exactly like the real exam.":"— exactamente como el examen real.","Choose your faculty and study topic. Practice with 10-25 questions or simulate the full 200-question exam. Every mistake gets a star and a professor's explanation. Track your heatmap and know exactly where to focus.":"Elige tu facultad y tema. Practica con 10-25 preguntas o simula el examen completo de 200 preguntas. Cada error recibe una estrella y la explicación del profesor.","Residency exam preparation":"Preparación para la residencia","Pharmacy":"Farmacia","Dentistry":"Odontología","Full exam (200)":"Examen completo (200)","Start full exam simulation":"Iniciar simulación completa","Full exam simulation — exactly like the real thing":"Simulación completa — exactamente como el real","200 questions · 4 hours · mixed topics · pass = 50% · explanations unlocked after submission":"200 preguntas · 4 horas · temas mixtos · aprobado = 50%","This takes 30-60 seconds. Please wait.":"Esto tarda 30-60 segundos. Por favor espere.","Retry mistakes":"Reintentar errores","total time":"tiempo total","Your mistakes":"Tus errores","Not tested yet":"No probado","Strong":"Fuerte","Developing":"En desarrollo","Weak":"Débil","Topics tested":"Temas probados","Overall average":"Media general","Quick session — weakest topics":"Sesión rápida — temas más débiles","My preparation heatmap":"Mi mapa de preparación","View heatmap":"Ver mapa","Professor's lecture":"Lección del profesor","Add a personal note…":"Añadir una nota…","No tests yet. Start a practice test or full exam to build your history.":"Ningún test aún. Comienza un test para construir tu historial.","Pass":"Aprobado","Merit":"Notable","Fail — needs work":"Suspenso — a mejorar","Distinction — Excellent":"Distinción — Excelente","(auto)":"(auto)","Age":"Edad","Sex":"Sexo","Weight (kg)":"Peso (kg)","Male":"Hombre","Female":"Mujer","Key labs & vitals":"Labs clave & constantes","Demographics":"Datos demográficos","Active conditions / diagnoses":"Condiciones activas / Diagnósticos","Current medications":"Medicamentos actuales","Recent investigations / imaging":"Estudios recientes / Imagen","Additional notes":"Notas adicionales","Other labs":"Otros análisis","Allergies":"Alergias","Smoking":"Tabaquismo","Pregnancy":"Embarazo","Never":"Nunca","Former":"Exfumador","Current":"Actual","Not pregnant":"No embarazada","Pregnant":"Embarazada","Breastfeeding":"Lactancia","Patient profile":"Perfil del paciente","Fill in only what's relevant to your query":"Rellena solo lo relevante para tu consulta","Clear patient":"Borrar paciente","Clear consultation":"Borrar consulta","Clinical":"Clínico","Clinical query":"Consulta clínica","Contextual · evidence-based · always cited · streaming":"Contextual · basado en evidencias · siempre citado · streaming","Ready when you are.":"Listo cuando quieras.","Patient-tailored":"Personalizado al paciente","Real-time streaming":"Streaming en tiempo real","Guideline citations":"Citas de guías","Renal & hepatic adjustments":"Ajustes renal & hepático","Quick actions":"Acciones rápidas","Quick ask:":"Consulta rápida:","Differential Dx":"Diagnóstico diferencial","Drug interactions":"Interacciones farmacológicas","Relevant guidelines":"Guías relevantes","Dosing & adjustments":"Dosificación & ajustes","🔍 Differential diagnosis":"🔍 Diagnóstico diferencial","⚗️ Drug interactions":"⚗️ Interacciones farmacológicas","📋 Current guidelines":"📋 Guías actuales","💊 Dosing & renal adjustment":"💊 Dosificación & ajuste renal","❤️ Cardiovascular risk":"❤️ Riesgo cardiovascular","All guidelines":"Todas las guías","Clinical Guidelines":"Guías clínicas","850+ guidelines indexed · Always current":"850+ guías indexadas · Siempre actuales","Search guideline, topic, or ask a question…":"Buscar guía, tema o hacer una pregunta…","Guidelines indexed":"Guías indexadas","Societies":"Sociedades","Languages":"Idiomas","Shown":"Mostrado","Categories":"Categorías","Diabetes & Endocrinology":"Diabetes & Endocrinología","Infectious Diseases":"Enfermedades infecciosas","WHO & Global":"OMS & Global","Romania / CNAS Protocols":"Rumanía / Protocolos CNAS","Management of Arterial Hypertension":"Manejo de la hipertensión arterial","Management of Hyperglycaemia in T2DM":"Manejo de la hiperglucemia en DM2","Heart Failure — Diagnosis & Treatment":"Insuficiencia cardíaca — Diagnóstico & Tratamiento","Acute Coronary Syndromes":"Síndromes coronarios agudos","Cardiovascular Prevention":"Prevención cardiovascular","Atrial Fibrillation":"Fibrilación auricular","Dyslipidemia — Cholesterol Management":"Dislipidemia — Manejo del colesterol","Breast Cancer — Early & Advanced":"Cáncer de mama — Precoz & Avanzado","Lung Cancer — NSCLC & SCLC":"Cáncer de pulmón — CPNM & CPM","Colorectal Cancer":"Cáncer colorrectal","COPD — Global Strategy (GOLD 2024)":"EPOC — Estrategia global (GOLD 2024)","Asthma — Global Strategy (GINA 2024)":"Asma — Estrategia global (GINA 2024)","Idiopathic Pulmonary Fibrosis (IPF)":"Fibrosis pulmonar idiopática (FPI)","Ischaemic Stroke & TIA":"Ictus isquémico & AIT","Epilepsy — Diagnosis & Treatment":"Epilepsia — Diagnóstico & Tratamiento","Sepsis & Septic Shock":"Sepsis & Shock séptico","Community-Acquired Pneumonia":"Neumonía adquirida en comunidad","HIV — Antiretroviral Therapy":"VIH — Terapia antirretroviral","WHO Essential Medicines List":"Lista de medicamentos esenciales de la OMS","Beta-Blockers Post-MI — Cochrane Review":"Betabloqueantes post-IAM — Revisión Cochrane","Thyroid Nodule Management":"Manejo de nódulos tiroideos","Standards of Care in Diabetes":"Estándares de atención en diabetes","Diabetes & Cardiovascular Disease":"Diabetes & Enfermedades cardiovasculares","AI Synthesis":"Síntesis IA","Sources:":"Fuentes:","Ask follow-up":"Hacer una pregunta de seguimiento","Follow-up question:":"Pregunta de seguimiento:","Ask a follow-up question about this guideline:":"Haz una pregunta de seguimiento sobre esta guía:","Drug Database":"Base de datos de medicamentos","Drug database":"Base de datos de medicamentos","Brand + INN":"Marca + DCI","Search by brand name or INN · AI recognizes Romanian & European commercial names":"Buscar por marca o DCI · La IA reconoce nombres comerciales","Try:":"Prueba:","Welcome back":"Bienvenido de nuevo","Sign in to your verified account":"Inicia sesión en tu cuenta verificada","Email":"Correo electrónico","Password":"Contraseña","Sign in":"Iniciar sesión","No account yet?":"¿No tienes cuenta?","Register free":"Registrarse gratis","Create your account":"Crear tu cuenta","Free for verified healthcare professionals":"Gratuito para profesionales sanitarios verificados","🔐 Verified access only.":"🔐 Solo acceso verificado.","We verify credentials to keep the community clinically focused and ad-free for users.":"Verificamos credenciales para mantener la comunidad clínicamente enfocada.","I am a…":"Soy…","Full name":"Nombre completo","Institutional email":"Correo institucional","At least 8 characters":"Al menos 8 caracteres","Create free account":"Crear cuenta gratuita","Already registered?":"¿Ya registrado?","Nurse / PA":"Enfermero/a / PA","Student":"Estudiante","Pharmacist":"Farmacéutico","Tools":"Herramientas","Platform":"Plataforma","Legal":"Legal","Privacy Policy":"Política de privacidad","Terms of Use":"Términos de uso","GDPR":"RGPD","Verified clinicians":"Clínicos verificados","AI consultations":"Consultas IA","Validated accuracy":"Precisión validada","Trusted by clinicians across Europe":"Confiado por clínicos de toda Europa","Data sources & institutional partners":"Fuentes de datos & socios institucionales","Every answer, fully traceable.":"Cada respuesta, totalmente trazable.","Built for decisions that matter":"Construido para decisiones que importan","Clinical intelligence,":"Inteligencia clínica,","refined.":"refinada.","Free for verified clinicians":"Gratuito para clínicos verificados","Where medicine":"Donde la medicina","finds its evidence.":"encuentra su evidencia.","Request Free Access":"Solicitar acceso gratuito","Verification required · No credit card · Ad-free for users":"Verificación requerida · Sin tarjeta · Sin publicidad","Radiology second-opinion":"Segunda opinión radiológica","Rezidenţiat & students":"Residencia & estudiantes","Focused utilities for the most common clinical decisions":"Herramientas enfocadas para decisiones clínicas comunes","Drug Interactions":"Interacciones farmacológicas","Drug Lookup":"Búsqueda de medicamentos","Differential Diagnosis":"Diagnóstico diferencial","AI Tutor (Praxis)":"Tutor IA (Praxis)","Radiology AI":"Radiología IA","AI Vision":"Visión IA","Precision":"Precisión","in seconds.":"en segundos.","Current.":"Actual.","Cited.":"Citado.","Daily.":"Diario.","Curated.":"Curado.","Medical News":"Noticias médicas","Medical news":"Noticias médicas","Breaking research, approvals and guideline updates":"Últimas investigaciones, aprobaciones y actualizaciones","1 day ago":"hace 1 día","2 days ago":"hace 2 días","2 hours ago":"hace 2 horas","5 hours ago":"hace 5 horas","Adaptive learning":"Aprendizaje adaptativo","— your personal professor.":"— tu profesor personal.","Praxis.":"Praxis.","Praxis AI":"Praxis IA","Learn by doing.":"Aprender haciendo.","Ask your tutor —":"Pregunta a tu tutor —","Ask any question · evidence-based · uses your course if uploaded · streaming":"Haz cualquier pregunta · basado en evidencias · streaming","Year of study":"Año de estudios","Subject":"Materia","Your course material (optional)":"Tu material del curso (opcional)","Upload a PDF or paste your course notes. Praxis AI will tailor all explanations, quizzes and connections to YOUR material.":"Sube un PDF o pega tus notas. Praxis IA adaptará todo a tu material.","📝 Paste text":"📝 Pegar texto","📄 Upload PDF":"📄 Subir PDF","Drop PDF here or click to select":"Suelta el PDF aquí o haz clic para seleccionar","Only text-based PDFs work (not scanned images) · Max 20 MB":"Solo funcionan PDFs de texto (no imágenes escaneadas) · Máx 20 MB","No course loaded yet.":"Ningún curso cargado aún.","Your learning level":"Tu nivel de aprendizaje","No quiz attempts yet. Start a quiz above to begin.":"Sin intentos de quiz. Comienza un quiz para empezar.","Socratic mode — learn by questioning":"Método socrático — aprender mediante preguntas","Instead of telling you the answer, Praxis AI asks you guided questions so you discover the answer yourself. Proven to improve retention by 40% vs passive reading.":"En lugar de darte la respuesta, Praxis IA te hace preguntas guiadas para que descubras la respuesta tú mismo. Mejora del 40% en retención.","Start a Socratic dialogue.":"Comienza un diálogo socrático.","Tell me a topic you want to understand deeply — e.g. \"heart failure mechanisms\" or \"antibiotic resistance\". I will guide you through it with questions.":"Dime un tema que quieras entender profundamente. Te guiaré con preguntas.","Type a topic or your answer…":"Escribe un tema o tu respuesta…","Topic connections map":"Mapa de conexiones temáticas","See how":"Ve cómo","connects to other subjects. Click any topic to start studying it.":"se conecta a otras materias. Haz clic en un tema para empezar a estudiarlo.","Strong connection":"Conexión fuerte","Related":"Relacionado","Background context":"Contexto de fondo","Tell me about the connections between":"Cuéntame las conexiones entre","and":"y","Regenerate map":"Regenerar mapa","Your learning progress":"Tu progreso de aprendizaje","All subjects you have tested yourself on.":"Todas las materias en las que te has probado.","AI study plan":"Plan de estudio IA","Generate personalized study plan":"Generar plan de estudio personalizado","Professor explains":"El profesor explica","Professor's lecture":"Lección del profesor","Add a personal note…":"Añadir una nota personal…","Retry mistakes":"Reintentar errores","View progress":"Ver progreso","second-opinion.":"segunda opinión.","Upload imaging for an evidence-based second-opinion · JPG, PNG · AI Vision":"Subir imágenes para segunda opinión · JPG, PNG · Visión IA","Drop imaging here or click to upload":"Suelta las imágenes aquí o haz clic para subir","Supports JPG, PNG · HIPAA/GDPR compliant · Anonymized at upload · Max 5MB":"Soporta JPG, PNG · Cumple HIPAA/RGPD · Anonimizado al subir · Máx 5MB","Analyze with AI":"Analizar con IA","Fast turnaround":"Resultados rápidos","Results typically under 30 seconds":"Resultados generalmente en menos de 30 segundos","Structured read":"Lectura estructurada","Findings + differential with confidence":"Hallazgos + diferencial con confianza","Guidelines-backed":"Respaldado por guías","Recommendations link to evidence":"Recomendaciones vinculadas a evidencias","Clinical disclaimer:":"Advertencia clínica:","For physicians":"Para médicos","For pharmacists":"Para farmacéuticos","Pick a subject and chat with an AI tutor for board prep and clinical knowledge.":"Elige una materia y chatea con un tutor IA.","ESC, EASD, ERS, ESMO, GOLD, CNAS — key recommendations at a glance.":"ESC, EASD, ERS, ESMO, GOLD, CNAS — recomendaciones clave de un vistazo.","First-line treatment for T2DM with high cardiovascular risk?":"Tratamiento de primera línea para DM2 con alto riesgo cardiovascular?","Check interactions: warfarin + aspirin + omeprazole":"Comprobar interacciones: warfarina + aspirina + omeprazol","ESC 2024 hypertension — key recommendations summary":"ESC 2024 hipertensión — resumen de recomendaciones clave","Cardiology Guidelines":"Guías de cardiología","Diabetes Guidelines":"Guías de diabetes","Oncology Guidelines":"Guías de oncología","Respiratory Society":"Sociedad respiratoria","World Health Organization":"Organización Mundial de la Salud","Systematic Reviews":"Revisiones sistemáticas","Biomedical Literature":"Literatura biomédica","European Medicines Agency":"Agencia Europea de Medicamentos","consultation.":"clínica.","Anatomy":"Anatomía","Selected:":"Seleccionado:","Start quiz":"Iniciar el quiz","Always cited":"Siempre citado","Difficulty":"Dificultad","SGLT2i first-line for CKD · GLP-1 RA for CVD · Personalized HbA1c targets":"SGLT2i primera línea para ERC · GLP-1 AR para ECV · Objetivos HbA1c personalizados","Auto-submits when time runs out":"Envío automático al acabar el tiempo","200 questions from all topics of your faculty, mixed difficulties":"200 preguntas de todos los temas de tu facultad, dificultades mixtas","Psychiatry":"Psiquiatría","Nephrology":"Nefrología","Rheumatology":"Reumatología","Gastroenterology":"Gastroenterología","Ophthalmology":"Oftalmología","ENT":"ORL","Dermatology":"Dermatología","Surgery & ICU":"Cirugía & UCI","Cardiology":"Cardiología","Diabetes & Endo":"Diabetes & Endocrinología","Oncology":"Oncología","Pulmonology":"Neumología","Neurology":"Neurología","Infectious":"Enfermedades infecciosas","Multiple Sclerosis":"Esclerosis múltiple","Parkinson's Disease":"Enfermedad de Parkinson","Dementia & Alzheimer's":"Demencia & Alzheimer","Melanoma":"Melanoma","Prostate Cancer":"Cáncer de próstata","Tuberculosis":"Tuberculosis","AI summary →":"Resumen IA →"}
};
const LANG_META={en:{flag:'🇬🇧',code:'EN'},ro:{flag:'🇷🇴',code:'RO'},de:{flag:'🇩🇪',code:'DE'},fr:{flag:'🇫🇷',code:'FR'},it:{flag:'🇮🇹',code:'IT'},es:{flag:'🇪🇸',code:'ES'}};
let curLang = 'en';

function tr(s){if(curLang==='en')return s;return(T[curLang]||{})[s]||s;}
function applyTranslations(){
  document.querySelectorAll('[data-t]').forEach(el=>{if(!el.dataset.o){el.dataset.o=el.textContent;}el.textContent=tr(el.dataset.o);});
  document.querySelectorAll('[data-tph]').forEach(el=>{if(!el.dataset.oph){el.dataset.oph=el.placeholder;}el.placeholder=tr(el.dataset.oph);});
}
function toggleLang(e){e.stopPropagation();document.getElementById('langMenu').classList.toggle('on');}
function setLang(lang){
  curLang=lang;const m=LANG_META[lang];
  document.getElementById('langFlag').textContent=m.flag;
  document.getElementById('langCode').textContent=m.code;
  document.querySelectorAll('#langMenu button').forEach((b,i)=>{const langs=['en','ro','de','fr','it','es'];b.classList.toggle('act',langs[i]===lang);});
  applyTranslations();
  document.getElementById('langMenu').classList.remove('on');
  document.documentElement.lang=lang;

  // Re-render dynamic grids so translated names appear in correct language
  renderYears();
  renderSubjects();
  updateSelectionSummary();
  // Rezidentiat topics re-render
  if(typeof renderRezTopics === 'function') renderRezTopics();
  if(typeof updateRezSel === 'function') updateRezSel();
  // Reload ticker in new language
  if(typeof loadTickerNews === 'function') loadTickerNews(lang);
}
document.addEventListener('click',(e)=>{if(!e.target.closest('.lang-wrap'))document.getElementById('langMenu').classList.remove('on');});

/* ============ PAGE ROUTING ============ */
function goPage(p){
  document.querySelectorAll('.pg').forEach(x=>x.classList.remove('on'));
  const target=document.getElementById('pg-'+p);
  if(target)target.classList.add('on');
  document.querySelectorAll('.ntab').forEach(t=>t.classList.remove('act'));
  const tab=document.querySelector('.ntab[data-p="'+p+'"]');
  if(tab)tab.classList.add('act');
  window.scrollTo({top:0,behavior:'smooth'});
}

/* ============ MODAL ============ */
function openModal(which){
  closeModal();
  const map = { signin:'ovSignin', signup:'ovSignup', forgot:'ovForgot', profile:'ovProfile' };
  const id = map[which] || (which==='signin' ? 'ovSignin' : 'ovSignup');
  const el=document.getElementById(id);
  if(el){el.classList.add('on');document.body.style.overflow='hidden';}
  if(which==='forgot'){
    const s1=document.getElementById('fpStep1'); const s2=document.getElementById('fpStep2');
    if(s1) s1.style.display='block';
    if(s2) s2.style.display='none';
    const em=document.getElementById('fpEmail'); if(em) em.focus();
  }
}
function closeModal(){document.querySelectorAll('.ov').forEach(o=>o.classList.remove('on'));document.body.style.overflow='';}
document.querySelectorAll('.ov').forEach(o=>{o.addEventListener('click',e=>{if(e.target===o)closeModal();});});
document.addEventListener('keydown',e=>{if(e.key==='Escape')closeModal();});

/* ============ AUTH (REAL) ============ */
const API_BASE = (window.__API_BASE__ || "http://127.0.0.1:8080").replace(/\/+$/,"");
const LS_TOKEN = "me_jwt";

function authToken(){ try{return localStorage.getItem(LS_TOKEN)||"";}catch(e){return ""} }
function setAuthToken(t){ try{ if(!t)localStorage.removeItem(LS_TOKEN); else localStorage.setItem(LS_TOKEN,t); }catch(e){} }

function authHeaders(){
  const h = { "Content-Type":"application/json" };
  const t = authToken();
  if(t) h.Authorization = `Bearer ${t}`;
  return h;
}

let __ME_USER__ = null;

async function fetchMeFresh(){
  const t = authToken();
  if(!t) return null;
  try{
    const me = await apiJson("/api/users/me",{ method:"GET", headers: authHeaders() });
    return me?.user || me;
  }catch(e){
    return null;
  }
}

function formatFullName(user){
  const fn = String(user?.firstName || "").trim();
  const ln = String(user?.lastName || "").trim();
  const fromParts = [fn, ln].filter(Boolean).join(" ").trim();
  return String(user?.fullName || user?.name || fromParts || "").trim();
}

function rolePrefix(user){
  const roleRaw = String(user?.role || user?.providerType || "").toLowerCase();
  return (roleRaw === "doctor" || roleRaw === "medic") ? "Dr." :
    (roleRaw === "pharmacist" || roleRaw === "farmacist") ? "Ph." :
    (roleRaw === "student") ? "Stud." : "";
}

function roleLabel(user){
  const roleRaw = String(user?.role || user?.providerType || "").toLowerCase();
  if(roleRaw === "doctor" || roleRaw === "medic") return tr("Doctor");
  if(roleRaw === "pharmacist" || roleRaw === "farmacist") return tr("Pharmacist");
  if(roleRaw === "student") return tr("Student");
  if(roleRaw) return user.role || user.providerType;
  return tr("Doctor");
}

function setProfileModal(user){
  const fullName = formatFullName(user) || "—";
  const email = (user?.email || user?.mail || "—");
  const pf = rolePrefix(user);
  const rl = roleLabel(user);
  const parafa = (user?.parafa || "—");

  const elFull = document.getElementById("pfFullName");
  const elEmail = document.getElementById("pfEmail");
  const elRole = document.getElementById("pfRole");
  const elParafa = document.getElementById("pfParafa");
  if(elFull) elFull.value = fullName;
  if(elEmail) elEmail.value = email;
  if(elRole) elRole.value = `${pf} ${rl}`.trim();
  if(elParafa) elParafa.value = parafa;
}

function setAuthUI(user){
  const guestBtns = document.getElementById("guestBtns");
  const navUser = document.getElementById("navUser");
  const navAvatar = document.getElementById("navAvatar");
  const navUserName = document.getElementById("navUserName");
  const navUserMeta = document.getElementById("navUserMeta");
  const sideGreetPrefix = document.getElementById("sideGreetPrefix");
  const sideGreetName = document.getElementById("sideGreetName");
  if(!guestBtns || !navUser) return;

  if(!user){
    __ME_USER__ = null;
    guestBtns.style.display="flex";
    navUser.classList.remove("on");
    if(navAvatar) navAvatar.textContent = "DR";
    if(navUserName) navUserName.textContent = "Doctor";
    if(navUserMeta) navUserMeta.textContent = tr("Doctor");
    if(sideGreetPrefix) sideGreetPrefix.textContent = tr("Good morning,");
    if(sideGreetName) sideGreetName.textContent = "Doctor.";
    const cl = document.getElementById("chatLauncher");
    if(cl) cl.classList.remove("on");
    return;
  }

  __ME_USER__ = user;
  guestBtns.style.display="none";
  navUser.classList.add("on");
  const fullName = formatFullName(user) || "Doctor";
  const hour = (new Date()).getHours();
  const greet = hour < 5 ? tr("Good night,") : hour < 12 ? tr("Good morning,") : hour < 17 ? tr("Good afternoon,") : hour < 22 ? tr("Good evening,") : tr("Good night,");
  const prefix = rolePrefix(user);
  if(navUserName) navUserName.textContent = `${prefix} ${fullName}`.trim();
  if(navUserMeta){ navUserMeta.textContent = ""; navUserMeta.style.display = "none"; }
  if(navAvatar){
    const parts = String(fullName).trim().split(/\s+/).filter(Boolean);
    const ini = (parts[0]?.[0]||"D") + (parts[1]?.[0]||"R");
    navAvatar.textContent = ini.toUpperCase();
  }

  // Sidebar greeting: "Good morning, First Last."
  if(sideGreetPrefix) sideGreetPrefix.textContent = greet;
  if(sideGreetName) sideGreetName.textContent = `${fullName}.`;

  // Chat launcher visible when logged in
  const cl = document.getElementById("chatLauncher");
  if(cl) cl.classList.add("on");

  // Profile popup on click (except Sign out button)
  if(navUser && !navUser.dataset.profileBound){
    navUser.dataset.profileBound = "1";
    navUser.addEventListener("click", async (e)=>{
      const t = e.target;
      if(t && t.closest && t.closest(".btn-out")) return;
      if(!__ME_USER__) return;
      // Ensure we show the latest server profile (includes email)
      const fresh = await fetchMeFresh();
      if(fresh){
        __ME_USER__ = { ...__ME_USER__, ...fresh };
      }
      setProfileModal(__ME_USER__);
      openModal("profile");
    });
  }
}

/* ============ DIRECT MESSAGES (DM) ============ */
let __DM__ = {
  me: null,
  conversations: [],
  activeConversationId: null,
  activePeer: null, // UserSummaryResponse
  pollTimer: null,
  lastRenderSig: ""
};

function openDmFromLauncher(){
  goPage("dm");
  dmInit();
}

function dmInit(){
  if(!authToken()){
    openModal("signin");
    return;
  }
  dmRefresh();
  dmStartPolling();
}

function dmStartPolling(){
  if(__DM__.pollTimer) return;
  __DM__.pollTimer = setInterval(()=>{
    const on = document.getElementById("pg-dm")?.classList.contains("on");
    if(!on) return;
    if(__DM__.activeConversationId){
      dmLoadMessages(__DM__.activeConversationId, true);
    }else{
      dmRefresh(true);
    }
  }, 3000);
}

async function dmRefresh(silent){
  try{
    const conv = await apiJson("/api/dm/conversations",{ method:"GET", headers: authHeaders() });
    __DM__.conversations = Array.isArray(conv) ? conv : [];
    dmRenderConversations();
    if(!silent) {
      // keep active selection if still exists
      if(__DM__.activeConversationId){
        const still = __DM__.conversations.find(c=>c.id===__DM__.activeConversationId);
        if(still){
          __DM__.activePeer = still.peer || __DM__.activePeer;
          dmUpdatePeerLabel();
        }
      }
    }
  }catch(e){
    if(!silent) alert(e.message || "Failed to load conversations");
  }
}

function dmUpdatePeerLabel(){
  const el = document.getElementById("dmPeerLabel");
  if(!el) return;
  if(!__DM__.activePeer){
    el.textContent = "Select a user to chat";
    return;
  }
  el.textContent = `${(__DM__.activePeer.firstName||"")} ${(__DM__.activePeer.lastName||"")}`.trim() || (__DM__.activePeer.email||"Chat");
}

function dmRenderConversations(){
  const box = document.getElementById("dmConversations");
  if(!box) return;
  box.innerHTML = "";
  if(!__DM__.conversations.length){
    box.innerHTML = `<div style="padding:14px;color:var(--ink2);font-size:13px">No conversations yet.</div>`;
    return;
  }
  for(const c of __DM__.conversations){
    const p = c.peer || {};
    const nm = `${p.firstName||""} ${p.lastName||""}`.trim() || p.email || "User";
    const ini = ((p.firstName||"U")[0] || "U") + ((p.lastName||"")[0] || "");
    const last = c.lastMessage?.content ? String(c.lastMessage.content) : "";
    const div = document.createElement("div");
    div.className = "dm-item" + (c.id===__DM__.activeConversationId ? " act" : "");
    div.onclick = ()=>dmOpenConversation(c.id, p);
    div.innerHTML = `
      <div class="dm-ava">${String(ini).toUpperCase()}</div>
      <div style="min-width:0">
        <div class="dm-nm">${escapeHtml(nm)}</div>
        <div class="dm-sn">${escapeHtml(last || " ")}</div>
      </div>
    `;
    box.appendChild(div);
  }
}

function dmOpenConversation(conversationId, peer){
  __DM__.activeConversationId = conversationId;
  __DM__.activePeer = peer || null;
  dmUpdatePeerLabel();
  dmRenderConversations();
  dmLoadMessages(conversationId);
  const inp = document.getElementById("dmMsgInput");
  if(inp) inp.focus();
}

async function dmLoadMessages(conversationId, silent){
  try{
    const msgs = await apiJson(`/api/dm/conversations/${conversationId}/messages?limit=30`,{ method:"GET", headers: authHeaders() });
    const arr = Array.isArray(msgs) ? msgs : [];
    const sig = arr.map(m=>m.id).join(",");
    if(sig === __DM__.lastRenderSig) return;
    __DM__.lastRenderSig = sig;
    dmRenderMessages(arr);
  }catch(e){
    if(!silent) alert(e.message || "Failed to load messages");
  }
}

function dmRenderMessages(msgs){
  const box = document.getElementById("dmThread");
  if(!box) return;
  box.innerHTML = "";
  if(!msgs.length){
    box.innerHTML = `<div style="color:var(--ink2);font-size:13px">No messages yet. Say hello.</div>`;
    return;
  }
  const meId = (__DM__.me && __DM__.me.id) ? __DM__.me.id : null;
  for(const m of msgs){
    const isMe = meId ? (m.senderUserId === meId) : false;
    const bub = document.createElement("div");
    bub.className = "dm-bub" + (isMe ? " me" : "");
    const dt = m.createdAt ? new Date(m.createdAt) : null;
    const d = dt && !isNaN(dt.getTime()) ? dt.toLocaleString() : "";
    bub.innerHTML = `<div class="t">${escapeHtml(String(m.content||""))}</div><div class="d">${escapeHtml(d)}</div>`;
    box.appendChild(bub);
  }
  box.scrollTop = box.scrollHeight;
}

async function dmSearchUsers(q){
  const box = document.getElementById("dmSearchResults");
  if(!box) return;
  const s = String(q||"").trim();
  if(s.length < 2){ box.innerHTML=""; return; }
  try{
    const res = await apiJson(`/api/users/search?q=${encodeURIComponent(s)}`,{ method:"GET", headers: authHeaders() });
    const arr = Array.isArray(res) ? res : [];
    box.innerHTML = "";
    for(const u of arr){
      // Skip self if we know it
      if(__DM__.me?.email && u.email && String(u.email).toLowerCase() === String(__DM__.me.email).toLowerCase()) continue;
      const nm = `${u.firstName||""} ${u.lastName||""}`.trim() || u.email || "User";
      const ini = ((u.firstName||"U")[0] || "U") + ((u.lastName||"")[0] || "");
      const btn = document.createElement("button");
      btn.className = "dm-sug";
      btn.onclick = ()=>dmStartChatWithUser(u);
      btn.innerHTML = `
        <div class="dm-ava">${String(ini).toUpperCase()}</div>
        <div style="text-align:left;min-width:0">
          <div class="dm-nm">${escapeHtml(nm)}</div>
          <div class="meta">${escapeHtml(u.email || "")}</div>
        </div>
      `;
      box.appendChild(btn);
    }
  }catch(e){
    box.innerHTML = `<div style="color:var(--danger);font-size:13px">Search failed</div>`;
  }
}

async function dmStartChatWithUser(u){
  __DM__.activePeer = u;
  dmUpdatePeerLabel();
  // If a conversation already exists with this peer, open it.
  const existing = __DM__.conversations.find(c => c.peer && String(c.peer.id) === String(u.id));
  if(existing){
    dmOpenConversation(existing.id, existing.peer);
    return;
  }
  // Otherwise, user must send first message (conversation is created on send)
  __DM__.activeConversationId = null;
  __DM__.lastRenderSig = "";
  const box = document.getElementById("dmThread");
  if(box){
    box.innerHTML = `<div style="color:var(--ink2);font-size:13px">Start the conversation with your first message.</div>`;
  }
  const inp = document.getElementById("dmMsgInput");
  if(inp) inp.focus();
}

async function dmSend(){
  const inp = document.getElementById("dmMsgInput");
  const txt = (inp?.value || "").trim();
  if(!txt) return;
  if(!__DM__.activePeer || !__DM__.activePeer.id){
    alert("Select a user first");
    return;
  }
  try{
    inp.value = "";
    const saved = await apiJson(`/api/dm/peers/${__DM__.activePeer.id}/messages`,{
      method:"POST",
      headers: authHeaders(),
      body: JSON.stringify({ content: txt })
    });
    // Refresh conversations and open the correct one
    await dmRefresh(true);
    const conv = __DM__.conversations.find(c => c.id === saved.conversationId);
    if(conv){
      dmOpenConversation(conv.id, conv.peer);
    }else{
      // fallback
      __DM__.activeConversationId = saved.conversationId;
      dmLoadMessages(saved.conversationId, true);
    }
  }catch(e){
    alert(e.message || "Failed to send");
  }
}

function escapeHtml(s){
  return String(s||"").replace(/[&<>"']/g, (ch)=>({
    "&":"&amp;","<":"&lt;",">":"&gt;","\"":"&quot;","'":"&#39;"
  }[ch]));
}

async function apiJson(path, opts){
  const res = await fetch(`${API_BASE}${path}`, opts);
  let data = null;
  try{ data = await res.json(); }catch(e){}
  if(!res.ok){
    const msg = data?.error || data?.message || `HTTP ${res.status}`;
    throw new Error(msg);
  }
  return data;
}

async function authInit(){
  const t = authToken();
  if(!t){ setAuthUI(null); return; }
  try{
    // Spring backend: /api/users/me
    const me = await apiJson("/api/users/me",{ method:"GET", headers: authHeaders() });
    const u = me.user || me;
    __DM__.me = u || null;
    setAuthUI(u);
  }catch(e){
    setAuthToken("");
    __DM__.me = null;
    setAuthUI(null);
  }
}

async function login(){
  const email = (document.getElementById("signinEmail")?.value || "").trim();
  const password = (document.getElementById("signinPassword")?.value || "");
  try{
    const r = await apiJson("/api/auth/login",{
      method:"POST",
      headers:{ "Content-Type":"application/json" },
      body: JSON.stringify({ email, password })
    });
    // Spring returns LoginResponse (token + user fields flat)
    const token = r.token || r.jwt || r.accessToken;
    setAuthToken(token);
    const user = r.user ? r.user : {
      email: r.email || email,
      fullName: r.fullName,
      firstName: r.firstName,
      lastName: r.lastName,
      providerType: r.providerType,
      role: r.role,
      parafa: r.parafa,
      name: r.fullName || [r.firstName, r.lastName].filter(Boolean).join(" ").trim()
    };
    setAuthUI(user);
    closeModal();
    goPage("consult");
  }catch(e){
    alert(e.message || "Login failed");
  }
}

function splitName(full){
  const s = String(full || "").trim().replace(/\s+/g," ");
  if(!s) return { firstName:"", lastName:"" };
  const parts = s.split(" ");
  if(parts.length === 1) return { firstName: parts[0], lastName: "-" };
  return { firstName: parts[0], lastName: parts.slice(1).join(" ") };
}

function mapRoleToProvider(role){
  const r = String(role || "").toLowerCase();
  if(r === "doctor") return "medic";
  if(r === "pharmacist") return "farmacist";
  if(r === "student") return "student";
  return "medic";
}

async function register(){
  const name = (document.getElementById("signupName")?.value || "").trim();
  const email = (document.getElementById("signupEmail")?.value || "").trim();
  const password = (document.getElementById("signupPassword")?.value || "");
  const parafa = (document.getElementById("signupParafa")?.value || "").trim();
  const role = (document.querySelector(".role-btn.act")?.dataset?.role || "doctor").toLowerCase();
  try{
    const nm = splitName(name);
    const providerType = mapRoleToProvider(role);
    // Spring requires medicGrade + specialty when providerType=medic.
    const medicGrade = providerType === "medic" ? "rezident" : null;
    const specialty = providerType === "medic" ? "Medicina interna" : null;
    const r = await apiJson("/api/auth/register",{
      method:"POST",
      headers:{ "Content-Type":"application/json" },
      body: JSON.stringify({
        email,
        password,
        firstName: nm.firstName || "Doctor",
        lastName: nm.lastName || "-",
        phoneNumber: "",
        parafa,
        providerType,
        medicGrade,
        specialty,
        academicTitles: ""
      })
    });
    const token = r.token || r.jwt || r.accessToken;
    setAuthToken(token);
    const user = r.user ? r.user : {
      email: r.email || email,
      fullName: r.fullName,
      firstName: r.firstName,
      lastName: r.lastName,
      providerType: r.providerType,
      role: r.role,
      parafa: r.parafa,
      name: r.fullName || [r.firstName, r.lastName].filter(Boolean).join(" ").trim()
    };
    setAuthUI(user);
    closeModal();
    goPage("consult");
  }catch(e){
    alert(e.message || "Registration failed");
  }
}

function logout(){
  setAuthToken("");
  setAuthUI(null);
  goPage("land");
}

function pickRole(btn){document.querySelectorAll('.role-btn').forEach(b=>b.classList.remove('act'));btn.classList.add('act');}

setTimeout(()=>{ try{ authInit(); }catch(e){} }, 0);

/* ============ FORGOT PASSWORD ============ */
async function requestPasswordReset(){
  const email = (document.getElementById("fpEmail")?.value || "").trim();
  if(!email){ alert("Email required"); return; }
  try{
    await apiJson("/api/auth/password-reset/request",{
      method:"POST",
      headers:{ "Content-Type":"application/json" },
      body: JSON.stringify({ target: email })
    });
    const s1=document.getElementById('fpStep1'); const s2=document.getElementById('fpStep2');
    if(s1) s1.style.display='none';
    if(s2) s2.style.display='block';
    const c=document.getElementById('fpCode'); if(c) c.focus();
  }catch(e){
    alert(e.message || "Failed to send code");
  }
}

async function confirmPasswordReset(){
  const email = (document.getElementById("fpEmail")?.value || "").trim();
  const code = (document.getElementById("fpCode")?.value || "").trim();
  const newPassword = (document.getElementById("fpNewPassword")?.value || "");
  if(!email || !code || !newPassword){ alert("Fill all fields"); return; }
  try{
    await apiJson("/api/auth/password-reset/confirm",{
      method:"POST",
      headers:{ "Content-Type":"application/json" },
      body: JSON.stringify({ target: email, code, newPassword })
    });
    alert("Password updated. Please sign in.");
    openModal("signin");
  }catch(e){
    alert(e.message || "Reset failed");
  }
}

/* ============ MARKDOWN RENDERER (lightweight) ============ */
function escapeHtml(s){return String(s).replace(/[&<>"']/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[m]));}
function tolerantParseJson(text){
  if(!text) return null;
  try{ return JSON.parse(text); }catch(e){}
  try{
    let t=text.trim().replace(/,\s*([}\]])/g,'$1');
    return JSON.parse(t);
  }catch(e){}
  try{
    const s=text.indexOf('['),e=text.lastIndexOf(']');
    if(s>=0&&e>s) return JSON.parse(text.slice(s,e+1));
  }catch(e){}
  return null;
}

// Compatibility: old tutor HTML uses switchMode(btn) with data-mode
function switchMode(btn){
  const mode = btn?.dataset?.mode || btn;
  // Update tab active state
  document.querySelectorAll('#pg-tutor .mode-tab').forEach(b=>b.classList.remove('act'));
  if(btn && btn.classList) btn.classList.add('act');
  // Show/hide old-style mode divs (modeChat, modeQuiz, modeProgress)
  ['chat','quiz','progress'].forEach(m=>{
    const id = 'mode'+m.charAt(0).toUpperCase()+m.slice(1);
    const el = document.getElementById(id);
    if(el) el.style.display = m===mode ? 'block' : 'none';
  });
  if(mode==='progress') renderProgressList();
}

// Alias old function names → new ones
function pickQuizCount(btn){
  document.querySelectorAll('.qc-seg-btn[data-qcnt]').forEach(b=>b.classList.remove('act'));
  btn.classList.add('act');
  if(typeof T_state !== 'undefined') T_state.quizCount = parseInt(btn.dataset.qcnt,10);
}
function pickQuizDiff(btn){
  document.querySelectorAll('.qc-seg-btn[data-qdiff]').forEach(b=>b.classList.remove('act'));
  btn.classList.add('act');
  if(typeof T_state !== 'undefined') T_state.quizDiff = btn.dataset.qdiff;
}

function startQuiz(){
  const btn = document.getElementById('startQuizBtn');
  const area = document.getElementById('quizArea');
  if(!area) return;

  // Read settings from UI
  const countBtn = document.querySelector('.qc-seg-btn[data-qcnt].act');
  const diffBtn = document.querySelector('.qc-seg-btn[data-qdiff].act');
  const count = parseInt(countBtn?.dataset?.qcnt||'10',10);
  const diff = diffBtn?.dataset?.qdiff || 'easy';

  // Read subject from T_state or from UI
  const subject = (typeof T_state !== 'undefined' && T_state.subject) ? T_state.subject : 'Anatomy';
  const faculty = (typeof T_state !== 'undefined' && T_state.faculty) ? T_state.faculty : 'medicine';
  const year = (typeof T_state !== 'undefined' && T_state.year) ? T_state.year : 1;

  const lm={en:'English',ro:'Romanian',de:'German',fr:'French',it:'Italian',es:'Spanish'};
  const lang = lm[curLang]||'Romanian';
  const dd={easy:'basic recall, straightforward definitions',medium:'applied clinical reasoning',hard:'complex vignettes, subtle distractors'};

  if(btn) btn.disabled = true;
  area.innerHTML=`<div class="quiz-loading"><div class="big-ico">📝</div><h4>${tr('Generating your quiz…')}</h4><p>${count} ${tr('questions')} · <strong>${escapeHtml(tr(subject))}</strong></p><div class="typing-dots" style="justify-content:center;margin-top:14px"><span></span><span></span><span></span></div></div>`;

  // Generate in batches of 5
  const BATCH=5;
  const batches=[];
  let rem=count;
  while(rem>0){
    const n=Math.min(BATCH,rem);
    const prompt=`Generate exactly ${n} MCQ questions for a medical student studying ${subject} (${faculty}, Year ${year}). Difficulty: ${diff} (${dd[diff]}). CRITICAL: ALL text in ALL fields MUST be written entirely in ${lang}. Return ONLY a JSON array — no markdown, no fences. Each element: {"q":"...","a":"...","b":"...","c":"...","d":"...","correct":"a"|"b"|"c"|"d","topic":"subtopic in ${lang}","diff":"${diff}"}`;
    batches.push(
      fetch('ai.php',{method:'POST',headers:{'Content-Type':'application/json'},
        body:JSON.stringify({mode:'chat',lang:curLang,prompt,stream:false})
      }).then(r=>r.json()).then(resp=>{
        if(!resp.ok) return [];
        let t=(resp.text||'').trim().replace(/^```(?:json)?\s*/i,'').replace(/\s*```$/,'').trim();
        const s=t.indexOf('['),e=t.lastIndexOf(']');
        if(s>=0&&e>s) t=t.slice(s,e+1);
        return tolerantParseJson(t)||[];
      }).catch(()=>[])
    );
    rem-=n;
  }

  Promise.all(batches).then(results=>{
    const qs=[].concat(...results);
    if(!qs.length){
      area.innerHTML=`<div style="color:#B91C1C;padding:20px;text-align:center">${tr('Could not generate test.')} <button class="qf-retry" onclick="startQuiz()">${tr('Try again')}</button></div>`;
      if(btn) btn.disabled=false; return;
    }
    // Render directly in quizArea
    renderSimpleQuiz(qs, area);
    if(btn) btn.disabled=false;
  });
}

function renderSimpleQuiz(qs, area){
  const total=qs.length;
  let answers=new Array(total).fill(null);
  let flags=new Array(total).fill(false);

  function render(){
    const answered=answers.filter(a=>a!==null).length;
    const correct=answers.filter((a,i)=>a&&a===qs[i].correct).length;
    let html=`<div class="quiz-progress-top"><div class="qpt-count"><span>${answered}</span>/${total}</div><div class="qpt-bar"><div style="width:${(answered/total*100).toFixed(1)}%"></div></div><div class="qpt-score"><strong>${correct} ${tr('correct')}</strong></div></div>`;
    qs.forEach((q,idx)=>{
      const ua=answers[idx]; const isAns=ua!==null;
      html+=`<div class="quiz-q ${isAns?'answered':''} ${flags[idx]?'rq-flagged':''}" data-sqid="${idx}">
        <div class="quiz-q-head"><span class="qq-num ${flags[idx]?'qq-num-flag':''}">${flags[idx]?'⭐':idx+1}</span><span class="qq-label">Q${idx+1}/${total}${q.topic?' · '+escapeHtml(q.topic):''}</span></div>
        <div class="quiz-q-stem">${escapeHtml(q.q)}</div>
        <div class="quiz-opts">`;
      ['a','b','c','d'].forEach(lt=>{
        if(!q[lt]) return;
        let cls='quiz-opt',mark='';
        if(isAns){
          if(lt===q.correct){cls+=' correct';mark='<span class="qo-mark">✓</span>';}
          else if(lt===ua){cls+=' incorrect';mark='<span class="qo-mark">✗</span>';}
        }
        html+=`<button class="${cls}" ${isAns?'disabled':''} onclick="sqAnswer(${idx},'${lt}')"><span class="qo-letter">${lt.toUpperCase()}</span><span>${escapeHtml(q[lt])}</span>${mark}</button>`;
      });
      html+=`</div>`;
      if(isAns){
        html+=`<button class="qq-teach-btn" onclick="sqTeach(${idx})">🎓 ${tr('Professor explains')}</button><div id="sqTeach_${idx}" class="quiz-teach"></div>`;
      }
      html+=`</div>`;
    });
    if(answered===total){
      const pct=Math.round(correct/total*100);
      // Save progress to localStorage
      const subject = (typeof T_state !== 'undefined' && T_state.subject) ? T_state.subject : 'Anatomy';
      const faculty = (typeof T_state !== 'undefined' && T_state.faculty) ? T_state.faculty : 'medicine';
      try{
        let prog = JSON.parse(localStorage.getItem('me_praxis_prog')||'{}');
        const key = `${faculty}::${subject}`;
        if(!prog[key]) prog[key]={subject,faculty,attempts:0,correct:0,total:0,runs:[]};
        prog[key].attempts++;
        prog[key].correct+=correct;
        prog[key].total+=total;
        prog[key].lastPct=pct;
        prog[key].lastDate=new Date().toISOString();
        prog[key].runs=(prog[key].runs||[]).concat({date:new Date().toISOString(),score:correct,total,pct});
        localStorage.setItem('me_praxis_prog',JSON.stringify(prog));
        // Also update T_state if available
        if(typeof T_state!=='undefined') T_state.progress=prog;
      }catch(e){}

      html+=`<div class="quiz-finish">
        <h3><em>${tr('Quiz complete!')}</em></h3>
        <div class="quiz-score-big">${correct}/${total}</div>
        <div class="quiz-score-lbl">${pct}%</div>
        <div class="quiz-level-badge ${pct>=85?'expert':pct>=70?'advanced':pct>=50?'intermediate':'beginner'}">
          <span>${pct>=85?'🏅':pct>=70?'📈':pct>=50?'✅':'📖'}</span>
          <span>${pct>=85?tr('Excellent'):pct>=70?tr('Merit'):pct>=50?tr('Pass'):tr('Needs more practice')}</span>
        </div>
        <div class="quiz-finish-actions">
          <button class="qf-retry" onclick="startQuiz()">🔄 ${tr('New quiz')}</button>
          <button class="qf-ask" onclick="switchMode({dataset:{mode:'progress'}})">📊 ${tr('View my level')}</button>
        </div>
      </div>`;
    }
    area.innerHTML=html;
    // Re-attach click handlers
    window._sqData={qs,answers,flags,render};
  }
  window.sqAnswer=function(idx,letter){
    const d=window._sqData; if(!d||d.answers[idx]!==null)return;
    d.answers[idx]=letter; if(letter!==d.qs[idx].correct) d.flags[idx]=true;
    d.render();
  };
  window.sqTeach=function(idx){
    const d=window._sqData; if(!d)return;
    const q=d.qs[idx]; const box=document.getElementById('sqTeach_'+idx);
    if(!box)return; box.classList.add('on');
    box.innerHTML=`<div class="typing-dots"><span></span><span></span><span></span></div>`;
    const lm={en:'English',ro:'Romanian',de:'German',fr:'French',it:'Italian',es:'Spanish'};
    const prompt=`Teach me this question like a world-class professor. Language: ${lm[curLang]||'Romanian'}.\nQ: ${q.q}\nA.${q.a} B.${q.b} C.${q.c} D.${q.d}\nCorrect: ${q.correct.toUpperCase()}. ${q[q.correct]}\nExplain: why correct, why each wrong, clinical pearls.`;
    let full='';
    streamClaudeAPI({mode:'chat',lang:curLang,prompt},
      (t)=>{if(full==='')box.innerHTML='';full+=t;box.innerHTML=md2html(full);},
      ()=>{},
      (e)=>{box.innerHTML=`<div style="color:#B91C1C">${escapeHtml(e)}</div>`;}
    );
  };
  render();
}

function renderProgressList(){
  const empty = document.getElementById('progressEmpty');
  const list = document.getElementById('progressList');
  if(!empty || !list) return;

  // Load from localStorage
  let progress = {};
  try{ progress = JSON.parse(localStorage.getItem('me_praxis_prog')||'{}'); }catch(e){}
  // Also check T_state
  if(typeof T_state !== 'undefined' && T_state.progress){
    Object.assign(progress, T_state.progress);
  }

  const entries = Object.values(progress);
  if(!entries.length){
    empty.style.display='';
    list.style.display='none';
    list.innerHTML='';
    return;
  }
  empty.style.display='none';
  list.style.display='block';

  // Calculate totals
  const totalTests = entries.reduce((s,e)=>s+(e.attempts||0),0);
  const totalQ = entries.reduce((s,e)=>s+(e.total||0),0);
  const totalCorrect = entries.reduce((s,e)=>s+(e.correct||0),0);
  const globalAvg = totalQ ? Math.round(totalCorrect/totalQ*100) : 0;
  const globalCol = globalAvg>=75?'var(--ok)':globalAvg>=50?'var(--warn)':'var(--danger)';

  // Sort entries by last tested
  entries.sort((a,b)=>new Date(b.lastDate||0)-new Date(a.lastDate||0));

  let html = `
  <!-- STATS OVERVIEW -->
  <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:14px;margin-bottom:24px">
    <div style="background:#fff;border:1px solid var(--line);border-radius:16px;padding:20px;text-align:center">
      <div style="font-family:'Cormorant Garamond',serif;font-size:38px;font-weight:600;color:var(--accent)">${totalTests}</div>
      <div style="font-size:12px;color:var(--ink2);font-weight:600;text-transform:uppercase;letter-spacing:.1em;margin-top:4px">${tr('Tests taken')}</div>
    </div>
    <div style="background:#fff;border:1px solid var(--line);border-radius:16px;padding:20px;text-align:center">
      <div style="font-family:'Cormorant Garamond',serif;font-size:38px;font-weight:600;color:${globalCol}">${globalAvg}%</div>
      <div style="font-size:12px;color:var(--ink2);font-weight:600;text-transform:uppercase;letter-spacing:.1em;margin-top:4px">${tr('Overall average')}</div>
    </div>
    <div style="background:#fff;border:1px solid var(--line);border-radius:16px;padding:20px;text-align:center">
      <div style="font-family:'Cormorant Garamond',serif;font-size:38px;font-weight:600;color:var(--accent)">${totalQ}</div>
      <div style="font-size:12px;color:var(--ink2);font-weight:600;text-transform:uppercase;letter-spacing:.1em;margin-top:4px">${tr('Questions answered')}</div>
    </div>
  </div>

  <!-- SUBJECT BREAKDOWN -->
  <h4 style="font-family:'Cormorant Garamond',serif;font-size:22px;font-weight:600;color:var(--ink);margin-bottom:14px">📚 ${tr('Performance by subject')}</h4>
  <div style="display:flex;flex-direction:column;gap:10px;margin-bottom:24px">`;

  entries.forEach(e=>{
    const avg = e.total ? Math.round(e.correct/e.total*100) : 0;
    const col = avg>=75?'#2E7D4F':avg>=50?'#D97706':'#B91C1C';
    const bg = avg>=75?'rgba(46,125,79,.08)':avg>=50?'rgba(217,119,6,.08)':'rgba(185,28,28,.06)';
    const label = avg>=75?tr('Strong 💪'):avg>=50?tr('Developing 📈'):tr('Needs work 📖');
    const lastDate = e.lastDate ? new Date(e.lastDate).toLocaleDateString() : '-';
    html+=`<div style="background:${bg};border:1px solid ${col}33;border-radius:12px;padding:14px 18px;display:flex;align-items:center;gap:16px">
      <div style="flex:1">
        <div style="font-weight:600;font-size:14.5px;color:var(--ink)">${escapeHtml(tr(e.subject||''))}</div>
        <div style="font-size:12px;color:var(--ink2);margin-top:3px">${e.attempts} ${tr('tests')} · ${e.total} ${tr('questions')} · ${tr('Last')}: ${lastDate}</div>
        <div style="height:5px;background:rgba(43,24,16,.08);border-radius:3px;margin-top:8px;overflow:hidden">
          <div style="height:100%;width:${avg}%;background:${col};border-radius:3px;transition:width .6s"></div>
        </div>
      </div>
      <div style="text-align:right;flex-shrink:0">
        <div style="font-family:'Cormorant Garamond',serif;font-size:28px;font-weight:700;color:${col}">${avg}%</div>
        <div style="font-size:11px;color:${col};font-weight:600">${label}</div>
      </div>
    </div>`;
  });

  html+=`</div>

  <!-- AI STUDY PLAN -->
  <div style="background:#fff;border:1.5px solid rgba(182,91,52,.2);border-radius:16px;padding:22px">
    <h4 style="font-family:'Cormorant Garamond',serif;font-size:22px;font-weight:600;color:var(--ink);margin-bottom:6px">🎯 ${tr('AI study plan')}</h4>
    <p style="font-size:13.5px;color:var(--ink2);margin-bottom:16px">${tr('Based on your results, Praxis AI generates a personalized study plan.')}</p>
    <div id="progressAIPlan">
      <button class="btn-primary-big" style="max-width:320px" onclick="generateProgressPlan()">✨ ${tr('Generate my personalized plan')}</button>
    </div>
  </div>`;

  list.innerHTML = html;
}

function generateProgressPlan(){
  const box = document.getElementById('progressAIPlan'); if(!box) return;
  box.innerHTML=`<div class="typing-dots"><span></span><span></span><span></span></div>`;

  let progress = {};
  try{ progress = JSON.parse(localStorage.getItem('me_praxis_prog')||'{}'); }catch(e){}
  if(typeof T_state !== 'undefined' && T_state.progress) Object.assign(progress, T_state.progress);

  const entries = Object.values(progress);
  const lm={en:'English',ro:'Romanian',de:'German',fr:'French',it:'Italian',es:'Spanish'};
  const lang = lm[curLang]||'Romanian';
  const summary = entries.map(e=>`${e.subject}: ${e.total?Math.round(e.correct/e.total*100):0}% (${e.attempts} tests, ${e.total} questions)`).join('; ');

  const prompt=`You are a world-class medical educator analyzing a student's quiz performance. Language: ${lang}.

Student results: ${summary||'No data yet'}

Generate a detailed, personalized study plan in markdown:

## 🧠 Analiza ta actuală
2-3 sentences assessing the student's current level. Be honest but encouraging. Mention specific strengths and weaknesses by subject.

## ✅ Puncte forte — continuă să construiești pe ele
List subjects scoring ≥75% with 1-2 sentences on how to maintain and deepen that knowledge.

## 🎯 Prioritățile săptămânii
Top 3 subjects needing the most work. For each: specific reason why it's weak, what concepts to focus on, how many practice questions per day.

## 📅 Plan zilnic — 7 zile
Day-by-day schedule:
- **Luni**: [Subject] — [specific topic] — [30 min quiz + review]
- **Marți**: etc.
Be specific about which subject, how long, and what type of practice (quiz easy/medium/hard, review theory, do cases).

## 💡 3 Tehnici de studiu personalizate
Based on this student's weak areas, recommend 3 specific study techniques (spaced repetition, active recall, mind maps, etc.) with concrete implementation advice.

## 🏆 Obiectiv pe 2 săptămâni
One specific, measurable goal for the next 2 weeks.

Be motivating, specific, and actionable. Max 400 words.`;

  let full='';
  streamClaudeAPI({mode:'chat',lang:curLang,prompt},
    (token)=>{if(full==='')box.innerHTML='';full+=token;box.innerHTML=md2html(full);},
    ()=>{},
    (err)=>{box.innerHTML=`<div style="color:#B91C1C">${escapeHtml(err)}</div>`;}
  );
}
function md2html(text){
  let h = escapeHtml(text);
  // headings
  h = h.replace(/^### (.+)$/gm,'<h3>$1</h3>');
  h = h.replace(/^## (.+)$/gm,'<h2>$1</h2>');
  h = h.replace(/^# (.+)$/gm,'<h1>$1</h1>');
  // bold
  h = h.replace(/\*\*([^*]+)\*\*/g,'<strong>$1</strong>');
  // italic (single *)
  h = h.replace(/(^|[^*])\*([^*\n]+)\*/g,'$1<em>$2</em>');
  // horizontal rule
  h = h.replace(/^---+$/gm,'<hr>');
  // bullets
  h = h.replace(/^[-•]\s+(.+)$/gm,'<li>$1</li>');
  h = h.replace(/(<li>.*?<\/li>\n?)+/gs,m=>'<ul>'+m+'</ul>');
  // inline citations in brackets
  h = h.replace(/\[([A-Z][A-Z0-9 \/.+-]+?(?:\s?\d{4})?)\]/g,'<span class="cite">$1</span>');
  // paragraphs — split blank lines
  h = h.split(/\n\n+/).map(block=>{
    if(/^<(h1|h2|h3|ul|hr|p)/.test(block.trim()))return block;
    return '<p>'+block.replace(/\n/g,'<br>')+'</p>';
  }).join('\n');
  return h;
}

/* ============ SSE STREAMING PARSER ============ */
async function streamClaudeAPI(payload, onToken, onDone, onError){
  try {
    const resp = await fetch('ai.php', {
      method:'POST',
      headers:{'Content-Type':'application/json'},
      body: JSON.stringify({...payload, stream:true})
    });
    if(!resp.ok){
      const t = await resp.text();
      let err = t; try{const j=JSON.parse(t); err=j.error||t;}catch(e){}
      onError && onError(err);
      return;
    }
    const reader = resp.body.getReader();
    const decoder = new TextDecoder();
    let buf = '';
    while(true){
      const {value, done} = await reader.read();
      if(done) break;
      buf += decoder.decode(value, {stream:true});
      // Split SSE events by \n\n
      const parts = buf.split(/\n\n/);
      buf = parts.pop() || '';
      for(const part of parts){
        const lines = part.split(/\n/);
        let evt='message', data='';
        for(const line of lines){
          if(line.startsWith('event:')) evt = line.slice(6).trim();
          else if(line.startsWith('data:')) data += line.slice(5).trim();
        }
        if(!data) continue;
        try{
          const obj = JSON.parse(data);
          if(obj.type === 'content_block_delta' && obj.delta && obj.delta.type === 'text_delta'){
            onToken && onToken(obj.delta.text);
          } else if(obj.type === 'message_stop'){
            onDone && onDone();
          } else if(obj.error){
            onError && onError(obj.error.message || JSON.stringify(obj.error));
          }
        } catch(e){/*skip malformed*/}
      }
    }
    onDone && onDone();
  } catch(err){
    onError && onError(err.message || String(err));
  }
}

/* ============ CONSULTATION ============ */
let chatHistory = [];

function gatherPatientContext(){
  return {
    age: document.getElementById('pAge')?.value || '',
    sex: document.getElementById('pSex')?.value || '',
    weight: document.getElementById('pWeight')?.value || '',
    height: document.getElementById('pHeight')?.value || '',
    egfr: document.getElementById('pEgfr')?.value || '',
    hba1c: document.getElementById('pHba1c')?.value || '',
    bp: document.getElementById('pBP')?.value || '',
    creatinine: document.getElementById('pCreat')?.value || '',
    otherLab: document.getElementById('pLab')?.value || '',
    conds: document.getElementById('pConds')?.value || '',
    meds: document.getElementById('pMeds')?.value || '',
    allergies: document.getElementById('pAllergy')?.value || '',
    smoking: document.getElementById('pSmoke')?.value || '',
    pregnancy: document.getElementById('pPreg')?.value || '',
    investigations: document.getElementById('pInvest')?.value || '',
    notes: document.getElementById('pNotes')?.value || ''
  };
}

function updatePcSummary(){
  const w=parseFloat(document.getElementById('pWeight')?.value);
  const h=parseFloat(document.getElementById('pHeight')?.value);
  const bmiEl=document.getElementById('pBMI');
  if(bmiEl){
    if(w&&h){const bmi=(w/((h/100)**2)).toFixed(1);const col=bmi<25?'var(--ok)':bmi<30?'var(--warn)':'var(--danger)';const cat=bmi<18.5?'Underweight':bmi<25?'Normal':bmi<30?'Overweight':'Obese';bmiEl.innerHTML=`<span style="color:${col}">${bmi}</span> <span style="font-size:11px;font-weight:400;color:var(--ink2)">${cat}</span>`;}
    else bmiEl.textContent='—';
  }
  const pc=gatherPatientContext();const summary=document.getElementById('pcSummary');if(!summary)return;
  const parts=[];
  if(pc.age)parts.push(pc.age+'y');if(pc.sex)parts.push(pc.sex);if(pc.weight)parts.push(pc.weight+'kg');
  if(pc.egfr)parts.push('eGFR '+pc.egfr);if(pc.hba1c)parts.push('HbA1c '+pc.hba1c+'%');
  if(pc.conds)parts.push(pc.conds.slice(0,50)+(pc.conds.length>50?'…':''));
  summary.textContent=parts.length?parts.join(' · '):tr('Fill in the fields below — only the ones relevant to your query');
}

function clearPatient(){
  ['pAge','pWeight','pHeight','pEgfr','pHba1c','pBP','pCreat','pLab','pAllergy','pInvest','pNotes'].forEach(id=>{const el=document.getElementById(id);if(el)el.value='';});
  ['pSex','pSmoke','pPreg'].forEach(id=>{const el=document.getElementById(id);if(el)el.value='';});
  ['pConds','pMeds'].forEach(id=>{const el=document.getElementById(id);if(el)el.value='';});
  const bmi=document.getElementById('pBMI');if(bmi)bmi.textContent='—';
  updatePcSummary();
}

function togglePcExtra(){
  const extra=document.getElementById('pcExtra');const lbl=document.getElementById('pcMoreLabel');
  if(!extra)return;const isHidden=extra.style.display==='none';
  extra.style.display=isHidden?'block':'none';
  if(lbl)lbl.textContent=isHidden?tr('− Hide extra fields'):tr('+ Show more fields (allergies, smoking, investigations…)');
}

function consultQuick(type){
  const lm={en:'English',ro:'Romanian',de:'German',fr:'French',it:'Italian',es:'Spanish'};
  const lang=lm[curLang]||'Romanian';
  const queries={
    differential:{
      en:'Based on this patient profile, what are the top differential diagnoses? Rank by probability and list red flags.',
      ro:'Pe baza acestui profil de pacient, care sunt diagnosticele diferențiale principale? Ordonează după probabilitate și listează semnele de alarmă.',
      de:'Was sind die wichtigsten Differentialdiagnosen für dieses Patientenprofil? Ordnen Sie nach Wahrscheinlichkeit und listen Sie Warnsignale auf.',
      fr:'Quels sont les principaux diagnostics différentiels pour ce profil patient? Classez par probabilité et listez les signes d\'alarme.',
      it:'Quali sono le principali diagnosi differenziali per questo profilo paziente? Ordinate per probabilità e elencate i segnali d\'allarme.',
      es:'¿Cuáles son los principales diagnósticos diferenciales para este perfil de paciente? Ordénalos por probabilidad y lista las señales de alarma.'
    },
    interactions:{
      en:'Check for clinically significant drug interactions in this patient medication list. Flag any contraindications or dose adjustments needed.',
      ro:'Verifică interacțiunile medicamentoase semnificative clinic în lista de medicamente a acestui pacient. Semnalează contraindicații sau ajustări de doză necesare.',
      de:'Überprüfen Sie die klinisch signifikanten Arzneimittelwechselwirkungen in dieser Medikamentenliste. Markieren Sie Kontraindikationen oder erforderliche Dosisanpassungen.',
      fr:'Vérifiez les interactions médicamenteuses cliniquement significatives dans cette liste. Signalez les contre-indications ou ajustements de doses nécessaires.',
      it:'Controlla le interazioni farmacologiche clinicamente significative in questa lista. Segnala controindicazioni o aggiustamenti di dose necessari.',
      es:'Comprueba las interacciones farmacológicas clínicamente significativas en esta lista. Señala contraindicaciones o ajustes de dosis necesarios.'
    },
    guidelines:{
      en:'What are the current guidelines most relevant to managing this patient\'s conditions? Summarize key recommendations.',
      ro:'Care sunt ghidurile actuale cele mai relevante pentru managementul afecțiunilor acestui pacient? Rezumă recomandările cheie.',
      de:'Welche aktuellen Leitlinien sind für die Behandlung der Erkrankungen dieses Patienten am relevantesten? Fassen Sie die wichtigsten Empfehlungen zusammen.',
      fr:'Quelles sont les directives actuelles les plus pertinentes pour la prise en charge de ce patient? Résumez les recommandations clés.',
      it:'Quali sono le linee guida attuali più rilevanti per la gestione di questo paziente? Riassumi le raccomandazioni chiave.',
      es:'¿Cuáles son las guías actuales más relevantes para el manejo de este paciente? Resume las recomendaciones clave.'
    },
    dosing:{
      en:'Review current medications for dose appropriateness given age, weight, eGFR and comorbidities. Suggest any adjustments.',
      ro:'Revizuiește medicamentele actuale pentru adecvarea dozelor față de vârstă, greutate, eGFR și comorbidități. Sugerează ajustări dacă este necesar.',
      de:'Überprüfen Sie die aktuellen Medikamente auf Dosierungsangemessenheit bei Alter, Gewicht, eGFR und Komorbiditäten. Schlagen Sie ggf. Anpassungen vor.',
      fr:'Examinez les médicaments actuels pour l\'adéquation des doses selon l\'âge, le poids, la clairance et les comorbidités. Proposez des ajustements si nécessaire.',
      it:'Rivedi i farmaci attuali per l\'appropriatezza delle dosi in base a età, peso, eGFR e comorbilità. Suggerisci eventuali aggiustamenti.',
      es:'Revisa los medicamentos actuales para la adecuación de dosis según edad, peso, eGFR y comorbilidades. Sugiere ajustes si es necesario.'
    },
    risk:{
      en:'Calculate and interpret the cardiovascular risk for this patient. Which risk scores apply? What interventions are indicated?',
      ro:'Calculează și interpretează riscul cardiovascular al acestui pacient. Ce scoruri de risc se aplică? Ce intervenții sunt indicate?',
      de:'Berechnen und interpretieren Sie das kardiovaskuläre Risiko dieses Patienten. Welche Risikoscores gelten? Welche Interventionen sind indiziert?',
      fr:'Calculez et interprétez le risque cardiovasculaire de ce patient. Quels scores de risque s\'appliquent? Quelles interventions sont indiquées?',
      it:'Calcola e interpreta il rischio cardiovascolare di questo paziente. Quali score di rischio si applicano? Quali interventi sono indicati?',
      es:'Calcula e interpreta el riesgo cardiovascular de este paciente. ¿Qué escalas de riesgo aplican? ¿Qué intervenciones están indicadas?'
    }
  };
  const q=(queries[type]||queries.differential)[curLang]||(queries[type]||queries.differential)['en'];
  const input=document.getElementById('chatInput');
  if(input){input.value=q;input.focus();}
}

function clearConsult(){
  chatHistory=[];
  const body=document.getElementById('chatBody');
  if(body)body.innerHTML=`<div class="consult-empty"><div class="ce-icon">🩺</div><h4>${tr('Ready when you are.')}</h4><p>${tr('Fill in the patient profile above — only what relevant — then ask your clinical question.')}</p></div>`;
}

function heroAsk(){
  const q=document.getElementById('heroSearch')?.value.trim();
  if(!q){document.getElementById('heroSearch')?.focus();return;}
  // Requirement: from Home → go directly to Clinical Guidelines and answer there
  goPage('guides');
  setTimeout(()=>{
    const inp=document.getElementById('guidesSearchInput');
    if(inp){inp.value=q; searchGuideline(); }
  },120);
}
function heroAskSuggestion(i){
  const sugs=['First-line treatment for T2DM with high cardiovascular risk?','Check interactions: warfarin + aspirin + omeprazole','ESC 2024 hypertension — key recommendations summary'];
  const hs=document.getElementById('heroSearch');if(hs)hs.value=sugs[i];heroAsk();
}

/* ============ GUIDELINES ============ */
let G_lastQuery = '';
let G_followUpHistory = [];

function askGuideline(topic){
  goPage('guides');
  setTimeout(()=>{ quickGuide(topic); }, 150);
}

function quickGuide(query){
  G_lastQuery = query;
  G_followUpHistory = [];
  const panel = document.getElementById('guidesAnswerPanel');
  const body = document.getElementById('gapBody');
  const title = document.getElementById('gapTitle');
  const subtitle = document.getElementById('gapSubtitle');
  const sources = document.getElementById('gapSources');
  if(!panel) return;
  panel.style.display = 'block';
  title.textContent = tr('AI Synthesis');
  subtitle.textContent = query.length > 80 ? query.slice(0,80)+'…' : query;
  sources.innerHTML = '';
  body.innerHTML = '<div class="typing-dots" style="justify-content:center;padding:30px"><span></span><span></span><span></span></div>';
  panel.scrollIntoView({behavior:'smooth', block:'start'});

  const langMap = {en:'English',ro:'Romanian',de:'German',fr:'French',it:'Italian',es:'Spanish'};
  const langName = langMap[curLang] || 'English';

  const systemPrompt = `You are MedicinEvidence Guidelines AI — a world-class clinical synthesizer. You have comprehensive knowledge of all major international and national clinical guidelines including ESC, ACC/AHA, EASD, ADA, ESMO, GOLD, GINA, WHO, ERS, IDSA, ESCMID, and Romanian national protocols (CNAS, Ministerul Sănătății).

Your responses must be:
- In ${langName}
- Structured with clear markdown headers (## for sections)
- Evidence-based with inline citations like [ESC 2024, Section 6.2], [NEJM 2023], [CNAS Protocol 2024]
- Comprehensive yet clinically actionable
- Formatted for a verified physician or pharmacist
- Highlighting any KEY RECOMMENDATIONS or GRADE A evidence prominently with **bold**
- Including a "## Key practical points" section at the end with 4-6 bullet points

You synthesize across multiple guidelines when relevant (e.g., combining ESC + CNAS Romanian protocols).`;

  const userMsg = `Synthesize the most current and complete evidence-based guidance on: ${query}

Structure your response with:
1. ## Overview (2-3 sentences summary of the guideline/topic)
2. ## Key recommendations (grade A/B evidence, specific targets and thresholds)  
3. ## Treatment algorithm (step-by-step if applicable)
4. ## Special populations (if relevant — elderly, CKD, pregnancy, etc.)
5. ## Romanian context (any specific CNAS protocols, compensated medications, or national adaptations relevant to Romanian practice)
6. ## Key practical points (4-6 high-yield bullet points)
7. ## Sources (list all guidelines cited)

Be comprehensive, specific, and cite every major recommendation.`;

  let fullText = '';
  streamClaudeAPI(
    {mode:'chat', lang:curLang, system: systemPrompt, messages:[{role:'user', content: userMsg}]},
    (token)=>{
      if(fullText==='') body.innerHTML='';
      fullText += token;
      body.innerHTML = md2html(fullText);
      body.scrollTop = body.scrollHeight;
    },
    ()=>{
      if(fullText) G_followUpHistory = [{role:'user',content:userMsg},{role:'assistant',content:fullText}];
      // Extract and display sources
      const srcMatch = fullText.match(/\[(ESC|ACC|AHA|EASD|ADA|ESMO|GOLD|GINA|WHO|ERS|CNAS|Cochrane|IDSA|ESCMID|NEJM|Lancet)[^\]]{0,30}\]/gi);
      if(srcMatch){
        const uniq = [...new Set(srcMatch.slice(0,8))];
        sources.innerHTML = uniq.map(s=>`<span class="gap-src-chip">${escapeHtml(s.replace(/[\[\]]/g,''))}</span>`).join('');
      }
    },
    (err)=>{ body.innerHTML = `<div style="color:#B91C1C;padding:20px"><strong>Error:</strong> ${escapeHtml(err)}</div>`; }
  );
}

function searchGuideline(){
  const q = document.getElementById('guidesSearchInput').value.trim();
  if(!q) return;
  quickGuide(q);
}

function closeGuideAnswer(){
  const panel = document.getElementById('guidesAnswerPanel');
  if(panel){ panel.style.display='none'; }
  G_lastQuery = '';
  G_followUpHistory = [];
}

function askMoreAboutGuide(){
  if(!G_lastQuery) return;
  showGuideModal();
}

function showGuideModal(){
  const existing = document.getElementById('guideFollowModal');
  if(existing) existing.remove();
  const modal = document.createElement('div');
  modal.id = 'guideFollowModal';
  modal.innerHTML = `
    <div class="gfm-backdrop" onclick="closeGuideModal()"></div>
    <div class="gfm-box">
      <div class="gfm-header">
        <div class="gfm-icon">💬</div>
        <div>
          <h3 class="gfm-title" data-t>Ask a follow-up</h3>
          <p class="gfm-sub">${escapeHtml(G_lastQuery.length>70?G_lastQuery.slice(0,70)+'…':G_lastQuery)}</p>
        </div>
        <button class="gfm-close" onclick="closeGuideModal()">✕</button>
      </div>
      <div class="gfm-body">
        <textarea id="gfmInput" class="gfm-textarea" placeholder="${tr('Ask a follow-up question about this guideline:')}" rows="3" autofocus></textarea>
        <div class="gfm-suggestions">
          <button class="gfm-sug" onclick="setGuideModalQ(this)">What are the contraindications?</button>
          <button class="gfm-sug" onclick="setGuideModalQ(this)">How does this apply in renal failure?</button>
          <button class="gfm-sug" onclick="setGuideModalQ(this)">What are the alternatives?</button>
        </div>
      </div>
      <div class="gfm-footer">
        <button class="gfm-cancel" onclick="closeGuideModal()" data-t>Cancel</button>
        <button class="gfm-submit" onclick="submitGuideModal()">
          <span>✉️</span> <span data-t>Ask</span>
        </button>
      </div>
    </div>`;
  document.body.appendChild(modal);
  requestAnimationFrame(()=>{ modal.classList.add('on'); document.getElementById('gfmInput')?.focus(); });
  document.getElementById('gfmInput')?.addEventListener('keydown', e=>{
    if(e.key==='Enter'&&(e.metaKey||e.ctrlKey)) submitGuideModal();
  });
}

function setGuideModalQ(btn){ const ta=document.getElementById('gfmInput'); if(ta){ta.value=btn.textContent; ta.focus();} }

function closeGuideModal(){
  const m=document.getElementById('guideFollowModal');
  if(m){ m.classList.remove('on'); setTimeout(()=>m.remove(),300); }
}

function submitGuideModal(){
  const ta=document.getElementById('gfmInput');
  const q=ta?.value.trim();
  if(!q) return;
  closeGuideModal();

  const panel = document.getElementById('guidesAnswerPanel');
  const body = document.getElementById('gapBody');
  if(!panel || !body) return;
  panel.style.display = 'block';

  body.innerHTML += `<hr><div class="guide-followup-q"><span class="gfq-ico">💬</span><div><strong>${tr('Follow-up question:')}</strong><br>${escapeHtml(q)}</div></div>`;
  body.scrollTop = body.scrollHeight;

  const bubbleId = 'gfb_' + Date.now();
  body.insertAdjacentHTML('beforeend', `<div id="${bubbleId}"><div class="typing-dots" style="padding:10px"><span></span><span></span><span></span></div></div>`);
  body.scrollTop = body.scrollHeight;

  G_followUpHistory.push({role:'user', content: q});
  let fullText = '';
  const bubble = document.getElementById(bubbleId);

  streamClaudeAPI(
    {mode:'chat', lang:curLang, system: `You are MedicinEvidence Guidelines AI. Respond in ${['en','ro','de','fr','it','es'].includes(curLang)?{en:'English',ro:'Romanian',de:'German',fr:'French',it:'Italian',es:'Spanish'}[curLang]:'English'}. Be concise and evidence-based with inline citations.`, messages: G_followUpHistory},
    (token)=>{
      if(fullText==='') bubble.innerHTML='';
      fullText += token;
      bubble.innerHTML = md2html(fullText);
      body.scrollTop = body.scrollHeight;
    },
    ()=>{ if(fullText) G_followUpHistory.push({role:'assistant', content:fullText}); },
    (err)=>{ bubble.innerHTML = `<div style="color:#B91C1C">${escapeHtml(err)}</div>`; }
  );
}

function filterGuides(cat){
  document.querySelectorAll('[id^="gf"]').forEach(a=>a.classList.remove('act'));
  const map = {
    all:'gfAll', cardiology:'gfCardio', diabetes:'gfDiab', oncology:'gfOnco',
    pulmonology:'gfPulm', neurology:'gfNeuro', infectious:'gfInfect', romania:'gfRO',
    psychiatry:'gfPsy', nephrology:'gfNeph', rheumatology:'gfRheum',
    gastro:'gfGastro', ophthalmology:'gfOphth', ent:'gfENT',
    dermatology:'gfDerm', surgery:'gfSurg'
  };
  if(map[cat]) document.getElementById(map[cat])?.classList.add('act');

  // Close answer panel when switching
  const panel = document.getElementById('guidesAnswerPanel');
  if(panel && cat !== 'all') panel.style.display = 'none';

  let visible = 0;

  if(cat === 'all'){
    document.querySelectorAll('.guides-cat-header, .guides-grid-inner').forEach(el=>{ el.style.display=''; });
    visible = document.querySelectorAll('.gcard').length;
  } else {
    // Hide all headers and grid-inners
    document.querySelectorAll('.guides-cat-header').forEach(h=>{
      const show = h.dataset.cat === cat;
      h.style.display = show ? '' : 'none';
      // Show/hide the NEXT sibling (guides-grid-inner)
      let sib = h.nextElementSibling;
      // Skip comments
      while(sib && sib.nodeType === 8) sib = sib.nextSibling;
      if(sib && sib.classList && sib.classList.contains('guides-grid-inner')){
        sib.style.display = show ? '' : 'none';
        if(show) visible += sib.querySelectorAll('.gcard').length;
      }
    });
    // Scroll to grid top smoothly
    setTimeout(()=>{
      const grid = document.getElementById('guidesGrid');
      if(grid) grid.scrollIntoView({behavior:'smooth', block:'start'});
    }, 80);
  }

  const badge = document.getElementById('guidesCountBadge');
  if(badge) badge.textContent = visible || document.querySelectorAll('.gcard').length;
}
function sendChat(){
  const input=document.getElementById('chatInput');
  const q=input?.value.trim();if(!q)return;
  const btn=document.getElementById('chatSendBtn');if(btn)btn.disabled=true;
  const body=document.getElementById('chatBody');if(!body)return;
  if(body.querySelector('.consult-empty')||body.querySelector('.chat-empty'))body.innerHTML='';
  body.insertAdjacentHTML('beforeend',`<div class="consult-msg me"><div class="avatar">DR</div><div class="consult-bubble">${escapeHtml(q)}</div></div>`);
  if(input)input.value='';body.scrollTop=body.scrollHeight;
  const msgId='ai_'+Date.now()+'_'+Math.random().toString(36).slice(2,7);
  body.insertAdjacentHTML('beforeend',`<div class="consult-msg ai" id="msg_${msgId}"><div class="avatar">ME</div><div class="consult-bubble" id="bubble_${msgId}"><div class="typing-dots"><span></span><span></span><span></span></div></div></div>`);
  body.scrollTop=body.scrollHeight;
  chatHistory.push({role:'user',content:q});
  const pc=gatherPatientContext();
  const ctxParts=[];
  if(pc.age)ctxParts.push('Age: '+pc.age);if(pc.sex)ctxParts.push('Sex: '+pc.sex);
  if(pc.weight)ctxParts.push('Weight: '+pc.weight+'kg');if(pc.height)ctxParts.push('Height: '+pc.height+'cm');
  if(pc.egfr)ctxParts.push('eGFR: '+pc.egfr+' ml/min');if(pc.hba1c)ctxParts.push('HbA1c: '+pc.hba1c+'%');
  if(pc.bp)ctxParts.push('BP: '+pc.bp+' mmHg');if(pc.creatinine)ctxParts.push('Creat: '+pc.creatinine);
  if(pc.otherLab)ctxParts.push('Labs: '+pc.otherLab);if(pc.conds)ctxParts.push('Conditions: '+pc.conds);
  if(pc.meds)ctxParts.push('Medications: '+pc.meds);if(pc.allergies)ctxParts.push('Allergies: '+pc.allergies);
  if(pc.smoking)ctxParts.push('Smoking: '+pc.smoking);if(pc.pregnancy)ctxParts.push('Pregnancy: '+pc.pregnancy);
  if(pc.investigations)ctxParts.push('Investigations: '+pc.investigations);if(pc.notes)ctxParts.push('Notes: '+pc.notes);

  // Inject patient context directly into the question — 100% reliable
  let msgToSend = q;
  if(ctxParts.length > 0){
    if(chatHistory.length === 0){
      // First message: full context
      msgToSend = '=== PATIENT CONTEXT ===\n' + ctxParts.join('\n') + '\n=== CLINICAL QUESTION ===\n' + q;
    } else {
      // Follow-up: always include full context so AI never loses it
      msgToSend = '=== PATIENT CONTEXT (reminder) ===\n' + ctxParts.join('\n') + '\n=== QUESTION ===\n' + q;
    }
  }
  chatHistory.push({role:'user', content: msgToSend});

  let fullText='';
  const bubble=document.getElementById('bubble_'+msgId);
  streamClaudeAPI({mode:'chat',lang:curLang,messages:chatHistory,patient_context:ctxParts.length?{raw:ctxParts.join(' | ')}:{}},
    (token)=>{if(!bubble)return;if(fullText==='')bubble.innerHTML='';fullText+=token;bubble.innerHTML=md2html(fullText);body.scrollTop=body.scrollHeight;},
    ()=>{if(!bubble)return;if(fullText==='')bubble.innerHTML='<em style="opacity:.6">(empty)</em>';else chatHistory.push({role:'assistant',content:fullText});if(btn)btn.disabled=false;},
    (err)=>{if(bubble)bubble.innerHTML=`<div style="color:#B91C1C"><strong>Error:</strong> ${escapeHtml(err)}</div>`;if(btn)btn.disabled=false;}
  );
}

/* ============ CONSULTATION PDF SUMMARY ============ */
function formatPatientContextForPdf(pc){
  const rows = [];
  const add = (k,v)=>{ if(v!=null && String(v).trim()!=='') rows.push([k,String(v).trim()]); };
  add('Age', pc.age ? `${pc.age}` : '');
  add('Sex', pc.sex);
  add('Weight', pc.weight ? `${pc.weight} kg` : '');
  add('Height', pc.height ? `${pc.height} cm` : '');
  add('BMI', (()=>{ const w=parseFloat(pc.weight), h=parseFloat(pc.height); if(w&&h) return (w/((h/100)**2)).toFixed(1); return ''; })());
  add('eGFR', pc.egfr ? `${pc.egfr} ml/min` : '');
  add('HbA1c', pc.hba1c ? `${pc.hba1c}%` : '');
  add('BP', pc.bp);
  add('Creatinine', pc.creatinine);
  add('Labs', pc.otherLab);
  add('Conditions', pc.conds);
  add('Medications', pc.meds);
  add('Allergies', pc.allergies);
  add('Smoking', pc.smoking);
  add('Pregnancy', pc.pregnancy);
  add('Investigations', pc.investigations);
  add('Notes', pc.notes);
  return rows.filter(r=>r[1]!=='' );
}

function chatHistoryToPlainText(){
  // Use chatHistory (already maintained) and strip any injected context wrapper.
  const lines = [];
  for(const m of (chatHistory||[])){
    if(!m || !m.role) continue;
    const role = m.role === 'user' ? 'Clinician' : (m.role === 'assistant' ? 'AI' : m.role);
    let content = String(m.content||'');
    // Remove context headers for readability in PDF
    content = content.replace(/=== PATIENT CONTEXT[^=]*===/g,'').replace(/=== CLINICAL QUESTION ===/g,'').replace(/=== QUESTION ===/g,'').trim();
    if(!content) continue;
    lines.push(`${role}: ${content}`);
    lines.push(''); // spacing
  }
  return lines.join('\n');
}

function downloadConsultationPdf(){
  const jspdf = window.jspdf && window.jspdf.jsPDF ? window.jspdf : null;
  if(!jspdf){
    alert('PDF library not loaded yet. Please refresh and try again.');
    return;
  }

  const doc = new jspdf.jsPDF({ unit:'pt', format:'a4' });
  const margin = 44;
  const pageW = doc.internal.pageSize.getWidth();
  const maxW = pageW - margin*2;
  let y = margin;

  const title = 'MedicinEvidence — Consultation Summary';
  doc.setFont('helvetica','bold'); doc.setFontSize(14);
  doc.text(title, margin, y); y += 18;

  doc.setFont('helvetica','normal'); doc.setFontSize(10);
  doc.text(new Date().toLocaleString(), margin, y); y += 16;

  // Patient context
  const pc = gatherPatientContext();
  const rows = formatPatientContextForPdf(pc);
  doc.setFont('helvetica','bold'); doc.setFontSize(12);
  doc.text('Patient summary', margin, y); y += 14;
  doc.setFont('helvetica','normal'); doc.setFontSize(10);
  if(rows.length === 0){
    doc.text('—', margin, y); y += 12;
  } else {
    for(const [k,v] of rows){
      const line = `${k}: ${v}`;
      const wrapped = doc.splitTextToSize(line, maxW);
      doc.text(wrapped, margin, y);
      y += wrapped.length * 12;
      if(y > 760){ doc.addPage(); y = margin; }
    }
  }

  y += 6;
  doc.setDrawColor(200, 180, 150);
  doc.line(margin, y, pageW - margin, y);
  y += 16;

  // Conversation
  doc.setFont('helvetica','bold'); doc.setFontSize(12);
  doc.text('Conversation', margin, y); y += 14;
  doc.setFont('helvetica','normal'); doc.setFontSize(10);
  const convo = chatHistoryToPlainText() || '—';
  const wrapped = doc.splitTextToSize(convo, maxW);
  for(const wline of wrapped){
    doc.text(wline, margin, y);
    y += 12;
    if(y > 780){ doc.addPage(); y = margin; }
  }

  doc.save(`medicinevidence-consultation-${Date.now()}.pdf`);
}

/* ============ DRUG SEARCH (streaming) ============ */
function searchDrug(){
  const q = document.getElementById('drugQuery').value.trim();
  if(!q) return;
  const btn = document.getElementById('drugBtn');
  btn.disabled = true;
  const out = document.getElementById('drugResults');
  out.innerHTML = `<div class="drug-result" id="drugBox"><h3 style="color:var(--ink2)">🔎 ${escapeHtml(q)}</h3><div class="typing-dots"><span></span><span></span><span></span></div></div>`;
  const box = document.getElementById('drugBox');
  let fullText = '';
  streamClaudeAPI({mode:'drug', lang:curLang, drug:q},
    (token)=>{if(fullText==='')box.innerHTML=''; fullText+=token; box.innerHTML = md2html(fullText);},
    ()=>{btn.disabled=false;},
    (err)=>{box.innerHTML = `<div style="color:#B91C1C"><strong>Error:</strong> ${escapeHtml(err)}</div>`; btn.disabled=false;}
  );
}

/* ============ TUTOR — FACULTY / YEAR / SUBJECT / COURSE / QUIZ / PROGRESS ============ */

/* ============ TUTOR — Praxis AI (world-class professor mode) ============ */

// Curriculum data
const CURRICULUM = {
  medicine: {
    name: 'Medicine', years: 6,
    subjects: {
      1: [['🦴','Anatomie'],['🧪','Biochimie'],['🧬','Biologie celulară și moleculară'],['⚛️','Biofizică'],['📐','Biostatistică'],['🏥','Introducere în medicină'],['🇬🇧','Limba engleză medicală'],['🧠','Psihologie medicală'],['🥗','Igienă și nutriție'],['⚖️','Bioetică']],
      2: [['🦴','Anatomie'],['🫁','Fiziologie'],['🧪','Biochimie clinică'],['🔬','Histologie'],['🧬','Genetică medicală'],['💊','Farmacologie generală'],['🦠','Microbiologie'],['🧫','Imunologie'],['🩻','Radiologie generală'],['🧠','Neuroștiințe']],
      3: [['🔬','Anatomie patologică'],['💊','Farmacologie clinică'],['🦠','Microbiologie clinică'],['🧫','Imunopatologie'],['🧬','Fiziopatologie'],['🩺','Semiologie medicală'],['✂️','Semiologie chirurgicală'],['🩸','Hematologie generală'],['🩻','Imagistică medicală'],['🧪','Medicina de laborator']],
      4: [['🫀','Cardiologie'],['🫁','Pneumologie'],['🫃','Gastroenterologie'],['🫘','Nefrologie'],['🧬','Endocrinologie'],['🩸','Hematologie clinică'],['🦠','Boli infecțioase'],['🎗️','Oncologie'],['🧠','Neurologie'],['🧩','Psihiatrie'],['👁️','Oftalmologie'],['👂','ORL']],
      5: [['✂️','Chirurgie generală'],['🫀','Chirurgie cardiovasculară'],['🦴','Ortopedie și traumatologie'],['👶','Pediatrie'],['🤰','Obstetrică-ginecologie'],['🚑','Medicină de urgență'],['💉','Anestezie și terapie intensivă'],['🧴','Dermatologie'],['💊','Urologie'],['👨‍⚕️','Medicină de familie']],
      6: [['🏥','Medicină internă'],['✂️','Chirurgie clinică'],['👶','Pediatrie clinică'],['🤰','OBGYN clinică'],['🚑','Urgențe medico-chirurgicale'],['⚖️','Medicină legală'],['💼','Sănătate publică și management'],['💊','Farmacologie clinică avansată'],['🎓','Pregătire Rezidențiat']]
    }
  },
  pharmacy: {
    name: 'Pharmacy', years: 5,
    subjects: {
      1: [['⚗️','Chimie generală și anorganică'],['🧪','Chimie organică'],['🌿','Botanică farmaceutică'],['⚛️','Biofizică'],['🧬','Biologie celulară'],['🦴','Anatomie'],['📐','Matematică și biostatistică'],['🇬🇧','Limba engleză farmaceutică']],
      2: [['🫁','Fiziologie'],['🧪','Biochimie'],['🔬','Histologie'],['⚗️','Chimie analitică'],['💊','Chimie farmaceutică'],['🌱','Farmacognozie I'],['🦠','Microbiologie'],['🧫','Imunologie']],
      3: [['🌱','Farmacognozie II'],['💊','Tehnologie farmaceutică I'],['💊','Farmacologie I'],['🔬','Analiza medicamentelor'],['🧬','Toxicologie'],['💉','Farmacoterapie I'],['🏭','Industrie farmaceutică'],['🩸','Hematologie și patologie']],
      4: [['💊','Farmacologie II'],['💊','Farmacoterapie II'],['💊','Tehnologie farmaceutică II'],['🏥','Farmacie clinică'],['🔬','Biofarmacie și farmacocinetică'],['🧪','Chimie toxicologică'],['📊','Management farmaceutic'],['⚖️','Legislație și etică farmaceutică']],
      5: [['🏥','Farmacie clinică avansată'],['💊','Farmacoterapie III'],['💊','Farmacie comunitară'],['🏭','Industrie farmaceutică avansată'],['🧬','Biotehnologie farmaceutică'],['📊','Farmacoeconomie'],['🩺','Asistența farmaceutică'],['🎓','Pregătire Rezidențiat farmacie']]
    }
  },
  dentistry: {
    name: 'Dentistry', years: 6,
    subjects: {
      1: [['🦴','Anatomie'],['🧪','Biochimie'],['🧬','Biologie celulară'],['⚛️','Biofizică'],['📐','Biostatistică'],['🦷','Morfologia dinților'],['🇬🇧','Limba engleză stomatologică'],['⚗️','Chimie dentară']],
      2: [['🦴','Anatomie cap-gât'],['🫁','Fiziologie'],['🔬','Histologie orală'],['🧪','Biochimie orală'],['🦠','Microbiologie'],['🧫','Imunologie'],['🧪','Materiale dentare I'],['🦷','Ocluzologie']],
      3: [['🔬','Anatomie patologică'],['🦷','Patologie orală'],['💊','Farmacologie dentară'],['🩺','Semiologie medicală'],['🩻','Imagistică dento-maxilară'],['🦷','Odontologie I'],['🦷','Parodontologie I'],['🧪','Materiale dentare II']],
      4: [['🦷','Odontologie II'],['🦷','Parodontologie II'],['🦷','Endodonție'],['🦷','Protetică dentară I'],['🦷','Ortodonție I'],['🦷','Pedodonție'],['🦷','Chirurgie orală I'],['💉','Anestezie în stomatologie']],
      5: [['🦷','Protetică dentară II'],['🦷','Ortodonție II'],['🦷','Chirurgie orală II'],['🦷','Chirurgie maxilo-facială'],['🦷','Implantologie'],['🦷','Estetică dentară'],['🩻','Radiologie CBCT'],['📊','Management cabinet stomatologic']],
      6: [['🦷','Stomatologie clinică integrată'],['🦷','Chirurgie maxilo-facială avansată'],['🦷','Ortodonție clinică'],['🦷','Implantologie avansată'],['⚖️','Legislație și etică stomatologică'],['🚑','Urgențe în stomatologie'],['🎓','Pregătire Rezidențiat stomatologie']]
    }
  }
};

// Tutor state
let T_state = {
  faculty: 'medicine', year: 1, subject: 'Anatomie', subjectIcon: '🦴',
  courseText: '', courseFileName: '',
  mode: 'chat',
  history: [],      // chat history
  socHistory: [],   // socratic history
  quizCount: 5, quizDiff: 'easy',
  currentQuiz: null, quizAnswers: [], quizFlags: [],
  progress: {}
};

try { const s=localStorage.getItem('me_tutor2'); if(s) T_state.progress=JSON.parse(s).progress||{}; } catch(e){}
function saveTutorProgress(){ try{localStorage.setItem('me_tutor2',JSON.stringify({progress:T_state.progress}));}catch(e){} }

// ── Faculty / Year / Subject ─────────────────────────────────
function pickFaculty(btn){
  document.querySelectorAll('.faculty-btn[data-fac]').forEach(b=>b.classList.remove('act'));
  btn.classList.add('act');
  T_state.faculty = btn.dataset.fac;
  T_state.year = 1;
  renderYears(); renderSubjects(); updateSelectionSummary();
}

function renderYears(){
  const fac=CURRICULUM[T_state.faculty]; const wrap=document.getElementById('yearGrid');
  if(!wrap) return; wrap.innerHTML='';
  const labels=['','I','II','III','IV','V','VI'];
  for(let y=1;y<=fac.years;y++){
    const btn=document.createElement('button');
    btn.className='year-btn'+(y===T_state.year?' act':'');
    btn.dataset.year=y;
    btn.innerHTML=`<span class="yn">${y}</span><span class="yl">${tr('Year '+labels[y])}</span>`;
    btn.onclick=()=>{
      document.querySelectorAll('.year-btn').forEach(b=>b.classList.remove('act'));
      btn.classList.add('act'); T_state.year=y;
      renderSubjects(); updateSelectionSummary();
    };
    wrap.appendChild(btn);
  }
}

function renderSubjects(){
  const list=(CURRICULUM[T_state.faculty].subjects[T_state.year])||[];
  const wrap=document.getElementById('subjectGridBig'); if(!wrap) return;
  wrap.innerHTML='';
  if(list.length){ T_state.subject=list[0][1]; T_state.subjectIcon=list[0][0]; }
  list.forEach((s,i)=>{
    const btn=document.createElement('button');
    btn.className='subject-btn-big'+(i===0?' act':'');
    btn.dataset.sub=s[1]; btn.dataset.ico=s[0];
    btn.innerHTML=`<span class="si">${s[0]}</span><span>${tr(s[1])}</span>`;
    btn.onclick=()=>{
      wrap.querySelectorAll('.subject-btn-big').forEach(b=>b.classList.remove('act'));
      btn.classList.add('act'); T_state.subject=s[1]; T_state.subjectIcon=s[0];
      T_state.history=[]; T_state.socHistory=[];
      resetTutorChat(); updateSelectionSummary();
    };
    wrap.appendChild(btn);
  });
  resetTutorChat(); updateSelectionSummary();
}

function updateSelectionSummary(){
  const s=document.getElementById('selSummary'); if(!s) return;
  s.style.display='block';
  const fn={medicine:'Medicine',pharmacy:'Pharmacy',dentistry:'Dentistry'};
  document.getElementById('selFac').textContent=tr(fn[T_state.faculty]);
  const labels=['','I','II','III','IV','V','VI'];
  document.getElementById('selYear').textContent=tr('Year '+labels[T_state.year]);
  document.getElementById('selSubject').textContent=T_state.subjectIcon+' '+tr(T_state.subject);
  const ts=document.getElementById('tutorSubject'); if(ts) ts.textContent=tr(T_state.subject);
}

function resetTutorChat(){
  T_state.history=[]; T_state.socHistory=[];
  const body=document.getElementById('tutorBody');
  if(body) body.innerHTML=`<div class="chat-empty"><div class="ico">🧠</div><h4>${tr('Ready to learn.')}</h4><p>${tr('Pick your subject above, optionally upload your course, then ask anything — mechanisms, definitions, clinical reasoning, landmark trials.')}</p></div>`;
}

// ── Mode switching ────────────────────────────────────────────
function switchTutorMode(mode){
  T_state.mode=mode;
  document.querySelectorAll('.mode-tabs#tutorModeTabs .mode-tab').forEach(b=>b.classList.toggle('act',b.dataset.tmode===mode));
  ['chat','socratic','quiz','progress','map'].forEach(m=>{
    const el=document.getElementById('tutorMode'+m.charAt(0).toUpperCase()+m.slice(1));
    if(el) el.style.display=m===mode?'block':'none';
  });
  if(mode==='progress') renderTutorProgress();
  if(mode==='map') renderTopicMap();
}

// ── Course ───────────────────────────────────────────────────
function switchCourseTab(btn){
  document.querySelectorAll('.course-tab').forEach(b=>b.classList.remove('act'));
  btn.classList.add('act');
  const which=btn.dataset.ctab;
  document.getElementById('ctPaste').style.display=which==='paste'?'block':'none';
  document.getElementById('ctPdf').style.display=which==='pdf'?'block':'none';
}
function updateCourseStats(){
  const ta=document.getElementById('courseText'); if(!ta) return;
  T_state.courseText=ta.value.trim();
  const stats=document.getElementById('courseStats'); if(!stats) return;
  if(T_state.courseText){
    const words=T_state.courseText.split(/\s+/).length;
    stats.className='course-stats loaded';
    stats.innerHTML=`${tr('Course loaded:')} ${words.toLocaleString()} ${tr('words')}${T_state.courseFileName?' · <em>'+escapeHtml(T_state.courseFileName)+'</em>':''}`;
  } else {
    stats.className='course-stats'; stats.innerHTML=`<span>${tr('No course loaded yet.')}</span>`;
    T_state.courseFileName='';
  }
}
function clearCourse(){
  document.getElementById('courseText').value='';
  T_state.courseText=''; T_state.courseFileName='';
  const st=document.getElementById('pdfStatus'); if(st){st.className='pdf-status';st.textContent='';}
  const fi=document.getElementById('coursePdfFile'); if(fi) fi.value='';
  updateCourseStats();
}
async function loadCoursePdf(file){
  if(!file) return;
  const st=document.getElementById('pdfStatus');
  st.className='pdf-status on'; st.textContent=tr('Reading PDF…');
  if(file.size>20*1024*1024){st.className='pdf-status on err';st.textContent=tr('PDF too large (max 20MB).');return;}
  if(!window.pdfjsLib){st.className='pdf-status on err';st.textContent=tr('PDF reader not loaded. Please refresh the page.');return;}
  try {
    const buf=await file.arrayBuffer();
    const pdf=await pdfjsLib.getDocument({data:buf}).promise;
    let fullText=''; const total=pdf.numPages;
    for(let p=1;p<=total;p++){
      st.textContent=tr('Reading page')+' '+p+'/'+total+'…';
      const page=await pdf.getPage(p);
      const content=await page.getTextContent();
      fullText+=content.items.map(it=>it.str).join(' ')+'\n\n';
    }
    fullText=fullText.trim();
    if(fullText.length<100){st.className='pdf-status on warn';st.textContent=tr('Very little text extracted. This PDF may be a scanned image (OCR not supported).');return;}
    T_state.courseFileName=file.name;
    document.querySelectorAll('.course-tab').forEach(b=>b.classList.remove('act'));
    document.querySelector('.course-tab[data-ctab="paste"]').classList.add('act');
    document.getElementById('ctPaste').style.display='block';
    document.getElementById('ctPdf').style.display='none';
    document.getElementById('courseText').value=fullText;
    updateCourseStats();
    st.className='pdf-status on ok';
    st.textContent=tr('PDF loaded successfully:')+' '+total+' '+tr('pages')+' · '+fullText.split(/\s+/).length.toLocaleString()+' '+tr('words')+'.';
  } catch(e){st.className='pdf-status on err';st.textContent=tr('Failed to read PDF:')+' '+(e.message||e);}
}
(function(){
  const drop=document.getElementById('pdfDrop'); if(!drop) return;
  ['dragenter','dragover'].forEach(ev=>drop.addEventListener(ev,e=>{e.preventDefault();drop.classList.add('drag');}));
  ['dragleave','drop'].forEach(ev=>drop.addEventListener(ev,e=>{e.preventDefault();drop.classList.remove('drag');}));
  drop.addEventListener('drop',e=>{const f=e.dataTransfer.files[0];if(f&&f.type==='application/pdf')loadCoursePdf(f);});
})();

// ── World-class professor explanation ────────────────────────
function worldClassExplanation(question, optA, optB, optC, optD, userAns, correctAns, topic, targetBox, targetBtn){
  if(!targetBox||!targetBtn) return;
  targetBtn.disabled=true; targetBtn.textContent=tr('Loading…');
  targetBox.classList.add('on');
  targetBox.innerHTML=`<strong class="teach-label">🎓 ${tr("Professor's lecture")}</strong><div class="typing-dots"><span></span><span></span><span></span></div>`;
  const lm={en:'English',ro:'Romanian',de:'German',fr:'French',it:'Italian',es:'Spanish'};
  const lang=lm[curLang]||'Romanian';
  const wasWrong=userAns&&userAns!==correctAns;
  const correctText={a:optA,b:optB,c:optC,d:optD}[correctAns]||'';
  const userText=userAns?({a:optA,b:optB,c:optC,d:optD}[userAns]||''):'—';
  const prompt=`You are one of the world's most brilliant and inspiring medical educators — think of the best professor you've ever imagined: crystal-clear explanations, deep insights, memorable analogies, clinical wisdom that makes students say "now I truly understand." You are teaching a Romanian medical student on the topic: ${topic||T_state.subject} (${CURRICULUM[T_state.faculty]?.name||'Medicine'}, Year ${T_state.year}).

The student ${wasWrong?'answered this question INCORRECTLY and needs your help':'wants a deep understanding of this question'}:

QUESTION: ${question}
A. ${optA}
B. ${optB}
C. ${optC}
D. ${optD}
STUDENT'S ANSWER: ${userAns?userAns.toUpperCase()+'. '+userText:'—'}
CORRECT ANSWER: ${correctAns.toUpperCase()}. ${correctText}

Write an extraordinary, comprehensive professor's lecture in ${lang}. This should feel like a private lesson from the best professor at Harvard Medical School. Use this structure:

## 🧠 Conceptul fundamental
Explain the core medical concept this question tests. Include pathophysiology, molecular mechanisms, anatomy — whatever makes it truly understandable. Use an analogy if it helps. 4-6 sentences that build understanding from the ground up.

## ✅ De ce răspunsul corect este corect
Full scientific and clinical reasoning for ${correctAns.toUpperCase()}. Explain the mechanism step by step. Include landmark evidence: cite like [Harrison 21e, Cap.X], [ESC 2024, Sec.Y], [Robbins 10e], [Guyton & Hall], [CNAS Protocol 2024], [NEJM 2023], specific landmark trials by name. Make the student feel the "aha moment". 4-5 sentences.

## ❌ Analiza greșelilor${wasWrong?' (inclusiv a ta)':''}
For EACH wrong option (${['a','b','c','d'].filter(l=>l!==correctAns).join(', ')}), explain specifically:
- What misconception or incomplete knowledge would make someone choose this
- Why it's wrong — the specific clinical/scientific reason
${wasWrong?`- For ${userAns.toUpperCase()} (your answer): explain with extra care and empathy what cognitive trap you fell into`:''}
2-3 sentences per wrong option.

## 💡 5 Perle de aur pentru examen
Five unforgettable, high-yield pearls about this topic. Make them specific, memorable, and clinically useful — things that will stick in memory for years and help on both the exam and in clinical practice. Format as bullet points starting with a relevant emoji.

## 🔬 Contextul clinic real
Briefly explain how this knowledge applies in real clinical practice. What would a doctor actually do with this knowledge? 2-3 sentences that connect theory to bedside medicine.

## 📖 Plan de studiu personalizat
Name 2-4 specific resources with chapter numbers:
- Textbooks: "Harrison 21e, Capitolul 42: Insuficiența cardiacă, pp. 1823-1850"
- Guidelines: "ESC 2022 Heart Failure Guidelines, Section 7"
- Landmark trials if relevant

Write with warmth, intellectual excitement, and the confidence of a world-class educator. Make the student feel inspired, not just informed. Language: ${lang}. No word limit — be thorough.`;

  let full='';
  streamClaudeAPI({mode:'chat',lang:curLang,prompt},
    (token)=>{
      if(full==='')targetBox.innerHTML=`<strong class="teach-label">🎓 ${tr("Professor's lecture")}</strong>`;
      full+=token;
      targetBox.innerHTML=`<strong class="teach-label">🎓 ${tr("Professor's lecture")}</strong>`+md2html(full);
    },
    ()=>{targetBtn.style.display='none';},
    (err)=>{targetBox.innerHTML+=`<div style="color:#B91C1C">${escapeHtml(err)}</div>`;targetBtn.disabled=false;targetBtn.textContent=tr('Try again');}
  );
}

// ── Chat (normal) ────────────────────────────────────────────
function sendTutor(){
  const input=document.getElementById('tutorInput');
  const q=input.value.trim(); if(!q) return;
  const btn=document.getElementById('tutorSendBtn'); btn.disabled=true;
  const body=document.getElementById('tutorBody');
  if(body.querySelector('.chat-empty')) body.innerHTML='';
  body.insertAdjacentHTML('beforeend',`<div class="msg me"><div class="bubble">${escapeHtml(q)}</div></div>`);
  input.value=''; body.scrollTop=body.scrollHeight;
  const bubbleId='tb_'+Date.now();
  body.insertAdjacentHTML('beforeend',`<div class="msg ai"><div class="ai-avatar">ME</div><div class="bubble" id="${bubbleId}"><div class="typing-dots"><span></span><span></span><span></span></div></div></div>`);
  body.scrollTop=body.scrollHeight;

  // Augment first message with course context
  let augmented=q;
  if(T_state.history.length===0&&T_state.courseText){
    const course=T_state.courseText.slice(0,12000);
    augmented=`COURSE MATERIAL (primary reference):\n"""${course}"""\n\nSTUDENT QUESTION: ${q}`;
  }
  T_state.history.push({role:'user',content:augmented});

  const lm={en:'English',ro:'Romanian',de:'German',fr:'French',it:'Italian',es:'Spanish'};
  const systemContext=`Faculty: ${CURRICULUM[T_state.faculty]?.name}, Year ${T_state.year}, Subject: ${T_state.subject}. Respond in ${lm[curLang]||'Romanian'}.`;

  let full='';
  const bubble=document.getElementById(bubbleId);
  streamClaudeAPI(
    {mode:'tutor',lang:curLang,subject:systemContext,messages:T_state.history},
    (token)=>{if(full==='')bubble.innerHTML='';full+=token;bubble.innerHTML=md2html(full);body.scrollTop=body.scrollHeight;},
    ()=>{
      if(full){
        T_state.history.push({role:'assistant',content:full});
        // Check if we should spontaneously insert a clinical case
        if(T_state.history.length>=4&&T_state.history.length%6===0){
          setTimeout(()=>insertSpontaneousCase(body),1000);
        }
      }
      btn.disabled=false;
    },
    (err)=>{bubble.innerHTML=`<div style="color:#B91C1C">${escapeHtml(err)}</div>`;btn.disabled=false;}
  );
}

// ── Spontaneous clinical case injection ──────────────────────
function insertSpontaneousCase(body){
  const lm={en:'English',ro:'Romanian',de:'German',fr:'French',it:'Italian',es:'Spanish'};
  const lang=lm[curLang]||'Romanian';
  const casePrompt=`Generate a brief clinical case vignette (3-4 sentences) related to ${T_state.subject} in ${lang}. End with one diagnostic question. Format: present the patient scenario naturally, as if you're spontaneously testing the student mid-lesson. Keep it concise and relevant. Include: age, sex, key symptoms/signs, 1-2 relevant findings. Do not give the answer.`;
  const caseId='sc_'+Date.now();
  body.insertAdjacentHTML('beforeend',`
    <div class="msg ai spontaneous-case">
      <div class="ai-avatar" style="background:linear-gradient(135deg,var(--accent2),#a78242)">📋</div>
      <div class="bubble" style="background:linear-gradient(135deg,rgba(199,162,91,.12),rgba(182,91,52,.08));border:1px solid rgba(199,162,91,.4)">
        <div style="font-size:11px;color:var(--accent);font-weight:700;text-transform:uppercase;letter-spacing:.1em;margin-bottom:8px">🎯 ${tr('Clinical case — test yourself')}</div>
        <div id="${caseId}"><div class="typing-dots"><span></span><span></span><span></span></div></div>
      </div>
    </div>`);
  body.scrollTop=body.scrollHeight;
  let full='';
  const box=document.getElementById(caseId);
  streamClaudeAPI({mode:'chat',lang:curLang,prompt:casePrompt},
    (token)=>{if(full==='')box.innerHTML='';full+=token;box.innerHTML=md2html(full);body.scrollTop=body.scrollHeight;},
    ()=>{
      // Add "Your diagnosis" input
      if(full){
        box.insertAdjacentHTML('afterend',`
          <div class="case-mini-input">
            <input type="text" placeholder="${tr('Your diagnosis or answer…')}" id="caseAns_${caseId}" style="flex:1;padding:8px 12px;border:1px solid var(--line);border-radius:8px;font-size:13.5px;font-family:inherit;outline:none">
            <button onclick="evaluateMiniCase('${caseId}')" style="padding:8px 16px;background:var(--accent);color:#fff;border-radius:8px;font-weight:600;font-size:13px;cursor:pointer;font-family:inherit">${tr('Submit')}</button>
          </div>`);
        body.scrollTop=body.scrollHeight;
        T_state.history.push({role:'assistant',content:full});
      }
    },
    ()=>{}
  );
}

function evaluateMiniCase(caseId){
  const inp=document.getElementById('caseAns_'+caseId);
  if(!inp||!inp.value.trim()) return;
  const ans=inp.value.trim();
  inp.closest('.case-mini-input').remove();
  const body=document.getElementById('tutorBody');
  body.insertAdjacentHTML('beforeend',`<div class="msg me"><div class="bubble">${escapeHtml(ans)}</div></div>`);
  const evalId='eval_'+Date.now();
  body.insertAdjacentHTML('beforeend',`<div class="msg ai"><div class="ai-avatar">ME</div><div class="bubble" id="${evalId}"><div class="typing-dots"><span></span><span></span><span></span></div></div></div>`);
  T_state.history.push({role:'user',content:ans});
  let full='';
  const box=document.getElementById(evalId);
  streamClaudeAPI({mode:'tutor',lang:curLang,subject:T_state.subject,messages:T_state.history},
    (token)=>{if(full==='')box.innerHTML='';full+=token;box.innerHTML=md2html(full);body.scrollTop=body.scrollHeight;},
    ()=>{if(full)T_state.history.push({role:'assistant',content:full});},
    (err)=>{box.innerHTML=`<div style="color:#B91C1C">${escapeHtml(err)}</div>`;}
  );
}

// ── Socratic mode ────────────────────────────────────────────
function sendSocratic(){
  const input=document.getElementById('socraticInput');
  const q=input.value.trim(); if(!q) return;
  const btn=document.getElementById('socraticSendBtn'); btn.disabled=true;
  const body=document.getElementById('socraticBody');
  if(body.querySelector('.chat-empty')) body.innerHTML='';
  body.insertAdjacentHTML('beforeend',`<div class="msg me"><div class="bubble">${escapeHtml(q)}</div></div>`);
  input.value=''; body.scrollTop=body.scrollHeight;
  const bubbleId='soc_'+Date.now();
  body.insertAdjacentHTML('beforeend',`<div class="msg ai"><div class="ai-avatar">ME</div><div class="bubble" id="${bubbleId}"><div class="typing-dots"><span></span><span></span><span></span></div></div></div>`);

  T_state.socHistory.push({role:'user',content:q});
  const lm={en:'English',ro:'Romanian',de:'German',fr:'French',it:'Italian',es:'Spanish'};
  const lang=lm[curLang]||'Romanian';

  // Special system for Socratic dialogue
  const socPrompt=T_state.socHistory.length===1
    ? `You are using the Socratic method to teach a medical student about "${q}" in the context of ${T_state.subject} (${CURRICULUM[T_state.faculty]?.name}). Language: ${lang}. Do NOT explain directly. Instead, ask ONE specific, thought-provoking question that will make the student think and discover the answer themselves. The question should be specific enough to guide them toward the key concept. After they answer, continue guiding with follow-up questions until they reach full understanding. Start now with your first Socratic question.`
    : null;

  const messages=socPrompt
    ? [{role:'user',content:socPrompt}]
    : T_state.socHistory;

  let full='';
  const bubble=document.getElementById(bubbleId);
  streamClaudeAPI(
    {mode:'chat',lang:curLang,messages},
    (token)=>{if(full==='')bubble.innerHTML='';full+=token;bubble.innerHTML=md2html(full);body.scrollTop=body.scrollHeight;},
    ()=>{if(full)T_state.socHistory.push({role:'assistant',content:full});btn.disabled=false;},
    (err)=>{bubble.innerHTML=`<div style="color:#B91C1C">${escapeHtml(err)}</div>`;btn.disabled=false;}
  );
}

// ── Quiz mode ────────────────────────────────────────────────
function pickTutorCount(btn){
  document.querySelectorAll('.qc-seg-btn[data-tqcnt]').forEach(b=>b.classList.remove('act'));
  btn.classList.add('act'); T_state.quizCount=parseInt(btn.dataset.tqcnt,10);
}
function pickTutorDiff(btn){
  document.querySelectorAll('.qc-seg-btn[data-tqdiff]').forEach(b=>b.classList.remove('act'));
  btn.classList.add('act'); T_state.quizDiff=btn.dataset.tqdiff;
}

function startTutorQuiz(){
  const btn=document.getElementById('tutorQuizStartBtn'); btn.disabled=true;
  const area=document.getElementById('tutorQuizArea');
  area.innerHTML=`<div class="quiz-loading"><div class="big-ico">📝</div><h4>${tr('Generating your quiz…')}</h4><p>${T_state.quizCount} ${tr('questions')} · <strong>${escapeHtml(tr(T_state.subject))}</strong></p><div class="typing-dots" style="justify-content:center;margin-top:14px"><span></span><span></span><span></span></div></div>`;

  const lm={en:'English',ro:'Romanian',de:'German',fr:'French',it:'Italian',es:'Spanish'};
  const lang=lm[curLang]||'Romanian';
  const dd={easy:'basic recall',medium:'applied understanding',hard:'complex clinical reasoning'};
  let courseCtx='';
  if(T_state.courseText) courseCtx=`\nBase questions on this course material:\n"""${T_state.courseText.slice(0,8000)}"""`;

  const BATCH=5;
  const batches=[];
  let rem=T_state.quizCount;
  while(rem>0){
    const n=Math.min(BATCH,rem);
    const prompt=`Generate exactly ${n} MCQ questions for a medical student studying ${T_state.subject} (${CURRICULUM[T_state.faculty]?.name}, Year ${T_state.year}). Difficulty: ${T_state.quizDiff} (${dd[T_state.quizDiff]}). Language: ${lang}.${courseCtx}
CRITICAL: ALL text in ALL fields MUST be in ${lang}.
Return ONLY a JSON array — no markdown, no fences. Each element: {"q":"...","a":"...","b":"...","c":"...","d":"...","correct":"a"|"b"|"c"|"d","topic":"subtopic in ${lang}","diff":"${T_state.quizDiff}"}. No explain field needed.`;
    batches.push(
      fetch('ai.php',{method:'POST',headers:{'Content-Type':'application/json'},
        body:JSON.stringify({mode:'chat',lang:curLang,prompt,stream:false})
      }).then(r=>r.json()).then(resp=>{
        if(!resp.ok) return [];
        let t=(resp.text||'').trim().replace(/^```(?:json)?\s*/i,'').replace(/\s*```$/,'').trim();
        const s=t.indexOf('['),e=t.lastIndexOf(']');
        if(s>=0&&e>s) t=t.slice(s,e+1);
        return tolerantParseJson(t)||[];
      }).catch(()=>[])
    );
    rem-=n;
  }

  Promise.all(batches).then(results=>{
    const qs=[].concat(...results);
    if(!qs.length){
      area.innerHTML=`<div style="color:#B91C1C;padding:30px;text-align:center">${tr('Could not generate test.')} <button class="qf-retry" onclick="startTutorQuiz()">${tr('Try again')}</button></div>`;
      btn.disabled=false; return;
    }
    T_state.currentQuiz=qs;
    T_state.quizAnswers=new Array(qs.length).fill(null);
    T_state.quizFlags=new Array(qs.length).fill(false);
    renderTutorQuiz();
    btn.disabled=false;
  });
}

function renderTutorQuiz(){
  const area=document.getElementById('tutorQuizArea');
  const qs=T_state.currentQuiz; const total=qs.length;
  const answered=T_state.quizAnswers.filter(a=>a!==null).length;
  const correctCount=T_state.quizAnswers.filter((a,i)=>a&&a===qs[i].correct).length;
  const allDone=answered===total;

  let html=`<div class="quiz-progress-top">
    <div class="qpt-count"><span>${answered}</span>/${total} ${tr('answered')}</div>
    <div class="qpt-bar"><div style="width:${(answered/total*100).toFixed(1)}%"></div></div>
    <div class="qpt-score"><strong>${correctCount} ${tr('correct')}</strong> · <span class="wrong">${answered-correctCount} ${tr('wrong')}</span></div>
  </div>`;

  qs.forEach((q,idx)=>{
    const ua=T_state.quizAnswers[idx]; const isAns=ua!==null;
    const flagged=T_state.quizFlags[idx];
    html+=`<div class="quiz-q ${isAns?'answered':''} ${flagged?'rq-flagged':''}" data-tqid="${idx}">
      <div class="quiz-q-head">
        <span class="qq-num ${flagged?'qq-num-flag':''}">${flagged?'⭐':idx+1}</span>
        <span class="qq-label">${tr('Question')} ${idx+1}/${total}${q.topic?' · '+escapeHtml(q.topic):''}</span>
      </div>
      <div class="quiz-q-stem">${escapeHtml(q.q)}</div>
      <div class="quiz-opts">`;
    ['a','b','c','d'].forEach(lt=>{
      if(!q[lt]) return;
      let cls='quiz-opt',mark='';
      if(isAns){
        if(lt===q.correct){cls+=' correct';mark='<span class="qo-mark">✓</span>';}
        else if(lt===ua){cls+=' incorrect';mark='<span class="qo-mark">✗</span>';}
      }
      html+=`<button class="${cls}" ${isAns?'disabled':''} onclick="answerTutorQuiz(${idx},'${lt}')">
        <span class="qo-letter">${lt.toUpperCase()}</span><span>${escapeHtml(q[lt])}</span>${mark}
      </button>`;
    });
    html+=`</div>`;
    // Always show "Explică ca un profesor" after answering
    if(isAns){
      html+=`<button class="qq-teach-btn" onclick="tutorTeachMe(${idx})" id="tutorTeachBtn_${idx}">🎓 ${tr('Professor explains')}</button>
      <div class="quiz-teach" id="tutorTeach_${idx}"></div>`;
    }
    html+=`</div>`;
  });

  // Final results
  if(allDone){
    const pct=Math.round(correctCount/total*100);
    let level,lc;
    if(pct>=85){level=tr('Excellent');lc='expert';}
    else if(pct>=70){level=tr('Merit');lc='advanced';}
    else if(pct>=50){level=tr('Pass');lc='intermediate';}
    else{level=tr('Fail — needs work');lc='beginner';}
    const mistakes=qs.map((_,i)=>T_state.quizAnswers[i]!==qs[i].correct?i:-1).filter(i=>i>=0);
    html+=`<div class="quiz-finish" id="tutorFinish">
      <h3><em>${tr('Quiz complete!')}</em></h3>
      <div class="quiz-score-big">${correctCount}/${total}</div>
      <div class="quiz-score-lbl">${pct}%</div>
      <div class="quiz-level-badge ${lc}"><span>🏅</span><span>${level}</span></div>
      <div class="quiz-finish-actions">
        <button class="qf-retry" onclick="startTutorQuiz()">🔄 ${tr('New quiz')}</button>
        ${mistakes.length?`<button class="qf-ask" onclick="tutorRetryMistakes()">⭐ ${tr('Retry mistakes')} (${mistakes.length})</button>`:''}
        <button class="qf-ask" onclick="switchTutorMode('progress')">📊 ${tr('View progress')}</button>
      </div>
    </div>`;
    // Save to progress
    const key=`${T_state.faculty}::${T_state.year}::${T_state.subject}`;
    if(!T_state.progress[key]) T_state.progress[key]={attempts:0,correct:0,total:0,subject:T_state.subject,faculty:T_state.faculty,year:T_state.year};
    T_state.progress[key].attempts++;
    T_state.progress[key].correct+=correctCount;
    T_state.progress[key].total+=total;
    T_state.progress[key].lastPct=pct;
    T_state.progress[key].lastDate=new Date().toISOString();
    saveTutorProgress();
    setTimeout(()=>document.getElementById('tutorFinish')?.scrollIntoView({behavior:'smooth',block:'center'}),200);
  }
  area.innerHTML=html;
}

function answerTutorQuiz(idx,letter){
  if(T_state.quizAnswers[idx]!==null) return;
  T_state.quizAnswers[idx]=letter;
  if(letter!==T_state.currentQuiz[idx].correct) T_state.quizFlags[idx]=true;
  renderTutorQuiz();
  setTimeout(()=>{
    const next=T_state.quizAnswers.findIndex(a=>a===null);
    if(next>=0){const el=document.querySelector(`.quiz-q[data-tqid="${next}"]`);if(el)el.scrollIntoView({behavior:'smooth',block:'center'});}
  },250);
}

function tutorTeachMe(idx){
  const q=T_state.currentQuiz[idx];
  const box=document.getElementById('tutorTeach_'+idx);
  const btn=document.getElementById('tutorTeachBtn_'+idx);
  if(!box||!btn) return;
  worldClassExplanation(q.q,q.a,q.b,q.c,q.d,T_state.quizAnswers[idx],q.correct,q.topic||T_state.subject,box,btn);
}

function tutorRetryMistakes(){
  const mistakes=T_state.currentQuiz.filter((_,i)=>T_state.quizAnswers[i]!==T_state.currentQuiz[i].correct);
  if(!mistakes.length){alert(tr('No mistakes to retry!'));return;}
  T_state.currentQuiz=mistakes;
  T_state.quizAnswers=new Array(mistakes.length).fill(null);
  T_state.quizFlags=new Array(mistakes.length).fill(false);
  renderTutorQuiz();
}

// ── Progress ─────────────────────────────────────────────────
function renderTutorProgress(){
  const area=document.getElementById('tutorProgressArea'); if(!area) return;
  const entries=Object.values(T_state.progress).filter(e=>e.faculty===T_state.faculty);
  if(!entries.length){
    area.innerHTML=`<div class="review-empty"><div class="big-ico">📊</div><p>${tr('No quiz attempts yet. Start a quiz above to begin.')}</p></div>`;
    return;
  }
  entries.sort((a,b)=>new Date(b.lastDate||0)-new Date(a.lastDate||0));
  let html=`<div style="margin-bottom:18px">
    <h3 style="font-family:'Cormorant Garamond',serif;font-size:28px;margin-bottom:6px">${tr('Your learning progress')}</h3>
    <p style="color:var(--ink2);font-size:14px">${tr('All subjects you have tested yourself on.')}</p>
  </div>
  <div class="history-table">
    <div class="ht-row head"><div>${tr('Subject')}</div><div>${tr('Attempts')}</div><div>${tr('Avg')}</div><div>${tr('Last')}</div></div>`;
  entries.forEach(e=>{
    const avg=Math.round(e.correct/e.total*100);
    const col=avg>=75?'var(--ok)':avg>=50?'var(--warn)':'var(--danger)';
    const labels=['','I','II','III','IV','V','VI'];
    html+=`<div class="ht-row">
      <div class="ht-spec">${escapeHtml(tr(e.subject))}<small>Year ${labels[e.year]||e.year}</small></div>
      <div>${e.attempts}</div>
      <div class="ht-score" style="color:${col}">${avg}%</div>
      <div style="font-size:12px;color:var(--ink2)">${e.lastDate?new Date(e.lastDate).toLocaleDateString():'-'}</div>
    </div>`;
  });
  html+=`</div>`;
  // AI progress analysis
  html+=`<div style="margin-top:22px;background:#fff;border:1px solid var(--line);border-radius:14px;padding:22px">
    <h4 style="font-family:'Cormorant Garamond',serif;font-size:22px;margin-bottom:12px">🎯 ${tr('AI study plan')}</h4>
    <div id="tutorAIplan"><button class="btn-primary-big" style="max-width:320px" onclick="generateStudyPlan()">✨ ${tr('Generate personalized study plan')}</button></div>
  </div>`;
  area.innerHTML=html;
}

function generateStudyPlan(){
  const box=document.getElementById('tutorAIplan'); if(!box) return;
  box.innerHTML=`<div class="typing-dots"><span></span><span></span><span></span></div>`;
  const entries=Object.values(T_state.progress).filter(e=>e.faculty===T_state.faculty);
  const lm={en:'English',ro:'Romanian',de:'German',fr:'French',it:'Italian',es:'Spanish'};
  const lang=lm[curLang]||'Romanian';
  const summary=entries.map(e=>`${e.subject}: ${Math.round(e.correct/e.total*100)}% (${e.attempts} attempts)`).join('; ');
  const prompt=`A medical student (${CURRICULUM[T_state.faculty]?.name}, Year ${T_state.year}) has the following quiz results: ${summary||'No data yet'}. Language: ${lang}.

Generate a personalized study plan in markdown:
## 📊 Analiza progresului tău
Brief assessment: what's strong, what needs work. Be specific and encouraging.
## ✅ Puncte forte
Subjects above 75% — confirm they're solid and suggest how to maintain.
## 🎯 Priorităților săptămânii
Top 3 subjects to focus on this week, with specific reasons.
## 📅 Plan zilnic (7 zile)
Day-by-day study schedule: which subject, how long, which type of practice (chat, quiz, reading).
## 💡 Strategii de studiu personalizate
2-3 specific techniques tailored to their weak areas.
Be motivating, specific, and actionable. Under 350 words.`;
  let full='';
  streamClaudeAPI({mode:'chat',lang:curLang,prompt},
    (token)=>{if(full==='')box.innerHTML='';full+=token;box.innerHTML=md2html(full);},
    ()=>{},
    (err)=>{box.innerHTML=`<div style="color:#B91C1C">${escapeHtml(err)}</div>`;}
  );
}

// ── Topic map (inter-subject connections) ────────────────────
function renderTopicMap(){
  const area=document.getElementById('tutorMapArea'); if(!area) return;
  area.innerHTML=`<div style="margin-bottom:18px">
    <h3 style="font-family:'Cormorant Garamond',serif;font-size:28px;margin-bottom:6px">🔗 ${tr('Topic connections map')}</h3>
    <p style="color:var(--ink2);font-size:14px">${tr('See how')} <strong>${tr(T_state.subject)}</strong> ${tr('connects to other subjects. Click any topic to start studying it.')}</p>
  </div>
  <div id="topicMapContent"><div class="typing-dots" style="padding:30px;justify-content:center"><span></span><span></span><span></span></div></div>`;
  generateTopicMap();
}

function generateTopicMap(){
  const box=document.getElementById('topicMapContent'); if(!box) return;
  const lm={en:'English',ro:'Romanian',de:'German',fr:'French',it:'Italian',es:'Spanish'};
  const lang=lm[curLang]||'Romanian';
  const prompt=`You are mapping the knowledge connections for a medical student studying ${T_state.subject} (${CURRICULUM[T_state.faculty]?.name}, Year ${T_state.year}). Language: ${lang}.

Return ONLY a JSON object (no markdown, no fences):
{
  "center": "${T_state.subject}",
  "connections": [
    {
      "subject": "related subject name in ${lang}",
      "relationship": "1-2 sentence explanation of HOW they connect — specific concepts (e.g., 'Beta-blockers studied in Pharmacology are first-line in HF from Cardiology')",
      "strength": "high|medium|low",
      "emoji": "relevant emoji"
    }
  ]
}
Include 6-8 connections covering: pharmacology links, physiology basis, pathology links, clinical applications, relevant laboratory connections. Make connections specific and educational.`;

  fetch('ai.php',{method:'POST',headers:{'Content-Type':'application/json'},
    body:JSON.stringify({mode:'chat',lang:curLang,prompt,stream:false})
  }).then(r=>r.json()).then(resp=>{
    if(!resp.ok){box.innerHTML=`<div style="color:#B91C1C">${escapeHtml(resp.error||'Error')}</div>`;return;}
    let t=(resp.text||'').trim().replace(/^```(?:json)?\s*/i,'').replace(/\s*```$/,'').trim();
    const s=t.indexOf('{'),e=t.lastIndexOf('}');
    if(s>=0&&e>s) t=t.slice(s,e+1);
    let data; try{data=JSON.parse(t);}catch(err){box.innerHTML=`<div style="color:#B91C1C">Parse error</div>`;return;}
    renderMapVisual(data,box);
  }).catch(e=>{box.innerHTML=`<div style="color:#B91C1C">${escapeHtml(e.message)}</div>`;});
}

function renderMapVisual(data,box){
  const conns=data.connections||[];
  const strengthColor={high:'var(--accent)',medium:'var(--accent2)',low:'var(--ink2)'};
  const strengthBg={high:'rgba(182,91,52,.1)',medium:'rgba(199,162,91,.1)',low:'rgba(43,24,16,.04)'};
  const strengthLabel={high:tr('Strong connection'),medium:tr('Related'),low:tr('Background context')};

  let html=`<div style="display:flex;align-items:center;justify-content:center;margin-bottom:24px">
    <div style="background:linear-gradient(135deg,var(--accent),var(--accent3));color:#fff;padding:18px 32px;border-radius:20px;font-family:'Cormorant Garamond',serif;font-size:26px;font-weight:600;box-shadow:0 8px 24px rgba(182,91,52,.3);text-align:center">
      ${T_state.subjectIcon} ${escapeHtml(tr(T_state.subject))}
      <div style="font-size:13px;font-weight:400;opacity:.85;margin-top:4px">${CURRICULUM[T_state.faculty]?.name} · Year ${T_state.year}</div>
    </div>
  </div>
  <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(300px,1fr));gap:14px">`;

  conns.forEach(c=>{
    const col=strengthColor[c.strength]||strengthColor.medium;
    const bg=strengthBg[c.strength]||strengthBg.medium;
    const lbl=strengthLabel[c.strength]||'';
    html+=`<div style="background:${bg};border:1.5px solid ${col}33;border-radius:14px;padding:18px 20px;cursor:pointer;transition:all .2s" onclick="goToSubject('${escapeHtml(c.subject).replace(/'/g,"\\'")}')">
      <div style="display:flex;align-items:center;gap:10px;margin-bottom:10px">
        <span style="font-size:24px">${c.emoji||'🔗'}</span>
        <div>
          <div style="font-family:'Cormorant Garamond',serif;font-size:18px;font-weight:600;color:var(--ink)">${escapeHtml(c.subject)}</div>
          <div style="font-size:11px;color:${col};font-weight:600;text-transform:uppercase;letter-spacing:.08em">${lbl}</div>
        </div>
      </div>
      <p style="font-size:13.5px;color:var(--ink2);line-height:1.55;margin:0">${escapeHtml(c.relationship)}</p>
    </div>`;
  });
  html+=`</div>`;
  html+=`<div style="margin-top:20px;text-align:center"><button class="btn-primary-big" style="max-width:300px" onclick="generateTopicMap()">🔄 ${tr('Regenerate map')}</button></div>`;
  box.innerHTML=html;
}

function goToSubject(subjectName){
  // Try to find and select the subject
  const btn=document.querySelector(`#subjectGridBig .subject-btn-big[data-sub="${subjectName}"]`);
  if(btn){ btn.click(); switchTutorMode('chat'); return; }
  // If not found in current year, switch to chat and pre-fill the question
  switchTutorMode('chat');
  const input=document.getElementById('tutorInput');
  if(input){ input.value=tr('Tell me about the connections between')+' '+tr(T_state.subject)+' '+tr('and')+' '+subjectName; input.focus(); }
}

/* ============ REZIDENTIAT — Restructured: Faculty → Topic → Real exam flow ============ */

// Real study topics per faculty (as they appear on the actual Romanian Rezidențiat exam)
const REZ_TOPICS = {
  medicine: [
    ['🦴','Anatomie'],['🫁','Fiziologie'],['🧪','Biochimie'],['🔬','Histologie și anatomie patologică'],
    ['💊','Farmacologie'],['🧬','Fiziopatologie'],['🦠','Microbiologie și boli infecțioase'],
    ['🫀','Cardiologie și chirurgie cardiovasculară'],['🏥','Medicină internă'],
    ['🫃','Gastroenterologie și chirurgie digestivă'],['🫘','Nefrologie și urologie'],
    ['🫁','Pneumologie'],['🧠','Neurologie și neurochirurgie'],['🧩','Psihiatrie'],
    ['🧬','Endocrinologie și diabet'],['🩸','Hematologie și oncologie'],
    ['💪','Reumatologie'],['✂️','Chirurgie generală'],['🦴','Ortopedie și traumatologie'],
    ['👶','Pediatrie și chirurgie pediatrică'],['🤰','Obstetrică-ginecologie'],
    ['🚑','Medicină de urgență și ATI'],['🧴','Dermatovenerologie'],
    ['👁️','Oftalmologie'],['👂','ORL'],['⚖️','Medicină legală'],
    ['🏠','Medicină de familie'],['🩻','Radiologie și imagistică']
  ],
  pharmacy: [
    ['⚗️','Chimie generală și anorganică'],['🧪','Chimie organică și analitică'],
    ['🌱','Farmacognozie și fitoterapie'],['💊','Chimie farmaceutică'],
    ['🏭','Tehnologie farmaceutică'],['💊','Farmacologie și farmacoterapie'],
    ['🔬','Biofarmacie și farmacocinetică'],['🧬','Toxicologie'],
    ['🏥','Farmacie clinică și spitalicească'],['📊','Legislație și management farmaceutic']
  ],
  dentistry: [
    ['🦷','Morfologia și fiziologia aparatului dento-maxilar'],
    ['🦷','Odontologie conservatoare și endodonție'],
    ['🦷','Parodontologie'],['🦷','Protetică dentară'],
    ['🦷','Ortodonție și ortopedie dento-facială'],
    ['🦷','Pedodonție'],['🦷','Chirurgie orală și dento-alveolară'],
    ['🦷','Chirurgie maxilo-facială'],['🦷','Radiologie dento-maxilară'],
    ['💊','Farmacologie și anestezie în stomatologie'],
    ['🔬','Materiale dentare'],['⚖️','Deontologie și legislație stomatologică']
  ]
};

// Rezidentiat state
let R = {
  faculty: 'medicine',
  topic: 'Anatomie',
  topicIcon: '🦴',
  tab: 'practice',
  quizCount: 20,
  quizDiff: 'medium',
  // current quiz session
  quiz: null,
  answers: [],    // null | 'a'|'b'|'c'|'d'
  flags: [],      // true if wrong (auto)
  notes: {},      // {questionKey: noteText}
  times: [],      // seconds per question
  qStart: null,
  // exam state
  examActive: false,
  examSubmitted: false,
  examTimer: null,
  examTimeLeft: 0,
  examStart: null,
  // progress store
  progress: {},   // key: faculty::topic → {attempts,correct,total,runs:[]}
};

// Persist
function rezSave(){
  try{localStorage.setItem('me_rez2',JSON.stringify({progress:R.progress,notes:R.notes}));}catch(e){}
}
function rezLoad(){
  try{
    const d=JSON.parse(localStorage.getItem('me_rez2')||'{}');
    if(d.progress) R.progress=d.progress;
    if(d.notes) R.notes=d.notes;
  }catch(e){}
}
rezLoad();

// ── Faculty / Topic pickers ──────────────────────────────────────────────────
function pickRezFaculty(btn){
  document.querySelectorAll('.faculty-btn[data-rfac]').forEach(b=>b.classList.remove('act'));
  btn.classList.add('act');
  R.faculty = btn.dataset.rfac;
  renderRezTopics();
}

function renderRezTopics(){
  const list = REZ_TOPICS[R.faculty]||[];
  const wrap = document.getElementById('rezTopicGrid');
  if(!wrap) return;
  wrap.innerHTML='';
  if(list.length){ R.topic=list[0][1]; R.topicIcon=list[0][0]; }
  list.forEach((s,i)=>{
    const key=`${R.faculty}::${s[1]}`;
    const p=R.progress[key];
    const pct=p&&p.total?Math.round(p.correct/p.total*100):null;
    let dot='';
    if(pct!==null){
      const col=pct>=75?'#2E7D4F':pct>=50?'#D97706':'#B91C1C';
      dot=`<span style="width:8px;height:8px;border-radius:50%;background:${col};flex-shrink:0;display:inline-block"></span>`;
    }
    const btn=document.createElement('button');
    btn.className='subject-btn-big'+(i===0?' act':'');
    btn.dataset.topic=s[1];
    btn.innerHTML=`<span class="si">${s[0]}</span><span style="flex:1;text-align:left">${tr(s[1])}</span>${dot}`;
    btn.onclick=()=>{
      wrap.querySelectorAll('.subject-btn-big').forEach(b=>b.classList.remove('act'));
      btn.classList.add('act');
      R.topic=s[1]; R.topicIcon=s[0];
      updateRezSel();
    };
    wrap.appendChild(btn);
  });
  updateRezSel();
}

function updateRezSel(){
  const s=document.getElementById('rezSelSummary');
  if(!s) return;
  s.style.display='block';
  const fn={medicine:'Medicină',pharmacy:'Farmacie',dentistry:'Stomatologie'};
  document.getElementById('rezSelFac').textContent=tr(fn[R.faculty]||R.faculty);
  document.getElementById('rezSelSpec').textContent=R.topicIcon+' '+tr(R.topic);
  const key=`${R.faculty}::${R.topic}`;
  const p=R.progress[key];
  const qs=document.getElementById('rezQuickStats');
  if(p&&p.attempts){
    const avg=Math.round(p.correct/p.total*100);
    qs.innerHTML=`<strong>${p.attempts}</strong> ${tr('tests')} · <strong style="color:${avg>=75?'var(--ok)':avg>=50?'var(--warn)':'var(--danger)'}">${avg}%</strong>`;
  } else { qs.innerHTML=`<em style="opacity:.7">${tr('No tests yet')}</em>`; }
}

function switchRezTab(tab){
  R.tab=tab;
  document.querySelectorAll('.rez-tabs .mode-tab').forEach(b=>b.classList.toggle('act',b.dataset.rtab===tab));
  ['practice','exam','heatmap','history'].forEach(t=>{
    const el=document.getElementById('rezTab'+t.charAt(0).toUpperCase()+t.slice(1));
    if(el) el.style.display=t===tab?'block':'none';
  });
  if(tab==='heatmap') renderHeatmap();
  if(tab==='history') renderRezHistory();
}

function pickRezCount(btn){
  document.querySelectorAll('.qc-seg-btn[data-rqcnt]').forEach(b=>b.classList.remove('act'));
  btn.classList.add('act');
  R.quizCount=parseInt(btn.dataset.rqcnt,10);
}
function pickRezDiff(btn){
  document.querySelectorAll('.qc-seg-btn[data-rqdiff]').forEach(b=>b.classList.remove('act'));
  btn.classList.add('act');
  R.quizDiff=btn.dataset.rqdiff;
}

// ── Quiz generation ──────────────────────────────────────────────────────────
function buildQuizPrompt(topic, faculty, difficulty, count, mixed){
  const lm={en:'English',ro:'Romanian',de:'German',fr:'French',it:'Italian',es:'Spanish'};
  const lang=lm[curLang]||'Romanian';
  const dd={easy:'basic recall, straightforward',medium:'applied clinical reasoning',hard:'complex vignettes, subtle distractors, edge cases'};
  const fn={medicine:'medical',pharmacy:'pharmacy',dentistry:'dentistry'};
  let p;
  if(mixed){
    const e=Math.floor(count*.3),m=Math.floor(count*.5),h=count-e-m;
    p=`Generate exactly ${count} Romanian ${fn[faculty]||'medical'} residency (Rezidențiat) exam MCQ questions for the study topic: "${topic}". Mix: ${e} easy, ${m} medium, ${h} hard.`;
  } else {
    p=`Generate exactly ${count} Romanian ${fn[faculty]||'medical'} residency (Rezidențiat) exam MCQ questions for the study topic: "${topic}". Difficulty: ${difficulty} (${dd[difficulty]}).`;
  }
  p+=` CRITICAL: ALL text (q, a, b, c, d, explain, topic field) MUST be in ${lang}. Not English — ${lang}.`;
  p+=` Each question: realistic clinical vignette or factual question as in the Romanian Rezidențiat exam, 4 options (A-D), one correct. Academic explanations citing Harrison's, Robbins, national protocols.`;
  p+=` Return ONLY a JSON array — no markdown, no fences, nothing else. Each element: {"q":"...","a":"...","b":"...","c":"...","d":"...","correct":"a"|"b"|"c"|"d","topic":"subtopic in ${lang}","diff":"easy"|"medium"|"hard"}. Do NOT include an explain field — explanations will be generated separately on demand.`;
  return p;
}

function fetchQuizBatch(topic, faculty, difficulty, count, mixed){
  const MAX=5; // Max 5 per API call to avoid token truncation
  if(count>MAX){
    const batches=[];
    let rem=count;
    while(rem>0){ const n=Math.min(MAX,rem); batches.push(fetchQuizBatch(topic,faculty,difficulty,n,mixed)); rem-=n; }
    return Promise.all(batches).then(r=>[].concat(...r));
  }
  const prompt=buildQuizPrompt(topic,faculty,difficulty,count,mixed);
  return fetch('ai.php',{method:'POST',headers:{'Content-Type':'application/json'},
    body:JSON.stringify({mode:'chat',lang:curLang,prompt,stream:false})
  }).then(r=>r.json()).then(resp=>{
    if(!resp.ok) throw new Error(resp.error||'API error');
    let t=(resp.text||'').trim().replace(/^```(?:json)?\s*/i,'').replace(/\s*```$/,'').trim();
    const s=t.indexOf('['),e=t.lastIndexOf(']');
    if(s>=0&&e>s) t=t.slice(s,e+1);
    return tolerantParseJson(t)||[];
  });
}

// ── Practice quiz ────────────────────────────────────────────────────────────
function startRezPractice(){
  const btn=document.getElementById('rezStartBtn');
  btn.disabled=true;
  const area=document.getElementById('rezPracticeArea');
  area.innerHTML=`<div class="quiz-loading"><div class="big-ico">📝</div><h4>${tr('Generating your test…')}</h4><p>${R.quizCount} ${tr('questions')} · <strong>${escapeHtml(tr(R.topic))}</strong> · ${escapeHtml(tr(R.quizDiff.charAt(0).toUpperCase()+R.quizDiff.slice(1)))}</p><div class="typing-dots" style="justify-content:center;margin-top:14px"><span></span><span></span><span></span></div></div>`;

  fetchQuizBatch(R.topic,R.faculty,R.quizDiff,R.quizCount,false).then(qs=>{
    if(!qs||!qs.length){
      area.innerHTML=`<div style="color:#B91C1C;padding:30px;text-align:center">${tr('Could not generate test.')} <button class="qf-retry" onclick="startRezPractice()">${tr('Try again')}</button></div>`;
      btn.disabled=false; return;
    }
    R.quiz=qs; R.answers=new Array(qs.length).fill(null);
    R.flags=new Array(qs.length).fill(false);
    R.times=new Array(qs.length).fill(0);
    R.qStart=Date.now(); R.examActive=false;
    renderRezQuiz('rezPracticeArea',false);
    btn.disabled=false;
  }).catch(e=>{
    area.innerHTML=`<div style="color:#B91C1C;padding:30px;text-align:center"><strong>Error:</strong> ${escapeHtml(e.message||e)} <button class="qf-retry" onclick="startRezPractice()" style="margin-left:10px">${tr('Try again')}</button></div>`;
    btn.disabled=false;
  });
}

// ── Quick session (10 questions from weakest topics) ────────────────────────
function startQuickSession(){
  // Find weakest topic(s)
  const topics=REZ_TOPICS[R.faculty]||[];
  let weakest=null, worstPct=101;
  topics.forEach(([ico,name])=>{
    const key=`${R.faculty}::${name}`;
    const p=R.progress[key];
    if(p&&p.total>=5){
      const pct=Math.round(p.correct/p.total*100);
      if(pct<worstPct){ worstPct=pct; weakest={name,ico}; }
    }
  });
  if(!weakest){ weakest={name:topics[0][1],ico:topics[0][0]}; }
  R.topic=weakest.name; R.topicIcon=weakest.ico;
  R.quizCount=10; R.quizDiff='medium';
  switchRezTab('practice');
  setTimeout(()=>startRezPractice(),100);
}

// ── Render quiz (shared for practice and exam review) ────────────────────────
function renderRezQuiz(areaId, isExam){
  const area=document.getElementById(areaId);
  if(!area) return;
  const qs=R.quiz; const total=qs.length;
  const answered=R.answers.filter(a=>a!==null).length;
  const correctCount=R.answers.filter((a,i)=>a&&a===qs[i].correct).length;
  const allDone=answered===total;

  let html=`<div class="quiz-progress-top">
    <div class="qpt-count"><span>${answered}</span>/${total} ${tr('answered')}</div>
    <div class="qpt-bar"><div style="width:${(answered/total*100).toFixed(1)}%"></div></div>
    <div class="qpt-score"><strong>${correctCount} ${tr('correct')}</strong> · <span class="wrong">${answered-correctCount} ${tr('wrong')}</span></div>
  </div>`;

  qs.forEach((q,idx)=>{
    const ua=R.answers[idx]; const isAns=ua!==null;
    const flagged=R.flags[idx]; const timeSpent=R.times[idx];
    const qKey=`${R.topic}::${idx}::${(q.q||'').slice(0,40)}`;
    const note=R.notes[qKey]||'';

    html+=`<div class="quiz-q ${isAns?'answered':''} ${flagged?'rq-flagged':''}" data-rqid="${idx}">
      <div class="quiz-q-head">
        <span class="qq-num ${flagged?'qq-num-flag':''}">${flagged?'⭐':idx+1}</span>
        <span class="qq-label">${tr('Question')} ${idx+1}/${total}${q.topic?' · '+escapeHtml(q.topic):''}${q.diff?' · '+escapeHtml(tr(q.diff.charAt(0).toUpperCase()+q.diff.slice(1))):''}</span>
        <div class="qq-toolbar">
          ${timeSpent>0?`<span class="qq-time">⏱ ${fmtSec(timeSpent)}</span>`:''}
        </div>
      </div>
      <div class="quiz-q-stem">${escapeHtml(q.q)}</div>
      <div class="quiz-opts">`;

    ['a','b','c','d'].forEach(lt=>{
      if(!q[lt]) return;
      let cls='quiz-opt'; let mark='';
      if(isAns){
        if(lt===q.correct){cls+=' correct';mark='<span class="qo-mark">✓</span>';}
        else if(lt===ua){cls+=' incorrect';mark='<span class="qo-mark">✗</span>';}
      }
      const disabled=isAns&&!isExam?'disabled':(isExam&&R.examSubmitted?'disabled':'');
      html+=`<button class="${cls}" ${disabled} onclick="answerRezQ(${idx},'${lt}','${areaId}',${isExam})">
        <span class="qo-letter">${lt.toUpperCase()}</span>
        <span>${escapeHtml(q[lt])}</span>${mark}
      </button>`;
    });

    html+=`</div>`;

    // Explanation — always visible after answer (right or wrong)
    if(isAns){
      html+=`<div class="quiz-explain on">
        <strong>${tr('Explanation')}</strong>
        <p>${escapeHtml(q.explain||'')}</p>
      </div>`;
      // "Explain like professor" always available
      html+=`<button class="qq-teach-btn" onclick="rezTeachMe(${idx},'${areaId}')" id="rezTeachBtn_${idx}">📚 ${tr('Teach me like a professor')}</button>
      <div class="quiz-teach" id="rezTeach_${idx}"></div>`;
    }

    // Personal note
    html+=`<div class="rq-note-row">
      <input class="rq-note-input" type="text" placeholder="📝 ${tr('Add a personal note…')}" value="${escapeHtml(note)}" onchange="saveRezNote('${escapeHtml(qKey).replace(/'/g,"\\'")}',this.value)" data-tph>
    </div>`;

    html+=`</div>`;
  });

  // RESULTS PANEL
  if(allDone && !isExam){
    const pct=Math.round(correctCount/total*100);
    let level,levelClass;
    if(pct>=85){level=tr('Excellent — Distinction');levelClass='expert';}
    else if(pct>=70){level=tr('Merit');levelClass='advanced';}
    else if(pct>=50){level=tr('Pass');levelClass='intermediate';}
    else{level=tr('Fail — needs work');levelClass='beginner';}

    html+=`<div class="quiz-finish" id="rezFinishCard">
      <h3><em>${tr('Test complete!')}</em></h3>
      <div class="quiz-score-big">${correctCount}/${total}</div>
      <div class="quiz-score-lbl">${pct}% · ${fmtSec(R.times.reduce((a,b)=>a+b,0))} ${tr('total time')}</div>
      <div class="quiz-level-badge ${levelClass}"><span>🏅</span><span>${level}</span></div>`;

    // Mistakes summary
    const mistakes=qs.map((q,i)=>R.answers[i]!==q.correct?i:-1).filter(i=>i>=0);
    if(mistakes.length){
      html+=`<div style="margin:18px 0;text-align:left">
        <h4 style="font-family:'Cormorant Garamond',serif;font-size:20px;margin-bottom:12px">⭐ ${tr('Your mistakes')} (${mistakes.length})</h4>
        <div style="display:flex;flex-direction:column;gap:8px">`;
      mistakes.forEach(i=>{
        const q=qs[i];
        html+=`<div style="background:rgba(185,28,28,.05);border:1px solid rgba(185,28,28,.15);border-radius:10px;padding:12px 16px;font-size:13.5px">
          <strong style="color:var(--danger)">Q${i+1}:</strong> ${escapeHtml((q.q||'').slice(0,120))}…
          <br><span style="color:var(--ink2);font-size:12.5px">${tr('Your answer:')} <strong>${R.answers[i]?R.answers[i].toUpperCase():'—'}</strong> · ${tr('Correct:')} <strong style="color:var(--ok)">${q.correct.toUpperCase()}</strong></span>
        </div>`;
      });
      html+=`</div></div>`;
    }

    html+=`<div class="qf-content">
        <div class="quiz-recommend" id="rezRec"><div class="typing-dots" style="justify-content:center;padding:16px"><span></span><span></span><span></span></div></div>
        <div class="quiz-finish-actions">
          <button class="qf-retry" onclick="startRezPractice()">🔄 ${tr('New test')}</button>
          <button class="qf-ask" onclick="rezRetryMistakes()">⭐ ${tr('Retry mistakes')}</button>
        </div>
      </div>
    </div>`;

    // Save progress
    saveRezResult(correctCount,total,pct,R.topic,R.faculty,false,R.quizDiff);
    // Auto recommendation
    setTimeout(()=>rezAutoRecommend(correctCount,total,pct,mistakes.length,R.topic),200);
    setTimeout(()=>document.getElementById('rezFinishCard')?.scrollIntoView({behavior:'smooth',block:'center'}),300);
  }

  area.innerHTML=html;
}

function answerRezQ(idx,letter,areaId,isExam){
  if(R.answers[idx]!==null&&!isExam) return;
  if(isExam&&R.examSubmitted) return;
  if(R.qStart){ R.times[idx]=Math.round((Date.now()-R.qStart)/1000); R.qStart=Date.now(); }
  R.answers[idx]=letter;
  // Auto-flag if wrong
  if(letter!==R.quiz[idx].correct) R.flags[idx]=true;
  if(isExam){
    renderExamInline(idx,letter,areaId);
    updateExamNav();
    updateExamProgress();
  } else {
    renderRezQuiz(areaId,false);
    setTimeout(()=>{
      const next=R.answers.findIndex(a=>a===null);
      if(next>=0){const el=document.querySelector(`.quiz-q[data-rqid="${next}"]`);if(el)el.scrollIntoView({behavior:'smooth',block:'center'});}
    },250);
  }
}

function renderExamInline(idx,letter,areaId){
  const qEl=document.querySelector(`.quiz-q[data-eqid="${idx}"]`);
  if(!qEl) return;
  qEl.querySelectorAll('.quiz-opt').forEach(opt=>{
    opt.classList.remove('correct','incorrect','selected');
  });
  const opts=qEl.querySelectorAll('.quiz-opt');
  const map={a:0,b:1,c:2,d:3};
  if(opts[map[letter]]) opts[map[letter]].classList.add('selected');
}

function fmtSec(s){if(!s)return'0s';if(s<60)return s+'s';const m=Math.floor(s/60);return m+'m '+(s%60)+'s';}

function rezTeachMe(idx,areaId){
  const box=document.getElementById('rezTeach_'+idx);
  const btn=document.getElementById('rezTeachBtn_'+idx);
  if(!box||!btn) return;
  const q=R.quiz[idx]; const ua=R.answers[idx];
  btn.disabled=true; btn.textContent=tr('Loading…');
  box.classList.add('on');
  box.innerHTML=`<strong class="teach-label">📚 ${tr("Professor's lecture")}</strong><div class="typing-dots"><span></span><span></span><span></span></div>`;
  const lm={en:'English',ro:'Romanian',de:'German',fr:'French',it:'Italian',es:'Spanish'};
  const wasWrong=ua&&ua!==q.correct;
  const prompt=`You are a senior professor at a Romanian medical university teaching a student preparing for the Rezidențiat exam. A student just answered this question${wasWrong?' INCORRECTLY':' and wants a deep explanation'}:

QUESTION: ${q.q}
A. ${q.a}
B. ${q.b}
C. ${q.c}
D. ${q.d}
STUDENT'S ANSWER: ${ua?ua.toUpperCase()+'. '+(q[ua]||''):'—'}
CORRECT ANSWER: ${q.correct.toUpperCase()}. ${q[q.correct]}
TOPIC: ${q.topic||R.topic}

Write a thorough, engaging professor's lecture in ${lm[curLang]||'Romanian'}. Structure it as follows:

## 🧠 Conceptul fundamental
Explain the underlying medical concept this question tests. Use pathophysiology, mechanisms, anatomy — whatever is relevant. Write as if explaining to a smart student who needs to truly understand, not just memorize. 3-5 sentences.

## ✅ De ce răspunsul corect este corect
Full clinical and scientific reasoning for why ${q.correct.toUpperCase()} is right. Include the mechanism, relevant guidelines (cite like [Harrison 21e, Ch.X], [ESC 2024], [Robbins 10e], [CNAS Protocol]), and why this matters clinically. 3-4 sentences.

## ❌ De ce celelalte variante sunt greșite
Go through each wrong option and explain specifically WHY it's wrong — not just "it's incorrect" but the specific knowledge gap or reasoning error it represents. This is where students learn the most. 2-3 sentences per wrong option.

## 💡 Perle de examen (High-yield pearls)
4-5 bullet points of the most important things to remember about this topic for the exam. Make them memorable, specific, and clinically useful.

## 📖 Ce să recitești
Name 2-3 specific chapters, textbooks, or guidelines the student should review to master this topic. Be specific: "Harrison 21e, Chapter 42: Heart Failure" not just "Harrison's".

Write with warmth and clarity. Make the student feel they've learned something profound, not just memorized an answer. Language: ${lm[curLang]||'Romanian'}.`;

  let full='';
  streamClaudeAPI({mode:'chat',lang:curLang,prompt},
    (token)=>{
      if(full==='')box.innerHTML=`<strong class="teach-label">📚 ${tr("Professor's lecture")}</strong>`;
      full+=token;
      box.innerHTML=`<strong class="teach-label">📚 ${tr("Professor's lecture")}</strong>`+md2html(full);
    },
    ()=>{btn.style.display='none';},
    (err)=>{box.innerHTML+=`<div style="color:#B91C1C">${escapeHtml(err)}</div>`;btn.disabled=false;btn.textContent=tr('Try again');}
  );
}

function saveRezNote(key,text){
  if(text.trim()) R.notes[key]=text.trim();
  else delete R.notes[key];
  rezSave();
}

function rezRetryMistakes(){
  const mistakes=R.quiz.filter((_,i)=>R.answers[i]!==R.quiz[i].correct);
  if(!mistakes.length){alert(tr('No mistakes to retry!'));return;}
  R.quiz=mistakes;R.answers=new Array(mistakes.length).fill(null);
  R.flags=new Array(mistakes.length).fill(false);
  R.times=new Array(mistakes.length).fill(0);
  R.qStart=Date.now();
  renderRezQuiz('rezPracticeArea',false);
}

function rezAutoRecommend(correct,total,pct,mistakes,topic){
  const box=document.getElementById('rezRec');if(!box)return;
  const lm={en:'English',ro:'Romanian',de:'German',fr:'French',it:'Italian',es:'Spanish'};
  const prompt=`A Romanian medical student just finished a Rezidențiat practice test. Topic: ${topic}. Score: ${correct}/${total} (${pct}%). Mistakes: ${mistakes}. Language: ${lm[curLang]||'Romanian'}.
Give a 3-section markdown recommendation:
## Concluzie
1 sentence on performance.
## Unde să te focusezi
3-4 specific subtopics from "${topic}" to review, with references.
## Pasul următor
Recommend: harder test, full simulation, or move to next topic. Under 120 words.`;
  let full='';
  streamClaudeAPI({mode:'chat',lang:curLang,prompt},
    (token)=>{if(full==='')box.innerHTML='';full+=token;box.innerHTML=md2html(full);},
    ()=>{},
    (err)=>{box.innerHTML=`<div style="color:#B91C1C">${escapeHtml(err)}</div>`;}
  );
}

function saveRezResult(correct,total,pct,topic,faculty,isExam,diff){
  const key=`${faculty}::${topic}`;
  if(!R.progress[key]) R.progress[key]={attempts:0,correct:0,total:0,faculty,topic,runs:[]};
  R.progress[key].attempts++;
  R.progress[key].correct+=correct;
  R.progress[key].total+=total;
  R.progress[key].runs=R.progress[key].runs||[];
  R.progress[key].runs.push({date:new Date().toISOString(),score:correct,total,pct,diff:diff||'mixed',isExam});
  if(R.progress[key].runs.length>50) R.progress[key].runs=R.progress[key].runs.slice(-50);
  rezSave();
  // refresh topic dots
  renderRezTopics();
}

// ── FULL EXAM (200 questions) ────────────────────────────────────────────────
function startFullExam(){
  const btn=document.getElementById('rezExamStartBtn');
  const intro=document.getElementById('examIntroCard');
  btn.disabled=true;
  const area=document.getElementById('rezExamArea');
  area.innerHTML=`<div class="quiz-loading"><div class="big-ico">⏱️</div><h4>${tr('Preparing exam…')}</h4><p>200 ${tr('questions')} · ${escapeHtml(tr(R.faculty==='medicine'?'Medicină':'R.faculty'))} · ${tr('mixed topics')}</p><p style="font-size:13px;margin-top:8px;color:var(--ink2)">${tr('This takes 30-60 seconds. Please wait.')}</p><div class="typing-dots" style="justify-content:center;margin-top:14px"><span></span><span></span><span></span></div></div>`;

  const topics=REZ_TOPICS[R.faculty]||[];
  const perTopic=Math.ceil(200/Math.max(topics.length,1));
  // Fetch 5-7 questions per topic in batches
  const qPerTopic=Math.min(8,Math.max(5,Math.floor(200/topics.length)));
  const promises=topics.map(([ico,name])=>fetchQuizBatch(name,R.faculty,null,qPerTopic,true));

  Promise.all(promises).then(results=>{
    let all=[].concat(...results);
    // Shuffle
    for(let i=all.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[all[i],all[j]]=[all[j],all[i]];}
    all=all.slice(0,200);
    if(all.length<50){
      area.innerHTML=`<div style="color:#B91C1C;padding:30px;text-align:center">${tr('Could not generate enough questions.')} <button class="qf-retry" onclick="startFullExam()">${tr('Try again')}</button></div>`;
      btn.disabled=false; return;
    }
    intro.style.display='none';
    R.quiz=all; R.answers=new Array(all.length).fill(null);
    R.flags=new Array(all.length).fill(false);
    R.times=new Array(all.length).fill(0);
    R.qStart=Date.now();
    R.examActive=true; R.examSubmitted=false;
    R.examTimeLeft=4*60*60; // 4 hours
    R.examStart=Date.now();
    renderFullExam();
    startExamCountdown();
    btn.disabled=false;
  }).catch(err=>{
    area.innerHTML=`<div style="color:#B91C1C;padding:30px;text-align:center"><strong>Error:</strong> ${escapeHtml(err.message||err)} <button class="qf-retry" onclick="startFullExam()">${tr('Try again')}</button></div>`;
    btn.disabled=false;
  });
}

function startExamCountdown(){
  if(R.examTimer) clearInterval(R.examTimer);
  R.examTimer=setInterval(()=>{
    R.examTimeLeft--;
    const bar=document.getElementById('examTimerBar');
    if(bar){
      const m=Math.floor(R.examTimeLeft/60),s=R.examTimeLeft%60;
      const tel=bar.querySelector('.etb-time');
      if(tel) tel.textContent=m+':'+(s<10?'0':'')+s;
      bar.classList.toggle('warn',R.examTimeLeft<1200&&R.examTimeLeft>=600);
      bar.classList.toggle('danger',R.examTimeLeft<600);
    }
    if(R.examTimeLeft<=0){ clearInterval(R.examTimer); R.examTimer=null; submitFullExam(true); }
  },1000);
}

function renderFullExam(){
  const area=document.getElementById('rezExamArea');
  const total=R.quiz.length;
  const answered=R.answers.filter(a=>a!==null).length;
  const m=Math.floor(R.examTimeLeft/60),s=R.examTimeLeft%60;

  let html=`<div class="exam-running">
    <div class="exam-timer-bar" id="examTimerBar">
      <div><div class="etb-time">${m}:${s<10?'0':''}${s}</div><div class="etb-label">${tr('Remaining')}</div></div>
      <div class="etb-progress">
        <div class="etb-bar"><div style="width:${(answered/total*100).toFixed(1)}%"></div></div>
        <div class="etb-meta"><span><strong>${answered}</strong>/${total} ${tr('answered')}</span><span>${tr('Pass: 50%')}</span></div>
      </div>
      <button class="etb-submit-btn" onclick="submitFullExam(false)">${tr('Submit exam')}</button>
    </div>
    <div class="exam-navigator" id="examNav">`;

  R.quiz.forEach((_,i)=>{
    let cls='exam-nav-btn';
    if(R.answers[i]!==null) cls+=' answered';
    if(R.flags[i]) cls+=' flagged';
    html+=`<button class="${cls}" id="enb_${i}" onclick="scrollToExamQ(${i})">${i+1}</button>`;
  });
  html+=`</div>`;

  R.quiz.forEach((q,idx)=>{
    const ua=R.answers[idx]; const isAns=ua!==null;
    html+=`<div class="quiz-q ${isAns?'answered':''}" data-eqid="${idx}">
      <div class="quiz-q-head">
        <span class="qq-num ${R.flags[idx]?'qq-num-flag':''}">${R.flags[idx]?'⭐':idx+1}</span>
        <span class="qq-label">Q${idx+1}/${total}${q.topic?' · '+escapeHtml(q.topic):''}</span>
      </div>
      <div class="quiz-q-stem">${escapeHtml(q.q)}</div>
      <div class="quiz-opts">`;
    ['a','b','c','d'].forEach(lt=>{
      if(!q[lt]) return;
      let cls='quiz-opt'; if(ua===lt) cls+=' selected';
      html+=`<button class="${cls}" onclick="answerRezQ(${idx},'${lt}','rezExamArea',true)">
        <span class="qo-letter">${lt.toUpperCase()}</span><span>${escapeHtml(q[lt])}</span>
      </button>`;
    });
    html+=`</div></div>`;
  });
  html+=`</div>`;
  area.innerHTML=html;
}

function updateExamNav(){
  R.answers.forEach((a,i)=>{
    const btn=document.getElementById('enb_'+i);
    if(!btn) return;
    btn.classList.toggle('answered',a!==null);
    btn.classList.toggle('flagged',R.flags[i]);
  });
}
function updateExamProgress(){
  const answered=R.answers.filter(a=>a!==null).length;
  const total=R.quiz.length;
  const bar=document.getElementById('examTimerBar');
  if(!bar) return;
  const inner=bar.querySelector('.etb-bar > div');
  if(inner) inner.style.width=(answered/total*100).toFixed(1)+'%';
  const meta=bar.querySelector('.etb-meta span');
  if(meta) meta.innerHTML=`<strong>${answered}</strong>/${total} ${tr('answered')}`;
}
function scrollToExamQ(idx){ const el=document.querySelector(`.quiz-q[data-eqid="${idx}"]`); if(el) el.scrollIntoView({behavior:'smooth',block:'center'}); }

function submitFullExam(auto){
  if(R.examSubmitted) return;
  if(!auto){
    const un=R.answers.filter(a=>a===null).length;
    if(un>0&&!confirm(tr('You have')+' '+un+' '+tr('unanswered questions. Submit anyway?'))) return;
  }
  R.examSubmitted=true;
  if(R.examTimer){clearInterval(R.examTimer);R.examTimer=null;}
  const total=R.quiz.length;
  const correct=R.answers.filter((a,i)=>a&&a===R.quiz[i].correct).length;
  const pct=Math.round(correct/total*100);
  const timeSec=Math.floor((Date.now()-R.examStart)/1000);
  saveRezResult(correct,total,pct,'Examen complet',R.faculty,true,'mixed');

  // Unlock answers
  const area=document.getElementById('rezExamArea');
  area.querySelectorAll('.quiz-q').forEach((qEl,idx)=>{
    const q=R.quiz[idx]; const ua=R.answers[idx];
    qEl.querySelectorAll('.quiz-opt').forEach((btn,bi)=>{
      const lt=['a','b','c','d'][bi];
      btn.classList.remove('selected');
      btn.disabled=true;
      if(lt===q.correct){btn.classList.add('correct');btn.insertAdjacentHTML('beforeend','<span class="qo-mark">✓</span>');}
      else if(lt===ua){btn.classList.add('incorrect');btn.insertAdjacentHTML('beforeend','<span class="qo-mark">✗</span>');}
      if(R.flags[idx]) qEl.querySelector('.qq-num').classList.add('qq-num-flag');
    });
    // Add explanation
    if(!qEl.querySelector('.quiz-explain')){
      qEl.insertAdjacentHTML('beforeend',`
        <div class="quiz-explain on"><strong>${tr('Explanation')}</strong><p>${escapeHtml(q.explain||'')}</p></div>
        <button class="qq-teach-btn" onclick="rezTeachMe(${idx},'rezExamArea')" id="rezTeachBtn_${idx}">📚 ${tr('Teach me like a professor')}</button>
        <div class="quiz-teach" id="rezTeach_${idx}"></div>`);
    }
  });

  // Results banner
  let verdict,levelClass;
  if(pct>=85){verdict=tr('Distinction — Excellent');levelClass='expert';}
  else if(pct>=70){verdict=tr('Merit');levelClass='advanced';}
  else if(pct>=50){verdict=tr('Passed (Promovat)');levelClass='intermediate';}
  else{verdict=tr('Not passed — keep studying');levelClass='beginner';}

  const banner=document.createElement('div');
  banner.className='quiz-finish';
  banner.id='examResultBanner';
  banner.innerHTML=`
    <h3><em>${tr('Exam complete!')}</em></h3>
    <div class="quiz-score-big">${correct}/${total}</div>
    <div class="quiz-score-lbl">${pct}% · ${Math.floor(timeSec/60)} min</div>
    <div class="quiz-level-badge ${levelClass}"><span>${pct>=50?'🏅':'📚'}</span><span>${verdict}</span></div>
    <div class="quiz-recommend" id="examNationalScore"><div class="typing-dots" style="justify-content:center;padding:16px"><span></span><span></span><span></span></div></div>
    <div class="quiz-finish-actions">
      <button class="qf-retry" onclick="resetFullExam()">🔄 ${tr('New exam')}</button>
      <button class="qf-ask" onclick="switchRezTab('heatmap')">📊 ${tr('View heatmap')}</button>
    </div>`;
  area.insertBefore(banner, area.firstChild);
  banner.scrollIntoView({behavior:'smooth',block:'start'});

  // National score estimation
  setTimeout(()=>genNationalScore(correct,total,pct,timeSec),300);
}

function genNationalScore(correct,total,pct,timeSec){
  const box=document.getElementById('examNationalScore');if(!box)return;
  const lm={en:'English',ro:'Romanian',de:'German',fr:'French',it:'Italian',es:'Spanish'};
  const prompt=`A Romanian medical student just finished a ${total}-question Rezidențiat mock exam. Score: ${correct}/${total} (${pct}%). Time: ${Math.floor(timeSec/60)} minutes. Faculty: ${R.faculty}. Language: ${lm[curLang]||'Romanian'}.

Based on historical Romanian Rezidențiat data (pass rate ~65-70%, median score ~58-62%, top 10% ≥75%):
## Scorul tău estimat național
Compare the student's score to national passing threshold (50%) and typical distribution. Be specific.
## Unde te situezi
Estimate percentile range: e.g. "top 25%", "above median", etc.
## Specialitățile accesibile
Based on this score, list 3-5 Romanian residency specialties that would likely be accessible (high-demand specialties need top 20%, others require passing).
## Recomandare finală
1-2 sentences: what to do next to improve ranking. Under 180 words total.`;
  let full='';
  streamClaudeAPI({mode:'chat',lang:curLang,prompt},
    (token)=>{if(full==='')box.innerHTML='';full+=token;box.innerHTML=md2html(full);},
    ()=>{},
    (err)=>{box.innerHTML=`<em style="color:#B91C1C">${escapeHtml(err)}</em>`;}
  );
}

function resetFullExam(){
  R.examActive=false;R.examSubmitted=false;
  if(R.examTimer){clearInterval(R.examTimer);R.examTimer=null;}
  document.getElementById('rezExamArea').innerHTML='';
  document.getElementById('examIntroCard').style.display='block';
}

// ── HEATMAP ──────────────────────────────────────────────────────────────────
function renderHeatmap(){
  const area=document.getElementById('heatmapArea');if(!area)return;
  const topics=REZ_TOPICS[R.faculty]||[];
  const fn={medicine:'Medicină',pharmacy:'Farmacie',dentistry:'Stomatologie'};

  let html=`<div style="margin-bottom:20px">
    <h3 style="font-family:'Cormorant Garamond',serif;font-size:28px;margin-bottom:6px">${tr('My preparation heatmap')} — ${tr(fn[R.faculty]||R.faculty)}</h3>
    <p style="color:var(--ink2);font-size:14px">${tr('Each topic colored by your average score. Click to practice weak topics.')}</p>
    <div style="display:flex;gap:14px;margin-top:10px;flex-wrap:wrap">
      <span style="display:flex;align-items:center;gap:6px;font-size:12.5px"><span style="width:14px;height:14px;border-radius:3px;background:#2E7D4F;display:inline-block"></span> ≥75% ${tr('Strong')}</span>
      <span style="display:flex;align-items:center;gap:6px;font-size:12.5px"><span style="width:14px;height:14px;border-radius:3px;background:#D97706;display:inline-block"></span> 50-74% ${tr('Developing')}</span>
      <span style="display:flex;align-items:center;gap:6px;font-size:12.5px"><span style="width:14px;height:14px;border-radius:3px;background:#B91C1C;display:inline-block"></span> &lt;50% ${tr('Weak')}</span>
      <span style="display:flex;align-items:center;gap:6px;font-size:12.5px"><span style="width:14px;height:14px;border-radius:3px;background:var(--cream2);border:1px solid var(--line);display:inline-block"></span> ${tr('Not tested yet')}</span>
    </div>
  </div>
  <div class="heatmap-grid">`;

  topics.forEach(([ico,name])=>{
    const key=`${R.faculty}::${name}`;
    const p=R.progress[key];
    let bg='var(--cream2)',border='var(--line)',textCol='var(--ink2)',pctTxt='',barW=0;
    if(p&&p.total){
      const pct=Math.round(p.correct/p.total*100);
      barW=pct;
      pctTxt=pct+'%';
      if(pct>=75){bg='rgba(46,125,79,.12)';border='rgba(46,125,79,.4)';textCol='#1F5D38';}
      else if(pct>=50){bg='rgba(217,119,6,.1)';border='rgba(217,119,6,.35)';textCol='#92400E';}
      else{bg='rgba(185,28,28,.08)';border='rgba(185,28,28,.3)';textCol='#991B1B';}
    }
    html+=`<div class="heatmap-card" style="background:${bg};border-color:${border}" onclick="heatmapPractice('${name.replace(/'/g,"\\'")}','${ico}')">
      <div class="hm-top">
        <span class="hm-ico">${ico}</span>
        <span class="hm-pct" style="color:${textCol}">${pctTxt||'—'}</span>
      </div>
      <div class="hm-name" style="color:${p&&p.total?'var(--ink)':'var(--ink2)'}">${tr(name)}</div>
      ${p&&p.total?`<div class="hm-bar"><div style="width:${barW}%;background:${barW>=75?'#2E7D4F':barW>=50?'#D97706':'#B91C1C'}"></div></div>`:'<div class="hm-bar"></div>'}
      ${p&&p.attempts?('<div class="hm-meta">'+p.attempts+' '+tr('tests')+'</div>'):'<div class="hm-meta" style="opacity:.5">'+tr('Not tested yet')+'</div>'}
    </div>`;
  });

  html+=`</div>`;

  // Overall stats
  const tested=topics.filter(([,n])=>R.progress[`${R.faculty}::${n}`]?.total>0);
  const avg=tested.length?Math.round(tested.reduce((s,[,n])=>{const p=R.progress[`${R.faculty}::${n}`];return s+Math.round(p.correct/p.total*100);},0)/tested.length):0;
  html+=`<div class="heatmap-summary">
    <div class="hm-sum-item"><div class="hm-sum-n">${tested.length}/${topics.length}</div><div class="hm-sum-l">${tr('Topics tested')}</div></div>
    <div class="hm-sum-item"><div class="hm-sum-n" style="color:${avg>=75?'var(--ok)':avg>=50?'var(--warn)':'var(--danger)'}">${avg||'—'}%</div><div class="hm-sum-l">${tr('Overall average')}</div></div>
    <div class="hm-sum-item">
      <button class="btn-primary-big" style="max-width:220px;padding:12px" onclick="startQuickSession()">⚡ ${tr('Quick session — weakest topics')}</button>
    </div>
  </div>`;

  area.innerHTML=html;
}

function heatmapPractice(name,ico){
  R.topic=name; R.topicIcon=ico;
  // Highlight in grid
  document.querySelectorAll('#rezTopicGrid .subject-btn-big').forEach(btn=>{
    btn.classList.toggle('act',btn.dataset.topic===name);
  });
  updateRezSel();
  switchRezTab('practice');
}

// ── HISTORY ──────────────────────────────────────────────────────────────────
function renderRezHistory(){
  const area=document.getElementById('rezHistoryArea');if(!area)return;
  const entries=Object.values(R.progress).filter(e=>e.faculty===R.faculty);
  if(!entries.length){
    area.innerHTML=`<div class="review-empty"><div class="big-ico">📈</div><p>${tr('No tests yet. Start a practice test or full exam to build your history.')}</p></div>`;
    return;
  }
  entries.sort((a,b)=>{
    const la=a.runs?.length?new Date(a.runs[a.runs.length-1].date):0;
    const lb=b.runs?.length?new Date(b.runs[b.runs.length-1].date):0;
    return lb-la;
  });
  let html=`<div class="history-table">
    <div class="ht-row head"><div>${tr('Topic')}</div><div>${tr('Tests')}</div><div>${tr('Avg')}</div><div>${tr('Trend')}</div><div>${tr('Last')}</div></div>`;
  entries.forEach(e=>{
    const avg=Math.round(e.correct/e.total*100);
    const runs=e.runs||[];
    const last=runs[runs.length-1];
    let trend='—';
    if(runs.length>=3){
      const r=runs.slice(-3).map(r=>r.pct);const e2=runs.slice(0,3).map(r=>r.pct);
      const ra=r.reduce((a,b)=>a+b,0)/r.length;const ea=e2.reduce((a,b)=>a+b,0)/e2.length;
      if(ra>ea+5) trend=`<span style="color:var(--ok)">↗ +${Math.round(ra-ea)}%</span>`;
      else if(ra<ea-5) trend=`<span style="color:var(--danger)">↘ ${Math.round(ra-ea)}%</span>`;
      else trend=`<span style="color:var(--ink2)">→</span>`;
    }
    const col=avg>=75?'var(--ok)':avg>=50?'var(--warn)':'var(--danger)';
    html+=`<div class="ht-row" onclick="heatmapPractice('${e.topic.replace(/'/g,"\\'")}','')">
      <div class="ht-spec">${escapeHtml(tr(e.topic))}</div>
      <div>${e.attempts}</div>
      <div class="ht-score" style="color:${col}">${avg}%</div>
      <div>${trend}</div>
      <div style="font-size:12px;color:var(--ink2)">${last?new Date(last.date).toLocaleDateString():'-'}</div>
    </div>`;
  });
  html+=`</div>`;
  area.innerHTML=html;
}

/* ============ RADIOLOGY VISION ============ */
let radImageData = null, radImageMime = null;
function radUpload(file){
  if(!file) return;
  if(file.size > 5*1024*1024){
    alert((curLang==='ro'?'Imagine prea mare (max 5MB)':'Image too large (max 5MB)'));
    return;
  }
  if(!/^image\//.test(file.type)){
    alert((curLang==='ro'?'Format nesuportat':'Unsupported format'));
    return;
  }
  radImageMime = file.type;
  const reader = new FileReader();
  reader.onload = (e)=>{
    radImageData = e.target.result; // full data URL
    document.getElementById('radImg').src = radImageData;
    document.getElementById('radPreview').classList.add('on');
    document.getElementById('radResult').classList.remove('on');
  };
  reader.readAsDataURL(file);
}
function radClear(){
  radImageData = null; radImageMime = null;
  document.getElementById('radFile').value = '';
  document.getElementById('radPreview').classList.remove('on');
  document.getElementById('radResult').classList.remove('on');
  document.getElementById('radResult').innerHTML = '';
}
function radAnalyze(){
  if(!radImageData) return;
  const btn = document.getElementById('radAnalyzeBtn');
  btn.disabled = true;
  const out = document.getElementById('radResult');
  out.classList.add('on');
  out.innerHTML = `<h3>🤖 ${curLang==='ro'?'Analiză în curs':'Analyzing'}…</h3><div class="typing-dots"><span></span><span></span><span></span></div>`;
  let fullText='';
  streamClaudeAPI({mode:'vision', lang:curLang, image_base64:radImageData, image_mime:radImageMime},
    (token)=>{if(fullText==='')out.innerHTML=''; fullText+=token; out.innerHTML = md2html(fullText);},
    ()=>{btn.disabled=false;},
    (err)=>{out.innerHTML = `<div style="color:#B91C1C"><strong>Error:</strong> ${escapeHtml(err)}</div>`; btn.disabled=false;}
  );
}
// Drag and drop for radiology
(function(){
  const drop = document.getElementById('radDrop');
  if(!drop) return;
  ['dragenter','dragover'].forEach(ev=>drop.addEventListener(ev,e=>{e.preventDefault();drop.classList.add('drag');}));
  ['dragleave','drop'].forEach(ev=>drop.addEventListener(ev,e=>{e.preventDefault();drop.classList.remove('drag');}));
  drop.addEventListener('drop',e=>{const f=e.dataTransfer.files[0]; if(f)radUpload(f);});
})();

/* ============ INIT ============ */
applyTranslations();

// Initialize tutor page
renderYears();
renderSubjects();
updateSelectionSummary();

// Initialize rezidentiat page
if(typeof renderRezTopics === 'function') renderRezTopics();
if(typeof updateRezSel === 'function') updateRezSel();

// Course textarea — update stats on input
(function(){
  const ta = document.getElementById('courseText');
  if(ta) ta.addEventListener('input', updateCourseStats);
})();

// ── Live ticker news ──────────────────────────────────────────
let tickerNewsCache = {};

function loadTickerNews(lang){
  if(tickerNewsCache[lang]){ renderTicker(tickerNewsCache[lang]); return; }
  fetch('news.php?lang='+lang)
    .then(r=>r.json())
    .then(data=>{
      if(data.ok && data.items && data.items.length){
        tickerNewsCache[lang] = data.items;
        renderTicker(data.items);
      }
    })
    .catch(()=>{});
}

function renderTicker(items){
  const track = document.getElementById('tickerTrack');
  if(!track || !items || !items.length) return;
  const makeSpan = (item)=>{
    const src = item.source ? `<strong style="color:var(--accent2)">[${escapeHtml(item.source)}]</strong> ` : '';
    const date = item.date ? ` <em style="opacity:.6;font-size:.9em">(${escapeHtml(item.date)})</em>` : '';
    return `<span>${src}${escapeHtml(item.title)}${date}</span>`;
  };
  track.innerHTML = items.map(makeSpan).join('') + items.map(makeSpan).join('');
  track.style.animation = 'none';
  requestAnimationFrame(()=>{
    const w = track.scrollWidth / 2;
    const dur = Math.max(60, w / 80);
    track.style.animation = `slide ${dur}s linear infinite`;
  });
}

loadTickerNews(curLang);
