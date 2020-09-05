import React from "react";

export interface CardType {
  id: number;
  image_url: string;
  nickname: string;
  profile_image_url: string;
}

const Card: React.FC<{ card: CardType }> = ({ card }) => {
  const { image_url, nickname, profile_image_url } = card;
  return (
    <article>
      <title>
        <img src={profile_image_url} className="ic_avatar_cat" alt="avatar" />
        <p>{nickname}</p>
      </title>
      <div className="card_img">
        <img src={image_url} alt="card_img" />
        <img src="img/on-img.svg" className="on-img" alt="on" />
        <img src="img/blue.svg" className="blue" alt="onBlue"></img>
      </div>
    </article>
  );
};

export default Card;
