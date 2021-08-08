import { TeamService } from './../../../../shared/services/team.service';
import { TableTitle } from './../../../../shared/components/table/table-header/@types/table-headers.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-team-container',
  templateUrl: './team-container.component.html',
  styleUrls: ['./team-container.component.scss'],
})
export class TeamContainerComponent implements OnInit {
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

  page = 1;

  constructor(public teamService: TeamService) {}

  ngOnInit(): void {}
}
