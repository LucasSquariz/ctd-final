import { Button } from 'components/Button';
import { Input } from 'components/Input';
import type { NextPage } from 'next';
import Yup from 'settings/yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import Link from 'next/link';

const Home: NextPage = () => {
  const schema = Yup.object().shape({
    email: Yup.string().required()
  });
  const { control } = useForm({
    defaultValues: {
      email: ''
    },
    resolver: yupResolver(schema)
  });
  return (
    <>
      <h2
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          margin: '20px',
          width: '100%',
          marginTop: '300px',
          color: 'white'
        }}
      >
        {' '}
        Olá! Digite seu endereço de e-mail
      </h2>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          margin: '20px',
          width: '100%',
          height: '64px',
          gap: '20px'
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            width: '360px',
            height: '64px',
            marginTop: '250px'
          }}
        >
          <Input
            type="email"
            name="email"
            id="email"
            placeholder="e-mail"
            control={control}
          />
        </div>

        <Button style={{ marginTop: '20px' }}>Continuar</Button>
        <Button variant="gray" style={{ marginTop: '20px' }}>
          <Link href={'/cadastro/cadastro'}>Criar conta</Link>
        </Button>
      </div>
    </>
  );
};

export default Home;
