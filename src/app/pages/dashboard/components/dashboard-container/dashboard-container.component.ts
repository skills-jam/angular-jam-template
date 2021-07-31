import { MemberService } from './../../../../shared/services/member.service';
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

  constructor(public memberService: MemberService) {}

  ngOnInit(): void {}

  pageChange(page: number) {
    console.log(page);
  }
}
