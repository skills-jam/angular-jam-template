import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedModule } from './../../shared/shared.module';
import { TeamContainerComponent } from './components/team-container/team-container.component';
import { TeamRoutingModule } from './team-routing.module';

@NgModule({
  declarations: [TeamContainerComponent],
  imports: [CommonModule, TeamRoutingModule, SharedModule],
})
export class TeamModule {}
