import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('')
  async users() {
    return this.userService.users();
  }

  @Get(':user_id')
  async profile(@Param('user_id') user_id: string) {
    return this.userService.profile(user_id);
  }

  @Post('')
  async register(@Body() createUserDto: CreateUserDto) {
    return this.userService.register(createUserDto);
  }
}
