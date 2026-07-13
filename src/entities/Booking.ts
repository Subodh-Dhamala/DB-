import { Entity, PrimaryGeneratedColumn, Column, ManyToOne,OneToOne, JoinColumn } from "typeorm";
import { User } from "./User";
import { Ticket } from "./Ticket";

@Entity({ name: "bookings" })
export class Booking {
  @PrimaryGeneratedColumn()
  id!: number;

  // @Column({type: "integer"})
  // userId!: number;

  // @Column({type: "integer"})
  // ticketId!: number;

  @Column({ type: "varchar", length: 20 })
  paymentStatus!: string;

  @Column({ type: "timestamp" })
  bookingDate!: Date;

  @ManyToOne(()=>User,user=>user.bookings)
  @JoinColumn({name: 'user_id'})
  user!: User;

  @OneToOne(()=>Ticket,ticket=>ticket.booking)
  @JoinColumn({name:'ticket_id'})
  ticket!: Ticket;


}