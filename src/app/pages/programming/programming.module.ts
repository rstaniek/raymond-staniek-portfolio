import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProgrammingComponent } from './programming.component';
import { MaterialModule } from '@app/app.angular-material.module';
import { AppRoutingModule } from '@app/app-routing.module';
import { DotNetComponent } from './dot-net/dot-net.component';
import { PythonComponent } from './python/python.component';
import { ConsoleComponent } from './console/console.component';

@NgModule({
  declarations: [ProgrammingComponent, DotNetComponent, PythonComponent, ConsoleComponent],
  imports: [
    CommonModule,
    MaterialModule,
    AppRoutingModule
  ]
})
export class ProgrammingModule { }
