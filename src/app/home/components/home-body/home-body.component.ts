import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatCardModule } from "@angular/material/card";
import {MatButtonModule} from '@angular/material/button';


@Component({
  selector: 'app-home-body',
  standalone: true,
  imports: [MatCardModule, MatButtonModule],
  templateUrl: './home-body.component.html',
  styleUrl: './home-body.component.scss'
})
export class HomeBodyComponent implements OnInit{
  @Output() outputData = new EventEmitter<string>();

  @Input() inputContador: number = 0;

  constructor() { }

  ngOnInit(): void {
      
  }

  onSubmit() {
    this.outputData.emit('Mensaje desde el componente hijo');
    console.log('Mensaje enviado desde el componente hijo');
  }
}
