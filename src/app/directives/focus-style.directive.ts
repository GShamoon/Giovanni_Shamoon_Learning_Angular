import {Directive, ElementRef, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[appFocusStyle]',
  standalone: true
})
export class FocusStyleDirective {

  constructor(private el:ElementRef) { }

  @Input() appFocusStyle = "";

  @HostListener("focus") focus(){
    this.focusStyle(this.appFocusStyle);
  }

  @HostListener("blur") onBlur(){
    this.focusStyle("none")
  }

  private focusStyle(border: string){
    this.el.nativeElement.style.border = border;
  }
}
