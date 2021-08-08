import { Member } from './../models/members.model';
import { Injectable } from '@angular/core';

import { people } from './../../mocks/peoples.mock';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MemberService {
  people: any[] = [...people];

  people$ = new BehaviorSubject<any>([...people]);

  constructor() {}

  addMember(member: Member): void {
    this.people$.next([
      ...this.people$.getValue(),
      { ...member, id: this.getId() },
    ]);
  }

  getMember(id: string): Member {
    return this.people$.getValue().find((i) => i.id === id);
  }

  editMember(id: string, member: Member): void {
    const index = this.people$.getValue().findIndex((i) => i.id === id);
    const members = [...this.people$.getValue()];
    members[index] = { ...members[index], ...member };
    this.people$.next(members);
  }

  getId(): string {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }
}
