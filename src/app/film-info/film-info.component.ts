import { Component, OnInit } from '@angular/core';
import {GetDataService} from "../get-data.service";
import {ActivatedRoute, Params} from "@angular/router";
import {FormBuilder} from "@angular/forms";

@Component({
  selector: 'app-film-info',
  templateUrl: './film-info.component.html',
  styleUrls: ['./film-info.component.css']
})
export class FilmInfoComponent implements OnInit {

  filmInfo : any = {}


  filmForm = this.fb.group({
    name: [this.filmInfo.name],
    rating: [this.filmInfo.rating],
    year: [this.filmInfo.year]
  })

  constructor(private dataService : GetDataService, private route: ActivatedRoute, private fb: FormBuilder) {

    this.route.params.subscribe((params: Params) => {
      this.dataService.getFilmById(params['id']).then((value) => {
        this.filmInfo = value
        console.log(this.filmInfo)
      })
    })
  }

  ngOnInit(): void {
    console.log(this.filmInfo)
  }

}
