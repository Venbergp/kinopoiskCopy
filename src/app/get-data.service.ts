import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GetDataService {

  films = [
    {
      id: 1,
      name: 'Зеленая миля',
      rating: 9.1,
      year: 1999,
      img: "https://avatars.mds.yandex.net/get-kinopoisk-image/1599028/4057c4b8-8208-4a04-b169-26b0661453e3/68x102",
      bigImg: "https://avatars.mds.yandex.net/get-kinopoisk-image/1599028/4057c4b8-8208-4a04-b169-26b0661453e3/300x450",
      description: "В тюрьме для смертников появляется заключенный с божественным даром. Мистическая драма по роману Стивена Кинга"
    },
    {
      id: 2,
      name: 'Список Шиндлера',
      rating: 9.0,
      year: 1993,
      img: "https://avatars.mds.yandex.net/get-kinopoisk-image/6201401/1e1ac6d9-c658-4f5f-937e-d080bca0d893/68x102",
      bigImg: "https://avatars.mds.yandex.net/get-kinopoisk-image/6201401/1e1ac6d9-c658-4f5f-937e-d080bca0d893/300x450",
      description: "История немецкого промышленника, спасшего тысячи жизней во время Холокоста. Драма Стивена Спилберга"
    },
    {
      id: 3,
      name: "Побег из Шоушенка",
      rating: 9.0,
      year: 1994,
      img: "https://avatars.mds.yandex.net/get-kinopoisk-image/1599028/0b76b2a2-d1c7-4f04-a284-80ff7bb709a4/68x102",
      bigImg: "https://avatars.mds.yandex.net/get-kinopoisk-image/1599028/0b76b2a2-d1c7-4f04-a284-80ff7bb709a4/300x450",
      description: "Бухгалтер Энди Дюфрейн обвинён в убийстве собственной жены и её любовника. Оказавшись в тюрьме под названием Шоушенк, он сталкивается с жестокостью и беззаконием, царящими по обе стороны решётки. Каждый, кто попадает в эти стены, становится их рабом до конца жизни. Но Энди, обладающий живым умом и доброй душой, находит подход как к заключённым, так и к охранникам, добиваясь их особого к себе расположения."
    }
  ]

  getFilmList() {
    return this.films
  }

  // @ts-ignore
  getFilmById(id : Number) {
    for (let film of this.films) {
      if (film.id == id) {
        return film
      }
    }
  }

  constructor() { }
}
