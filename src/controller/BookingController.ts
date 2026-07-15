import {Controller, Get, Post, Put, Delete, Route, Path, Body, SuccessResponse} from 'tsoa';

import { BookingService,CreateBookingDto } from '../services/BookingService';

@Route('bookings')
export class BookingController extends Controller{
  private bookingService = new BookingService();

  @Get()
  getBookings() {
    return this.bookingService.getAllBookings();
  }

  @Get("{id}")
  getBookingById(@Path() id: number) {
    return this.bookingService.getBookingById(id);
  }

  @Post()
  @SuccessResponse("201", "Created")
  createBooking(@Body() bookingData: CreateBookingDto) {
    this.setStatus(201);
    return this.bookingService.createBooking(bookingData);
  }

  @Put("{id}")
  updateBooking(
    @Path() id: number,
    @Body() bookingData: CreateBookingDto
  ) {
    return this.bookingService.updateBooking(id, bookingData);
  }

  @Delete("{id}")
  deleteBooking(@Path() id: number) {
    return this.bookingService.deleteBooking(id);
  }

}