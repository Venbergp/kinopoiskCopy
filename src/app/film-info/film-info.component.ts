import { Component, OnInit } from '@angular/core';
import {GetDataService} from "../get-data.service";
import {ActivatedRoute, Params} from "@angular/router";

@Component({
  selector: 'app-film-info',
  templateUrl: './film-info.component.html',
  styleUrls: ['./film-info.component.css']
})
export class FilmInfoComponent implements OnInit {

  filmInfo : any = {}
  constructor(private dataService : GetDataService, private route: ActivatedRoute) {
    this.route.params.subscribe((params: Params) => {
      this.filmInfo  = this.dataService.getFilmById(params['id'])
    })
  }

  ngOnInit(): void {
    console.log(this.filmInfo)
  }

}
