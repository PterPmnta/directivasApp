import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[error-msg]',
})
export class ErrorMsgDirective implements OnInit {
  htmlElement: ElementRef<HTMLElement>;
  @Input() color: string = 'red';
  @Input() mensaje: string = 'Campo requerido';

  constructor(private elementRef: ElementRef<HTMLElement>) {
    console.log(elementRef);
    this.htmlElement = elementRef;
  }

  ngOnInit() {
    this.setErrorColor();
    this.setErrorMsg();
  }

  setErrorColor() {
    this.htmlElement.nativeElement.style.color = this.color;
    this.htmlElement.nativeElement.classList.add('form-text');
  }

  setErrorMsg() {
    this.htmlElement.nativeElement.innerText = this.mensaje;
  }
}
