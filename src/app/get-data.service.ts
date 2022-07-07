import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, Observer} from "rxjs";

// Задание: положить данные в локал сторадж и через интерсептор к ним обращаться. В мэйн тс проверять лежат ли они там, если данных нету, то класть их туда

@Injectable({
  providedIn: 'root'
})
export class GetDataService {


  films : any[] = []


  constructor(private http: HttpClient) {

  }


  loadFilms() : any {



    this.http.get('http://localhost:4200/films').subscribe(x => {
      this.films = JSON.parse(x.toString())
    })
  }

  getFilmList() : Promise<any[]>{


    return new Promise(resolve => {
      let films
      this.http.get('http://localhost:4200/films').subscribe(x => {
        films = JSON.parse(x.toString())
        this.films = films
        resolve(films)
      })
    })

  }

  getFilmById(id : Number) {
    for (let film of this.films) {
      if (film.id == id) {
        return film
      }
    }
  }

}
