import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-film-item',
  templateUrl: './film-item.component.html',
  styleUrls: ['./film-item.component.css']
})
export class FilmItemComponent implements OnInit {

  @Input() film :
    {
      img: string,
      bigImg: string,
      name: number | string,
      rating: number | string,
      year: number | string,
      description: string
    } = {
    img: '',
    bigImg: '',
    name: '',
    rating: '',
    year: '',
    description: ''
  }



  constructor() { }

  ngOnInit(): void {
    // console.log(this.film)
  }

}
