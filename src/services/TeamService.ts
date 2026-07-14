import { AppDataSource } from "../lib/database";
import { Team } from "../entities/Team";


export class TeamService{

  private teamRepo = AppDataSource.getRepository(Team);

  getAllTeams(){
    return this.teamRepo.find();
  }

  getTeamById(id:number){
    return this.teamRepo.findOne({
      where : {id},
    })
  }

  async createTeam(teamData:Partial<Team>){
    const existing = await this.teamRepo.findOne({
      where: {teamName: teamData.teamName}
    })

    if(existing){
      throw new Error("Team already exists!");
    }

    const team = this.teamRepo.create(teamData);
    return this.teamRepo.save(team);

  }

  async updateTeam(id:number, teamData: Partial<Team>){
    const  existing = await this.getTeamById(id);

    if(!existing){
      throw new Error("Team does not exist!");
    }

    await this.teamRepo.update(id,teamData);

    return this.getTeamById(id);

  }

  async deleteTeam(id: number){
    const existing = await this.getTeamById(id);

    if(!existing){
      throw new Error('Team doesnot exist!');
    }

    await this.teamRepo.delete(id);

    return{
      message: `${existing.teamName} team deleted successfully!`,
    };


  }






}