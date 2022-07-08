import { Injectable } from '@angular/core';


export class SuperuserAuthService {

  isSuperuserActivated : boolean =  false

  hasAccess() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(this.isSuperuserActivated)
      }, 1000)
    })
  }

  activate(){
    this.isSuperuserActivated = true
  }

  deactivate() {
    this.isSuperuserActivated = false
  }

  constructor() { }
}
