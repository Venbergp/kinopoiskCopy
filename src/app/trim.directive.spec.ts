import { TrimDirective } from './trim.directive';
import {Component} from "@angular/core";
import {ComponentFixture, TestBed} from "@angular/core/testing";
import {By} from "@angular/platform-browser";

@Component({
  selector: 'test-component',
  template: `
  <div>
    <input trimDirective>
  </div>
  `
})
export class TestComponent {

}

describe('TrimDirective',  async () => {
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;

  beforeEach(async () => {

    await TestBed.configureTestingModule({
      declarations: [TestComponent, TrimDirective],
    }).compileComponents();


    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });




  it('should create an instance', () => {
    const directive = new TrimDirective();
    expect(directive).toBeTruthy();
  });

  it('should trim value', () => {
    let inp = fixture.debugElement.query(By.css('input'))
    inp.nativeElement.value = '   123 123    '
    inp.triggerEventHandler('blur', { target: inp.nativeElement })
    fixture.detectChanges()
    expect(inp.nativeElement.value).toEqual('123 123')

  });
});
