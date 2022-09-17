import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[error-msg]',
})
export class ErrorMsgDirective implements OnInit {
  private _color: string = 'red';
  private _mensaje: string = 'Este campo es obligatorio';

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

  ngOnInit() {
    this.setErrorClass();
    this.setErrorMsg();
    this.setErrorColor();
  }

  setErrorColor() {
    this.htmlElement.nativeElement.style.color = this._color;
  }
  setErrorClass() {
    this.htmlElement.nativeElement.classList.add('form-text');
  }

  setErrorMsg() {
    this.htmlElement.nativeElement.innerText = this._mensaje;
  }
}
