import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Match } from "./Match";

@Entity({ name: "teams" })
export class Team {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ type: "varchar", length: 100 })
  teamName!: string;

  @Column({ type: "varchar", length: 50 })
  country!: string;

  @Column({ type: "varchar", length: 100 })
  coach!: string;

  @Column({ type: "integer" })
  fifaRank!: number;

  @OneToMany(() => Match, (match) => match.homeTeam)
  homeMatches!: Match[];

  @OneToMany(() => Match, (match) => match.awayTeam)
  awayMatches!: Match[];
}
