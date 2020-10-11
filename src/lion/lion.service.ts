import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateLionDto } from './dto/create-lion.dto';
import { Lion, LionDocument } from './schemas/lion.schema';

@Injectable()
export class LionService {
  constructor(@InjectModel(Lion.name) private lionModel: Model<LionDocument>) { }

  async create(createLionDto: CreateLionDto): Promise<Lion> {
    const createdLion = new this.lionModel(createLionDto);
    return createdLion.save();
  }

  async findAll(): Promise<Lion[]> {
    return this.lionModel.find().exec();
  }
}
