import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MicalRoutingModule } from './mical-routing.module';
import { MicalContainerComponent } from './mical-container/mical-container.component';
import { MenuComponent } from './components/menu/menu.component';
import { MenuItemComponent } from './components/menu-item/menu-item.component';

@NgModule({
  declarations: [
    MicalContainerComponent,
    MenuComponent,
    MenuItemComponent
  ],
  imports: [
    CommonModule,
    MicalRoutingModule
  ]
})
export class MicalModule { }