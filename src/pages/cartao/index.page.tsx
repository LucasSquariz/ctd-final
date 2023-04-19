import * as s from './style';
import GreenCircleImg from '../../assets/greenCircleImg';
import AddCardImg from '../../assets/addCardImg';
import RightArrowImg from '../../assets/rightArrowImg';
import RightArrowGreenImg from '../../assets/rightArrowGreenImg';
import LayoutAuth from 'components/LayoutAuth';
import Sidebar from 'components/Sidebar';

import { useGetCards } from 'hooks/useCards/useGetCards';
import { useDeleteCard } from 'hooks/useCards/useDeleteCard';
import { useEffect, useState } from 'react';
import { useAuthState } from 'contexts/auth/AuthContext';
import { success } from 'helpers/notify/success';

const Cartao = () => {
  const [addNewCard, setAddNewCard] = useState(false);
  const [loading, setLoading] = useState<boolean>(true);

  const { user } = useAuthState();

  const { mutate } = useDeleteCard();

  const { data: cardsList, refetch } = useGetCards(user?.id);

  const onClick = (e: any) => {
    e.preventDefault();
    setAddNewCard(true);
  };

  useEffect(() => {
    if (loading) {
      setLoading(false);
    }
  }, [loading]);

  const handleDeleteCard = (userId: any, cardNumber: any) => {
    mutate(
      { userId: userId, cardNumber: cardNumber },
      {
        onSuccess: () => {
          refetch();
          success('Cartão Deletado com sucesso!');
        }
      }
    );
  };

  return (
    <LayoutAuth>
      <s.ContainerPage>
        <Sidebar />
        <s.Content>
          <s.ContentContainer>
            <s.ContentMoneyContainer>
              <s.MoneyContainer>
                <s.MoneyTextContainer>
                  Adicione seu cartão de crédito ou débito
                </s.MoneyTextContainer>
                <s.MoreAddCartao>
                  <s.MoreAddCartaoLink href="cartaoadd">
                    <AddCardImg />
                    Novo cartão
                  </s.MoreAddCartaoLink>
                  <s.MoreAddCartaoLink href="cartaoadd">
                    <RightArrowGreenImg />
                  </s.MoreAddCartaoLink>
                </s.MoreAddCartao>
              </s.MoneyContainer>
            </s.ContentMoneyContainer>
            <s.ActivityContainer>
              <s.ActivityTitle>Seus cartões</s.ActivityTitle>
              {!loading &&
                cardsList?.length !== 0 &&
                cardsList?.map((card: any, index: number) => (
                  <s.ActivityCards key={index}>
                    <s.ActivityCardsDescriptionAndImg>
                      <GreenCircleImg />
                      <s.ActivityCardsDescription>
                        Termina em {card.number_id.toString().slice(-4)}
                      </s.ActivityCardsDescription>
                    </s.ActivityCardsDescriptionAndImg>
                    <s.ActivityCardsCashAndDate>
                      <s.ActivityCardsCash
                        onClick={() => handleDeleteCard(user?.id, card.id)}
                      >
                        Eliminar
                      </s.ActivityCardsCash>
                    </s.ActivityCardsCashAndDate>
                  </s.ActivityCards>
                ))}
              <s.MoreActivities>
                <s.MoreActivitiesTitle>
                  Ver todos seus cartões
                </s.MoreActivitiesTitle>
                <RightArrowImg />
              </s.MoreActivities>
            </s.ActivityContainer>
          </s.ContentContainer>
        </s.Content>
      </s.ContainerPage>
    </LayoutAuth>
  );
};

export default Cartao;
