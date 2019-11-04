import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhotographyComponent } from './photography.component';
import { MaterialModule } from '@app/app.angular-material.module';

@NgModule({
  declarations: [PhotographyComponent],
  imports: [
    CommonModule,
    MaterialModule
  ]
})
export class PhotographyModule { }
