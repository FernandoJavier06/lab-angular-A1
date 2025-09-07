import { Component, inject, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { AsyncPipe, CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { RouterOutlet } from '@angular/router';
import { RouterLink } from '@angular/router';
import { Option } from '../../interfaces/options';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.scss',
  standalone: true,
  imports: [
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    AsyncPipe,
    RouterOutlet,
    CommonModule,
    RouterLink
]
})
export default class NavigationComponent implements OnInit {
  private breakpointObserver = inject(BreakpointObserver);

  ngOnInit() {
    // Initialization logic if needed
  }
  constructor() {
    
  }
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );
  
    public readonly routes:Option[] = [
      { route: '/home', icon: 'home', name: 'Home' },
      { route: '/person', icon: 'person', name: 'Empleados' },
      {route: '/phones', icon: 'phone_enabled', name: 'Phone' },
    ]
}
