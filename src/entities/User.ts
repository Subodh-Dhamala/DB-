import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn,OneToMany } from "typeorm";
import { Booking } from "./Booking";

@Entity({ name: "users" })
export class User {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ type: "varchar", length: 50 })
  fullName!: string;

  @Column({ type: "varchar", length: 100, unique: true })
  email!: string;

  @Column({ type: "varchar", length: 20 })
  phone!: string;

  @Column({ type: "varchar", length: 50 })
  country!: string;

  @CreateDateColumn()
  CreatedAt!: Date;


  @OneToMany(()=>Booking,booking=>booking.user)
  bookings! : Booking[]


}