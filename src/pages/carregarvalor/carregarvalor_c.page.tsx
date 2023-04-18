import React, { useState } from 'react';
import * as s from './styles';
import { Input } from 'components/Input';
import { number } from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { CarregarValor } from 'types/CarregarValorTypes';
import { NextPage } from 'next';
import Yup from 'settings/yup';
import Link from 'next/link';
import { useCardStore } from 'store/carregarValorStore';
import LayoutAuth from 'components/LayoutAuth';
import Sidebar from 'components/Sidebar';
import { Button } from 'components/Button';
import RightArrowImg from 'assets/rightArrowImg';
import { useAuthState } from 'contexts/auth/AuthContext';

type Props = {};

const Carregarvalor_c: NextPage = (props: Props) => {
  const { user } = useAuthState();
  const { setAmmount } = useCardStore(state => state);

  const schema = Yup.object().shape({
    valor: Yup.number().required()
  });
  const { control, handleSubmit, formState } = useForm<CarregarValor>({
    defaultValues: {
      valor: 0
    },
    resolver: yupResolver(schema)
  });
  return (
    <>
      <LayoutAuth>
        <s.ContainerPage>
          <Sidebar />
          <s.Content>
            <div style={{ display: 'grid', placeItems: 'center' }}>
              <s.ContainerEnglobaDivs>
                <div
                  style={{
                    display: 'grid',
                    placeItems: 'center'
                  }}
                >
                  <s.ContainerCarregarValorC vertical={true}>
                    <s.SpanCarregarValor primary={false}>
                      Quanto deseja depositar na sua conta?
                    </s.SpanCarregarValor>
                    <Input
                      //   style={{ width: '94%' }}
                      name="valor"
                      type="text"
                      id="valor"
                      control={control}
                      placeholder="Valor"
                      onChange={e => setAmmount(e.target.value)}
                    />
                    <s.SpanCarregarValor
                      style={{ margin: '0.5em' }}
                      primary={false}
                    >
                      <Link href={'/carregarvalor/carregarvalor_d'}>
                        <s.ContainerButton> Continuar</s.ContainerButton>
                      </Link>
                    </s.SpanCarregarValor>
                  </s.ContainerCarregarValorC>
                </div>
              </s.ContainerEnglobaDivs>
            </div>
          </s.Content>
        </s.ContainerPage>
      </LayoutAuth>
    </>
  );
};

export default Carregarvalor_c;
