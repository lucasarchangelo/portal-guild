import { AuthService } from './../login/auth.service';
import { Injectable, EventEmitter } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

import { AccessRoles } from './roles';

@Injectable()
export class AdmMembrosService {

  // url = `https://backend-guild.herokuapp.com/guild/users`;
   url = `http://localhost:5000/guild/users`;
  playersToAcept = new EventEmitter<number>();
  constructor(private http: Http, private authService: AuthService) { }

  listAll() {
    const headers = new Headers();

    headers.append('Content-Type', 'application/json');
    headers.append('x-access-token', this.authService.getToken());
    const options = new RequestOptions({ headers });

    return this.http.get(this.url, options).map((res: Response) => res.json());
  }

  aceptMember(iduser: any) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('x-access-token', this.authService.getToken());
    const options = new RequestOptions({ headers });

    return this.http.put(this.url + `/${ iduser }/${ AccessRoles.MEMBER }`, null, options).map((res: Response) => res.json());
  }

  addAsAdm(iduser: any) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('x-access-token', this.authService.getToken());
    const options = new RequestOptions({ headers });

    return this.http.put(this.url + `/${ iduser }/${ AccessRoles.ADMIN }`, null, options).map((res: Response) => res.json());
  }

  removeFromClan(iduser: any) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('x-access-token', this.authService.getToken());
    const options = new RequestOptions({ headers });

    return this.http.delete(this.url + `/${ iduser }`, options).map((res: Response) => res.json());
  }
}
