import { MigrationInterface, QueryRunner } from "typeorm";

export class Init1784016337844 implements MigrationInterface {
    name = 'Init1784016337844'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "stadiums" ("id" SERIAL NOT NULL, "stadiumName" character varying(100) NOT NULL, "city" character varying(50) NOT NULL, "country" character varying(50) NOT NULL, "capacity" integer NOT NULL, CONSTRAINT "PK_fa5fb6b39622ba448ddbb198e03" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "teams" ("id" SERIAL NOT NULL, "teamName" character varying(100) NOT NULL, "country" character varying(50) NOT NULL, "coach" character varying(100) NOT NULL, "fifaRank" integer NOT NULL, CONSTRAINT "PK_7e5523774a38b08a6236d322403" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "matches" ("id" SERIAL NOT NULL, "matchDate" TIMESTAMP NOT NULL, "stage" character varying(30) NOT NULL, "stadium_id" integer, "home_team_id" integer, "away_team_id" integer, CONSTRAINT "PK_8a22c7b2e0828988d51256117f4" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "tickets" ("id" SERIAL NOT NULL, "seatNumber" character varying(20) NOT NULL, "ticketType" character varying(30) NOT NULL, "price" numeric(10,2) NOT NULL, "status" character varying(20) NOT NULL, "match_id" integer, CONSTRAINT "PK_343bc942ae261cf7a1377f48fd0" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "bookings" ("id" SERIAL NOT NULL, "paymentStatus" character varying(20) NOT NULL, "bookingDate" TIMESTAMP NOT NULL, "user_id" integer, "ticket_id" integer, CONSTRAINT "REL_028343a1767697bd6ae7d4d2a6" UNIQUE ("ticket_id"), CONSTRAINT "PK_bee6805982cc1e248e94ce94957" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "users" ("id" SERIAL NOT NULL, "fullName" character varying(50) NOT NULL, "email" character varying(100) NOT NULL, "phone" character varying(20) NOT NULL, "country" character varying(50) NOT NULL, "CreatedAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "UQ_97672ac88f789774dd47f7c8be3" UNIQUE ("email"), CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "matches" ADD CONSTRAINT "FK_f78a661415b0c75f087c6d026be" FOREIGN KEY ("stadium_id") REFERENCES "stadiums"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "matches" ADD CONSTRAINT "FK_bb25f11ea6fa78b344a68923769" FOREIGN KEY ("home_team_id") REFERENCES "teams"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "matches" ADD CONSTRAINT "FK_e457f057d971e464c1ebf6378c5" FOREIGN KEY ("away_team_id") REFERENCES "teams"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "tickets" ADD CONSTRAINT "FK_a7a1d2cdecd49fe07abe004ae3f" FOREIGN KEY ("match_id") REFERENCES "matches"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "bookings" ADD CONSTRAINT "FK_64cd97487c5c42806458ab5520c" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "bookings" ADD CONSTRAINT "FK_028343a1767697bd6ae7d4d2a61" FOREIGN KEY ("ticket_id") REFERENCES "tickets"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "bookings" DROP CONSTRAINT "FK_028343a1767697bd6ae7d4d2a61"`);
        await queryRunner.query(`ALTER TABLE "bookings" DROP CONSTRAINT "FK_64cd97487c5c42806458ab5520c"`);
        await queryRunner.query(`ALTER TABLE "tickets" DROP CONSTRAINT "FK_a7a1d2cdecd49fe07abe004ae3f"`);
        await queryRunner.query(`ALTER TABLE "matches" DROP CONSTRAINT "FK_e457f057d971e464c1ebf6378c5"`);
        await queryRunner.query(`ALTER TABLE "matches" DROP CONSTRAINT "FK_bb25f11ea6fa78b344a68923769"`);
        await queryRunner.query(`ALTER TABLE "matches" DROP CONSTRAINT "FK_f78a661415b0c75f087c6d026be"`);
        await queryRunner.query(`DROP TABLE "users"`);
        await queryRunner.query(`DROP TABLE "bookings"`);
        await queryRunner.query(`DROP TABLE "tickets"`);
        await queryRunner.query(`DROP TABLE "matches"`);
        await queryRunner.query(`DROP TABLE "teams"`);
        await queryRunner.query(`DROP TABLE "stadiums"`);
    }

}
