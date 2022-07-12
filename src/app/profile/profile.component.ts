import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {SuperuserAuthService} from "../superuser-auth.service";
import {NavigationCancel, NavigationEnd, NavigationStart, Router} from "@angular/router";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProfileComponent implements OnInit {

  superuserAccess : boolean = false
  isLoading : boolean = false
  loadEnd : boolean = false


  constructor(private sUserAuth: SuperuserAuthService, private router: Router, private cdr: ChangeDetectorRef) {
    this.loadEnd = false
    sUserAuth.hasAccess().subscribe((access : any) => {
      this.superuserAccess = access
      this.loadEnd = true
      this.cdr.detectChanges()
    })

    this.router.events.subscribe((event) => {
      //console.log(event)

      this.router.events.subscribe((event) => {
        if (event instanceof NavigationStart) {
          this.isLoading = true
        }

        if (event instanceof NavigationEnd) {
          this.isLoading = false
        }

        if (event instanceof NavigationCancel) {
          this.isLoading = false
        }
        this.cdr.detectChanges()
      })


    })
  }

  ngOnInit(): void {
  }

  editSuperuserAccess() {
    if (this.superuserAccess) {
      this.sUserAuth.activate()
    } else {
      this.sUserAuth.deactivate()
    }
  }

}
