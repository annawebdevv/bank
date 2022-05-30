import { FC } from "react";
import styled from "@emotion/styled";
import { useAppDispatch, useAppSelector } from "./hooks/redux";
import { addCard } from "./../store/cardSlice";
import Cards from "./Cards/Cards";



export const UserPage: FC = () => {
    const dispatch = useAppDispatch()
    const cards = useAppSelector(state=> state.card.cards)
    console.log(cards)
  return (
    <CreateCard>
       <Button onClick={()=>dispatch(addCard())}> Add card</Button>
       <Cards/>
    </CreateCard>
  );
};



const CreateCard = styled.div`
  margin: 10px;
  text-align: right;
`;

const Button = styled.button`
background: linear-gradient(90deg, rgba(170,43,163,1) 0%, rgba(195,132,200,1) 35%);
opacity:0.7;
border-radius: 30px;
transition: all 0.3s ease;
&:hover{
    background: linear-gradient(90deg, #862181 0%, #916294 35%);
}
&:active{
    transform: scale(0.9);
}
`;
