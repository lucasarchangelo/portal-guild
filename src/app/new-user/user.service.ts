import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

import 'rxjs/add/operator/map';
import { Usuario } from './usuario';

@Injectable()
export class UserService {

   url = `https://backend-guild.herokuapp.com/guild/users`;
  // url = `http://localhost:5000/guild/users`;
  constructor(private http: Http) { }

  gravaNovoMembro(usuario: Usuario) {
      const headers = new Headers();
      headers.append('Content-Type', 'application/json');
      const options = new RequestOptions({ headers });
      return this.http.post(this.url, JSON.stringify(usuario), options).
        map((res: Response) => res.json());
  }
}
