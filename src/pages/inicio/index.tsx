import * as s from './style';
import GreenCircleImg from '../../assets/greenCircleImg';
import SearchImg from '../../assets/searchImg';
import RightArrowImg from '../../assets/rightArrowImg';
import LayoutAuth from 'components/LayoutAuth';
import Sidebar from 'components/Sidebar';

const Inicio = () => {
  return (
    <LayoutAuth>
      <s.ContainerPage>
        <Sidebar />
        <s.Content>
          <s.ContentContainer>
            <s.ContentMoneyContainer>
              <s.MoneyContainer>
                <s.MoneyTextContainer>Dinheiro disponível</s.MoneyTextContainer>
                <s.MoneyValueContainer>$ 6.890.534,17</s.MoneyValueContainer>
              </s.MoneyContainer>
              <s.CardOptionsContainer>
                <s.CardOptionsText>Ver cartões</s.CardOptionsText>
                <s.CardOptionsText>Ver CVC</s.CardOptionsText>
              </s.CardOptionsContainer>
            </s.ContentMoneyContainer>
            <s.ButtonsContainer>
              <s.Button>Carregar valor</s.Button>
              <s.Button>Pagar serviços</s.Button>
            </s.ButtonsContainer>
            <s.SearchBarLabel>
              <SearchImg />
              <s.SearchBarInput placeholder="Pesquisar em sua atividade" />
            </s.SearchBarLabel>
            <s.ActivityContainer>
              <s.ActivityTitle>Sua atividade</s.ActivityTitle>
              <s.ActivityCards>
                <s.ActivityCardsDescriptionAndImg>
                  <GreenCircleImg />
                  <s.ActivityCardsDescription>
                    Você transferiu para Rodrigo
                  </s.ActivityCardsDescription>
                </s.ActivityCardsDescriptionAndImg>
                <s.ActivityCardsCashAndDate>
                  <s.ActivityCardsCash>-$ 1265,57</s.ActivityCardsCash>
                  <s.ActivityCardsDate>Sábado</s.ActivityCardsDate>
                </s.ActivityCardsCashAndDate>
              </s.ActivityCards>
              <s.ActivityCards>
                <s.ActivityCardsDescriptionAndImg>
                  <GreenCircleImg />
                  <s.ActivityCardsDescription>
                    Você transferiu para Consórcio
                  </s.ActivityCardsDescription>
                </s.ActivityCardsDescriptionAndImg>
                <s.ActivityCardsCashAndDate>
                  <s.ActivityCardsCash>-$ 1265,57</s.ActivityCardsCash>
                  <s.ActivityCardsDate>Sábado</s.ActivityCardsDate>
                </s.ActivityCardsCashAndDate>
              </s.ActivityCards>
              <s.ActivityCards>
                <s.ActivityCardsDescriptionAndImg>
                  <GreenCircleImg />
                  <s.ActivityCardsDescription>
                    Você adicionou valor
                  </s.ActivityCardsDescription>
                </s.ActivityCardsDescriptionAndImg>
                <s.ActivityCardsCashAndDate>
                  <s.ActivityCardsCash>+$ 1265,57</s.ActivityCardsCash>
                  <s.ActivityCardsDate>Sábado</s.ActivityCardsDate>
                </s.ActivityCardsCashAndDate>
              </s.ActivityCards>
              <s.ActivityCards>
                <s.ActivityCardsDescriptionAndImg>
                  <GreenCircleImg />
                  <s.ActivityCardsDescription>
                    Você recebeu uma transferência
                  </s.ActivityCardsDescription>
                </s.ActivityCardsDescriptionAndImg>
                <s.ActivityCardsCashAndDate>
                  <s.ActivityCardsCash>+$ 1265,57</s.ActivityCardsCash>
                  <s.ActivityCardsDate>Sábado</s.ActivityCardsDate>
                </s.ActivityCardsCashAndDate>
              </s.ActivityCards>
              <s.MoreActivities>
                <s.MoreActivitiesTitle>
                  Ver toda sua atividade
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

export default Inicio;
