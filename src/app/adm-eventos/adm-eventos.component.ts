import { Component, OnInit } from '@angular/core';

import { AdmEventosService } from './adm-eventos.service';
import { Evento } from '../adm-eventos/evento';

declare var $: any;
@Component({
  selector: 'app-adm-eventos',
  templateUrl: './adm-eventos.component.html',
  styleUrls: ['./adm-eventos.component.css']
})
export class AdmEventosComponent implements OnInit {

  private event: Evento = new Evento();
  constructor(private admEventosService: AdmEventosService) { }

  ngOnInit() {
  }

  gravaNovoEvento(form) {
    $('#modal1').modal('open');
    this.admEventosService.gravaNovoEvento(this.event).subscribe(data => {
      $('#modal1').modal('close');
      $('#modal3').modal('open');
      form.reset();
    },
    error => {
      $('#modal1').modal('close');
      $('#modal2').modal('open');
    });
  }
}
