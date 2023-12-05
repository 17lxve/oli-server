CREATE TABLE "Classes" (
	"id" serial NOT NULL,
	"niveau" TEXT NOT NULL,
	"filiere" TEXT NOT NULL,
	CONSTRAINT "Classes_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "Etudiants" (
	"id" serial NOT NULL,
	"nom" TEXT NOT NULL,
	"prenom" TEXT NOT NULL,
	"matricule" TEXT NOT NULL,
	"classe" int NOT NULL,
	CONSTRAINT "Etudiants_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "Surveillants" (
	"id" serial NOT NULL,
	"nom" TEXT NOT NULL,
	"prenom" TEXT NOT NULL,
	"mdp" TEXT NOT NULL,
	"admin" int NOT NULL,
	CONSTRAINT "Surveillants_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "Correcteurs" (
	"id" serial NOT NULL,
	"nom" TEXT NOT NULL,
	"prenom" TEXT NOT NULL,
	"mdp" TEXT NOT NULL,
	"admin" int NOT NULL,
	CONSTRAINT "Correcteurs_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "Admins" (
	"id" serial NOT NULL,
	"nom" TEXT NOT NULL,
	"prenom" TEXT NOT NULL,
	"mdp" TEXT NOT NULL,
	CONSTRAINT "Admins_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "QR" (
	"id" serial NOT NULL,
	"surveillant" int NOT NULL,
	"correcteur" int NOT NULL,
	"etudiant" int NOT NULL,
	"note" int NOT NULL,
	"devoir" int NOT NULL,
	CONSTRAINT "QR_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "Devoirs" (
	"id" serial NOT NULL,
	"classe" int NOT NULL,
	CONSTRAINT "Devoirs_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "Notes" (
	"id" serial NOT NULL,
	"etudiant" int NOT NULL,
	"devoir" int NOT NULL,
	CONSTRAINT "Notes_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);




ALTER TABLE "Etudiants" ADD CONSTRAINT "Etudiants_fk0" FOREIGN KEY ("classe") REFERENCES "Classes"("id");

ALTER TABLE "Surveillants" ADD CONSTRAINT "Surveillants_fk0" FOREIGN KEY ("admin") REFERENCES "Admins"("id");

ALTER TABLE "Correcteurs" ADD CONSTRAINT "Correcteurs_fk0" FOREIGN KEY ("admin") REFERENCES "Admins"("id");


ALTER TABLE "QR" ADD CONSTRAINT "QR_fk0" FOREIGN KEY ("surveillant") REFERENCES "Surveillants"("id");
ALTER TABLE "QR" ADD CONSTRAINT "QR_fk1" FOREIGN KEY ("correcteur") REFERENCES "Correcteurs"("id");
ALTER TABLE "QR" ADD CONSTRAINT "QR_fk2" FOREIGN KEY ("etudiant") REFERENCES "Etudiants"("id");
ALTER TABLE "QR" ADD CONSTRAINT "QR_fk3" FOREIGN KEY ("note") REFERENCES "Notes"("id");
ALTER TABLE "QR" ADD CONSTRAINT "QR_fk4" FOREIGN KEY ("devoir") REFERENCES "Devoirs"("id");

ALTER TABLE "Devoirs" ADD CONSTRAINT "Devoirs_fk0" FOREIGN KEY ("classe") REFERENCES "Classes"("id");

ALTER TABLE "Notes" ADD CONSTRAINT "Notes_fk0" FOREIGN KEY ("etudiant") REFERENCES "Etudiants"("id");
ALTER TABLE "Notes" ADD CONSTRAINT "Notes_fk1" FOREIGN KEY ("devoir") REFERENCES "Devoirs"("id");









