import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';

@Component({
  selector: 'app-film-item',
  templateUrl: './film-item.component.html',
  styleUrls: ['./film-item.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FilmItemComponent implements OnInit {
  @Input() film: {
    id: number | string;
    img: string;
    bigImg: string;
    name: number | string;
    rating: number | string;
    year: number | string;
    description: string;
  } = {
    id: '',
    img: '',
    bigImg: '',
    name: '',
    rating: '',
    year: '',
    description: '',
  };

  constructor() {}

  ngOnInit(): void {
    // console.log(this.film)
  }
}
