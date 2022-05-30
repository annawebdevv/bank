import { FC } from "react";
import { useAppSelector } from "../hooks/redux";
import List from "../pages/List";
import {CardItem} from "./CardItem";
import { ICard } from "../../types/cards";

export const Cards: FC = () => {
  const cards = useAppSelector((state) => state.card.cards);

  return !cards ? <h2> You have not cards yet</h2> : (
    <div>
      <List
        items={cards}
        renderItem={(card: ICard) => <CardItem key={card.id} card={card}/>}
      />
    </div>
  );
};

export default Cards;
