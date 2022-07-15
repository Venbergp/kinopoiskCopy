import {ComponentFixture, fakeAsync, flush, TestBed, waitForAsync} from '@angular/core/testing';

import { FilmInfoComponent } from './film-info.component';
import { AppModule } from '../app.module';
import {BrowserModule, By} from '@angular/platform-browser';
import {TrimDirective} from "../trim.directive";
import {HttpClient, HttpClientModule, HttpHandler} from "@angular/common/http";
import {ActivatedRoute, Params, RouterModule} from "@angular/router";
import {ChangeDetectorRef, CUSTOM_ELEMENTS_SCHEMA, HostListener, NO_ERRORS_SCHEMA} from "@angular/core";
import {RouterTestingModule} from "@angular/router/testing";
import {FormArray, FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule} from "@angular/forms";
import {TextFieldModule} from "@angular/cdk/text-field";
import {AppRoutingModule} from "../app-routing.module";
import {BrowserAnimationsModule, NoopAnimationsModule} from "@angular/platform-browser/animations";
import {MatInputModule} from "@angular/material/input";
import {MatSelectModule} from "@angular/material/select";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatIconModule} from "@angular/material/icon";
import {GetDataService} from "../get-data.service";
import {BehaviorSubject, from, Observable, of} from "rxjs";


describe('FilmInfoComponent', () => {
  let component: FilmInfoComponent;
  let fixture: ComponentFixture<FilmInfoComponent>;


  beforeEach(async () => {

    const fakeActivatedRoute = {
      params: of<Params>([{id: 1}])
    } as ActivatedRoute;


    await TestBed.configureTestingModule({
      declarations: [
        FilmInfoComponent,
        TrimDirective,
      ],
      imports: [
        BrowserModule,
        FormsModule,
        RouterModule,
        AppRoutingModule,
        HttpClientModule,
        ReactiveFormsModule,
        NoopAnimationsModule,
        MatInputModule,
        MatSelectModule,
        MatFormFieldModule,
        MatCheckboxModule,
        MatIconModule,
        RouterTestingModule
      ],
      providers: [
        GetDataService,
        {provide: ActivatedRoute, useValue: fakeActivatedRoute},
        FormBuilder,
        ChangeDetectorRef,
      ],
      schemas: [

        CUSTOM_ELEMENTS_SCHEMA,
        NO_ERRORS_SCHEMA,
      ]
    }).compileComponents();

    // no errors schema

    fixture = TestBed.createComponent(FilmInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });



  async function runOnPushChangeDetection(fixture: ComponentFixture<any>): Promise<void> {
    const changeDetectorRef = fixture.debugElement.injector.get<ChangeDetectorRef>(ChangeDetectorRef);
    changeDetectorRef.detectChanges();
    return fixture.whenStable();
  }

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should use trim directive', () => {

    // Заполнение формы
    component.filmInfo = {
      id: 1,
      name: '             Зеленая миля',
      rating: 9.1,
      year: 1999,
      img: 'https://avatars.mds.yandex.net/get-kinopoisk-image/1599028/4057c4b8-8208-4a04-b169-26b0661453e3/68x102',
      bigImg:
        'https://avatars.mds.yandex.net/get-kinopoisk-image/1599028/4057c4b8-8208-4a04-b169-26b0661453e3/300x450',
      description:
        'В тюрьме для смертников появляется заключенный с божественным даром. Мистическая драма по роману Стивена Кинга',
      awards: ['Награда1', 'Награда2', 'Награда3'],
    }
    component.filmForm = new FormGroup({
      id: new FormControl(component.filmInfo.id),
      name: new FormControl(component.filmInfo.name),
      rating: new FormControl(component.filmInfo.rating),
      year: new FormControl(component.filmInfo.year),
      description: new FormControl(component.filmInfo.description),
      awardsCheckbox: new FormControl(false),
      awards: new FormArray([]),
    });
    if (component.filmInfo.awards) {
      for (let i: number = 1; i <= component.filmInfo.awards.length; ++i) {
        let awardName = component.filmInfo.awards[i - 1];
        (<FormArray>component.filmForm.controls['awards']).push(
          new FormControl({ value: awardName, disabled: true })
        );
      }
    }



    component.filmForm.controls['name'].setValue('    123         ')
    let input = fixture.debugElement.queryAll(By.css('input'))[0]

    runOnPushChangeDetection(fixture)
    input.triggerEventHandler('blur', {target: input.nativeElement})


    expect(input.nativeElement.value).toEqual('123')
  });

  it('should open modal',  fakeAsync(() => {
    expect(component).toBeTruthy();
    let buttons = fixture.debugElement.queryAll(By.css('button'));
    let editButton : any = undefined;
    let modal : any = fixture.debugElement.query(By.css('div.modal'))
    for (let button of buttons) {
      //console.log(button)
      if (
        button.nativeElement.innerText == 'Редактировать информацию о фильме'
      ) {
        editButton = button;
      }
    }

    if (typeof editButton == 'undefined') {
      expect(false).toBeTruthy();
    } else {
      //console.log(editButton.nativeElement);
      console.log(modal.nativeElement)
      editButton.triggerEventHandler('click', null);
      fixture.detectChanges()

      fixture.whenStable().then(() => {
        fixture.detectChanges()
        console.log(fixture.debugElement.query(By.css('div.modal')).nativeElement);
      })
    }

  }));
});
