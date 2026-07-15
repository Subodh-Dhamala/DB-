import { AppDataSource } from "../lib/database";
import { User } from "../entities/User";

import { Booking } from "../entities/Booking";

export class UserService{

  private userRepo = AppDataSource.getRepository(User);

  private bookingRepo = AppDataSource.getRepository(Booking);

  getAllUsers(){
    return this.userRepo.find();
  }

  getUserById(id: number){
    return this.userRepo.findOne(
      {where: {id}}
    )
  }

  createUser(userData: Partial<User>){
    const user = this.userRepo.create(userData);
    return this.userRepo.save(user);
  }

  async updateUser(id:number, userData: Partial<User>){
    const existing = await this.getUserById(id);
    if(!existing) throw new Error('User does not exist!');

    await this.userRepo.update(id,userData);
    return this.getUserById(id);
  }

  async deleteUser(id:number){
    const existing = await this.getUserById(id);
    if(!existing) throw new Error('User does not exist!');

    await this.userRepo.delete(id);

    return{
      message: "User deleted Successfully!"
    }

  }

  getUserBookings(id: number) {
  return this.bookingRepo.find({
    where: {
      user: {
        id,
      },
    },
    relations: {
      user: true,
      ticket: {
        match: true,
      },
    },
  });
}

  



}