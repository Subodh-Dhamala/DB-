import { Controller,Get, Post,Delete,Put,Route,Path,Body,SuccessResponse } from "tsoa";

import { TeamService } from "../services/TeamService";
import { Team } from "../entities/Team";

@Route('teams')
export class TeamController extends Controller{

  private teamService = new TeamService();

  @Get()
  getTeams(){
    return this.teamService.getAllTeams();
  }

  @Get('{id}')
  getTeamById(@Path() id : number){
    return this.teamService.getTeamById(id);
  }

  @Post()
  @SuccessResponse("201", "Created")
  async createTeam(@Body() teamData: Partial<Team>) {
    this.setStatus(201);
    return this.teamService.createTeam(teamData);
  }

  @Put("{id}")
  async updateTeam(
    @Path() id: number,
    @Body() teamData: Partial<Team>
  ) {
    return this.teamService.updateTeam(id, teamData);
  }
  
  @Delete("{id}")
  deleteTeam(@Path() id: number){
    return this.teamService.deleteTeam(id)
  }


}