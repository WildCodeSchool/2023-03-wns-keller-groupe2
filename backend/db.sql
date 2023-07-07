-- Adminer 4.8.1 PostgreSQL 15.3 (Debian 15.3-1.pgdg120+1) dump

DROP TABLE IF EXISTS "bike";
DROP SEQUENCE IF EXISTS bike_id_seq;
CREATE SEQUENCE bike_id_seq INCREMENT 1 MINVALUE 1 MAXVALUE 2147483647 CACHE 1;

CREATE TABLE "public"."bike" (
    "id" integer DEFAULT nextval('bike_id_seq') NOT NULL,
    "name" character varying NOT NULL,
    "description" character varying NOT NULL,
    "disponibility" boolean NOT NULL,
    "size" integer NOT NULL,
    "gender" character varying NOT NULL,
    "dateMaintenance" timestamp NOT NULL,
    CONSTRAINT "PK_e4a433f76768045f7a2efca66e2" PRIMARY KEY ("id")
) WITH (oids = false);

INSERT INTO "bike" ("id", "name", "description", "disponibility", "size", "gender", "dateMaintenance") VALUES
(1,	'vélo hollandais 1881 classic',	'Assistance électrique, boite Nexus 7 vitesses pour relief valloné avec freins tout temps actionnés par levier, réglable en hauteur, position assise droite afin de préserver la courbure naturelle de la colonne vertébrale, avec porte bagage permettant de transporter une charge de 25 kg maximum',	't',	1,	'féminin',	'2023-07-01 00:00:00'),
(2,	'vélo hollandais 1881 classic',	'Assistance électrique, boite Nexus 7 vitesses pour relief valloné avec freins tout temps actionnés par levier, réglable en hauteur, position assise droite afin de préserver la courbure naturelle de la colonne vertébrale, avec porte bagage permettant de transporter une charge de 25 kg maximum',	't',	2,	'masculin',	'2023-07-01 00:00:00'),
(3,	'Street low premium',	'Vélo hollandais léger, facile à vivre (équipé d''une boîte de vitesses, il n''a pas de risque de dérailler car la chaîne ne se déplace pas, système de freinage efficace, porte bagage avant avec une capacité de charge de 15 kgs',	't',	1,	'féminin',	'2023-07-01 00:00:00'),
(4,	'Street low premium',	'Vélo hollandais léger, facile à vivre (équipé d''une boîte de vitesses, il n''a pas de risque de dérailler car la chaîne ne se déplace pas, système de freinage efficace, porte bagage avant avec une capacité de charge de 15 kgs',	't',	2,	'masculin',	'2023-07-01 00:00:00'),
(5,	'Van rysel',	'VELO ROUTE EDR AF ULTEGRA BLANC NOIR 1 400€  Payez 4x 350€ sans frais par CB Dont 0,02€ d''éco-participation  4.7/5 Voir les 33 avis 8569095  Notre nouveau vélo d''endurance en aluminium vous accompagnera sur vos sorties sportives. L EDR AF ULTEGRA est une machine qui allie fiabilité et performance.  Grand frère de L EDR AF 105, il bénéficie toujours du cadre endurance en aluminium à épaisseur variable mais bénéficie de la fiabilité du groupe ULTEGRA et de l’aérodynamisme des roues Fulcrum racing',	't',	2,	'masculin',	'2023-07-01 00:00:00'),
(6,	'Exceed CF 6',	'Léger, agile et rapide, les composants haut de gamme du Exceed CF 6 et son cadre en carbone vous permettent de faire des balades sur les sentiers autour de chez vous entre deux courses. Poids: 10.85 kg',	't',	1,	'féminin',	'2023-07-01 00:00:00'),
(7,	'vélo hollandais 1881 classic',	'Léger, agile et rapide, les composants haut de gamme du Exceed CF 6 et son cadre en carbone vous permettent de faire des balades sur les sentiers autour de chez vous entre deux courses. Poids: 10.85 kg',	't',	3,	'féminin',	'2023-07-01 00:00:00');

DROP TABLE IF EXISTS "bike_categorie";
DROP SEQUENCE IF EXISTS bike_categorie_id_seq;
CREATE SEQUENCE bike_categorie_id_seq INCREMENT 1 MINVALUE 1 MAXVALUE 2147483647 CACHE 1;

CREATE TABLE "public"."bike_categorie" (
    "id" integer DEFAULT nextval('bike_categorie_id_seq') NOT NULL,
    "name" character varying NOT NULL,
    CONSTRAINT "PK_f394a2460c2385f4f21386d667d" PRIMARY KEY ("id")
) WITH (oids = false);


DROP TABLE IF EXISTS "images";
DROP SEQUENCE IF EXISTS images_id_seq;
CREATE SEQUENCE images_id_seq INCREMENT 1 MINVALUE 1 MAXVALUE 2147483647 CACHE 1;

