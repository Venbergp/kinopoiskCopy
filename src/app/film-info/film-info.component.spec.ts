import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmInfoComponent } from './film-info.component';
import { AppModule } from '../app.module';
import { By } from '@angular/platform-browser';

describe('FilmInfoComponent', () => {
  let component: FilmInfoComponent;
  let fixture: ComponentFixture<FilmInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FilmInfoComponent],
      imports: [AppModule],
    }).compileComponents();

    fixture = TestBed.createComponent(FilmInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should open modal', () => {
    expect(component).toBeTruthy();
    let buttons = fixture.debugElement.queryAll(By.css('button'));
    let editButton = undefined;
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
      console.log(editButton.nativeElement);

      editButton.triggerEventHandler('click', null);

      fixture.detectChanges();

      console.log(
        fixture.debugElement.query(By.css('div.modal')).nativeElement
      );
    }
  });
});
