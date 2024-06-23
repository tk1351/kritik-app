import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { PrismaService } from '../prisma.service';
import { AuthPayloadDto } from './dto/auth.dto';

@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService,
    private prisma: PrismaService,
  ) {}

  async validateUser(authPayloadDto: AuthPayloadDto) {
    const user = await this.prisma.user.findUnique({
      where: { email: authPayloadDto.email },
    });
    if (!user) return null;
    if (
      authPayloadDto.password &&
      (await bcrypt.compare(authPayloadDto.password, user.password))
    ) {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { password, ...rest } = user;
      return {
        access_token: this.jwtService.sign(rest),
      };
    }
  }

  async getProfile(user_id: string) {
    return this.prisma.user.findUnique({
      where: { user_id },
      select: {
        user_id: true,
        name: true,
        bio: true,
        likes: true,
        criticisms: true,
      },
    });
  }
}
