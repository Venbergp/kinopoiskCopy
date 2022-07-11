import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-superuser',
  templateUrl: './superuser.component.html',
  styleUrls: ['./superuser.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SuperuserComponent implements OnInit {

  constructor() {

  }


  ngOnInit(): void {
  }

}
