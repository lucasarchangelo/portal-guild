import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

import 'rxjs/add/operator/map';
import { Usuario } from './usuario';

@Injectable()
export class UserService {

  url = `http://localhost:8080/users`;

  constructor(private http: Http) { }

  gravaNovoMembro(usuario: Usuario) {
      const headers = new Headers();
      headers.append('Content-Type', 'application/json');
      const options = new RequestOptions({ headers });
      return this.http.post(this.url, JSON.stringify(usuario), options).
        map((res: Response) => res.json());
  }
}
