import { Entity, PrimaryGeneratedColumn, Column,ManyToOne,JoinColumn,OneToOne } from "typeorm";
import { Match } from "./Match";
import { Booking } from "./Booking";

@Entity({ name: "tickets" })
export class Ticket {
  @PrimaryGeneratedColumn()
  id!: number;

  // @Column({ type: "integer" })
  // matchId!: number;

  @Column({ type: "varchar", length: 20 })
  seatNumber!: string;

  @Column({ type: "varchar", length: 30 })
  ticketType!: string;

  @Column({ type: "decimal", precision: 10, scale: 2 })
  price!: number;

  @Column({ type: "varchar", length: 20 })
  status!: string;

  @ManyToOne(()=>Match,match=>match.tickets)
  @JoinColumn({name:'match_id'})
  match!: Match;

  @OneToOne(()=>Booking,booking=>booking.ticket)
  booking!: Booking;

}