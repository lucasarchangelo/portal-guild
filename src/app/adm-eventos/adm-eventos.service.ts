import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Injectable } from '@angular/core';
import { Evento } from '../eventos/evento';
import { AuthService } from '../login/auth.service';

@Injectable()
export class AdmEventosService {

   url = `https://backend-guild.herokuapp.com/guild/events`;
  // url = `http://localhost:5000/guild/events`;

  constructor(private http: Http, private authService: AuthService) { }
  gravaNovoEvento(evento: Evento) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('x-access-token', this.authService.getToken());
    const options = new RequestOptions({ headers });
    evento.players = [];
    return this.http.post(this.url, JSON.stringify(evento), options).
      map((res: Response) => res.json());
  }
}
