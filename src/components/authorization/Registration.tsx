import { FC } from "react";
import styled from "@emotion/styled";
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { SubmitHandler, useForm } from "react-hook-form";
import { AuthField } from "../../types/auth";
import axios from 'axios'
import { useAppDispatch } from "../hooks/redux";
import { toggleAuth } from "../../store/authSlice";


export const Registration: FC = () => {
    const navigate = useNavigate()
    const dispatch = useAppDispatch()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AuthField>();

  const Add = async (login: string, password: string) => {
    await axios.post('http://localhost/auth/users/', {
      username: login,
      password: password,
    }).then((res) => {
        dispatch(toggleAuth(true))
        navigate('/authorization')
      })
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
        Email*:
        <Input
          {...register("email", { required: "required field" })}
          type="email"
        />
        {errors.email && (
          <span style={{ color: "red" }}> {errors.email.message} </span>
        )}
      </Label>

      <Label>
        Username*:
        <Input
          {...register("username", { required: "required field" })}
          type="text"
        />
        {errors.username && (
          <span style={{ color: "red" }}> {errors.username.message} </span>
        )}
      </Label>

      <Label>
        Password*:
        <Input
          {...register("password", { required: "required field" })}
          type="password"
        />
        {errors.password && (
          <span style={{ color: "red" }}> {errors.password.message} </span>
        )}
      </Label>
      <button> Sign Up </button>
      <NavLink to="/authorization">or Sign In</NavLink>
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
