import { Controller,Get, Post,Delete,Put,Route,Path,Body,SuccessResponse } from "tsoa";

import { TicketService, CreateTicketDto } from "../services/TicketService";

@Route('tickets')
export class TicketController extends Controller{
  private ticketService = new TicketService();

  @Get()
  getTickets(){
    return this.ticketService.getAllTickets();
  }

  @Get('{id}')
  getTicketById(@Path() id: number){
    return this.ticketService.getTicketById(id);
  }

  @Post()
  @SuccessResponse('201','Created')
  createTicket(@Body() ticketData: CreateTicketDto){
    this.setStatus(201);
    return this.ticketService.createTicket(ticketData);
  }


  @Put('{id}')
  updateTicket(@Path() id: number, @Body() ticketData: CreateTicketDto){
    return this.ticketService.updateTicket(id,ticketData);
  }

  @Delete('{id}')
  deleteTicket(@Path() id: number){
    return this.ticketService.deleteTicket(id);
  }
  
}