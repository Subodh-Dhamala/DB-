import { AppDataSource } from "../lib/database";
import { Booking } from "../entities/Booking";
import { User } from "../entities/User";
import { Ticket } from "../entities/Ticket";

export interface CreateBookingDto{
  userId: number;
  ticketId: number;
  paymentStatus: string;
}

export class BookingService{
  private bookingRepo = AppDataSource.getRepository(Booking);
  private userRepo = AppDataSource.getRepository(User);
  private ticketRepo =AppDataSource.getRepository(Ticket);

  getAllBookings(){
    return this.bookingRepo.find({
      relations: {
        user: true,
        ticket: {
          match: true,
        }
      }
    })
  }

  getBookingById(id:number){
    return this.bookingRepo.findOne({
      where: {id},
      relations: {
        user: true,
        ticket: {
          match:true,
        }
      }
    })
  }

  async createBooking(bookingData: CreateBookingDto){
     const user = await this.userRepo.findOne({
      where: { id: bookingData.userId },
    });

     if (!user) {
      throw new Error("User does not exist!");
    }

     const ticket = await this.ticketRepo.findOne({
      where: { id: bookingData.ticketId },
      relations: {
        booking: true,
      },
    });

    if (!ticket) {
      throw new Error("Ticket does not exist!");
    }

    if (ticket.booking) {
      throw new Error("Ticket already booked!");
    }

      ticket.status = "BOOKED";
      await this.ticketRepo.save(ticket);

      const booking = this.bookingRepo.create({
      bookingDate: new Date(),
      paymentStatus: bookingData.paymentStatus,
      user,
      ticket,
    });

    return this.bookingRepo.save(booking);


  }


  async updateBooking(id: number, bookingData: CreateBookingDto) {
    const existing = await this.getBookingById(id);

    if (!existing) {
      throw new Error("Booking does not exist!");
    }

    const user = await this.userRepo.findOne({
      where: { id: bookingData.userId },
    });

    if (!user) {
      throw new Error("User does not exist!");
    }

    const ticket = await this.ticketRepo.findOne({
      where: { id: bookingData.ticketId },
    });

    if (!ticket) {
      throw new Error("Ticket does not exist!");
    }

    existing.user = user;
    existing.ticket = ticket;
    existing.paymentStatus = bookingData.paymentStatus;

    return this.bookingRepo.save(existing);
  }

   async deleteBooking(id: number) {
    const existing = await this.getBookingById(id);

    if (!existing) {
      throw new Error("Booking does not exist!");
    }

    existing.ticket.status = "AVAILABLE";
    await this.ticketRepo.save(existing.ticket);

    await this.bookingRepo.delete(id);

    return {
      message: `Booking ${id} deleted successfully!`,
    };
  }


}