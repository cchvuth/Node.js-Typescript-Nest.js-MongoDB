import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { SlackService } from './slack.service';
import { map } from 'rxjs/operators';
import { AuthGuard } from 'src/auth/auth.guard';
import { SlackMessageDto } from './dto/slack-message.dto';

@UseGuards(AuthGuard)
@Controller('slack')
export class SlackController {
  constructor(private readonly slackSv: SlackService) {}

  @Post()
  postToSlack(@Body() body: SlackMessageDto): object {
    return this.slackSv.postToSlack(body.msg).pipe(map(res => res.data));
  }
}
