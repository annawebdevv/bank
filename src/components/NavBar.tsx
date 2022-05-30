import { FC } from "react";
import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "./hooks/redux";
import { toggleAuth } from "../store/authSlice";


export const NavBar: FC = () => {
  const auth = useAppSelector(state=> state.auth.auth)
  const dispatch = useAppDispatch() 
  return  (
    <Navbar>
      {auth ? 
        <NavLink className="nav" onClick={()=> dispatch(toggleAuth(false))} to="/authorization">
          LogOut{" "}
        </NavLink> : <NavLink className="nav" to="/authorization">
          Log In{" "}
        </NavLink>}
    </Navbar>
  );
};

const Navbar = styled.div`
  padding: 32px;
  background-color: #aa2ba3;
  font-size: 24px;
  border-radius: 4px;
  font-weight: bold;
  text-align: right;
  margin-bottom: 30px;
`;
