import { AdmMembrosService } from './adm-membros.service';
import { Component, OnInit, EventEmitter } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-adm-membros',
  templateUrl: './adm-membros.component.html',
  styleUrls: ['./adm-membros.component.css']
})

export class AdmMembrosComponent implements OnInit {

  players: any;
  constructor( private admMembrosService: AdmMembrosService) { }

  ngOnInit() {
    this.listAll();
  }

  listAll() {
    $('#modal1').modal('open');
    this.admMembrosService.listAll().subscribe(
      data => {
        this.players = data;
        this.admMembrosService.playersToAcept.emit(data.filter(x => x.acesso === 0).length);
        $('#modal1').modal('close');
      }
    );
  }

  aceptMember(iduser: any) {
    this.admMembrosService.aceptMember(iduser).subscribe(
      data => {
        this.listAll();
      }
    );
  }

  addAsAdm(iduser: any) {
    this.admMembrosService.addAsAdm(iduser).subscribe(
      data => {
        this.listAll();
      }
    );
  }

  removeFromClan(iduser: any) {
    this.admMembrosService.removeFromClan(iduser).subscribe(
      data => {
        this.listAll();
      }
    );
  }
}
