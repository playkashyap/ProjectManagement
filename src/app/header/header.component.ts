import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public view = 'list';
  public viewImage = '../../../assets/ListDashes.svg'
  public viewItems = [
    {
      id: 'list',
      image: '../../../assets/ListDashes.svg',
    },
    {
      id: 'card',
      image: '../../',
    },
  ];
  public module = 'dashboard';
  public moduleImage = '../../../assets/dashboardicon.svg';
  public moduleItems = [
    {
      id: 'dashboard',
      image: '../../../assets/dashboardicon.svg',
    },
    {
      id: 'projects',
      image: '../../../assets/icons8-project-48 1.svg',
    },
    {
      id: 'employee',
      image: '../../../assets/3-User.svg',
    },
    {
      id: 'department',
      image: '../../../assets/icons8-department-48 1.svg',
    },
    {
      id: 'rating',
      image: '../../../assets/icons8-rating-64 1.svg',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
  setView(id: string, image: string) {
    this.view = id;
    this.viewImage = image;
  }
  setModule(id: string, image: string) {
    this.module = id;
    this.moduleImage = image;
  }
}

