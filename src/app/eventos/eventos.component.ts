import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Evento } from './evento';
import { AuthService } from '../login/auth.service';
import { Router } from '@angular/router';
import { EventosService } from './eventos.service';

declare var $: any;
@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.css']
})
export class EventosComponent implements OnInit {
  events: any;
  usuarioId: any;
  dateFilter: any;
  constructor(private eventosService: EventosService, private authService: AuthService,
    private router: Router, private domSanitizer: DomSanitizer) { }

  ngOnInit() {

    $('#date').pickadate({
      min: new Date(),
      selectMonths: true, // Creates a dropdown to control month
      selectYears: 3, // Creates a dropdown of 15 years to control year,
      today: 'Today',
      clear: 'Clear',
      close: 'Ok',
      format: 'dd/mm/yyyy',
      closeOnSelect: false // Close upon selecting a date,
    });

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

showSubscribeButton(evento: any) {
    if (evento.players.length >= evento.limit) { return false; }
    return ( evento.players.filter(x => x.id === this.usuarioId).length === 0 );
  }

  limitCalculate(evento: any) {
    return (evento.limit - evento.players.length);
  }

  urlReplace(text: string) {
    return text.replace(/ /g, '%20');
  }

  urlSanitizer(url: any) {
    return this.domSanitizer.bypassSecurityTrustResourceUrl(url);
  }
}
