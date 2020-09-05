import React from "react";
import styled from "styled-components";
import { CardType } from "../model/CardModel";
import { observer } from "mobx-react";

const CardItem = styled.article`
  width: 268px;
  margin-right: ${(props) => (props.index % 4 ? "20px" : "0")};
  margin-bottom: 30px;
  display: inline-block;
  position: relative;
`;

const Avatar = styled.img`
  width: 36px;
  height: 36px;
  object-fit: contain;
  display: inline-block;
  vertical-align: middle;
`;

const UserName = styled.span`
  padding-left: 10px;
  height: 19px;
  display: inline-block;
  vertical-align: middle;
`;

const CardImg = styled.img`
  width: 268px;
  height: 268px;
  border-radius: 10px;
`;

const UserInfo = styled.div`
  margin-bottom: 10px;
`;

const ScrapBtnWrap = styled.a`
  position: relative;
  display: block;
  transition: all 0.5s ease-in-out;
  &:hover {
    transform: translate3d(2px, 2px, -17px);
    opacity: 0.6;
  }
`;
const ScrapImg = styled.img`
  position: absolute;
  right: 10px;
  bottom: 10px;
  width: 32px;
  height: 32px;
  cursor: pointer;
`;

const Card: React.FC<{ card: CardType }> = ({ card, index }) => {
  const {
    image_url,
    nickname,
    profile_image_url,
    isScrap,
    toggleIsScrap,
  } = card;

  return (
    <CardItem index={index}>
      <UserInfo>
        <Avatar
          src={profile_image_url}
          className="ic_avatar_cat"
          alt="avatar"
        />
        <UserName>{nickname}</UserName>
      </UserInfo>
      <div className="card_img">
        <CardImg src={image_url} alt="card_img" />
        <ScrapBtnWrap>
          <ScrapImg
            onClick={toggleIsScrap}
            src={`${isScrap ? "img/blue.svg" : "img/on-img.svg"}`}
            className="on-img"
            alt="on"
          />
        </ScrapBtnWrap>
      </div>
    </CardItem>
  );
};

export default observer(Card);
