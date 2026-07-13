import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity({ name: "matches" })
export class Match {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  homeTeamId!: number;

  @Column()
  awayTeamId!: number;

  @Column()
  stadiumId!: number;

  @Column({ type: "timestamp" })
  matchDate!: Date;

  @Column({ type: "varchar", length: 30 })
  stage!: string;
}