export class NotificationUnit {
  id: string;
  text: string;
  isRead: boolean;
  order: number;
  isImg: boolean;
  imgUrl?: string;
  isIcon: boolean;
  icon?: NotificationIcon;

  constructor(
    id: string,
    text: string,
    isRead: boolean,
    order: number,
    isIcon: boolean,
    isImg: boolean
  ) {
    this.id = id;
    this.text = text;
    this.isRead = isRead;
    this.order = order;
    this.isIcon = isIcon;
    this.isImg = isImg;
  }
}

export class NotificationIcon {
  value: string = '';
  color: string = '';

  constructor(value: string, color: string) {
    this.value = value;
    this.color = color;
  }
}
