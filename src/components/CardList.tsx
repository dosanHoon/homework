import React from "react";
import Card from "./Card";
import styled from "styled-components";
import { CardType } from "../model/CardModel";
import { UserHomeStoreProvider, useHomeStore } from "../store/UserHomeStore";

const CardWrapper = styled.section`
  position: relative;
  margin: 0 auto;
`;

const CardList: React.FC = () => {
  const { list, getCardList } = useHomeStore();
  const [page, setPage] = React.useState(1);

  React.useEffect(() => {
    getCardList(page);
  }, [page]);

  const _renderCardList = React.useMemo(() => {
    if (list) {
      return list.map((card: CardType, i) => (
        <Card key={card.id} card={card} index={i + 1} />
      ));
    }
    return [];
  }, [list]);
  return (
    <div>
      <CardWrapper>
        <p>
          <img
            src="img/bt-checkbox-checked.svg"
            className="bt_checkbox_checked"
            alt="checkbox"
          />
          <span className="scrap_tit">스크랩한 것만 보기</span>
        </p>
        {_renderCardList}
      </CardWrapper>
      ;
    </div>
  );
};

export default CardList;
