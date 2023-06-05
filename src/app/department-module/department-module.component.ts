import { Component } from '@angular/core';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatTableModule} from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';

export interface PeriodicElement {
  check: boolean;
  name: string;
  position: number;
}
const ELEMENT_DATA: PeriodicElement[] = [
  {check : true , position: 1, name: 'UI'},
  {check : true ,position: 2, name: 'Front-End'},
  {check : true ,position: 3, name: 'Back-End'},
  {check : true ,position: 4, name: 'Designer'},
  {check : true ,position: 5, name: 'Cloud Engineer'},
];

@Component({
  selector: 'app-department-module',
  templateUrl: './department-module.component.html',
  styleUrls: ['./department-module.component.scss'],
  standalone: true,
  imports: [MatTableModule, MatCheckboxModule, MatFormFieldModule,MatIconModule],
})
export class DepartmentModuleComponent {
  displayedColumns: string[] = ['check','position', 'name', 'action'];
  dataSource = ELEMENT_DATA;
}
