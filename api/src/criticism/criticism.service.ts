import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { CreateCriticismDto } from './dto/create-criticism.dto';

@Injectable()
export class CriticismService {
  constructor(private prisma: PrismaService) {}

  async findAll() {
    return this.prisma.criticism.findMany({
      where: { is_published: true },
      select: {
        criticism_id: true,
        title: true,
        content: true,
        created_at: true,
        updated_at: true,
        tags: { select: { tag_id: true, name: true } },
        _count: { select: { liked: true } },
        author: {
          select: {
            user_id: true,
            name: true,
          },
        },
      },
    });
  }

  async criticism(criticism_id: string) {
    return this.prisma.criticism.findUnique({
      where: { criticism_id, is_published: true },
      select: {
        criticism_id: true,
        title: true,
        content: true,
        created_at: true,
        updated_at: true,
        tags: { select: { tag_id: true, name: true } },
        _count: { select: { liked: true } },
        author: { select: { user_id: true, name: true } },
      },
    });
  }

  async create(createCriticismDto: CreateCriticismDto, user: any) {
    return this.prisma.criticism.create({
      data: {
        ...createCriticismDto,
        author_id: user.user_id,
      },
    });
  }
}
