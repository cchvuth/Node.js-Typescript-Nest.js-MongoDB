import { HttpService, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class SlackService {
  api = 'https://slack.com/api';
  headers = {
    authorization: `Bearer ${process.env.SLACK_TOKEN}`
  };

  constructor(private httpSv: HttpService) {}

  postToSlack(text, channel = 'general'): Observable<any> {
    return this.httpSv.post(`${this.api}/chat.postMessage`, { channel, text }, { headers: this.headers });
  }
}
