import { AnimationBuilder, AnimationMetadata } from '@angular/animations';
import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private elementRef: ElementRef, ) { }// private builder: AnimationBuilder

  @HostListener('mouseover') onMouseOver() {
    this.transform('translateY(-5px) scale(1.1)', '5s ease');
    
    // this.elementRef.nativeElement.animate(
    //   [
    //     {transform: "translateY(-5px) scale(1.1)"},
    //   ],
    //   {
    //   duration: 300,
    //   delay: 0,
    //   fill: "both",
    //   easing :'ease-in-out',
    //   trigger: 'enter'
    // }).play();
    
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.transform('', '');
  }

  private transform(transform: string, transition: any): void {
    this.elementRef.nativeElement.style.transform = transform;
    this.elementRef.nativeElement.style.trasition = transition;
  }

}
