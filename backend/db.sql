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
    "price" integer NOT NULL,
    CONSTRAINT "PK_e4a433f76768045f7a2efca66e2" PRIMARY KEY ("id")
) WITH (oids = false);

INSERT INTO "bike" ("id", "name", "description", "disponibility", "size", "gender", "dateMaintenance", "price") VALUES
(1,	'vélo hollandais 1881 classic',	'Assistance électrique, boite Nexus 7 vitesses pour relief valloné avec freins tout temps actionnés par levier, réglable en hauteur, position assise droite afin de préserver la courbure naturelle de la colonne vertébrale, avec porte bagage permettant de transporter une charge de 25 kg maximum',	't',	1,	'féminin',	'2023-07-01 00:00:00',	30),
(2,	'vélo hollandais 1881 classic',	'Assistance électrique, boite Nexus 7 vitesses pour relief valloné avec freins tout temps actionnés par levier, réglable en hauteur, position assise droite afin de préserver la courbure naturelle de la colonne vertébrale, avec porte bagage permettant de transporter une charge de 25 kg maximum',	't',	2,	'masculin',	'2023-07-01 00:00:00',	30),
(3,	'Street low premium',	'Vélo hollandais léger, facile à vivre (équipé d''une boîte de vitesses, il n''a pas de risque de dérailler car la chaîne ne se déplace pas, système de freinage efficace, porte bagage avant avec une capacité de charge de 15 kgs',	't',	1,	'féminin',	'2023-07-01 00:00:00',	30),
(4,	'Street low premium',	'Vélo hollandais léger, facile à vivre (équipé d''une boîte de vitesses, il n''a pas de risque de dérailler car la chaîne ne se déplace pas, système de freinage efficace, porte bagage avant avec une capacité de charge de 15 kgs',	't',	2,	'masculin',	'2023-07-01 00:00:00',	30),
(5,	'Van rysel',	'VELO ROUTE EDR AF ULTEGRA BLANC NOIR 1 400€  Payez 4x 350€ sans frais par CB Dont 0,02€ d''éco-participation  4.7/5 Voir les 33 avis 8569095  Notre nouveau vélo d''endurance en aluminium vous accompagnera sur vos sorties sportives. L EDR AF ULTEGRA est une machine qui allie fiabilité et performance.  Grand frère de L EDR AF 105, il bénéficie toujours du cadre endurance en aluminium à épaisseur variable mais bénéficie de la fiabilité du groupe ULTEGRA et de l’aérodynamisme des roues Fulcrum racing',	't',	2,	'masculin',	'2023-07-01 00:00:00',	30),
(6,	'Exceed CF 6',	'Léger, agile et rapide, les composants haut de gamme du Exceed CF 6 et son cadre en carbone vous permettent de faire des balades sur les sentiers autour de chez vous entre deux courses. Poids: 10.85 kg',	't',	1,	'féminin',	'2023-07-01 00:00:00',	30),
(7,	'vélo hollandais 1881 classic',	'Léger, agile et rapide, les composants haut de gamme du Exceed CF 6 et son cadre en carbone vous permettent de faire des balades sur les sentiers autour de chez vous entre deux courses. Poids: 10.85 kg',	't',	3,	'féminin',	'2023-07-01 00:00:00',	30);

DROP TABLE IF EXISTS "bike_bike_categories_id_bike_categories";
CREATE TABLE "public"."bike_bike_categories_id_bike_categories" (
    "bikeId" integer NOT NULL,
    "bikeCategoriesId" integer NOT NULL,
    CONSTRAINT "PK_8a36bbbede4740a2b9989cac65e" PRIMARY KEY ("bikeId", "bikeCategoriesId")
) WITH (oids = false);

CREATE INDEX "IDX_656d5d563eae311387a47f1975" ON "public"."bike_bike_categories_id_bike_categories" USING btree ("bikeCategoriesId");

CREATE INDEX "IDX_bbba028eef4195d4defc8951a8" ON "public"."bike_bike_categories_id_bike_categories" USING btree ("bikeId");


DROP TABLE IF EXISTS "bike_categories";
DROP SEQUENCE IF EXISTS bike_categories_id_seq;
CREATE SEQUENCE bike_categories_id_seq INCREMENT 1 MINVALUE 1 MAXVALUE 2147483647 CACHE 1;

CREATE TABLE "public"."bike_categories" (
    "id" integer DEFAULT nextval('bike_categories_id_seq') NOT NULL,
    "name" character varying NOT NULL,
    CONSTRAINT "PK_e0ce1fd7f4b400dd897b17f2904" PRIMARY KEY ("id")
) WITH (oids = false);

INSERT INTO "bike_categories" ("id", "name") VALUES
(1,	'electrique'),
(2,	'vtt'),
(3,	'vélos professionels'),
(4,	'vélos vintage'),
(5,	'accessoires vélos');

DROP TABLE IF EXISTS "bike_image_id_images";
CREATE TABLE "public"."bike_image_id_images" (
    "bikeId" integer NOT NULL,
    "imagesId" integer NOT NULL,
    CONSTRAINT "PK_70a1dc045961f013e265ead7943" PRIMARY KEY ("bikeId", "imagesId")
) WITH (oids = false);

