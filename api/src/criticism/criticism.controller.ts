import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Req,
  UseGuards,
} from '@nestjs/common';
import { Request } from 'express';
import { JwtAuthGuard } from '../auth/guards/jwt.guard';
import { CriticismService } from './criticism.service';
import { CreateCriticismDto } from './dto/create-criticism.dto';

@Controller('criticism')
export class CriticismController {
  constructor(private readonly criticismService: CriticismService) {}

  @Get('')
  async findAll() {
    return this.criticismService.findAll();
  }

  @Get(':criticism_id')
  async criticism(@Param('criticism_id') criticism_id: string) {
    return this.criticismService.criticism(criticism_id);
  }

  @Post('')
  @UseGuards(JwtAuthGuard)
  async create(
    @Body() createCriticismDto: CreateCriticismDto,
    @Req() req: Request,
  ) {
    return this.criticismService.create(createCriticismDto, req.user);
  }
}
