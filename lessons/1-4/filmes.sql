BEGIN TRANSACTION;

DROP TABLE IF EXISTS "filmes";

-- https://www.sqlite.org/datatype3.html
CREATE TABLE IF NOT EXISTS filmes (
"id" INTEGER,
"titulo" TEXT NOT NULL UNIQUE,
"diretor" TEXT NOT NULL,
"ano" INTEGER NOT NULL,
"duracao_minutos" INTEGER NOT NULL,
PRIMARY KEY ("id" AUTOINCREMENT)
);

INSERT INTO "filmes" (
    titulo, 
    diretor, 
    ano, 
    duracao_minutos
    ) values 
    ("Toy Story","John Lasseter",1995,81),
    ("Vida de Inseto","John Lasseter",1998,95),
    ("Toy Story 2","John Lasseter",1999,93),
    ("Monstros S.A.","Pete Docter",2001,92),
    ("Procurando Nemo","Andrew Stanton",2003,107),
    ("Os Incríveis","Brad Bird",2004,116),
    ("Carros","John Lasseter",2006,117),
    ("Ratatouille","Brad Bird",2007,115),
    ("WALL-E","Andrew Stanton",2008,104),
    ("Up - Altas Aventuras","Pete Docter",2009,101),
    ("Toy Story 3","Lee Unkrich",2010,103),
    ("Carros 2","John Lasseter",2011,120),
    ("Valente","Brenda Chapman",2012,102),
    ("Universidade Monstros","Dan Scanlon",2013,110);

COMMIT;