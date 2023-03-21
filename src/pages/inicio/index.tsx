import Link from 'next/link';
import { SubmitHandler, useForm } from 'react-hook-form';

import * as s from './style';
import SearchImg from '../../assets/searchImg';
import LayoutAuth from 'components/LayoutAuth';
import Sidebar from 'components/Sidebar';
import { useGetAccount } from 'hooks/useGetAccount';
import useGetAccountActivityById from 'hooks/useAccountActivityById';
import ActivityCards from 'components/ActivityCards';
import { Input } from 'components/Input';

const Inicio = () => {
  const { data } = useGetAccount();  

  /* @ts-ignore */
  const activity = useGetAccountActivityById(data?.id);
  const activityData = activity?.data;
  console.log(activityData);

  const { control } = useForm({
    defaultValues: {
      search: ''
    }
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
            <s.SearchBarLabel>
              <Input
                icon={() => <SearchImg />}
                type="text"
                id="search"
                name="search"
                placeholder="Buscar em sua atividade"
                control={control}
              />
            </s.SearchBarLabel>
            <s.ActivityContainer>
              <s.ActivityTitle>Suas atividades</s.ActivityTitle>
              <ActivityCards activityData={activityData} />              
            </s.ActivityContainer>
          </s.ContentContainer>
        </s.Content>
      </s.ContainerPage>
    </LayoutAuth>
  );
};

export default Inicio;
