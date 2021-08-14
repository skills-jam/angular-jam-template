import { ModalComponent } from './../../../../shared/components/modal/modal.component';
import { MemberService } from './../../../../shared/services/member.service';
import { Component, OnInit } from '@angular/core';

import { TableTitle } from './../../../../shared/components/table/table-header/@types/table-headers.model';
import { BsModalService } from 'ngx-bootstrap/modal';

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

  constructor(
    public memberService: MemberService,
    private modalService: BsModalService
  ) {}

  ngOnInit(): void {}

  openModal() {
    const modal = this.modalService.show(ModalComponent, {});

    modal.content.onAction.subscribe((res) => {
      console.log(res);
    });
  }

  pageChange(page: number) {
    console.log(page);
  }
}
