import { Button } from 'components/Button';
import type { NextPage } from 'next';
import Link from 'next/link';
import IconSuccess from '../../../public/icon_success';

const CadastroSucesso: NextPage = () => {  
  return (
    <>
      <div
        style={{
          display: 'grid',
          alignItems: 'center',
          gridTemplateColumns: '1fr',
          gap: '5rem',
          margin: '1rem',
          minHeight: '100vh'
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            rowGap: '3rem'
          }}
        >
          <h1 style={{ color: '#fff', fontSize: '3rem', fontWeight: 'bolder' }}>
            Cadastro realizado
          </h1>
          <IconSuccess />
          <p style={{ color: '#fff ', fontSize: '1.5rem' }}>
            Enviamos uma mensagem de confirmação para seu e-mail, por favor
            acesse e siga as instruções para iniciar a sessão.
          </p>
          <Button style={{ marginTop: '20px' }}>
            <Link href={`/`}>Continuar</Link>
          </Button>
        </div>
      </div>
    </>
  );
};

export default CadastroSucesso;
