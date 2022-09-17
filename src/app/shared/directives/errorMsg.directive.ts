import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[error-msg]',
})
export class ErrorMsgDirective implements OnInit {
  htmlElement: ElementRef<HTMLElement>;
  @Input() set color(valor: string) {
    this.htmlElement.nativeElement.style.color = valor;
  }
  @Input() set mensaje(mensaje: string) {
    this.htmlElement.nativeElement.innerText = mensaje;
  }

  constructor(private elementRef: ElementRef<HTMLElement>) {
    this.htmlElement = elementRef;
  }

  ngOnInit() {}

  setErrorColor() {
    this.htmlElement.nativeElement.style.color = this.color;
    this.htmlElement.nativeElement.classList.add('form-text');
  }

  setErrorMsg() {
    this.htmlElement.nativeElement.innerText = this.mensaje;
  }
}
