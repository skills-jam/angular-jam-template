import { TeamService } from './../../../../shared/services/team.service';
import { State } from '../../../../shared/@types/state.model';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { MemberService } from './../../../../shared/services/member.service';
import { Route } from '@angular/compiler/src/core';

@Component({
  selector: 'app-member-action-container',
  templateUrl: './member-action-container.component.html',
  styleUrls: ['./member-action-container.component.scss'],
})
export class MemberActionContainerComponent implements OnInit {
  form: FormGroup;
  state: State;
  page: string;
  actionTitle: string;

  formInputs = [
    { label: 'First Name', control: 'firstName' },
    { label: 'Last Name', control: 'lastName' },
    { label: 'Last Name', control: 'lastName' },
    { label: 'Last Name', control: 'lastName' },
    { label: 'Last Name', control: 'lastName' },
    { label: 'Last Name', control: 'lastName' },
  ];

  constructor(
    private formBuilder: FormBuilder,
    private memberService: MemberService,
    private teamService: TeamService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.initView();
    this.initForm();

    // this.memberService.people$.subscribe((data) => {
    //   debugger;
    // });
  }

  initView(): void {
    this.state = this.activatedRoute.snapshot.data.state;
    this.page = this.activatedRoute.snapshot.queryParams.page;
    this.actionTitle = this.state === State.Create ? 'Create' : 'Update';
  }

  initForm(): void {
    this.form = this.formBuilder.group({
      firstName: this.formBuilder.control(null, [Validators.required]),
      lastName: this.formBuilder.control(null, [Validators.required]),
      title: this.formBuilder.control(null, [Validators.required]),
      email: this.formBuilder.control(null, [Validators.required]),
      country: this.formBuilder.control(null),
      street: this.formBuilder.control(null),
      city: this.formBuilder.control(null),
      state: this.formBuilder.control(null),
      zip: this.formBuilder.control(null),
    });

    if (this.state === State.Edit) {
      const member = this.getMember(this.activatedRoute.snapshot.params.id);
      this.form.patchValue(member);
    }
  }

  action(): void {
    if (this.state === State.Edit) {
      this.editMember(this.activatedRoute.snapshot.params.id, this.form.value);
    } else {
      this.addMember(this.form.value);
    }
    this.router.navigate([`/${this.page}`]);
  }

  getMember(id: string) {
    return this.actionService().getMember(id);
  }

  editMember(id: string, data) {
    this.actionService().editMember(id, data);
  }

  addMember(data) {
    this.actionService().addMember(data);
  }

  actionService() {
    let action;
    switch (this.page) {
      case 'dashboard':
        action = this.memberService;
        break;
      case 'team':
        action = this.teamService;
        break;
    }

    return action;
  }
}