CREATE TABLE "public"."images" (
    "id" integer DEFAULT nextval('images_id_seq') NOT NULL,
    "url" character varying NOT NULL,
    CONSTRAINT "PK_1fe148074c6a1a91b63cb9ee3c9" PRIMARY KEY ("id")
) WITH (oids = false);


DROP TABLE IF EXISTS "order";
DROP SEQUENCE IF EXISTS order_id_seq;
CREATE SEQUENCE order_id_seq INCREMENT 1 MINVALUE 1 MAXVALUE 2147483647 CACHE 1;

CREATE TABLE "public"."order" (
    "id" integer DEFAULT nextval('order_id_seq') NOT NULL,
    "doo" timestamp NOT NULL,
    "total_amount" integer NOT NULL,
    "pay" boolean NOT NULL,
    CONSTRAINT "PK_1031171c13130102495201e3e20" PRIMARY KEY ("id")
) WITH (oids = false);


DROP TABLE IF EXISTS "rent";
DROP SEQUENCE IF EXISTS rent_id_seq;
CREATE SEQUENCE rent_id_seq INCREMENT 1 MINVALUE 1 MAXVALUE 2147483647 CACHE 1;

CREATE TABLE "public"."rent" (
    "id" integer DEFAULT nextval('rent_id_seq') NOT NULL,
    "start_date" timestamp NOT NULL,
    "end_date" timestamp NOT NULL,
    "amount" integer NOT NULL,
    "orderIdId" integer,
    CONSTRAINT "PK_211f726fd8264e82ff7a2b86ce2" PRIMARY KEY ("id")
) WITH (oids = false);


DROP TABLE IF EXISTS "shop";
DROP SEQUENCE IF EXISTS shop_id_seq;
CREATE SEQUENCE shop_id_seq INCREMENT 1 MINVALUE 1 MAXVALUE 2147483647 CACHE 1;

CREATE TABLE "public"."shop" (
    "id" integer DEFAULT nextval('shop_id_seq') NOT NULL,
    "name" character varying NOT NULL,
    "location" character varying NOT NULL,
    "phonenum" integer NOT NULL,
    "email" character varying NOT NULL,
    CONSTRAINT "PK_ad47b7c6121fe31cb4b05438e44" PRIMARY KEY ("id")
) WITH (oids = false);

INSERT INTO "shop" ("id", "name", "location", "phonenum", "email") VALUES
(2,	'Rent Lille',	'Lille',	0,	'rent-lille@mail.com'),
(3,	'Rent Lyon',	'Lyon',	0,	'rent-lyon@mail.com'),
(4,	'Rent Nantes',	'Nantes',	0,	'rent-nantes@mail.com'),
(1,	'Rent Chambéry',	'Chambéry',	0,	'rent-chambery@mail.com');

DROP TABLE IF EXISTS "users";
DROP SEQUENCE IF EXISTS users_id_seq;
CREATE SEQUENCE users_id_seq INCREMENT 1 MINVALUE 1 MAXVALUE 2147483647 CACHE 1;

CREATE TABLE "public"."users" (
    "id" integer DEFAULT nextval('users_id_seq') NOT NULL,
    "firstName" character varying NOT NULL,
    "lastName" character varying NOT NULL,
    "email" character varying NOT NULL,
    "password" character varying NOT NULL,
    "gender" character varying NOT NULL,
    "dob" timestamp NOT NULL,
    "phonenum" character varying NOT NULL,
    "admin" boolean NOT NULL,
    CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id")
) WITH (oids = false);

INSERT INTO "users" ("id", "firstName", "lastName", "email", "password", "gender", "dob", "phonenum", "admin") VALUES
(1,	'Paul',	'Pierre',	'paul@mail.com',	'password',	'masculin',	'1990-07-10 00:00:00',	'0123456789',	'f'),
(2,	'Jessica',	'Jolie',	'lolita@mail.com',	'password',	'féminin',	'1987-05-05 00:00:00',	'0612345678',	'f'),
(5,	'Romain',	'Pourchaux',	'romain@mail.com',	'password',	'masculin',	'1990-07-10 00:00:00',	'0722222222',	't'),
(6,	'David',	'De Abreu',	'david@mail.com',	'password',	'masculin',	'1985-01-01 00:00:00',	'0622222222',	't'),
(7,	'Emma',	'Lapierre',	'emma@mail.com',	'password',	'féminin',	'2000-02-23 00:00:00',	'0785858585',	'f'),
(3,	'Priscillia',	'Ammeux',	'priscillia.ammeux@gmail.com',	'password',	'féminin',	'1987-05-05 00:00:00',	'0611111111',	't'),
(4,	'Valentin',	'Wacquet',	'valentin@email.com',	'password',	'masculin',	'1996-03-06 00:00:00',	'0711111111',	't');

ALTER TABLE ONLY "public"."rent" ADD CONSTRAINT "FK_e518925b048138c568cefc2ddf1" FOREIGN KEY ("orderIdId") REFERENCES "order"(id) NOT DEFERRABLE;

-- 2023-07-07 10:27:14.34349+00