import { Input } from 'components/Input';
import Yup from 'settings/yup';
import type { NextPage } from 'next';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { SignUp } from 'types/SignupTypes';
import { SubmitHandler } from 'react-hook-form';
import { Button } from 'components/Button';
import { Form } from 'styles/form';
import { useRouter } from 'next/router';

const Cadastro: NextPage = (): any => {
  const schema = Yup.object().shape({
    nome: Yup.string().required(),
    sobrenome: Yup.string().required(),
    dni: Yup.number().required(),
    email: Yup.string().required(),
    password: Yup.string()
      .required()
      .min(6)
      .max(20)
      .test('isValidPass', ' is not valid', (value, context) => {
        const hasUpperCase = /[A-Z]/.test(value);
        const hasNumber = /[0-9]/.test(value);
        const hasSymbole = /[!@#%&]/.test(value);
        let validConditions = 0;
        const numberOfMustBeValidConditions = 3;
        const conditions = [hasUpperCase, hasNumber, hasSymbole];
        conditions.forEach(condition => (condition ? validConditions++ : null));
        if (validConditions >= numberOfMustBeValidConditions) {
          return true;
        }
        return false;
      }),
    confirmaPassword: Yup.string()
      .required()
      .oneOf([Yup.ref('password')], 'Senhas devem ser as mesmas'),
    telefone: Yup.string().required()
  });
  const router = useRouter();
  const { control, handleSubmit, formState } = useForm<SignUp>({
    defaultValues: {
      firstname: '',
      lastname: '',
      dni: 0,
      email: '',
      password: '',
      confirmaPassword: '',
      telefone: ''
    },
    resolver: yupResolver(schema)
  });
  const handleSignUp: SubmitHandler<SignUp> = async data => {
    console.log(data);
    delete data.confirmaPassword;
    try {
      const response = await fetch(
        'https://digitalmoney.ctd.academy/api/users',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
        }
      );
      if (response.ok) {
        console.log('Cadastro criado com sucesso');
        router.push('/cadastro/cadastro_sucesso');
      } else {
        console.error('Error creating user:', response.statusText);
      }
    } catch (error) {
      console.error('Error creating user:', error);
    }
  };

  return (
    <div
      style={{
        display: 'flex',
        width: '100%',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: '5rem',
        backgroundColor: '#272727',
        height: '100vh'
      }}
    >
      <Form onSubmit={handleSubmit(handleSignUp)}>
        <h1>Criar Conta</h1>
        <Input
          type="text"
          name="nome"
          id="firstname"
          placeholder="Nome"
          control={control}
        />
        <Input
          type="text"
          name="sobrenome"
          id="lastname"
          placeholder="Sobrenome"
          control={control}
        />

        <Input
          type="text"
          name="dni"
          id="dni"
          placeholder="CPF"
          control={control}
        />
        <Input
          type="email"
          name="email"
          id="email"
          placeholder="e-mail"
          control={control}
        />
        <p>
          Use entre 6 e 20 caracteres (deve conter pelo menos 1 caractere
          especial, uma letra maiúscula e um número)
        </p>
        <Input
          type="password"
          name="password"
          id="password"
          placeholder="Senha"
          control={control}
        />
        <Input
          type="password"
          name="confirmaPassword"
          id="confirmaPassword"
          placeholder="Confirmar senha"
          control={control}
        />
        <Input
          type="text"
          name="telefone"
          id="telefone"
          placeholder="Telefone"
          control={control}
        />
        <Button type="submit">Criar Conta</Button>
      </Form>
    </div>
  );
};

export default Cadastro;
