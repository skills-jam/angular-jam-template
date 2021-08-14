import { IsGuestGuard } from './guards/is-guest.guard';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'dashboard',
    canActivate: [IsGuestGuard],
    loadChildren: () =>
      import('../pages/dashboard/dashboard.module').then(
        (m) => m.DashboardModule
      ),
  },
  {
    path: 'member',
    loadChildren: () =>
      import('../pages/member-action/member-action.module').then(
        (m) => m.MemberActionModule
      ),
  },
  {
    path: 'team',
    loadChildren: () =>
      import('../pages/team/team.module').then((m) => m.TeamModule),
  },
  {
    path: 'posts',
    loadChildren: () =>
      import('../pages/post/post.module').then((m) => m.PostModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
