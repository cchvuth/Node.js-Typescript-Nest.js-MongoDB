import { IsNotEmpty } from 'class-validator';

export class SlackMessageDto {
  @IsNotEmpty()
  msg: string;
}
