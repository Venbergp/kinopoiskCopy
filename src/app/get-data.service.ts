import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

// Задание: положить данные в локал сторадж и через интерсептор к ним обращаться. В мэйн тс проверять лежат ли они там, если данных нету, то класть их туда

@Injectable({
  providedIn: 'root'
})
export class GetDataService {

  films : any[] = []
  loader : any

  constructor(private http: HttpClient) {
    this.loader = new Promise((resolve, reject) => {

    })
    this.http.get('http://localhost:4200/films').subscribe(x => {
      this.films = JSON.parse(x.toString())
    })
  }

  getFilmList() {

    return this.films
  }


  getFilmById(id : Number) {
    for (let film of this.films) {
      // if (film.id == id) {
      //   return film
      // }
    }
  }

}
