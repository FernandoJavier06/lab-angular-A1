import { Component, inject, OnInit } from '@angular/core';
import { PhoneService } from '../../services/phone.service';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';


export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

@Component({
  selector: 'app-phones',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, MatTableModule, MatCardModule],
  templateUrl: './phones.component.html',
  styleUrl: './phones.component.scss'
})
export default class PhonesComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name'];
  //public dataSource:Object[] = [];
  public dataSource = new MatTableDataSource<Object>([]);
  private readonly phoneService = inject(PhoneService);

  constructor() { }
  ngOnInit(): void {
    this.getAll();
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  getAll() {
    this.phoneService.get().subscribe({
      next: (res) => {
        this.dataSource.data = [...res];
        console.log(res);
      },
    });
  }
}
