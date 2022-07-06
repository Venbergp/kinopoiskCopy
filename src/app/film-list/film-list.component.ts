import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {fromEvent, observable, Observable} from "rxjs";
import { debounceTime, map } from 'rxjs/operators';


@Component({
  selector: 'app-film-list',
  templateUrl: './film-list.component.html',
  styleUrls: ['./film-list.component.css']
})
export class FilmListComponent implements OnInit, OnChanges {

  filmsNameFilter = ''
  films = [
    {
      name: 'Зеленая миля',
      rating: 9.1,
      year: 1999,
      img: "https://avatars.mds.yandex.net/get-kinopoisk-image/1599028/4057c4b8-8208-4a04-b169-26b0661453e3/68x102",
      bigImg: "https://avatars.mds.yandex.net/get-kinopoisk-image/1599028/4057c4b8-8208-4a04-b169-26b0661453e3/300x450",
      description: "В тюрьме для смертников появляется заключенный с божественным даром. Мистическая драма по роману Стивена Кинга"
    },
    {
      name: 'Список Шиндлера',
      rating: 9.0,
      year: 1993,
      img: "https://avatars.mds.yandex.net/get-kinopoisk-image/6201401/1e1ac6d9-c658-4f5f-937e-d080bca0d893/68x102",
      bigImg: "https://avatars.mds.yandex.net/get-kinopoisk-image/6201401/1e1ac6d9-c658-4f5f-937e-d080bca0d893/300x450",
      description: "История немецкого промышленника, спасшего тысячи жизней во время Холокоста. Драма Стивена Спилберга"
    },
    {
      name: "Побег из Шоушенка",
      rating: 9.0,
      year: 1994,
      img: "https://avatars.mds.yandex.net/get-kinopoisk-image/1599028/0b76b2a2-d1c7-4f04-a284-80ff7bb709a4/68x102",
      bigImg: "https://avatars.mds.yandex.net/get-kinopoisk-image/1599028/0b76b2a2-d1c7-4f04-a284-80ff7bb709a4/300x450",
      description: "Бухгалтер Энди Дюфрейн обвинён в убийстве собственной жены и её любовника. Оказавшись в тюрьме под названием Шоушенк, он сталкивается с жестокостью и беззаконием, царящими по обе стороны решётки. Каждый, кто попадает в эти стены, становится их рабом до конца жизни. Но Энди, обладающий живым умом и доброй душой, находит подход как к заключённым, так и к охранникам, добиваясь их особого к себе расположения."
    }
  ]

  // @ts-ignore
  filteredFilms = this.films



  OnInputChange = () => {
    // console.log(this.filmsNameFilter)
    // this.filteredFilms = this._filter(this.filmsNameFilter)
  }

  constructor() {
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
