import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { LogoComponent } from './logo/logo.component';
import { NavigationWrapperComponent } from './navigation/navigation-wrapper/navigation-wrapper.component';
import { NavigationItemComponent } from './navigation/navigation-item/navigation-item.component';
import { BtnIconComponent } from './btn-icon/btn-icon.component';
import { AvatarComponent } from './avatar/avatar.component';
import { PageHeaderComponent } from './page-header/page-header.component';
import { IconComponent } from './icon/icon.component';
import { StatusComponent } from './status/status.component';
import { TableComponent } from './table/table/table.component';
import { TableHeaderComponent } from './table/table-header/table-header.component';
import { TableBodyComponent } from './table/table-body/table-body.component';
import { TableTrComponent } from './table/table-tr/table-tr.component';
import { TableTdComponent } from './table/table-td/table-td.component';
import { BtnComponent } from './btn/btn.component';
import { TableFooterComponent } from './table/table-footer/table-footer.component';

@NgModule({
  declarations: [
    HeaderComponent,
    LogoComponent,
    NavigationWrapperComponent,
    NavigationItemComponent,
    BtnIconComponent,
    AvatarComponent,
    PageHeaderComponent,
    IconComponent,
    StatusComponent,
    TableComponent,
    TableHeaderComponent,
    TableBodyComponent,
    TableTrComponent,
    TableTdComponent,
    BtnComponent,
    TableFooterComponent,
  ],
  imports: [CommonModule, RouterModule],
  exports: [
    HeaderComponent,
    LogoComponent,
    NavigationWrapperComponent,
    NavigationItemComponent,
    BtnIconComponent,
    AvatarComponent,
    PageHeaderComponent,
    IconComponent,
    StatusComponent,
    TableComponent,
    TableHeaderComponent,
    TableBodyComponent,
    TableTrComponent,
    TableTdComponent,
    BtnComponent,
    TableFooterComponent,
  ],
})
export class ComponentsModule {}
