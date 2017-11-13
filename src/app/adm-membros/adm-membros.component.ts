import { AdmMembrosService } from './adm-membros.service';
import { Component, OnInit, AfterViewInit } from '@angular/core';

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
    this.admMembrosService.listAll().subscribe(
      data => {
        this.players = data;
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

  }
}
