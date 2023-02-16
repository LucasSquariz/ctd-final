import { Button } from '../../components/Button';
import { Input } from '../../components/Input/index';
import React, { FormEvent, useState } from 'react';
import axios from 'axios';
import * as s from './style';
import Yup from 'settings/yup';
import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Login } from 'types/LoginTypes';
import { NextPage } from 'next';
import Link from 'next/link';

const Login: NextPage = () => {
  /* Yup Config */
  const schema = Yup.object().shape({
    email: Yup.string().required(),
    password: Yup.string().required()
  });
  const { control, resetField, handleSubmit } = useForm({
    defaultValues: {
      email: '',
      password: ''
    },
    resolver: yupResolver(schema)
  });

  /* States */
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [messageError, setMessageError] = useState(
    'Usuário não encontrado, tente novamente'
  );
  const [logged, setLogged] = useState(false);

  /* Funções */
  const handleLogin: SubmitHandler<Login> = async (data) => {
    console.log(data);
    axios
      .post('https://digitalmoney.ctd.academy/api/login', JSON.stringify({
        email: email,
        password: password
      }))
      .then(function (response) {
        console.log(response);
        return response.data;
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const onContinue = () => {
    setLogged(true);
    /* resetField('email'); */
    console.log(email);
    setMessageError("Senha incorreta, tente novamente");
  };

  return (
    <s.ContainerPage>
      <s.ContainerLogin onSubmit={handleSubmit(handleLogin)}>
        <s.Title>
          {!logged ? 'Olá! Digite seu email' : 'Digite sua senha'}
        </s.Title>
        {!logged ? (
          <Input
            type="email"
            id="email"
            name="email"
            value={email}
            placeholder="email"
            onChange={e => setEmail(e.target.value)}
            control={control}
          />
        ) : (
          <Input
            type="password"
            id="password"
            name="password"
            value={password}
            placeholder="senha"
            onChange={e => setPassword(e.target.value)}
            control={control}
          />
        )}

        {/* @ts-ignore */}
        <Button variant="primary" type={logged ? "submit" : ""} onClick={!logged ? onContinue : handleLogin}>
          Continuar
        </Button>
        {!logged && (
          <Link href={'/cadastro/cadastro'}>
            <Button variant="gray">Criar conta</Button>
          </Link>)}
        {messageError && <s.MessageError>{messageError}</s.MessageError>}
      </s.ContainerLogin>
    </s.ContainerPage>
  );
};

export default Login;