export class CardArticle {
  public avatar?: string;
  public title: string;
  public subtitle?: string;
  public image: string;
  public content: string;

  public constructor(
    title: string,
    image: string,
    content: string,
    subtitle: string = undefined,
    avatar: string = undefined
  ) {
    this.title = title;
    this.image = image;
    this.content = content;
    this.subtitle = subtitle;
    this.avatar = avatar;
  }
}
