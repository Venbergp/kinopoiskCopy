import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {fromEvent} from "rxjs";
import {debounceTime} from 'rxjs/operators';
import {GetDataService} from "../get-data.service";


@Component({
  selector: 'app-film-list',
  templateUrl: './film-list.component.html',
  styleUrls: ['./film-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FilmListComponent implements OnInit, OnChanges {

  filmsNameFilter = ''
  films : any[] = []
  filteredFilms : any[] = []



  OnInputChange = () => {
    // console.log(this.filmsNameFilter)
    // this.filteredFilms = this._filter(this.filmsNameFilter)
  }

  constructor(private dataService: GetDataService, private cdr: ChangeDetectorRef) {

  }

  ngOnInit(): void {

    this.dataService.getFilmList().subscribe((value : any) => {
      this.films = value
      this.filteredFilms = this.films
      this.cdr.detectChanges()
    })

    this.filteredFilms = this.films

    const search : any = document.getElementById('search')
    const clicks = fromEvent(search, 'keyup')
    const result = clicks.pipe(debounceTime(500))
    result.subscribe(() => {
      this.filteredFilms = this._filter(this.filmsNameFilter)
      this.cdr.detectChanges()
    })
  }

  ngOnChanges(changes: SimpleChanges): void {
  }

  private _filter(value: string): any[] {
    const filterValue = value.toLowerCase();
    return this.films.filter(option => option.name.toLowerCase().includes(filterValue.toLowerCase()));
  }

}
