import { AppDataSource } from "../lib/database";
import { Match } from "../entities/Match";
import { Ticket } from "../entities/Ticket";

export interface CreateTicketDto {
  matchId: number;
  seatNumber: string;
  ticketType: string;
  price: number;
  status: string;
}

export class TicketService {
  private ticketRepo = AppDataSource.getRepository(Ticket);
  private matchRepo = AppDataSource.getRepository(Match);

  getAllTickets() {
    return this.ticketRepo.find({
      relations: {
        match: true,
      },
    });
  }

  getTicketById(id: number) {
    return this.ticketRepo.findOne({
      where: { id },
      relations: {
        match: true,
      },
    });
  }

  async createTicket(ticketData: CreateTicketDto) {
    const match = await this.matchRepo.findOne({
      where: { id: ticketData.matchId },
    });

    if (!match) {
      throw new Error("Match does not exist!");
    }

    const ticket = this.ticketRepo.create({
      seatNumber: ticketData.seatNumber,
      ticketType: ticketData.ticketType,
      price: ticketData.price,
      status: ticketData.status,
      match,
    });

    return this.ticketRepo.save(ticket);
  }

  async updateTicket(id: number, ticketData: CreateTicketDto) {
    const existing = await this.getTicketById(id);

    if (!existing) {
      throw new Error("Ticket does not exist!");
    }

    const match = await this.matchRepo.findOne({
      where: { id: ticketData.matchId },
    });

    if (!match) {
      throw new Error("Match does not exist!");
    }

    existing.seatNumber = ticketData.seatNumber;
    existing.ticketType = ticketData.ticketType;
    existing.price = ticketData.price;
    existing.status = ticketData.status;
    existing.match = match;

    return this.ticketRepo.save(existing);
  }

  async deleteTicket(id: number) {
    const existing = await this.getTicketById(id);

    if (!existing) {
      throw new Error("Ticket does not exist!");
    }

    await this.ticketRepo.delete(id);
    
    return {
      message: `Ticket ${existing.seatNumber} deleted successfully!`,
    };
  }

  getBookedTickets() {
  return this.ticketRepo.find({
    where: {
      status: "BOOKED",
    },
    relations: {
      match: true,
    },
  });
}


}
