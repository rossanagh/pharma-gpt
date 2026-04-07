-- Rulează în DBeaver pe baza pharma_gpt (PostgreSQL) dacă vrei să golești manual datele legate de useri,
-- apoi repornește backend-ul cu profilul `postgres` ca să ruleze seed-ul.
-- Ordinea respectă FK-urile tipice; ajustează dacă ai constrângeri suplimentare.

DELETE FROM direct_messages;
DELETE FROM direct_conversations;
DELETE FROM forum_likes;
DELETE FROM forum_comments;
DELETE FROM forum_posts;
DELETE FROM users;
