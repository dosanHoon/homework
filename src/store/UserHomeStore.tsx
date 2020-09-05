import React from "react";
import { observable, action } from "mobx";
import axios from "axios";
import CardModel, { CardType } from "../model/CardModel";
import { useObserver, useLocalStore } from "mobx-react";

export default class UserHomeStore {
  @observable
  list: CardType[] = [];

  @action
  getCardList = async (page: number) => {
    try {
      const API_URL = `https://s3.ap-northeast-2.amazonaws.com/bucketplace-coding-test/cards/page_${page}.json`;
      const { data } = await axios.get(API_URL);
      this.list = data.map((card) => new CardModel(card));
    } catch (e) {
      console.log("getCardList error");
    }
  };
}

const HomseStoreContext = React.createContext(null);
HomseStoreContext.displayName = "HomseStoreContext";

const UserHomeStoreProvider: React.FC = ({ children }) => {
  const store: UserHomeStore = useLocalStore(() => new UserHomeStore());
  return (
    <HomseStoreContext.Provider value={store}>
      {children}
    </HomseStoreContext.Provider>
  );
};

// userStore의 값을 가져오는 hooks
const useHomeStore = () => {
  const store = React.useContext(HomseStoreContext);

  return useObserver(() => ({
    list: store.list,
    getCardList: store.getCardList,
  }));
};

export { UserHomeStoreProvider, useHomeStore };
