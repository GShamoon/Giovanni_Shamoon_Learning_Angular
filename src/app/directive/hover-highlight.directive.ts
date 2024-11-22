import {Directive, ElementRef, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[appHoverHighlight]',
  standalone: true
})
export class HoverHighlightDirective {

  constructor(private el:ElementRef) {
  }

  @Input() appHoverHighlight = "";



  @HostListener('mouseenter') onMouseEnter(){
    this.highlightColor(this.appHoverHighlight || "orange");
  }


  @HostListener('mouseleave') onMouseLeave(){
    this.highlightColor("");
  }


  private highlightColor(color: string){
    this.el.nativeElement.style.color=color;
  }
}
