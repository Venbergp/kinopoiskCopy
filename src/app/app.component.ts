import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit{
  title = 'kinopoiskCopy';

  constructor(private http: HttpClient, private cdr: ChangeDetectorRef) {
  }

  search = () => {

    let body = {
      id: 1,
      name: 'Зеленая миля 2',
      rating: 100,
      year: 1999,
      img: "https://avatars.mds.yandex.net/get-kinopoisk-image/1599028/4057c4b8-8208-4a04-b169-26b0661453e3/68x102",
      bigImg: "https://avatars.mds.yandex.net/get-kinopoisk-image/1599028/4057c4b8-8208-4a04-b169-26b0661453e3/300x450",
      description: "В тюрьме для смертников появляется заключенный с божественным даром. Мистическая драма по роману Стивена Кинга"
    }
    this.http.post('http://localhost:4200/editfilm', body).subscribe(x => {

    })
  }

  ngOnInit() {

  }
}
