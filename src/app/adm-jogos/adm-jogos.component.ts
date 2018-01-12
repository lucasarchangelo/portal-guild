import { Component, OnInit, AfterViewInit, AfterViewChecked } from '@angular/core';
import { Pendency } from './pendency';
import { Game } from './game';

declare var $: any;

@Component({
  selector: 'app-adm-jogos',
  templateUrl: './adm-jogos.component.html',
  styleUrls: ['./adm-jogos.component.css']
})
export class AdmJogosComponent implements OnInit, AfterViewChecked {

  pendency: Pendency = new Pendency();
  game: Game = new Game();
  constructor() { }

  ngOnInit() {
    $('select').material_select();
  }

  ngAfterViewChecked() {
  }


  gravaNovoJogo(form) {

  }

  gravaNovaPendencia(form) {

  }

  evento() {

  }

}
