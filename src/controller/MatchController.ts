import { Controller,Get, Post,Delete,Put,Route,Path,Body,SuccessResponse } from "tsoa";

import { MatchService, CreateMatchDto } from "../services/MatchService";

@Route('matches')
export class MatchController extends Controller{
  private matchService = new MatchService();

  @Get()
  getMatches(){
    return this.matchService.getAllMatches();
  }

  @Get('{id}')
  getMatchById(@Path() id: number){
    return this.matchService.getMatchById(id);
  }

  @Post()
  @SuccessResponse('201','Created')
  createMatch(@Body() matchData: CreateMatchDto){
    this.setStatus(201);
    return this.matchService.createMatch(matchData);
  }

  @Put('{id}')
  updateMatch(@Path() id: number, @Body() matchData: CreateMatchDto){
    this.setStatus(200);
    return this.matchService.updateMatch(id,matchData);
  }

  @Delete('{id}')
  deleteMatch(@Path() id:number){
    return this.matchService.deleteMatch(id);
  }

  @Get("upcoming")
  getUpcomingMatches() {
    return this.matchService.getUpcomingMatches();
}

    @Get("{id}/available-tickets")
  getAvailableTickets(@Path() id: number) {
  return this.matchService.getAvailableTickets(id);
}

@Get("with-teams")
getMatchesWithTeams() {
  return this.matchService.getMatchesWithTeams();
}

@Get("revenue")
getRevenuePerMatch() {
  return this.matchService.getRevenuePerMatch();
}

@Get("tickets-sold")
getTicketsSoldPerMatch() {
  return this.matchService.getTicketsSoldPerMatch();
}

}