import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { LionController } from './lion.controller';
import { LionService } from './lion.service';
import { Lion, LionSchema } from './schemas/lion.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: Lion.name, schema: LionSchema }])],
  controllers: [LionController],
  providers: [LionService]
})
export class LionModule {}
