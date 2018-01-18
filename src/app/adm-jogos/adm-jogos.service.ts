import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { AuthService } from '../login/auth.service';
import { Game } from './game';

@Injectable()
export class AdmJogosService {

  // url = `https://backend-guild.herokuapp.com/guild/users`;
  urlGames = `http://localhost:5000/guild/games`;
  urlPendency = `http://localhost:5000/guild/pendencies`;

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

}
