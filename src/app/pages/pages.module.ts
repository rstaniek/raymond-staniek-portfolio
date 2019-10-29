import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { ProgrammingModule } from './programming/programming.module';
import { PhotographyModule } from './photography/photography.module';
import { MaterialModule } from '@app/app.angular-material.module';
import { SharedComponentsModule } from '@app/shared-components/shared-components.module';

@NgModule({
  declarations: [NotFoundComponent, HomeComponent, ContactComponent],
  imports: [
    CommonModule,
    ProgrammingModule,
    PhotographyModule,
    MaterialModule,
    SharedComponentsModule
  ],
  exports: [NotFoundComponent]
})
export class PagesModule { }
