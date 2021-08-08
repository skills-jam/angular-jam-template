import { MemberService } from './../../services/member.service';
import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  userPicture =
    'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80';

  userName$ = new BehaviorSubject(null);

  constructor(private memberService: MemberService) {}

  ngOnInit(): void {
    this.memberService.people$
      .pipe(
        map((data) => {
          return `${data[0].firstName} ${data[0].lastName}`;
        })
      )
      .subscribe((userName) => {
        this.userName$.next(userName);
      });
  }
}
