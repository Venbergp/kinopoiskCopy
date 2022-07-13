import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
} from '@angular/core';
import {
  combineLatestWith,
  map,
  Observable,
  of,
  startWith,
} from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { GetDataService } from '../get-data.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-film-list',
  templateUrl: './film-list.component.html',
  styleUrls: ['./film-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class FilmListComponent implements OnInit {
  inputFilmName: FormControl = new FormControl('');
  inputFilmName$: Observable<any> = this.inputFilmName.valueChanges.pipe(
    startWith(''),
    debounceTime(500)
  );
  films$ = this.dataService.getFilmList();
  filteredFilms$: Observable<any> = of([]);

  constructor(private dataService: GetDataService) {}

  ngOnInit(): void {
    this.filteredFilms$ = this.inputFilmName$.pipe(
      combineLatestWith(this.films$),
      map((e1: any[]) => {
        return this._filter(e1[0], e1[1]);
      })
    );
  }

  private _filter(value: string, array: any[]): any[] {
    const filterValue = value.toLowerCase();
    return array.filter((option) =>
      option.name.toLowerCase().includes(filterValue)
    );
  }
}
