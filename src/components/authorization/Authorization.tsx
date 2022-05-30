import { FC } from "react";
import styled from "@emotion/styled";
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { SubmitHandler, useForm } from "react-hook-form";
import { AuthField } from "../../types/auth";
import axios from 'axios'
import { useAppDispatch } from "../hooks/redux";
import { toggleAuth } from "../../store/authSlice";


export const Authorization: FC = () => {
    const navigate = useNavigate()
    const dispatch = useAppDispatch()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AuthField>();

  const Add = async (login: string, password: string) => {
    await axios.post('http://localhost/auth/jwt/create/', {
      username: login,
      password: password,
    }).then((res) => {
        console.log(res);
        dispatch(toggleAuth(true))
        localStorage.setItem('jwtToken', res.data.access);
        localStorage.setItem('jwtRefresh', res.data.refresh);
       
      })
       navigate('/user')
        

  }
  const onSubmit:SubmitHandler<AuthField>  = (data) => {
{   const login = data.username
    const password = data.password;
      Add(login, password)
    }
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>

      <Label>
        Username:
        <Input
          {...register("username", { required: "required field" })}
          type="text"
        />
        {errors.username && (
          <span style={{ color: "red" }}> {errors.username.message} </span>
        )}
      </Label>

      <Label>
        Password:
        <Input
          {...register("password", { required: "required field" })}
          type="password"
        />
        {errors.password && (
          <span style={{ color: "red" }}> {errors.password.message} </span>
        )}
      </Label>
      <button> Sign In </button>
      <NavLink to="/registration">or Sign Up</NavLink>
    </Form>
  );
};

const Form = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 400px;
  border: 1px solid #aa2ba3;
  border-radius: 10px;
  padding: 30px;

  margin: 0 auto;
`;
const Input = styled.input`
  width: 100%;
  line-height: 24px;
`;
const Label = styled.label`
  width: 100%;
`;
