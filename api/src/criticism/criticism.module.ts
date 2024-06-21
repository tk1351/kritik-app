import { Module } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { CriticismController } from './criticism.controller';
import { CriticismService } from './criticism.service';

@Module({
  controllers: [CriticismController],
  providers: [CriticismService, PrismaService],
})
export class CriticismModule {}
