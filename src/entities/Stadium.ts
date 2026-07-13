import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

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

  @Column()
  capacity!: number;
}