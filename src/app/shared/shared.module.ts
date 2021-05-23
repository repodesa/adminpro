import { NgModule } from '@angular/core';

import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    BreadcrumbsComponent,
    SidebarComponent,
    HeaderComponent,
  ],
  exports: [
    HeaderComponent,
    SidebarComponent,
    BreadcrumbsComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
  ]
})
export class SharedModule { }
