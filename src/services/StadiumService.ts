import { AppDataSource } from "../lib/database";
import { Stadium } from "../entities/Stadium";

export class StadiumService{

  private stadiumRepo = AppDataSource.getRepository(Stadium);

  getAllStadiums(){
    return this.stadiumRepo.find();
  }

  getStadiumById(id: number){
    return this.stadiumRepo.findOne({
      where: {id},
    })
  }

  async createStadium(stadiumData: Partial<Stadium>){

    const existing = await this.stadiumRepo.findOne({
      where: {stadiumName:stadiumData.stadiumName}});

      if(existing){
        throw new Error('Stadium already exists!');
      }

    const stadium = this.stadiumRepo.create(stadiumData);
    return this.stadiumRepo.save(stadium);
  }

  async updateStadium(id:number, stadiumData: Partial<Stadium>){

    const existing = await this.getStadiumById(id);

    if(!existing){
      throw new Error('Stadium doesnot exist!');
    }

    await this.stadiumRepo.update(id,stadiumData);
    return this.getStadiumById(id);


  }

  async deleteStadium(id:number){
    const existing = await this.getStadiumById(id);
    if(!existing){
      throw new Error('Stadium does not exist!');
    }

    await this.stadiumRepo.delete(id);

    return{
      message: `${existing.stadiumName} stadium deleted succesfully!`
    }

  }


}