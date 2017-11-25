import { EventosService } from './eventos.service';
import { Component, OnInit } from '@angular/core';
import { Evento } from './evento';
import { AuthService } from '../login/auth.service';
import { Router } from '@angular/router';

declare var $: any;
@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.css']
})
export class EventosComponent implements OnInit {
  events: any;
  usuarioId: any;
  constructor(private eventosService: EventosService, private authService: AuthService, private router: Router) { }

  ngOnInit() {
    this.listAll();
    this.usuarioId = this.authService.getID();
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

subscribeEvent(eventId: any) {
    this.eventosService.subscribeEvent(eventId).subscribe(
      data => {
        this.listAll();
      }
    );
  }
unSubscribeEvent(eventId: any) {
    this.eventosService.unSubscribeEvent(eventId).subscribe(
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
  createEvent() {
    this.router.navigate(['/adm-eventos']);
  }
}
