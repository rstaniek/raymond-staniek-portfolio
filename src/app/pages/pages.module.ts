import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { ProgrammingModule } from './programming/programming.module';
import { PhotographyModule } from './photography/photography.module';
import { MaterialModule } from '@app/app.angular-material.module';
import { SharedComponentsModule } from '@app/shared-components/shared-components.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from '@app/app-routing.module';
import { GalleryModule } from './gallery/gallery.module';

@NgModule({
  declarations: [NotFoundComponent, HomeComponent, ContactComponent],
  imports: [
    CommonModule,
    ProgrammingModule,
    PhotographyModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    SharedComponentsModule,
    AppRoutingModule,
    GalleryModule
  ],
  exports: [NotFoundComponent]
})
export class PagesModule { }
