import { AdmJogosService } from './adm-jogos.service';
import { Component, OnInit} from '@angular/core';
import { Pendency } from './pendency';
import { Game } from './game';

declare var $: any;

@Component({
  selector: 'app-adm-jogos',
  templateUrl: './adm-jogos.component.html',
  styleUrls: ['./adm-jogos.component.css']
})
export class AdmJogosComponent implements OnInit {

  pendency: Pendency = new Pendency();
  game: Game = new Game();
  games: any;
  pendencies: any;
  constructor(private admJogosService: AdmJogosService) { }

  ngOnInit() {
    $('.collapsible').collapsible();
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

  deleteGame(idGame: any) {
    this.admJogosService.deleteGame(idGame).subscribe(
      data => {
        this.listAllGames();
      }
    );
  }

  createGame(form) {
    $('#modal1').modal('open');
    this.admJogosService.createGame(this.game).subscribe(data => {
      $('#modal1').modal('close');
      $('#modal3').modal('open');
      form.reset();
      this.listAllGames();
    },
    error => {
      $('#modal1').modal('close');
      $('#modal2').modal('open');
    });
  }

  gravaNovaPendencia(form) {

  }

  evento() {

  }

}
