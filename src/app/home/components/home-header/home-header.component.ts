import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';
import { MatCardModule } from "@angular/material/card";


@Component({
  selector: 'app-home-header',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './home-header.component.html',
  styleUrl: './home-header.component.scss'
})
export class HomeHeaderComponent implements OnInit {
  //Propiedades del componente
  @Input() inputDato!:string;
  public dato:string = 'Hola, soy HomeHeaderComponent';
  @Output() outputContador = new EventEmitter<number>();
  private contador:number = 0;

  constructor() {
  }

  ngOnInit(): void {
      this.dato = this.inputDato;
  }

  onClick() {
    this.contador++;
    this.outputContador.emit(this.contador);
  }

  onClickLess() {
    if (this.contador > 0) {
      this.contador--;
    this.outputContador.emit(this.contador);
    }
  }
}
