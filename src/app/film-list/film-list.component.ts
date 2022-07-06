import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {fromEvent, observable, Observable} from "rxjs";
import { debounceTime, map } from 'rxjs/operators';
import {GetDataService} from "../get-data.service";


@Component({
  selector: 'app-film-list',
  templateUrl: './film-list.component.html',
  styleUrls: ['./film-list.component.css']
})
export class FilmListComponent implements OnInit, OnChanges {

  filmsNameFilter = ''
  films : any[] = []
  filteredFilms : any[] = []



  OnInputChange = () => {
    // console.log(this.filmsNameFilter)
    // this.filteredFilms = this._filter(this.filmsNameFilter)
  }

  constructor(private dataService: GetDataService) {
    this.films = this.dataService.getFilmList()
    this.filteredFilms = this.films
  }

  ngOnInit(): void {


    // const search$ = new Observable(observer => {
    //   let search = document.getElementById('search')
    //   // @ts-ignore
    //   search.addEventListener('keyup', () => {
    //     observer.next()
    //   })
    // })
    //
    // search$.pipe(debounceTime(500)).subscribe(() => {this.filteredFilms = this._filter(this.filmsNameFilter)})


    // const clicks = fromEvent(document, 'keyup');
    // const result = clicks.pipe(debounceTime(500));
    // result.subscribe(() => {this.filteredFilms = this._filter(this.filmsNameFilter)});

    const search = document.getElementById('search')
    // @ts-ignore
    const clicks = fromEvent(search, 'keyup')
    const result = clicks.pipe(debounceTime(500))
    result.subscribe(() => {this.filteredFilms = this._filter(this.filmsNameFilter)})
  }

  ngOnChanges(changes: SimpleChanges): void {
  }

  private _filter(value: string): any[] {
    const filterValue = value.toLowerCase();
    return this.films.filter(option => option.name.toLowerCase().includes(filterValue.toLowerCase()));
  }

}
