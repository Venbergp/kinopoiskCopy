import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { FilmInfoType } from '../../finfo/finfo.module';

@Component({
  selector: 'app-film-item',
  templateUrl: './film-item.component.html',
  styleUrls: ['./film-item.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FilmItemComponent implements OnInit {
  @Input() film: FilmInfoType = {
    awards: [],
    bigImg: '',
    description: '',
    img: '',
    name: '',
    rating: '',
    year: '',
    id: 0,
  };

  constructor() {}

  ngOnInit(): void {
    // console.log(this.film)
  }
}
