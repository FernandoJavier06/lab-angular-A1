import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import appNavigation from './main/pages/navigation/navigation.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [appNavigation],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'app_analisis';
}
