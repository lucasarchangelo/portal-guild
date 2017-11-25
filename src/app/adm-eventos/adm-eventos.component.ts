import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { EventosService } from './../eventos/eventos.service';
import { AdmEventosService } from './adm-eventos.service';
import { Evento } from '../adm-eventos/evento';

declare var $: any;
@Component({
  selector: 'app-adm-eventos',
  templateUrl: './adm-eventos.component.html',
  styleUrls: ['./adm-eventos.component.css']
})
export class AdmEventosComponent implements OnInit {

  event: Evento = new Evento();
  time: any;
  constructor(private admEventosService: AdmEventosService, private eventosService: EventosService, private router: Router) { }

  ngOnInit() {
    $('#date').pickadate({
      selectMonths: true, // Creates a dropdown to control month
      selectYears: 15, // Creates a dropdown of 15 years to control year,
      today: 'Today',
      clear: 'Clear',
      close: 'Ok',
      format: 'dd/mm/yyyy',
      closeOnSelect: false // Close upon selecting a date,
    });

    $('.timepicker').pickatime({
      default: 'now', // Set default time: 'now', '1:30AM', '16:30'
      fromnow: 0,       // set default time to * milliseconds from now (using with default = 'now')
      twelvehour: false, // Use AM/PM or 24-hour format
      donetext: 'OK', // text for done-button
      cleartext: 'Clear', // text for clear-button
      canceltext: 'Cancel', // Text for cancel-button
      autoclose: false, // automatic close timepicker
      ampmclickable: true, // make AM PM clickable
      aftershow: function(){} // Function for after opening timepicker
    });
  }

  gravaNovoEvento(form) {
    $('#modal1').modal('open');
    this.event.date =  $('#date').get()[0].value + ' '  + $('.timepicker').get()[0].value;
    this.admEventosService.gravaNovoEvento(this.event).subscribe(data => {
      this.subscribeEvent(data._id);
    },
    error => {
      $('#modal1').modal('close');
      $('#modal2').modal('open');
    });
  }

subscribeEvent(eventId: any) {
    this.eventosService.subscribeEvent(eventId).subscribe(
      data => {
        this.router.navigate(['/eventos']);
      }
    );
  }
}
