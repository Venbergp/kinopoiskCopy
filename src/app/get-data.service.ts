import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { delay, Observable, Observer } from 'rxjs';
import {FilmInfoType} from "./finfo/finfo.module";

// Задание: положить данные в локал сторадж и через интерсептор к ним обращаться. В мэйн тс проверять лежат ли они там, если данных нету, то класть их туда

@Injectable({
  providedIn: 'root',
})
export class GetDataService {
  constructor(private http: HttpClient) {}

  testRequest(): Observable<FilmInfoType> {
    return this.http.get('http://localhost:4200/films/2') as Observable<FilmInfoType>;
  }

  loadFilm(filmInfo: FilmInfoType) : Observable<FilmInfoType> {
    console.log('делаю пост запрос')
    console.log(filmInfo)
    return this.http.post('http://localhost:4200', filmInfo) as Observable<FilmInfoType>;
  }

  getFilmList(): Observable<FilmInfoType[]> {
    return this.http.get('http://localhost:4200/films') as Observable<FilmInfoType[]>;
  }

  getFilmById(id: Number) : Observable<FilmInfoType> {
    return this.http.get('http://localhost:4200/films/' + id) as Observable<FilmInfoType>;
  }
}
