import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

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

  @Column()
  fifaRank!: number;
}