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
                <s.MoneyTextContainer>
                  Adicione seu cartão de crédito ou débito
                </s.MoneyTextContainer>
                <s.MoreAddCartao>
                  <s.MoreAddCartaoLink href="cartaoadd">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="34"
                      height="34"
                      viewBox="0 0 34 34"
                      fill="none"
                    >
                      <circle
                        cx="17"
                        cy="17"
                        r="16.35"
                        stroke="#C1FD35"
                        strokeWidth="1.3"
                      />
                      <path
                        d="M16.75 10V24.5"
                        stroke="#C1FD35"
                        strokeWidth="1.3"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M24 17L9.5 17"
                        stroke="#C1FD35"
                        strokeWidth="1.3"
                        strokeLinejoin="round"
                      />
                    </svg>
                    Novo cartão
                  </s.MoreAddCartaoLink>
                  <s.MoreAddCartaoLink href="cartaoadd">
                    <svg
                      width="22"
                      height="23"
                      viewBox="0 0 22 23"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M2 10C1.17157 10 0.5 10.6716 0.5 11.5C0.5 12.3284 1.17157 13 2 13L2 10ZM21.0607 12.5607C21.6464 11.9749 21.6464 11.0251 21.0607 10.4393L11.5147 0.893397C10.9289 0.307611 9.97918 0.307611 9.3934 0.893398C8.80761 1.47918 8.80761 2.42893 9.3934 3.01472L17.8787 11.5L9.3934 19.9853C8.80761 20.5711 8.80761 21.5208 9.3934 22.1066C9.97919 22.6924 10.9289 22.6924 11.5147 22.1066L21.0607 12.5607ZM2 13L20 13L20 10L2 10L2 13Z"
                        fill="#C1FD35"
                      ></path>
                    </svg>
                  </s.MoreAddCartaoLink>
                </s.MoreAddCartao>
              </s.MoneyContainer>
            </s.ContentMoneyContainer>
            <s.ActivityContainer>
              <s.ActivityTitle>Seus cartões</s.ActivityTitle>
              <s.ActivityCards>
                <s.ActivityCardsDescriptionAndImg>
                  <GreenCircleImg />
                  <s.ActivityCardsDescription>
                    Termina em 0000
                  </s.ActivityCardsDescription>
                </s.ActivityCardsDescriptionAndImg>
                <s.ActivityCardsCashAndDate>
                  <s.ActivityCardsCash>Eliminar</s.ActivityCardsCash>
                </s.ActivityCardsCashAndDate>
              </s.ActivityCards>
              <s.ActivityCards>
                <s.ActivityCardsDescriptionAndImg>
                  <GreenCircleImg />
                  <s.ActivityCardsDescription>
                    Termina em 0027
                  </s.ActivityCardsDescription>
                </s.ActivityCardsDescriptionAndImg>
                <s.ActivityCardsCashAndDate>
                  <s.ActivityCardsCash>Eliminar</s.ActivityCardsCash>
                </s.ActivityCardsCashAndDate>
              </s.ActivityCards>
              <s.ActivityCards>
                <s.ActivityCardsDescriptionAndImg>
                  <GreenCircleImg />
                  <s.ActivityCardsDescription>
                    Termina em 0077
                  </s.ActivityCardsDescription>
                </s.ActivityCardsDescriptionAndImg>
                <s.ActivityCardsCashAndDate>
                  <s.ActivityCardsCash>Eliminar</s.ActivityCardsCash>
                </s.ActivityCardsCashAndDate>
              </s.ActivityCards>
              <s.ActivityCards>
                <s.ActivityCardsDescriptionAndImg>
                  <GreenCircleImg />
                  <s.ActivityCardsDescription>
                    Termina em 1029
                  </s.ActivityCardsDescription>
                </s.ActivityCardsDescriptionAndImg>
                <s.ActivityCardsCashAndDate>
                  <s.ActivityCardsCash>Eliminar</s.ActivityCardsCash>
                </s.ActivityCardsCashAndDate>
              </s.ActivityCards>
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

export default Inicio;
