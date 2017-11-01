import { Component, OnInit } from '@angular/core';

import { Usuario } from './usuario';
import { UserService } from './user.service';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent implements OnInit {
  
  usuario:Usuario = new Usuario();
  
  constructor(private userService: UserService) { }

  ngOnInit() {
  }

  gravaNovoMembro(){
    this.userService.gravaNovoMembro(this.usuario);
  }

}
