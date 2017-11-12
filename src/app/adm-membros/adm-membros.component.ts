import { AdmMembrosService } from './adm-membros.service';
import { Component, OnInit } from '@angular/core';

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
        console.log(this.players);
      }
    );
  }
}
