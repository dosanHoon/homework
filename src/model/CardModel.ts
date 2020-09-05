import { set, observable } from "mobx";
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
  }
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
