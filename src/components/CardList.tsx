import React from "react";
import Card, { CardType } from "./Card";
import styled from "styled-components";

const CardWrapper = styled.section`
  position: relative;
  margin: 0 auto;
`;

const CardList: React.FC<{ list: CardType[] }> = ({ list }) => {
  const _renderCardList = React.useMemo(() => {
    if (list) {
      return list.map((card: CardType, i) => (
        <Card key={card.id} card={card} index={i + 1} />
      ));
    }
    return [];
  }, [list]);
  return <CardWrapper>{_renderCardList}</CardWrapper>;
};

export default CardList;
