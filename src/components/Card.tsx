import React from "react";
import styled from "styled-components";

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

export interface CardType {
  id: number;
  image_url: string;
  nickname: string;
  profile_image_url: string;
  isScrap: boolean;
}

const Card: React.FC<{ card: CardType }> = ({ card, index }) => {
  const { id, image_url, nickname, profile_image_url, isScrap } = card;

  const scrap = () => {
    if (isScrap) {
      localStorage.removeItem(id);
    } else {
      localStorage.setItem(id, id);
    }
  };

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
          onClick={scrap}
          src={`${isScrap ? "img/on-img.svg" : "img/blue.svg"}`}
          className="on-img"
          alt="on"
        />
      </div>
    </CardItem>
  );
};

export default Card;
