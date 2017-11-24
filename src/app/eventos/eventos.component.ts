import { EventosService } from './eventos.service';
import { Component, OnInit } from '@angular/core';
import { Evento } from './evento';
import { AuthService } from '../login/auth.service';

declare var $: any;
@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.css']
})
export class EventosComponent implements OnInit {
  events: any;
  mostrarMenuADM = false;
  constructor(private eventosService: EventosService, private authService: AuthService) { }

  ngOnInit() {
    this.listAll();

    this.authService.mostrarADMEmitter.subscribe(
      mostrarAdm => this.mostrarMenuADM = mostrarAdm
    );
  }

  listAll() {
    $('#modal1').modal('open');
    this.eventosService.listAll().subscribe(
      data => {
        this.events = data;
        $('#modal1').modal('close');
      }
    );
  }

  joinEvent(eventId: any) {
    this.eventosService.joinEvent(eventId).subscribe(
      data => {
        this.listAll();
      }
    );
  }
  deleteEvent(eventId: any) {
    this.eventosService.deleteEvent(eventId).subscribe(
      data => {
        this.listAll();
      }
    );
  }
  criarEvento() {

  }
}