CREATE INDEX "IDX_6bef26d98bbdf6e17202636c30" ON "public"."bike_image_id_images" USING btree ("imagesId");

CREATE INDEX "IDX_9969d51778c08d41f9d6f46b41" ON "public"."bike_image_id_images" USING btree ("bikeId");

INSERT INTO "bike_image_id_images" ("bikeId", "imagesId") VALUES
(1,	4),
(2,	4),
(3,	4),
(4,	5),
(6,	2),
(5,	3),
(7,	4);

DROP TABLE IF EXISTS "images";
DROP SEQUENCE IF EXISTS images_id_seq;
CREATE SEQUENCE images_id_seq INCREMENT 1 MINVALUE 1 MAXVALUE 2147483647 CACHE 1;

CREATE TABLE "public"."images" (
    "id" integer DEFAULT nextval('images_id_seq') NOT NULL,
    "url" character varying NOT NULL,
    CONSTRAINT "PK_1fe148074c6a1a91b63cb9ee3c9" PRIMARY KEY ("id")
) WITH (oids = false);

INSERT INTO "images" ("id", "url") VALUES
(1,	'https://media.discordapp.net/attachments/1126873629095895162/1126873665389219861/pexels-jose-rodriguez-ortega-16778540.jpg?width=1007&height=671'),
(2,	'https://media.discordapp.net/attachments/1126873629095895162/1126889976257331200/pexels-kristian-aleksandrov-16760353.jpg?width=894&height=671'),
(3,	'https://media.discordapp.net/attachments/1126873629095895162/1126890123338973254/pexels-taryn-elliott-4198566.jpg?width=447&height=671'),
(4,	'https://media.discordapp.net/attachments/1126873629095895162/1126890233040998480/pexels-timea-kadar-2130611.jpg?width=447&height=671'),
(5,	'https://media.discordapp.net/attachments/1126873629095895162/1126890533126668409/pexels-hakan-kiymaz-10951001.jpg?width=1007&height=671'),
(6,	'https://media.discordapp.net/attachments/1126873629095895162/1126891036279574578/pexels-alain-frechette-1431117.jpg?width=1011&height=671'),
(7,	'https://media.discordapp.net/attachments/1126873629095895162/1126891409622974535/pexels-lumn-191042.jpg?width=1007&height=671');

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
    "admin" boolean NOT NULL,
    "phonenum" character varying NOT NULL,
    "gender" character varying NOT NULL,
    "password" character varying NOT NULL,
    "email" character varying NOT NULL,
    "lastName" character varying NOT NULL,
    "firstName" character varying NOT NULL,
    CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id")
) WITH (oids = false);

INSERT INTO "users" ("id", "admin", "phonenum", "gender", "password", "email", "lastName", "firstName") VALUES
(1,	't',	'0666924101',	'femme',	'$argon2id$v=19$m=65536,t=3,p=4$f1CviNp1Pllx2mhXRmRORQ$1R/8cnTDRLODwuHF1/+1zbUkobZcd0Rs6Rrm8ueqBxk',	'priscillia.ammeux@gmail.com',	'Ammeux',	'Priscillia'),
(2,	'f',	'0123456789',	'homme',	'$argon2id$v=19$m=65536,t=3,p=4$DSLPJr1O2sDTZWgPh/MPpA$WMsF9alUKpsECmkcFlxSMXp5VyWCOhhxhWZc1fSlQQ4',	'paul.jacques@gmail.com',	'Paul',	'Jacques'),
(3,	'f',	'0134567998',	'homme',	'$argon2id$v=19$m=65536,t=3,p=4$sPCYabKiGv380FE+z4JFCQ$OOtPlxy1/VNAmgBqC0QaehbfbeZInADrcNcvKbH5bjg',	'liptonicetea@gmail.com',	'Lipton',	'Ice Tea');

ALTER TABLE ONLY "public"."bike_bike_categories_id_bike_categories" ADD CONSTRAINT "FK_656d5d563eae311387a47f1975e" FOREIGN KEY ("bikeCategoriesId") REFERENCES bike_categories(id) ON UPDATE CASCADE ON DELETE CASCADE NOT DEFERRABLE;
ALTER TABLE ONLY "public"."bike_bike_categories_id_bike_categories" ADD CONSTRAINT "FK_bbba028eef4195d4defc8951a80" FOREIGN KEY ("bikeId") REFERENCES bike(id) ON UPDATE CASCADE ON DELETE CASCADE NOT DEFERRABLE;

ALTER TABLE ONLY "public"."bike_image_id_images" ADD CONSTRAINT "FK_6bef26d98bbdf6e17202636c303" FOREIGN KEY ("imagesId") REFERENCES images(id) ON UPDATE CASCADE ON DELETE CASCADE NOT DEFERRABLE;
ALTER TABLE ONLY "public"."bike_image_id_images" ADD CONSTRAINT "FK_9969d51778c08d41f9d6f46b411" FOREIGN KEY ("bikeId") REFERENCES bike(id) ON UPDATE CASCADE ON DELETE CASCADE NOT DEFERRABLE;

ALTER TABLE ONLY "public"."rent" ADD CONSTRAINT "FK_e518925b048138c568cefc2ddf1" FOREIGN KEY ("orderIdId") REFERENCES "order"(id) NOT DEFERRABLE;

-- 2023-07-11 08:42:56.826746+00