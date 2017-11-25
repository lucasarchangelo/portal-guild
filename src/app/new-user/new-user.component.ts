import { Component, OnInit } from '@angular/core';

import { Usuario } from './usuario';
import { UserService } from './user.service';

declare var $: any;

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent implements OnInit {

  usuario: Usuario = new Usuario();

  constructor(private userService: UserService) { }

  ngOnInit() {
    $('#dataClan').pickadate({
      max: new Date(),
      selectMonths: true, // Creates a dropdown to control month
      selectYears: 50, // Creates a dropdown of 15 years to control year,
      clear: 'Clear',
      close: 'Ok',
      format: 'dd/mm/yyyy',
      closeOnSelect: false // Close upon selecting a date,
    });

    $('#dataNasc').pickadate({
      max: new Date(),
      selectMonths: true, // Creates a dropdown to control month
      selectYears : 100,
      clear: 'Clear',
      close: 'Ok',
      format: 'dd/mm/yyyy',
      closeOnSelect: false // Close upon selecting a date,
    });
  }

  gravaNovoMembro(form) {
    $('#modal1').modal('open');
    this.usuario.dataNasc = $('#dataNasc').get()[0].value;
    this.usuario.dataClan = $('#dataClan').get()[0].value;
    this.userService.gravaNovoMembro(this.usuario).subscribe(data => {
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
