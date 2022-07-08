import { Component, OnInit } from '@angular/core';
import {SuperuserAuthService} from "../superuser-auth.service";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  superuserAccess : boolean = false


  constructor(private sUserAuth: SuperuserAuthService) {
    sUserAuth.hasAccess().then((access : any) => {
      this.superuserAccess = access
    })
  }

  ngOnInit(): void {
  }

  editSuperuserAccess() {
    console.log(this.superuserAccess)
    if (this.superuserAccess) {
      this.sUserAuth.activate()
    } else {
      this.sUserAuth.deactivate()
    }
  }

}
