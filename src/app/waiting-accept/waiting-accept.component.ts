import { Component, OnInit } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-waiting-accept',
  templateUrl: './waiting-accept.component.html',
  styleUrls: ['./waiting-accept.component.css']
})
export class WaitingAcceptComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $('#modal1').modal('close');
  }

}
