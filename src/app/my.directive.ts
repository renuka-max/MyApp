import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHover]'
})
export class HoverDirective {
@Input()appHover = '';
  constructor(private el :ElementRef) { }
  
  @HostListener('mouseenter') onMouseEnter(){
    this.highLightElement(this.appHover)
  }
  @HostListener('mouseleave') onMouseLeave(){
    this.highLightElement('');
  }
  highLightElement(color:string) {
    this.el.nativeElement.style.color = color
  }
}
