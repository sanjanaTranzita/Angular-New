import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appRedEl]'
})
export class RedElDirective {

  constructor(el:ElementRef) {
    el.nativeElement.style.color="darkmagenta";
    el.nativeElement.style.margin='15px';
    el.nativeElement.style.backgroundColor = '#C5FFF8'; 
    el.nativeElement.style.fontFamily = 'Arial, sans-serif'; 

   }

}
