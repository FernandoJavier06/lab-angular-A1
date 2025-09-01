import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../services/user.service';
import {MatCardModule} from '@angular/material/card';
import { Object } from '../../interfaces/object';


@Component({
  selector: 'app-user',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export default class UserComponent implements OnInit {
  private readonly activeRoute = inject(ActivatedRoute);
  private readonly userService = inject(UserService);

  public data: Object[] = [];
  constructor() {}

  ngOnInit(): void {
    /*console.log(this.activeRoute.snapshot.queryParamMap.get('id'));  
    console.log(this.activeRoute.snapshot.queryParamMap.get('type'));
    console.log(this.activeRoute.snapshot.queryParamMap.get('page'));
    */
   this.getUsers();
  }

  getUsers(){
    this.userService.get().subscribe({
      next: (res) => {
        this.data = [...res];
      },
      error: () => {},
      complete: () => {},
    });
  }
}
