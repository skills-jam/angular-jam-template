import { SharedModule } from 'src/app/shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MemberActionRoutingModule } from './member-action-routing.module';
import { MemberActionContainerComponent } from './components/member-action-container/member-action-container.component';

@NgModule({
  declarations: [MemberActionContainerComponent],
  imports: [CommonModule, MemberActionRoutingModule, SharedModule],
})
export class MemberActionModule {}
