import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class VideosService {
  constructor(private readonly databaseService: DatabaseService) {

  }

  async create(createVideoDto: Prisma.VideoCreateInput) {
    return this.databaseService.video.create({
      data: createVideoDto
    });
  }

  async findAll() {
    return this.databaseService.video.findMany({});
  }

  async findOne(id: number) {
    return this.databaseService.video.findUnique({
      where: {
        id
      }
    });
  }

  async update(id: number, updateVideoDto: Prisma.VideoUpdateInput) {
    return this.databaseService.video.update({
      where: {
        id
      },
      data: updateVideoDto
    })
  }

  async remove(id: number) {
    return this.databaseService.video.delete({
      where: {
        id
      }
    });
  }
}
