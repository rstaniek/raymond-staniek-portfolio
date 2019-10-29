import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProgrammingComponent } from './programming.component';
import { MaterialModule } from '@app/app.angular-material.module';
import { AppRoutingModule } from '@app/app-routing.module';
import { DotNetComponent } from './dot-net/dot-net.component';
import { PythonComponent } from './python/python.component';
import { ConsoleComponent } from './console/console.component';
import { NgTerminalModule } from 'ng-terminal';
import { TerminalService } from '@app/services/terminal/terminal.service';

@NgModule({
  declarations: [ProgrammingComponent, DotNetComponent, PythonComponent, ConsoleComponent],
  imports: [
    CommonModule,
    MaterialModule,
    AppRoutingModule,
    NgTerminalModule
  ],
  providers: [TerminalService]
})
export class ProgrammingModule { }
