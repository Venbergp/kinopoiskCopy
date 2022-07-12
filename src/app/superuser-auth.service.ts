import { Injectable } from '@angular/core';
import {delay, Observable} from "rxjs";


export class SuperuserAuthService {

  _isSuperuserActivated : boolean =  false

  // hasAccess() : Observable<any>{
  //   return new Observable(obs => {
  //       obs.next(this.isSuperuserActivated)
  //   }).pipe(delay(300))
  // }

  hasAccess() : boolean {
    return this._isSuperuserActivated
  }

  activate(){
    this._isSuperuserActivated = true
  }

  deactivate() {
    this._isSuperuserActivated = false
  }

  constructor() { }
}
