import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

@Injectable()
export class AdmMembrosService {

  url = `http://localhost:8080/users`;

  constructor(private http: Http) { }

  listAll() {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    const options = new RequestOptions({ headers });

    return this.http.get(this.url, options).map((res: Response) => res.json());
  }
}
