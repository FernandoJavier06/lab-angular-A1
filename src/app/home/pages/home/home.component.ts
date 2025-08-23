import { Component, OnInit } from '@angular/core';
import { HomeHeaderComponent } from "../../components/home-header/home-header.component";
import { HomeBodyComponent } from "../../components/home-body/home-body.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HomeHeaderComponent, HomeBodyComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export default class HomeComponent implements OnInit{

  public dato:string = 'Hola, desde el componente HomeComponent, padre.';
  public contenido:string = '123';
  public contador:number = 0;

  constructor() {
    console.log('Esto es el constructor de HomeComponent');
  }

  ngOnInit(): void {
    console.log('Esto es el ngOnInit de HomeComponent');
  }

  eventMessage(mensaje: string) {
    this.contenido = mensaje;
  }

  eventContador(contador: number) {
    this.contador = contador;
  }

}
