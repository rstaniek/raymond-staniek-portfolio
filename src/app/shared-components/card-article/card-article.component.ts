import { Component, OnInit, Input } from '@angular/core';
import { CardArticle } from '@models/card-article';

@Component({
  selector: 'app-card-article',
  templateUrl: './card-article.component.html',
  styleUrls: ['./card-article.component.scss']
})
export class CardArticleComponent implements OnInit {

  @Input('article') public article: CardArticle;

  constructor() { }

  ngOnInit() {
  }

}
