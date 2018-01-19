import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { AuthService } from '../login/auth.service';

@Injectable()
export class PendenciasService {

   url = `https://backend-guild.herokuapp.com/guild/pendencies`;
  // url = `http://localhost:5000/guild/pendencies`;

  constructor(private http: Http, private authService: AuthService) { }

  subscribePendency(idPendency: any) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('x-access-token', this.authService.getToken());
    const options = new RequestOptions({ headers });

    return this.http.put(this.url + `/${ idPendency }/subscribe`, null, options).map((res: Response) => res.json());
  }

unSubscribePendency(idPendency: any) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('x-access-token', this.authService.getToken());
    const options = new RequestOptions({ headers });

    return this.http.put(this.url + `/${ idPendency }/unsubscribe`, null, options).map((res: Response) => res.json());
  }

}
