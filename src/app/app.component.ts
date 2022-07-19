import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GetDataService } from './get-data.service';
import {FilmInfoType} from "./finfo/finfo.module";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnInit {
  title = 'kinopoiskCopy';

  constructor(
    private getData: GetDataService,
    private cdr: ChangeDetectorRef
  ) {}

  search = () => {


    this.getData.testRequest().subscribe((value: FilmInfoType | unknown) => {
      console.log(value);
    });
  };

  ngOnInit() {}
}
