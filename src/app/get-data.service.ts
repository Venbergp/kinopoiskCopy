import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { delay, Observable, Observer } from 'rxjs';

// Задание: положить данные в локал сторадж и через интерсептор к ним обращаться. В мэйн тс проверять лежат ли они там, если данных нету, то класть их туда

@Injectable({
  providedIn: 'root',
})
export class GetDataService {
  constructor(private http: HttpClient) {}

  testRequest(): any {
    return this.http.get('http://localhost:4200/films/2');
  }

  loadFilm(filmInfo: any): any {
    this.http.post('http://localhost:4200', filmInfo)
  }

  getFilmList(): any {
    return this.http.get('http://localhost:4200/films');
  }

  getFilmById(id: Number) {
    return this.http.get('http://localhost:4200/films/' + id);
  }
}
