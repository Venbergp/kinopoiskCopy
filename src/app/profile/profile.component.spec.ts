import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileComponent } from './profile.component';
import { AppModule } from '../app.module';
import { By } from '@angular/platform-browser';
import { resolve } from '@angular/compiler-cli';

describe('ProfileComponent', () => {
  let component: ProfileComponent;
  let fixture: ComponentFixture<ProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProfileComponent],
      imports: [AppModule],
    }).compileComponents();

    fixture = TestBed.createComponent(ProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should block superuserLink button', function () {
    component.superuserAccess = false
    fixture.detectChanges()
    expect(fixture.debugElement.query(By.css('button')).nativeElement.hidden).toBeTruthy();
  });

  it('should unblock superuserLink button', function () {
    component.superuserAccess = true
    fixture.detectChanges()
    expect(fixture.debugElement.query(By.css('button')).nativeElement.hidden).toBeFalsy();
  });
});
