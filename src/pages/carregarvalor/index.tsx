import { Box } from '@mui/material';
import LayoutAuth from 'components/LayoutAuth';
import * as s from './styles';
import { NextPage } from 'next';
import Link from 'next/link';
import Sidebar from 'components/Sidebar';
import RightArrowImg from 'assets/rightArrowImg';
import Cardadd from 'assets/cardadd';
import Cardsvg from 'assets/cardsvg';
import ProfileIcon from 'assets/profileIcon';
import { useAuthState } from 'contexts/auth/AuthContext';

const CarregarValor: NextPage = (): any => {
  const { user } = useAuthState();
  return (
    <>
      <LayoutAuth>
        <s.ContainerPage>
          <Sidebar />
          <s.Content>
            <s.SetaEText style={{ color: '#272727' }}>
              {' '}
              <RightArrowImg />
              <span>Carregar Valor </span>{' '}
            </s.SetaEText>
            <s.ContainerEnglobaDivs>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  //   placeItems: 'center',
                  margin: '0 9em'
                }}
              >
                <Link href="/carregarvalor/carregarvalor_a">
                  <s.ContainerCarregarValor style={{}} vertical={false}>
                    <s.ContainerSpecific
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: ' center',
                        paddingRight: '25em'
                      }}
                    >
                      <s.SpanCarregarValor primary={false}>
                        <div style={{ marginLeft: '25px' }}>
                          <ProfileIcon color={'#c1fd35'} />
                        </div>
                      </s.SpanCarregarValor>
                      <s.SpanCarregarValor primary={false}>
                        {' '}
                        Transferência bancária{' '}
                      </s.SpanCarregarValor>
                    </s.ContainerSpecific>
                    <div style={{ marginRight: '20px' }}>
                      <RightArrowImg />
                    </div>
                  </s.ContainerCarregarValor>
                </Link>
                <Link href="/carregarvalor/carregarvalor_b">
                  <s.ContainerCarregarValor style={{}} vertical={false}>
                    <s.ContainerSpecific
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: ' center',
                        paddingRight: '25em'
                      }}
                    >
                      <s.SpanCarregarValor primary={false}>
                        <Cardsvg color={'#c1fd35'} />
                      </s.SpanCarregarValor>
                      <s.SpanCarregarValor primary={false}>
                        {' '}
                        Selecionar cartão{' '}
                      </s.SpanCarregarValor>
                      <s.SpanCarregarValor primary={false}>
                        {' '}
                      </s.SpanCarregarValor>
                    </s.ContainerSpecific>
                    <RightArrowImg />
                  </s.ContainerCarregarValor>
                </Link>
                {/* <Link href="/carregarvalor/carregarvalor_b">
                  <s.ContainerCarregarValor
                    style={{ padding: '2em', width: '100%' }}
                    vertical={false}
                  >
                    <s.SpanCarregarValor primary={false}>
                      {' '}
                      <Cardsvg color={'#c1fd35'} />
                    </s.SpanCarregarValor>
                    <s.SpanCarregarValor primary={false}>
                      {' '}
                      Selecionar cartão {'                    '}
                    </s.SpanCarregarValor>
                    <s.SpanCarregarValor primary={false}>
                      {' '}
                      <RightArrowImg />
                    </s.SpanCarregarValor>
                  </s.ContainerCarregarValor>
                </Link>{' '} */}
              </div>
            </s.ContainerEnglobaDivs>
          </s.Content>
        </s.ContainerPage>
      </LayoutAuth>
    </>
  );
};

export default CarregarValor;
