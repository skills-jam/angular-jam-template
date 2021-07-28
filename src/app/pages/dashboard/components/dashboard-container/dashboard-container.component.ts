import { Component, OnInit } from '@angular/core';

import { TableTitle } from './../../../../shared/components/table/table-header/@types/table-headers.model';

@Component({
  selector: 'app-dashboard-container',
  templateUrl: './dashboard-container.component.html',
  styleUrls: ['./dashboard-container.component.scss'],
})
export class DashboardContainerComponent implements OnInit {
  page = 1;

  tableHeaders: TableTitle[] = [
    {
      text: 'Name',
      visible: true,
    },
    {
      text: 'Title',
      visible: true,
    },
    {
      text: 'Status',
      visible: true,
    },
    {
      text: 'Role',
      visible: true,
    },
    {
      text: 'Edit',
      visible: false,
    },
  ];

  peoples = [
    {
      name: 'Jane Cooper',
      title: 'Frontend developer',
      department: 'Optimization',
      role: 'Admin',
      email: 'jane.cooper@example.com',
      image:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
    },
    {
      name: 'Roy Lopez',
      title: 'Backend developer',
      department: 'Optimization',
      role: 'Member',
      email: 'roy.lopez@example.com',
      image: 'https://randomuser.me/api/portraits/med/men/90.jpg',
    },
  ];

  constructor() {}

  ngOnInit(): void {}

  pageChange(page: number) {
    console.log(page);
  }
}
