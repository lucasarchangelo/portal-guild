import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { AuthService } from '../login/auth.service';
import { Game } from './game';
import { Pendency } from './pendency';

@Injectable()
export class AdmJogosService {

  // url = `https://backend-guild.herokuapp.com/guild/users`;
  urlGames = `https://backend-guild.herokuapp.com/guild/games`;
  urlPendency = `https://backend-guild.herokuapp.com/guild/pendencies`;

  constructor(private http: Http, private authService: AuthService) { }

  listAllGames() {
    const headers = new Headers();

    headers.append('Content-Type', 'application/json');
    headers.append('x-access-token', this.authService.getToken());
    const options = new RequestOptions({ headers });

    return this.http.get(this.urlGames, options).map((res: Response) => res.json());
  }

  createGame(game: Game) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('x-access-token', this.authService.getToken());
    const options = new RequestOptions({ headers });
    return this.http.post(this.urlGames, JSON.stringify(game), options).
      map((res: Response) => res.json());
  }

  deleteGame(gameId: any) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('x-access-token', this.authService.getToken());
    const options = new RequestOptions({ headers });

    return this.http.delete(this.urlGames + `/${ gameId }`, options).map((res: Response) => res.json());
  }

  createPendency(pendency: Pendency) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('x-access-token', this.authService.getToken());
    const options = new RequestOptions({ headers });
    return this.http.post(this.urlPendency, JSON.stringify(pendency), options).
      map((res: Response) => res.json());
  }

  listPendencyByGame(gameId) {
    const headers = new Headers();

    headers.append('Content-Type', 'application/json');
    headers.append('x-access-token', this.authService.getToken());
    const options = new RequestOptions({ headers });

    return this.http.get(this.urlPendency + `/${ gameId }`, options).map((res: Response) => res.json());
  }

  deletePendency(pendencyId: any) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('x-access-token', this.authService.getToken());
    const options = new RequestOptions({ headers });

    return this.http.delete(this.urlPendency + `/${ pendencyId }`, options).map((res: Response) => res.json());
  }

}
