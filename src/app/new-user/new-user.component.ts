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
  }

  gravaNovoMembro(form) {
    $('#modal1').modal('open');
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
