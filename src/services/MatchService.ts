import { AppDataSource } from "../lib/database";

import { Match } from "../entities/Match";
import { Team } from "../entities/Team";
import { Stadium } from "../entities/Stadium";

import {MoreThan} from 'typeorm';

export interface CreateMatchDto{
  homeTeamId: number;
  awayTeamId:number;
  stadiumId: number;
  matchDate: Date;
  stage: string;
}

export class MatchService{

private matchRepo = AppDataSource.getRepository(Match);
private teamRepo = AppDataSource.getRepository(Team);
private stadiumRepo = AppDataSource.getRepository(Stadium);

getAllMatches(){
  return this.matchRepo.find({
    relations: {
      homeTeam: true,
      awayTeam: true,
      stadium: true,
    },
  });
  }

getMatchById(id: number){
  return this.matchRepo.findOne({
    where: {id},
    relations:{
      homeTeam: true,
      awayTeam: true, 
      stadium: true,
    },
  });
}

async createMatch(matchData: CreateMatchDto){

  if(matchData.homeTeamId === matchData.awayTeamId){
    throw new Error("A team cannot play against itself");
  }

  const homeTeam = await this.teamRepo.findOne({
    where: {id: matchData.homeTeamId},
  });


  if(!homeTeam){
  throw new Error("Home team does not exist");
  }

  const awayTeam = await this.teamRepo.findOne({
    where: {id: matchData.awayTeamId},
  })

  if(!awayTeam){
    throw new Error("Away team does not exist");
  }

  const stadium = await this.stadiumRepo.findOne({
    where: {id: matchData.stadiumId},
  });

  if(!stadium){
    throw new Error("Stadium does not exist");
  }

  const match = this.matchRepo.create({
    homeTeam,
    awayTeam,
    stadium,
    matchDate: matchData.matchDate,
    stage: matchData.stage,
    });

    return this.matchRepo.save(match);
  }

  async updateMatch(id: number, matchData: CreateMatchDto){
    const existing = await this.getMatchById(id);

    if(!existing){
      throw new Error('Match does not exist');
    }

    if(matchData.homeTeamId === matchData.awayTeamId){
    throw new Error("A team cannot play against itself");
  }

     const homeTeam = await this.teamRepo.findOne({
      where: { id: matchData.homeTeamId },
    });

    if (!homeTeam) {
      throw new Error("Home team does not exist!");
    }

    const awayTeam = await this.teamRepo.findOne({
      where: { id: matchData.awayTeamId },
    });

    if (!awayTeam) {
      throw new Error("Away team does not exist!");
    }

     const stadium = await this.stadiumRepo.findOne({
      where: { id: matchData.stadiumId },
    });

    if (!stadium) {
      throw new Error("Stadium does not exist!");
    }

    existing.homeTeam = homeTeam;
    existing.awayTeam = awayTeam;
    existing.stadium = stadium;
    existing.matchDate = matchData.matchDate;
    existing.stage = matchData.stage;

    return this.matchRepo.save(existing);

  }

  async deleteMatch(id: number){
    const existing = await this.getMatchById(id);

    if(!existing){
      throw new Error("Match does not exist!");
    }

    await this.matchRepo.delete(id);

    return{
      message: `Match ${id} deleted successfully!`
    }

  }

  getUpcomingMatches(){
    return this.matchRepo.find({
      where:{
        matchDate: MoreThan(new Date()),
      },
      relations: {
        homeTeam:true,
        awayTeam:true,
        stadium:true,
      },
      order:{
        matchDate: "ASC",
      },
    });
  }


}