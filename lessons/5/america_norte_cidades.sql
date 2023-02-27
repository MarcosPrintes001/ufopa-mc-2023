BEGIN TRANSACTION;

DROP TABLE IF EXISTS "america_norte_cidades";

CREATE TABLE IF NOT EXISTS america_norte_cidades (
"id" INTEGER,
"cidade" TEXT NOT NULL UNIQUE,
"pais" TEXT NOT NULL,
"populacao" INTEGER NOT NULL,
"latitude" REAL NOT NULL,
"longitude" REAL NOT NULL,
PRIMARY KEY ("id" AUTOINCREMENT)
);

INSERT INTO "america_norte_cidades" (
    cidade,
    pais,
    populacao,
    latitude,
    longitude
    ) values 
    ("Guadalajara", "México", 1500800,20.659699, -103.349609),
    ("Toronto","Canadá",2795060,43.653226,-79.383184),
    ("Houston","EUA",2195914,29.760427,-95.369803),
    ("New York","EUA",8405837,40.712784,-74.005941),
    ("Philadelphia","EUA",1553165,39.952584,-75.165222),
    ("Havana","Cuba",2106146,23.05407,-82.345189),
    ("Mexico City","México",8555500,19.432608,-99.133208),
    ("Phoenix","EUA",1513367,33.448377,-112.074037),
    ("Los Angeles","EUA",3884307,34.052234,-118.243685),
    ("Ecatepec de Morelos","México",1742000,19.601841,-99.050674),
    ("Montreal","Canadá",1717767,45.501689,-73.567256),
    ("Chicago","EUA",2718782,41.878114,-87.629798);

COMMIT;