import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { combineLatestWith, map, Observable, of, startWith } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { GetDataService } from '../get-data.service';
import { FormControl } from '@angular/forms';
import {FilmInfoType} from "../finfo/finfo.module";

@Component({
  selector: 'app-film-list',
  templateUrl: './film-list.component.html',
  styleUrls: ['./film-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FilmListComponent implements OnInit {
  inputFilmName: FormControl = new FormControl('');
  inputFilmName$: Observable<string> = this.inputFilmName.valueChanges.pipe(
    debounceTime(500),
    startWith('')
  );

  films$ = this.dataService.getFilmList();
  filteredFilms$: Observable<
    FilmInfoType[]
  > = of([]);

  constructor(private dataService: GetDataService) {}

  ngOnInit(): void {

    this.filteredFilms$ = this.inputFilmName$.pipe(
      combineLatestWith(this.films$),
      map((e1: [string, FilmInfoType[] | unknown]) => {
        return _filter(e1[0], e1[1] as FilmInfoType[]);
      })
    );

    const _filter = function (value: string, array: FilmInfoType[]): FilmInfoType[] {
      const filterValue = value.toLowerCase();

      return array.filter((option) =>
        option.name.toLowerCase().includes(filterValue)
      );
    };
  }
}
