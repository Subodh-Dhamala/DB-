import { Controller,Get, Post,Delete,Put,Route,Path,Body,SuccessResponse } from "tsoa";
import { UserService } from "../services/UserService";
import { User } from "../entities/User";

@Route("users")
export class UserController extends Controller {
  private userService = new UserService();

  @Get()
  async getUsers() {
    return this.userService.getAllUsers();
  }

  @Get("{id}")
  async getUserById(@Path() id: number) {
    return this.userService.getUserById(id);
  }

  @Post()
  @SuccessResponse("201", "Created")
  async createUser(@Body() userData: Partial<User>) {
    this.setStatus(201);
    return this.userService.createUser(userData);
  }

  @Put("{id}")
  async updateUser(
    @Path() id: number,
    @Body() userData: Partial<User>
  ) {
    return this.userService.updateUser(id, userData);
  }

  @Delete("{id}")
  async deleteUser(@Path() id: number) {
    return this.userService.deleteUser(id);
  }
}