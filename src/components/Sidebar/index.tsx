import { useAuthDispatch } from 'contexts/auth/AuthContext';
import Link from 'next/link';
import { useRouter } from 'next/router';
import * as s from './style';

const Sidebar = () => {
  const { pathname } = useRouter();
  const { signOut } = useAuthDispatch();
  return (
    <s.NavBar>
      <s.NavBarContainer>
        <Link href="/inicio">
          <s.LinksNavBar activePath={pathname === '/inicio'}>
            Inicio
          </s.LinksNavBar>
        </Link>
        <Link href="/atividade">
          <s.LinksNavBar activePath={pathname === '/atividade'}>
            Atividade
          </s.LinksNavBar>
        </Link>
        <Link href="/perfil">
          <s.LinksNavBar activePath={pathname === '/perfil'}>
            Seu Perfil
          </s.LinksNavBar>
        </Link>
        <Link href={'/carregarvalor'}>
          <s.LinksNavBar activePath={pathname === '/carregarvalor'}>
            Carregar valor
          </s.LinksNavBar>
        </Link>
        {/* <Link href={'/pix'}>
          <s.LinksNavBar activePath={pathname === '/pix'}>Pix</s.LinksNavBar>
        </Link> */}

        <Link href="/cartao">
          <s.LinksNavBar
            activePath={pathname === '/cartao' || pathname === '/cartaoadd'}
          >
            Cartões
          </s.LinksNavBar>
        </Link>
        <s.EndSessionLinkNavBar onClick={signOut}>
          Encerrar sessão
        </s.EndSessionLinkNavBar>
      </s.NavBarContainer>
    </s.NavBar>
  );
};

export default Sidebar;
