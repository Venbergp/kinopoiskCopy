import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { GetDataService } from '../get-data.service';
import { ActivatedRoute, Params } from '@angular/router';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ReplaySubject, takeUntil } from 'rxjs';
import {FilmInfoType} from "../finfo/finfo.module";
import {FilmForm} from "./film-form/film-form.module";



@Component({
  selector: 'app-film-info',
  templateUrl: './film-info.component.html',
  styleUrls: ['./film-info.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FilmInfoComponent implements OnInit, OnDestroy {
  filmInfo: FilmInfoType = {
    awards: [],
    bigImg: '',
    description: '',
    id: 0,
    img: '',
    name: '',
    rating: '',
    year: '',
  };
  filmForm : FilmForm = new FilmForm()


  awardsList: FormControl[] = [];
  destroy: ReplaySubject<any> = new ReplaySubject<any>(1);

  constructor(
    private dataService: GetDataService,
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private cdr: ChangeDetectorRef
  ) {
    //console.log(this.newFilmForm.idValue)
  }

  checkboxStatus() {
    if (this.filmForm.awardsCheckbox) {
      this.filmForm.enableAwards()
    } else {
      this.filmForm.disableAwards()
    }
  }

  addNewAward() {
    this.filmForm.addNewAward()
  }

  removeAwards(idx: number) {
    this.filmForm.removeAwards(idx)

  }

  onSubmit() {
    if (
      this.filmForm.value.awardsCheckbox == true &&
      this.filmForm.value.awards != undefined
    ) {
      this.filmInfo.awards = this.filmForm.value.awards;
    }
    this.filmInfo.description = this.filmForm.value.description;
    this.filmInfo.rating = this.filmForm.value.rating;
    this.filmInfo.year = this.filmForm.value.year;
    this.filmInfo.name = this.filmForm.value.name;

    this.dataService.loadFilm(this.filmInfo).subscribe(() => {})
  }

  ngOnInit(): void {
    this.route.params
      .pipe(takeUntil(this.destroy))
      .subscribe((params: Params) => {
        this.dataService
          .getFilmById(params['id'])
          .pipe(takeUntil(this.destroy))
          .subscribe((value) => {

            this.filmForm.setFormFromFilmInfoType(value as FilmInfoType)
            this.filmInfo = value as FilmInfoType;

            this.awardsList = this.filmForm.getAwardList()
            this.checkboxStatus();
            this.cdr.detectChanges();
          });
      });
  }

  ngOnDestroy() {
    this.destroy.next(null);
    this.destroy.complete();
  }
}
