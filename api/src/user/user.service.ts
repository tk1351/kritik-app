import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { PrismaService } from '../prisma.service';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async users() {
    return this.prisma.user.findMany();
  }

  async profile(user_id: string) {
    return this.prisma.user.findUnique({
      where: { user_id },
      select: { user_id: true, bio: true, likes: true, criticisms: true },
    });
  }

  async register(createUserDto: CreateUserDto) {
    const hashedPassword = await bcrypt.hash(createUserDto.password, 10);
    return this.prisma.user.create({
      data: {
        ...createUserDto,
        password: hashedPassword,
      },
      select: {
        user_id: true,
        name: true,
      },
    });
  }
}
