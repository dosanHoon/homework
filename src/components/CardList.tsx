import React from "react";
import Card from "./Card";
import styled from "styled-components";
import { CardType } from "../model/CardModel";
import { useHomeStore } from "../store/UserHomeStore";
import { observer, useLocalStore } from "mobx-react";

const CardWrapper = styled.section`
  position: relative;
  margin: 0 auto;
`;

function getScrollTop() {
  return window.pageYOffset !== undefined
    ? window.pageYOffset
    : (document.documentElement || document.body.parentNode || document.body)
        .scrollTop;
}

function getDocumentHeight() {
  const body = document.body;
  const html = document.documentElement;

  return Math.max(
    body.scrollHeight,
    body.offsetHeight,
    html.clientHeight,
    html.scrollHeight,
    html.offsetHeight
  );
}

const CardList: React.FC = () => {
  const {
    filteredList,
    getCardList,
    isShowOnlyScrap,
    toggleIsShow,
  } = useHomeStore();

  const state = useLocalStore(() => ({
    page: 1,
    isFinished: true,
  }));

  const scrollGetData = React.useCallback(() => {
    if (getScrollTop() < getDocumentHeight() - window.innerHeight) return;
    ++state.page;
  }, [state.page]);

  React.useEffect(() => {
    getCardList(state.page).then((isFinish) => {
      state.isFinished = isFinish !== 0;
    });
  }, [state.page, getCardList]);

  React.useEffect(() => {
    if (state.isFinished) {
      window.addEventListener("scroll", scrollGetData);
    } else {
      window.removeEventListener("scroll", scrollGetData);
    }
    return () => window.removeEventListener("scroll", scrollGetData);
  }, [state.isFinished]);

  const _renderCardList = React.useMemo(() => {
    if (filteredList) {
      return filteredList.map((card: CardType, i) => (
        <Card key={card.id} card={card} index={i + 1} />
      ));
    }
    return [];
  }, [filteredList]);

  return (
    <div>
      <CardWrapper>
        <p onClick={toggleIsShow}>
          <img
            src={`img/${
              isShowOnlyScrap ? "bt-checkbox-checked.svg" : "white.svg"
            }`}
            className="bt_checkbox_checked"
            alt="checkbox"
          />
          <span className="scrap_tit">스크랩한 것만 보기</span>
        </p>
        {_renderCardList}
      </CardWrapper>
    </div>
  );
};

export default observer(CardList);
