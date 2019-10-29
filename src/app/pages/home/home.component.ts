import { Component, OnInit } from "@angular/core";
import { CardArticle } from "@models/card-article";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {
  public items: CardArticle[];

  constructor() {
    this.items = new Array<CardArticle>();
    const a: CardArticle = new CardArticle(
      "title",
      "https://material.angular.io/assets/img/examples/shiba2.jpg",
      "asdasdasdasdasdasdasdasdasdasd",
      "subtitle"
    );
    const b: CardArticle = new CardArticle(
      "title",
      "https://material.angular.io/assets/img/examples/shiba2.jpg",
      "content"
    );
    this.items.push(a);
    this.items.push(b);
  }

  ngOnInit() {}
}
