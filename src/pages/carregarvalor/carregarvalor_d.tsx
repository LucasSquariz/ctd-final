import RightArrowImg from 'assets/rightArrowImg';
import { Button } from 'components/Button';
import LayoutAuth from 'components/LayoutAuth';
import Sidebar from 'components/Sidebar';
import { useAuthState } from 'contexts/auth/AuthContext';
import { useDeposit } from 'hooks/useDeposit';
import { NextPage } from 'next';
import Link from 'next/link';
import { Router, useRouter } from 'next/router';
import React from 'react';
import { useCardStore } from 'store/carregarValorStore';
import * as s from './styles';
type Props = {};

const Carregarvalor_d: NextPage = (props: Props) => {
  const { ammount, setAmmount, dated, setDated } = useCardStore();
  const { user } = useAuthState();
  const { mutate: deposit } = useDeposit(String(user.user_id));
  const router = useRouter();
  const handleSubmit = () => {
    deposit(
      {
        amount: Number(ammount)
      },
      {
        onSuccess: data => {
          setDated(data.dated);
          router.push('/carregarvalor/carregarvalor_e');
        }
      }
    );
  };

  return (
    <>
      <LayoutAuth>
        <s.ContainerPage>
          <Sidebar />
          <s.Content>
            <s.ContainerEnglobaDivs>
              <div
                style={{ display: 'grid', placeItems: 'center', margin: '2em' }}
              >
                <s.SetaEText>
                  <RightArrowImg />
                  <div>Carregar Valor</div>
                </s.SetaEText>
                <s.ContainerCarregarValorD
                  style={{ padding: '1em' }}
                  vertical={true}
                >
                  <s.SpanCarregarValor primary={false}>
                    Revise se está tudo correto
                  </s.SpanCarregarValor>
                  <s.SpanCarregarValor primary={true}></s.SpanCarregarValor>
                  <s.SetaEText>
                    <s.SpanCarregarValor primary={true}>
                      {' '}
                      Vai transferir
                    </s.SpanCarregarValor>
                    <s.SpanCarregarValor primary={true}>
                      {' '}
                      {/* <ExportSvg />{' '} */}
                    </s.SpanCarregarValor>
                  </s.SetaEText>
                  <s.SpanCarregarValor
                    primary={true}
                    style={{ fontWeight: 'bold' }}
                  >
                    $ {ammount}
                  </s.SpanCarregarValor>
                  <s.SpanCarregarValor primary={true}>
                    {' '}
                    Para
                  </s.SpanCarregarValor>
                  <s.SpanCarregarValor
                    primary={true}
                    style={{ fontWeight: 'bold' }}
                  >
                    Conta Própria
                  </s.SpanCarregarValor>
                  <s.SpanCarregarValor primary={true}>
                    {' '}
                    Brubank
                  </s.SpanCarregarValor>
                  <s.SpanCarregarValor primary={true}>
                    {' '}
                    cvu {user?.cvu}
                  </s.SpanCarregarValor>{' '}
                  <s.ContainerButton onClick={handleSubmit}>
                    Transferir
                  </s.ContainerButton>{' '}
                </s.ContainerCarregarValorD>
              </div>
            </s.ContainerEnglobaDivs>
          </s.Content>
        </s.ContainerPage>
      </LayoutAuth>
    </>
  );
};

export default Carregarvalor_d;
