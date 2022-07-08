import { Component, OnInit } from '@angular/core';
import {Observable, of} from "rxjs";

@Component({
  selector: 'app-superuser',
  templateUrl: './superuser.component.html',
  styleUrls: ['./superuser.component.css']
})
export class SuperuserComponent implements OnInit {

  constructor() {
    console.log('Я гружусь')
  }


  ngOnInit(): void {
  }

}
