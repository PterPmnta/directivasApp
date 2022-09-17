import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[error-msg]',
})
export class ErrorMsgDirective implements OnInit {
  htmlElement: ElementRef<HTMLElement>;
  @Input() color: string = 'red';

  constructor(private elementRef: ElementRef<HTMLElement>) {
    console.log(elementRef);
    this.htmlElement = elementRef;
  }

  ngOnInit() {
    console.log('Solo en la directiva');
    this.setErrorColor();
  }

  setErrorColor() {
    this.htmlElement.nativeElement.style.color = this.color;
  }
}
