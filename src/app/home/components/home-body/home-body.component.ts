import { ChangeDetectionStrategy, Component, EventEmitter, inject, Input, OnInit, Output } from '@angular/core';
import { MatCardModule } from "@angular/material/card";
import {MatButtonModule} from '@angular/material/button';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home-body',
  standalone: true,
  imports: [MatCardModule, MatButtonModule],
  templateUrl: './home-body.component.html',
  styleUrl: './home-body.component.scss'
})
export class HomeBodyComponent implements OnInit{
  //Output e Input
  @Output() outputData = new EventEmitter<string>();

  @Input() inputContador: number = 0;

  constructor() { }

  ngOnInit(): void {
      
  }


  onSubmit() {
    this.outputData.emit('Mensaje desde el componente hijo');
    console.log('Mensaje enviado desde el componente hijo');
  }

  //inject
  private readonly route = inject(Router);

  goUsers(){
    this.route.navigate(['/users'],
      { queryParams: 
        { 
          id:12,
          type:'rami',
          page:2 
        }
      });
  }
}
