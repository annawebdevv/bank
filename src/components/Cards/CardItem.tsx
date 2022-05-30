import { FC } from "react";
import { ICard } from "../../types/cards";
import styled from "@emotion/styled";

interface CadrItemProps {
  card: ICard;
}

export const CardItem: FC<CadrItemProps> = ({ card }) => {
  const prettify = (num: number) => {
    var n = num.toString();
    return n.replace(/(\d{1,3}(?=(?:\d\d\d)+(?!\d)))/g, "$1" + " ");
  };

  return (
    <Card>
      <h2>Card</h2>
      <Number>number: {prettify(card.cardNumber)}</Number>
      <p>
        balance: <b>{card.balance}</b>
      </p>
    </Card>
  );
};

const Card = styled.div`
position: relative;
  text-align: left;
  box-sizing: border-box;
  padding: 10px;
  margin: 10px;
  background: linear-gradient(
    60deg,
    rgba(170, 43, 163, 0.3) 0%,
    rgba(195, 132, 200, 1) 35%
  );
  min-height: 150px;
  opacity: 0.85;
  max-width: 250px;
  border-radius: 20px;
  color: white;
  cursor: pointer;
`;
const Number = styled.div`
margin: 20px 0;
`;

