import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopNavComponent } from './top-nav/top-nav.component';
import { NavMenuItemComponent } from './nav-menu-item/nav-menu-item.component';
import { MaterialModule } from '../app.angular-material.module';
import { ShellComponent } from './shell.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavService } from '@services/nav/nav.service';
import { AppRoutingModule } from '@app/app-routing.module';

@NgModule({
  declarations: [TopNavComponent, NavMenuItemComponent, ShellComponent],
  imports: [
    CommonModule,
    MaterialModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [NavService]
})
export class ShellModule { }
