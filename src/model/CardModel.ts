import { set, observable, action } from "mobx";
export interface CardType {
  id: number;
  image_url: string;
  nickname: string;
  profile_image_url: string;
  isScrap: boolean;
}

export default class CardModel implements CardType {
  constructor(card) {
    set(this, card);
    if (localStorage.getItem(card.id)) {
      this.isScrap = true;
    }
  }
  @action
  toggleIsScrap = () => {
    const name = `${this.id}`;
    if (this.isScrap) {
      localStorage.removeItem(name);
    } else {
      localStorage.setItem(name, name);
    }
    this.isScrap = !this.isScrap;
  };

  @observable
  id = 0;
  @observable
  image_url = "";
  @observable
  nickname = "";
  @observable
  profile_image_url = "";
  @observable
  isScrap = false;
}
