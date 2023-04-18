import Link from 'next/link';

import * as s from './style';
import LayoutAuth from 'components/LayoutAuth';
import Sidebar from 'components/Sidebar';
import useGetAccountActivityById from 'hooks/useAccountActivityById';
import { useGetAccount } from 'hooks/useGetAccount';
import ActivityCards from 'components/ActivityCards';
import { useAuthState } from 'contexts/auth/AuthContext';
import { useState } from 'react';

const Inicio = () => {
  const [activityData, setActivityData] = useState({});
  const [userData, setUserData] = useState({});
  const { user } = useAuthState();

  /* @ts-ignore */
  const activity = useGetAccountActivityById(user.id, activityData => {
    setActivityData(activityData);
  });

  const userDataFetch = useGetAccount(userData => {
    setUserData(userData);
  });

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
                  {/* @ts-ignore */}
                  R$ {userData?.available_amount}
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
              <s.Button>
                <Link href={'/carregarvalor'}>Carregar valor</Link>
              </s.Button>
              <s.Button>Pagar serviços</s.Button>
            </s.ButtonsContainer>
            {Object.keys(activityData).length == 0 ? (
              <></>
            ) : (
              <ActivityCards activityData={activityData} />
            )}
          </s.ContentContainer>
        </s.Content>
      </s.ContainerPage>
    </LayoutAuth>
  );
};

export default Inicio;
