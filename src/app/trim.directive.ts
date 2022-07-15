import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';
import { NgControl, NgModel } from '@angular/forms';

@Directive({
  selector: '[trimDirective]',
})
export class TrimDirective {
  constructor() {}

  @HostListener('blur', ['$event.target', '$event.target.value'])
  onBlur(el: any, value: string) {
    //console.log('----вывод до трима: ' + el.value)
    if (value.trim() !== value) {
      el.value = value.trim();
    }
    //console.log('----вывод после трима: ' + el.value)
  }
}
