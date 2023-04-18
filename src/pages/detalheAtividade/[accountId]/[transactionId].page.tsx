import LayoutAuth from 'components/LayoutAuth';
import Sidebar from 'components/Sidebar';
import useGetActivityDetailsById from 'hooks/useGetActivityDetailsById';
import * as s from './style';
import AprovalImg from 'assets/aprovalImg';
import Link from 'next/link';
import { useRouter } from 'next/router';

export async function getServerSideProps(context: any) {
  return {
    props: {} // will be passed to the page component as props
  };
}

const DetalheAtividade = () => {
  const router = useRouter();
  const { accountId, transactionId } = router.query;

  /* @ts-ignore */
  const activity = useGetActivityDetailsById(accountId, transactionId);
  console.log(activity);

  const monthSelect = (month: string) => {
    switch (month) {
      case '01':
        return 'janeiro';
      case '02':
        return 'fevereiro';
      case '03':
        return 'março';
      case '04':
        return 'abril';
      case '05':
        return 'maio';
      case '06':
        return 'junho';
      case '07':
        return 'julho';
      case '08':
        return 'agosto';
      case '09':
        return 'setembro';
      case '10':
        return 'outubro';
      case '11':
        return 'novembro';
      case '12':
        return 'dezembro';
    }
  };

  const dateFormat = (date: string) => {
    date.split('-');
    const year = date[2] + date[3];
    const month = monthSelect(date[5] + date[6]);
    const day = date[8] + date[9];
    const hours = date[11] + date[12];
    const minutes = date[14] + date[15];
    return `Criado em ${day} de ${month} de ${year} às ${hours}:${minutes}h`;
  };

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
                    {activity?.data?.dated && dateFormat(activity?.data?.dated)}
                  </s.DateTitle>
                </s.DateContainer>
              </s.DateAprovalContainer>
              <s.DetailsContainer>
                <s.TransferAmountContainer>
                  <s.TransferAmountTitle>
                    Tranferência em dinheiro
                  </s.TransferAmountTitle>
                  <s.TransferAmount>{`R$${activity?.data?.amount}`}</s.TransferAmount>
                </s.TransferAmountContainer>
                <s.TransferDestinationContainer>
                  <s.TransferDestinationTitle>
                    Transferido para
                  </s.TransferDestinationTitle>
                  <s.TransferDestination>
                    {activity?.data?.destination
                      ? activity?.data?.destination
                      : 'Desconhecido'}
                  </s.TransferDestination>
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
