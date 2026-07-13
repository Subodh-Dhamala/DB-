import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
  JoinColumn,
} from "typeorm";
import { Stadium } from "./Stadium";
import { Ticket } from "./Ticket";
import { Team } from "./Team";

@Entity({ name: "matches" })
export class Match {
  @PrimaryGeneratedColumn()
  id!: number;

  // @Column({ type: "integer" })
  // homeTeamId!: number;

  // @Column({ type: "integer" })
  // awayTeamId!: number;

  // @Column({ type: "integer" })
  // stadiumId!: number;

  @Column({ type: "timestamp" })
  matchDate!: Date;

  @Column({ type: "varchar", length: 30 })
  stage!: string;

  @ManyToOne(() => Stadium, (stadium) => stadium.matches)
  @JoinColumn({ name: "stadium_id" })
  stadium!: Stadium;

  @OneToMany(() => Ticket, (ticket) => ticket.match)
  tickets!: Ticket[];

  @ManyToOne(() => Team, (team) => team.homeMatches)
  @JoinColumn({ name: "home_team_id" })
  homeTeam!: Team;

  @ManyToOne(() => Team, (team) => team.awayMatches)
  @JoinColumn({ name: "away_team_id" })
  awayTeam!: Team;
}
