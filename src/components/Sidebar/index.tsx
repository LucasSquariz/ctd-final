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
        <Link href="/inicio" prefetch>
          <s.LinksNavBar activePath={pathname === '/inicio'}>
            Inicio
          </s.LinksNavBar>
        </Link>
        <Link href="/perfil" prefetch>
          <s.LinksNavBar activePath={pathname === '/perfil'}>
            Seu Perfil
          </s.LinksNavBar>
        </Link>
        <s.LinksNavBar>Carregar valor</s.LinksNavBar>
        <s.LinksNavBar>Pagar serviços</s.LinksNavBar>
        <s.LinksNavBar>Cartões</s.LinksNavBar>
        <s.EndSessionLinkNavBar onClick={signOut}>
          Encerrar sessão
        </s.EndSessionLinkNavBar>
      </s.NavBarContainer>
    </s.NavBar>
  );
};

export default Sidebar;
