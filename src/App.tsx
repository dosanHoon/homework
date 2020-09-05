import React from "react";
import axios from "axios";

import "./App.css";
import CardList from "./components/CardList";

function App() {
  const [list, setList] = React.useState([]);
  const [page, setPage] = React.useState(1);

  const getCardList = async (page: number) => {
    try {
      const API_URL = `https://s3.ap-northeast-2.amazonaws.com/bucketplace-coding-test/cards/page_${page}.json`;
      const { data } = await axios.get(API_URL);
      setList(data);
    } catch (e) {
      console.log("getCardList error");
    }
  };

  React.useEffect(() => {
    getCardList(page);
  }, [page]);

  return (
    <main className="PC-__">
      <p>
        <img
          src="img/bt-checkbox-checked.svg"
          className="bt_checkbox_checked"
          alt="checkbox"
        />
        <span className="scrap_tit">스크랩한 것만 보기</span>
      </p>
      <CardList list={list} />
    </main>
  );
}

export default App;
