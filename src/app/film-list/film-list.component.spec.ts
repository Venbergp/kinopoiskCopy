import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmListComponent } from './film-list.component';
import { AppModule } from '../app.module';
import { By } from '@angular/platform-browser';
import { resolve } from '@angular/compiler-cli';
import { FilmItemComponent } from './film-item/film-item.component';

describe('FilmListComponent', () => {
  let component: FilmListComponent;
  let fixture: ComponentFixture<FilmListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FilmListComponent],
      imports: [AppModule],
    }).compileComponents();

    fixture = TestBed.createComponent(FilmListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
