import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import Yup from 'settings/yup';
import { NextPage } from 'next';

import { Button } from '../../components/Button';
import { Input } from '../../components/Input/index';

import LayoutGuest from 'components/LayoutGuest';
import { useAuthDispatch, useAuthState } from 'contexts/auth/AuthContext';
import * as s from './style';

const Password: NextPage = () => {
  /* Yup Config */
  const schema = Yup.object().shape({
    password: Yup.string().required()
  });
  const { control, handleSubmit } = useForm({
    defaultValues: {
      password: ''
    },
    resolver: yupResolver(schema)
  });

  const { signIn } = useAuthDispatch();
  const { emailUser, loading } = useAuthState();

  console.log(emailUser);

  type Data = {
    password: string;
  };

  /* Funções */
  const handleLogin: SubmitHandler<Data> = data => {
    signIn({
      email: emailUser,
      password: data.password
    });
  };

  return (
    <LayoutGuest>
      <s.ContainerPage>
        <s.ContainerLogin onSubmit={handleSubmit(handleLogin)}>
          <s.Title>Digite sua senha</s.Title>

          <Input
            typePassword
            id="password"
            name="password"
            placeholder="senha"
            control={control}
          />

          <Button loading={loading} variant="primary" type="submit">
            Continuar
          </Button>

          {/* {messageError && <s.MessageError>{messageError}</s.MessageError>} */}
        </s.ContainerLogin>
      </s.ContainerPage>
    </LayoutGuest>
  );
};

export default Password;
