import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styles: [
    `
      .hidden {
        display: none;
      }
    `,
  ],
})
export class AgregarComponent implements OnInit {
  textouno: string = 'prueba de cambios';
  color: string = 'red';
  aleatorio: number = 0;

  miFormulario: FormGroup = this.formBuilder.group({
    nombre: ['', Validators.required],
  });

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {}

  tieneError(campo: string): boolean {
    return this.miFormulario.get(campo)?.invalid || false;
  }

  cambiarTexto() {
    this.textouno = Math.random().toString();
  }

  cambiarColor() {
    const color = '#xxxxxx'.replace(/x/g, (y) =>
      ((Math.random() * 16) | 0).toString(16)
    );
    this.color = color;
  }
}
