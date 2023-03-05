import React, { FormEvent, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import Yup from 'settings/yup';
import { NextPage } from 'next';

import { Button } from '../../components/Button';
import { Input } from '../../components/Input/index';

import LayoutGuest from 'components/LayoutGuest';

import * as s from './style';
import { useAuthDispatch } from 'contexts/auth/AuthContext';
import router from 'next/router';

const Login: NextPage = () => {
  /* Yup Config */
  const schema = Yup.object().shape({
    email: Yup.string().required()
  });
  const { control, handleSubmit } = useForm({
    defaultValues: {
      email: ''
    },
    resolver: yupResolver(schema)
  });

  /* States */
  const { setEmailUser } = useAuthDispatch();

  type Data = {
    email: string;
  };

  const onContinue: SubmitHandler<Data> = async data => {
    setEmailUser(data.email);
    router.push('/login/password');
  };

  return (
    <LayoutGuest>
      <s.ContainerPage>
        <s.ContainerLogin onSubmit={handleSubmit(onContinue)}>
          <s.Title>Olá! Digite seu email</s.Title>

          <Input
            type="text"
            id="email"
            name="email"
            placeholder="email"
            control={control}
          />

          <Button variant="primary" type="submit">
            Continuar
          </Button>
        </s.ContainerLogin>
      </s.ContainerPage>
    </LayoutGuest>
  );
};

export default Login;
