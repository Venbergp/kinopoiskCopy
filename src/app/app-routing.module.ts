import {NgModule} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";
import {FilmListComponent} from "./film-list/film-list.component";
import {FilmInfoComponent} from "./film-info/film-info.component";



const appRoutes: Routes = [
  {path: '', component: FilmListComponent},
  {path: 'films', component: FilmListComponent},
  {path: 'films/:id', component: FilmInfoComponent},
  {
    path: 'superuser',
    loadChildren: () => import('./superuser/superuser.module')
      .then(m => m.SuperuserModule)
  }
]


@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {

}
