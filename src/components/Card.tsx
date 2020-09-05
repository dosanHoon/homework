import React from "react";
import styled from "styled-components";
import { CardType } from "../model/CardModel";
import { observer } from "mobx-react";

const CardItem = styled.article`
  width: 268px;
  margin-right: ${(props) => (props.index % 4 ? "20px" : "0")};
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
  font-family: AppleSDGothicNeo;
  font-size: 15px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.27;
  letter-spacing: normal;
  color: rgba(0, 0, 0, 0.74);
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

const ScrapImg = styled.img`
  position: absolute;
  right: 10px;
  bottom: 10px;
  width: 32px;
  height: 32px;
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
        <ScrapImg
          onClick={toggleIsScrap}
          src={`${isScrap ? "img/blue.svg" : "img/on-img.svg"}`}
          className="on-img"
          alt="on"
        />
      </div>
    </CardItem>
  );
};

export default observer(Card);
