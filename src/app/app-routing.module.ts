import {NgModule} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";
import {FilmListComponent} from "./film-list/film-list.component";
import {FilmInfoComponent} from "./film-info/film-info.component";
import {ProfileComponent} from "./profile/profile.component";
import {SuperuserAuthGuardService} from "./superuser-auth-guard.service";



const appRoutes: Routes = [
  {path: '', component: FilmListComponent},
  {path: 'films', component: FilmListComponent},
  {path: 'films/:id', component: FilmInfoComponent},
  {path: 'profile', component: ProfileComponent},
  {
    path: 'profile',
    loadChildren: () => import('./superuser/superuser.module')
      .then(m => m.SuperuserModule),
    canActivate: [SuperuserAuthGuardService]
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
