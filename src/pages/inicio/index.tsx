import Link from 'next/link';

import * as s from './style';
import LayoutAuth from 'components/LayoutAuth';
import Sidebar from 'components/Sidebar';
import { useGetAccount } from 'hooks/useGetAccount';
import useGetAccountActivityById from 'hooks/useAccountActivityById';
import ActivityCards from 'components/ActivityCards';

const Inicio = () => {
  const { data } = useGetAccount();

  /* @ts-ignore */
  const activity = useGetAccountActivityById(data?.id);
  const activityData = activity?.data;

  return (
    <LayoutAuth>
      <s.ContainerPage>
        <Sidebar />
        <s.Content>
          <s.ContentContainer>
            <s.ContentMoneyContainer>
              <s.MoneyContainer>
                <s.MoneyTextContainer>Dinheiro disponível</s.MoneyTextContainer>
                <s.MoneyValueContainer>
                  R$ {data?.available_amount}
                </s.MoneyValueContainer>
              </s.MoneyContainer>
              <s.CardOptionsContainer>
                <Link href={'/cartao'}>
                  <s.CardOptionsText>Ver cartões</s.CardOptionsText>
                </Link>
                <Link href={'/perfil'}>
                  <s.CardOptionsText>Ver CVU</s.CardOptionsText>
                </Link>
              </s.CardOptionsContainer>
            </s.ContentMoneyContainer>
            <s.ButtonsContainer>
              <s.Button>Carregar valor</s.Button>
              <s.Button>Pagar serviços</s.Button>
            </s.ButtonsContainer>
            <ActivityCards activityData={activityData} />
          </s.ContentContainer>
        </s.Content>
      </s.ContainerPage>
    </LayoutAuth>
  );
};

export default Inicio;
