import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { AuthService } from '../login/auth.service';

@Injectable()
export class EventosService {

  url = `https://backend-guild.herokuapp.com/guild/events`;

  constructor(private http: Http, private authService: AuthService) { }

  listAll() {
    const headers = new Headers();

    headers.append('Content-Type', 'application/json');
    headers.append('x-access-token', this.authService.getToken());
    const options = new RequestOptions({ headers });

    return this.http.get(this.url, options).map((res: Response) => res.json());
  }
}
