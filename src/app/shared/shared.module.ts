import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';

import { ComponentsModule } from './components/components.module';
import { DirectivesModule } from './directives/directives.module';
import { ApiService } from './services/api.service';
import { MemberService } from './services/member.service';
import { PostService } from './services/post.service';
import { TeamService } from './services/team.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ComponentsModule,
    DirectivesModule,
    NgbPaginationModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  exports: [
    CommonModule,
    ComponentsModule,
    DirectivesModule,
    NgbPaginationModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
})
export class SharedModule {
  static forRoot(): ModuleWithProviders<SharedModule> {
    return {
      ngModule: SharedModule,
      providers: [MemberService, TeamService, PostService, ApiService],
    };
  }
}
