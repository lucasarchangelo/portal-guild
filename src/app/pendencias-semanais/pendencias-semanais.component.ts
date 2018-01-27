import { Component, OnInit } from '@angular/core';

import { Pendency } from '../adm-jogos/pendency';
import { AuthService } from '../login/auth.service';
import { PendenciasService } from '../pendencias/pendencias.service';
import { AdmJogosService } from './../adm-jogos/adm-jogos.service';

declare var $: any;

@Component({
  selector: 'app-pendencias-semanais',
  templateUrl: './pendencias-semanais.component.html',
  styleUrls: ['./pendencias-semanais.component.css']
})
export class PendenciasSemanaisComponent implements OnInit {
  weekly= 1;
  games: any;
  pendencies: any;
  pendency: Pendency = new Pendency();
  usuarioId: any;

  constructor(private admJogosService: AdmJogosService, private pendenciasService: PendenciasService, private authService: AuthService) { }

  ngOnInit() {
    this.listAllGames();
    this.usuarioId = this.authService.getID();
  }

  updateMaterialSelect() {
    let new_options = `<option value ='0' disabled selected>Jogo...</option>`;

    for (const game of this.games) {
      new_options = new_options.concat(`<option value ='` + game._id + `' >` + game.name + `</option>`);
    }

    $('select').material_select('destroy');
    $('select').html(new_options);
    $('select').material_select();
  }

  listAllGames() {
    $('#modal1').modal('open');
    this.admJogosService.listAllGames().subscribe(
      data => {
        this.games = data;
        $('#modal1').modal('close');
        this.updateMaterialSelect();
      }
    );
  }

  listPendencyByGame() {
    $('#modal1').modal('open');
    this.pendency.game = $('#gameList')[0].value;
    this.admJogosService.listPendencyByGame(this.pendency.game, this.weekly).subscribe(
      data => {
        this.pendencies = data;
        $('#modal1').modal('close');
        $('.collapsible').collapsible();
      }
    );
  }

  subscribePendency(pendencyId: any) {
    this.pendenciasService.subscribePendency(pendencyId).subscribe(
      data => {
        this.listPendencyByGame();
      }
    );
  }
unSubscribePendency(pendencyId: any) {
    this.pendenciasService.unSubscribePendency(pendencyId).subscribe(
      data => {
        this.listPendencyByGame();
      }
    );
  }

  showSubscribeButton(pendencies: any) {
    return ( pendencies.players.filter(x => x.id === this.usuarioId).length === 0 );
  }

}
