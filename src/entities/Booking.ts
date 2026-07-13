import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity({ name: "bookings" })
export class Booking {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  userId!: number;

  @Column()
  ticketId!: number;

  @Column({ type: "varchar", length: 20 })
  paymentStatus!: string;

  @Column({ type: "timestamp" })
  bookingDate!: Date;
}