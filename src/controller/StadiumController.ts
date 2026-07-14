import {Controller, Get, Post, Put, Delete, Route, Path, Body, SuccessResponse} from 'tsoa';

import { Stadium } from '../entities/Stadium';
import { StadiumService } from '../services/StadiumService';

@Route('stadiums')
export class StadiumController extends Controller {

  private stadiumService = new StadiumService();

  @Get()
  getStadiums(){
    return this.stadiumService.getAllStadiums();
  }

  @Get('{id}')
  getStadiumById(@Path() id: number){
    return this.stadiumService.getStadiumById(id);
  }

  @Post()
  @SuccessResponse('201','Created')
  createStadium(@Body() stadiumData: Partial<Stadium>){
    this.setStatus(201);
    return this.stadiumService.createStadium(stadiumData);
  }

  @Put('{id}')
  updateStadium(@Path() id: number, @Body() stadiumData: Partial<Stadium>){
    return this.stadiumService.updateStadium(id,stadiumData)
  }

  @Delete('{id}')
  deleteStadium(@Path() id: number){
    return this.stadiumService.deleteStadium(id);
  }


}