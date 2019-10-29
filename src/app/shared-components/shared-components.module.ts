import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardArticleComponent } from './card-article/card-article.component';
import { MaterialModule } from '@app/app.angular-material.module';

@NgModule({
  declarations: [CardArticleComponent],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    CardArticleComponent
  ]
})
export class SharedComponentsModule { }
