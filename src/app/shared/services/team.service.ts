import { Member } from './../models/members.model';
import { Injectable } from '@angular/core';

import { people } from './../../mocks/peoples.mock';

@Injectable({
  providedIn: 'root',
})
export class TeamService {
  people: any[] = [...people];

  constructor() {}

  addMember(member: Member): void {
    this.people.push({ ...member, id: this.getId() });
  }

  getMember(id: string): Member {
    return this.people.find((i) => i.id === id);
  }

  editMember(id: string, member: Member): void {
    const index = this.people.findIndex((i) => i.id === id);
    this.people[index] = { ...this.people[index], ...member };
  }

  getId(): string {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }
}
