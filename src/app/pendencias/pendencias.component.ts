import { PendenciasService } from './pendencias.service';
import { AdmJogosService } from './../adm-jogos/adm-jogos.service';
import { Component, OnInit } from '@angular/core';
import { Pendency } from '../adm-jogos/pendency';

declare var $: any;

@Component({
  selector: 'app-pendencias',
  templateUrl: './pendencias.component.html',
  styleUrls: ['./pendencias.component.css']
})
export class PendenciasComponent implements OnInit {

  games: any;
  pendencies: any;
  pendency: Pendency = new Pendency();
  usuarioId: any;

  constructor(private admJogosService: AdmJogosService, private pendenciasService: PendenciasService) { }

  ngOnInit() {
    this.listAllGames();
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
    this.admJogosService.listPendencyByGame(this.pendency.game).subscribe(
      data => {
        this.pendencies = data;
        $('#modal1').modal('close');
        $('.collapsible').collapsible();
      }
    );
  }

  subscribeEvent(pendencyId: any) {
    this.pendenciasService.subscribePendency(pendencyId).subscribe(
      data => {
        this.listPendencyByGame();
      }
    );
  }
unSubscribeEvent(pendencyId: any) {
    this.pendenciasService.unSubscribePendency(pendencyId).subscribe(
      data => {
        this.listPendencyByGame();
      }
    );
  }

}
