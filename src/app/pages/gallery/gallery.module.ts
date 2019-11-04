import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GalleryComponent } from './gallery.component';
import { AppRoutingModule } from '@app/app-routing.module';
import { PhotographyAutomotiveComponent } from './photography-automotive/photography-automotive.component';

@NgModule({
  declarations: [GalleryComponent, PhotographyAutomotiveComponent],
  imports: [
    CommonModule,
    AppRoutingModule
  ]
})
export class GalleryModule { }
