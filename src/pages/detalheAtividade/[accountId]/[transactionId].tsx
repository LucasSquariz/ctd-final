import LayoutAuth from 'components/LayoutAuth';
import Sidebar from 'components/Sidebar';
import useGetActivityDetailsById from 'hooks/useGetActivityDetailsById';
import * as s from './style';
import AprovalImg from 'assets/aprovalImg';
import Link from 'next/link';

/* export const getStaticPaths = async () => {   
  return {
    paths: [{ params: { accountId: '1' } }, { params: { transactionId: '43' } }],
    fallback: false
  };
};

export async function getStaticProps({ params }: any) {
  const data = useGetActivityDetailsById(
    params.accountId,
    params.transactionId
  );
  console.log(data);
  return {
    props: {
      params
    }
  };
} */

const DetalheAtividade = ({ props }: any) => {
  return (
    <>
      <LayoutAuth>
        <s.ContainerPage>
          <Sidebar />
          <s.Content>
            <s.ContentContainer>
              <s.DateAprovalContainer>
                <s.AprovalContainer>
                  <AprovalImg />
                  <s.AprovalTitle>Aprovado</s.AprovalTitle>
                </s.AprovalContainer>
                <s.DateContainer>
                  <s.DateTitle>
                    Criado em 17 de agosto de 2022 às 16:34h
                  </s.DateTitle>
                </s.DateContainer>
              </s.DateAprovalContainer>
              <s.DetailsContainer>
                <s.TransferAmountContainer>
                  <s.TransferAmountTitle>
                    Tranferência em dinheiro
                  </s.TransferAmountTitle>
                  <s.TransferAmount>$1.266,57</s.TransferAmount>
                </s.TransferAmountContainer>
                <s.TransferDestinationContainer>
                  <s.TransferDestinationTitle>
                    Transferido para
                  </s.TransferDestinationTitle>
                  <s.TransferDestination>Rodrigo Vaccaro</s.TransferDestination>
                </s.TransferDestinationContainer>
                <s.TransferNumberContainer>
                  <s.TransferNumberTitle>
                    Número da operação
                  </s.TransferNumberTitle>
                  <s.TransferNumber>27903047281</s.TransferNumber>
                </s.TransferNumberContainer>
              </s.DetailsContainer>
            </s.ContentContainer>
            <s.ButtonContainer>
              <div></div>
              <Link href={'/inicio'}>
                <s.ButtonInicio>Voltar ao início</s.ButtonInicio>
              </Link>
              <s.ButtonPaymentVoucher>
                Baixar comprovante
              </s.ButtonPaymentVoucher>
            </s.ButtonContainer>
          </s.Content>
        </s.ContainerPage>
      </LayoutAuth>
    </>
  );
};

export default DetalheAtividade;
