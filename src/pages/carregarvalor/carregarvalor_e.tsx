/* eslint-disable react/no-unescaped-entities */
import { Button } from 'components/Button';
import LayoutAuth from 'components/LayoutAuth';
import Sidebar from 'components/Sidebar';
import { useAuthState } from 'contexts/auth/AuthContext';
import { NextPage } from 'next';
import Link from 'next/link';
import { useCardStore } from 'store/carregarValorStore';
import Icon_Sucess from '../../../public/icon_success';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
import * as s from './styles';
type Props = {};
pdfMake.vfs = pdfFonts.pdfMake.vfs;
const Carregarvalor_e: NextPage = (props: Props) => {
  const now = new Date();
  const { user } = useAuthState();
  const { ammount, dated } = useCardStore();
  const formattedDate = now.toLocaleString();

  const docDefinition = {
    content: [
      {
        text: 'Comprovante de transferência',
        style: 'header'
      },
      {
        text: [
          {
            text: 'Já depositamos o dinheiro na sua conta: ',
            bold: true
          }
        ],
        style: 'subheader'
      },
      {
        text: [
          {
            text: 'Data: ',
            bold: true
          },
          `${formattedDate}`
        ],
        style: 'subheader'
      },
      {
        text: [
          {
            text: 'Usuario: ',
            bold: true
          },
          `${user.alias}`
        ],
        style: 'subheader'
      },
      {
        text: [
          {
            text: 'Valor: ',
            bold: true
          },
          `${ammount}`
        ],
        style: 'subheader'
      },
      {
        text: [
          {
            text: 'Conta Própria ',
            bold: true
          }
        ],
        style: 'subheader'
      },
      {
        text: [
          {
            text: 'Brubank ',
            bold: true
          }
        ],
        style: 'subheader'
      },
      {
        text: [
          {
            text: 'CVU:',
            bold: true
          },
          `${user.cvu}`
        ],
        style: 'subheader'
      }
    ],
    styles: {
      header: {
        fontSize: 22,
        bold: true,
        alignment: 'center',
        margin: [0, 0, 0, 20]
      },
      subheader: {
        fontSize: 16,
        bold: true,
        margin: [0, 10, 0, 5]
      }
    }
  };

  const handleClick = (): any => {
    pdfMake.createPdf(docDefinition).download('document.pdf');
  };
  return (
    <>
      <LayoutAuth>
        ``
        <s.ContainerPage>
          <Sidebar />
          <s.Content>
            <s.ContainerEnglobaDivs style={{}}>
              <div
                style={{ display: 'grid', placeItems: 'center', margin: '2em' }}
              >
                <s.ContainerCarregarValorE
                  style={{ backgroundColor: '#c1fd35' }}
                  vertical={true}
                >
                  <s.SpanCarregarValor
                    style={{ color: 'black' }}
                    primary={false}
                  >
                    <span style={{ color: 'black' }}>
                      {' '}
                      <Icon_Sucess color={'black'} />
                    </span>
                  </s.SpanCarregarValor>
                  <s.SpanCarregarValor
                    style={{ color: 'black' }}
                    primary={false}
                  >
                    Já depositamos o dinheiro na sua conta{' '}
                  </s.SpanCarregarValor>
                </s.ContainerCarregarValorE>
                <s.ContainerCarregarValorE
                  style={{ padding: '2.5em' }}
                  vertical={true}
                >
                  <s.SpanCarregarValor primary={true}>
                    {formattedDate}
                  </s.SpanCarregarValor>
                  <s.SpanCarregarValor primary={false}>
                    ${ammount}
                  </s.SpanCarregarValor>
                  <s.SpanCarregarValor primary={true}>para</s.SpanCarregarValor>
                  <s.SpanCarregarValor primary={false}>
                    Conta Própria
                  </s.SpanCarregarValor>
                  <s.SpanCarregarValor primary={true}>
                    Brubank
                  </s.SpanCarregarValor>
                  <s.SpanCarregarValor primary={true}>
                    CVU {user.cvu}
                  </s.SpanCarregarValor>
                </s.ContainerCarregarValorE>

                <s.EnglobaBotaoD style={{ display: 'flex' }}>
                  <s.ContainerButton
                    style={{ margin: '10px', backgroundColor: 'gray' }}
                  >
                    <s.SpanCarregarValor
                      style={{ color: 'black' }}
                      primary={false}
                    >
                      <Link href="/carregarvalor">Voltar ao início</Link>
                    </s.SpanCarregarValor>
                  </s.ContainerButton>
                  <s.ContainerButton
                    style={{ margin: '10px' }}
                    onClick={handleClick}
                  >
                    <s.SpanCarregarValor
                      style={{ color: 'black' }}
                      primary={false}
                    >
                      Download do comprovante
                    </s.SpanCarregarValor>
                  </s.ContainerButton>
                </s.EnglobaBotaoD>
              </div>
            </s.ContainerEnglobaDivs>
          </s.Content>
        </s.ContainerPage>
      </LayoutAuth>
    </>
  );
};

export default Carregarvalor_e;
