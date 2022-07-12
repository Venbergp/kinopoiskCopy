import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SuperuserComponent } from './superuser.component';
import {RouterModule} from "@angular/router";



@NgModule({
  declarations: [
    SuperuserComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: 'superuser',
        component: SuperuserComponent,
      }
    ])
  ],
  bootstrap: [
  ]
})
export class SuperuserModule {
  constructor() {
    console.log("Модуль суперюзера подключен")
  }
}
