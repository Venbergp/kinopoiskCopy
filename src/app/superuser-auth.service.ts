import { Injectable } from '@angular/core';
import {delay, Observable} from "rxjs";


export class SuperuserAuthService {

  isSuperuserActivated : boolean =  false

  hasAccess() : Observable<any>{
    return new Observable(obs => {
        obs.next(this.isSuperuserActivated)
    }).pipe(delay(300))
  }

  activate(){
    this.isSuperuserActivated = true
  }

  deactivate() {
    this.isSuperuserActivated = false
  }

  constructor() { }
}
