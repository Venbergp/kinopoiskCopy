import { Component, OnInit } from '@angular/core';
import {GetDataService} from "../get-data.service";
import {ActivatedRoute, Params} from "@angular/router";
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-film-info',
  templateUrl: './film-info.component.html',
  styleUrls: ['./film-info.component.css']
})
export class FilmInfoComponent implements OnInit {

  filmInfo : any = {}

  filmForm : FormGroup = new FormGroup({
    name: new FormControl(''),
    rating: new FormControl(''),
    year: new FormControl(''),
    description: new FormControl(''),
    awardsCheckbox: new FormControl()
  })




  constructor(private dataService : GetDataService, private route: ActivatedRoute, private fb: FormBuilder) {

    this.route.params.subscribe((params: Params) => {
      this.dataService.getFilmById(params['id']).then((value) => {


        this.filmInfo = value

        this.filmForm = new FormGroup({
          name: new FormControl(this.filmInfo.name),
          rating: new FormControl(this.filmInfo.rating),
          year: new FormControl(this.filmInfo.year),
          description: new FormControl(this.filmInfo.description),
          awardsCheckbox: new FormControl(false),
          awards: new FormArray([

          ])
        })

        console.log(this.filmInfo)
        for (let i = 1; i <= this.filmInfo.awards.length; i++) {

          let awardName : string = this.filmInfo.awards[i]
          console.log(awardName)

          //(<FormArray> this.filmForm.controls['awards']).push()
        }
      })
    })
  }

  ngOnInit(): void {
    console.log(this.filmInfo)
  }

}
