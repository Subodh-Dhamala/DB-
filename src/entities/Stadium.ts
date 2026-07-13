import { Entity, PrimaryGeneratedColumn, Column,OneToMany } from "typeorm";
import { Match } from "./Match";

@Entity({ name: "stadiums" })
export class Stadium {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ type: "varchar", length: 100 })
  stadiumName!: string;

  @Column({ type: "varchar", length: 50 })
  city!: string;

  @Column({ type: "varchar", length: 50 })
  country!: string;

  @Column({type: "integer"})
  capacity!: number;

  @OneToMany(()=>Match,match=>match.stadium)
  matches!: Match[];
  




}