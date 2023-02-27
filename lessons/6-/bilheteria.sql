BEGIN TRANSACTION;

DROP TABLE IF EXISTS "bilheteria";

-- https://sqlite.org/foreignkeys.html 
PRAGMA foreign_keys = ON;

CREATE TABLE IF NOT EXISTS "bilheteria" (
"id" INTEGER,
"filme_id" INTEGER NOT NULL,
"classificacao" REAL NOT NULL,
"domestica_venda" INTEGER NOT NULL,
"internacional_venda" INTEGER NOT NULL,
PRIMARY KEY ("id" AUTOINCREMENT)
FOREIGN KEY (filme_id) REFERENCES filmes (id)
);

INSERT INTO "bilheteria" (
    filme_id,
    classificacao, 
    domestica_venda, 
    internacional_venda
    ) VALUES 
    (5, 8.2, 380843261, 555900000),
    (14, 7.4, 268492764, 475066843),
    (8, 8, 206445654, 417277164),
    (12, 6.4, 191452396, 368400000),
    (3, 7.9, 245852179, 239163000),
    (6, 8, 261441092, 370001000),
    (9, 8.5, 223808164, 297503696),
    (11, 8.4, 415004880, 648167031),
    (1, 8.3, 191796233, 170162503),
    (7, 7.2, 244082982, 217900167),
    (10, 8.3, 293004164, 438338580),
    (4, 8.1, 289916256, 272900000),
    (2, 7.2, 162798565, 200600000),
    (13, 7.2, 237283207, 301700000);

COMMIT;