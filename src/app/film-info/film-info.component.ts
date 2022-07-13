import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { GetDataService } from '../get-data.service';
import { ActivatedRoute, Params } from '@angular/router';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ReplaySubject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-film-info',
  templateUrl: './film-info.component.html',
  styleUrls: ['./film-info.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FilmInfoComponent implements OnInit, OnDestroy {
  filmInfo: any = {};
  filmForm: FormGroup = new FormGroup({
    id: new FormControl(''),
    name: new FormControl(''),
    rating: new FormControl(''),
    year: new FormControl(''),
    description: new FormControl(''),
    awardsCheckbox: new FormControl(),
    awards: new FormArray([new FormControl('')]),
  });
  awardsList: any = [];
  destroy: ReplaySubject<any> = new ReplaySubject<any>(1);

  constructor(
    private dataService: GetDataService,
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private cdr: ChangeDetectorRef
  ) {}

  checkboxStatus() {
    if (this.filmForm.controls['awardsCheckbox'].getRawValue()) {
      this.filmForm.controls['awards'].enable();
    } else {
      this.filmForm.controls['awards'].disable();
    }
  }

  addNewAdward() {
    (<FormArray>this.filmForm.controls['awards']).push(
      new FormControl({
        value: '',
        disabled: !this.filmForm.controls['awardsCheckbox'].getRawValue(),
      })
    );
  }

  removeAdwards(idx: number) {
    console.log('удаляю награду номер' + idx);
    (<FormArray>this.filmForm.controls['awards']).removeAt(idx);
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

    this.dataService.loadFilm(this.filmInfo);
  }

  ngOnInit(): void {
    this.route.params
      .pipe(takeUntil(this.destroy))
      .subscribe((params: Params) => {
        this.dataService
          .getFilmById(params['id'])
          .pipe(takeUntil(this.destroy))
          .subscribe((value) => {
            this.filmInfo = value;

            this.filmForm = new FormGroup({
              id: new FormControl(this.filmInfo.id),
              name: new FormControl(this.filmInfo.name),
              rating: new FormControl(this.filmInfo.rating),
              year: new FormControl(this.filmInfo.year),
              description: new FormControl(this.filmInfo.description),
              awardsCheckbox: new FormControl(false),
              awards: new FormArray([]),
            });

            if (this.filmInfo.awards) {
              for (let i: number = 1; i <= this.filmInfo.awards.length; ++i) {
                let awardName = this.filmInfo.awards[i - 1];
                (<FormArray>this.filmForm.controls['awards']).push(
                  new FormControl({ value: awardName, disabled: true })
                );
              }
            }

            this.awardsList = (<FormArray>(
              this.filmForm.controls['awards']
            )).controls;
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
