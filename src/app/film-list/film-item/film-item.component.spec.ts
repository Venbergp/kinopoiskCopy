import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmItemComponent } from './film-item.component';
import { AppModule } from '../../app.module';

describe('FilmItemComponent', () => {
  let component: FilmItemComponent;
  let fixture: ComponentFixture<FilmItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FilmItemComponent],
      imports: [AppModule],
    }).compileComponents();

    fixture = TestBed.createComponent(FilmItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
