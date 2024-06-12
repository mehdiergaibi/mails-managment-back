import { Body, Controller, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { authDTO } from './dto/auth.dto';

@Controller('user')
export class UserController {
    constructor(private userService: UserService) {}
   
  @Post('/login')
  async loginUser(@Body() loginUserDto: authDTO) {
    const user = await this.userService.loginUser(loginUserDto)
    return this.userService.findByUserName(user.username)
  }
   
}
