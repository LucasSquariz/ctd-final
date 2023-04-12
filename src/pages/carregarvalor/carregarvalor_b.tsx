import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup
} from '@mui/material';
import RightArrowImg from 'assets/rightArrowImg';
import LayoutAuth from 'components/LayoutAuth';
import Sidebar from 'components/Sidebar';
import Link from 'next/link';
import React, { ChangeEvent, useEffect, useState } from 'react';
import { useCardStore } from 'store/carregarValorStore';
import Cartaoadd from 'assets/cardadd';

import * as s from './styles';
import { Button } from 'components/Button';
import { useAuthState } from 'contexts/auth/AuthContext';

type Response = {
  account_id: number;
  cod: number;
  expiration_date: 'string';
  first_last_name: 'string';
  id: number;
  number_id: number;
};

export default function carregarvalor_b() {
  const { user } = useAuthState();
  const axios = require('axios');

  // useEffect(() => {

  //   const accountId = 'your_account_id';
  //   const url = `https://digitalmoney.ctd.academy/api/accounts/${accountId}/cards`;

  //   axios.get(url)
  //     .then((response : {data:Response}) => {
  //       console.log('Success:', response.data);
  //     })
  //     .catch((error : any) => {
  //       console.log('Error:', error.response.status);
  //     });
  // }, []);

  const { setOrigin } = useCardStore(state => state);
  const [cartaoSelect, setcartaoSelect] = useState<string>('');
  const handleChangeCartao = (event: ChangeEvent<HTMLInputElement>): void => {
    setcartaoSelect(event.target.value as string);
  };

  return (
    <>
      <LayoutAuth>
        <s.ContainerPage>
          <Sidebar />
          <s.Content>
            <s.ContainerEnglobaDivs>
              <s.SetaEText>
                {' '}
                <RightArrowImg />
                <span>Carregar Valor</span>
              </s.SetaEText>
              <s.ContainerCarregarValorB
                style={{ padding: '2em', margin: '2em' }}
                vertical={true}
              >
                <s.SpanCarregarValorA primary={false}>
                  Selecione um cartão
                </s.SpanCarregarValorA>

                <FormControl>
                  <FormLabel
                    style={{ color: 'white' }}
                    id="demo-controlled-radio-buttons-group"
                  ></FormLabel>
                  <RadioGroup
                    style={{
                      backgroundColor: '#FFFFFF',
                      padding: '2em',
                      borderRadius: '10px'
                    }}
                    aria-labelledby="demo-controlled-radio-buttons-group"
                    name="controlled-radio-buttons-group"
                    value={cartaoSelect}
                    onChange={handleChangeCartao}
                  >
                    <FormControlLabel
                      style={{
                        color: 'black',
                        display: 'flex',
                        flexDirection: 'row-reverse',
                        alignItems: 'center',
                        margin: '1.5em'
                      }}
                      value="female"
                      control={<Radio />}
                      label="Final 0000"
                    />
                    <span>____________________</span>
                    <FormControlLabel
                      style={{
                        color: 'black',
                        display: 'flex',
                        flexDirection: 'row-reverse',
                        alignItems: 'center',
                        margin: '1.5em'
                      }}
                      value="male"
                      control={<Radio />}
                      label="Final 1452"
                    />
                  </RadioGroup>
                </FormControl>

                <s.ContainerCarregarValorB vertical={false}>
                  <s.SpanCarregarValorA color={'#c1fd35'} primary={false}>
                    <Cartaoadd color={'#c1fd35'} />

                    <Link href={'/cartaoadd'}> Novo Cartão </Link>
                  </s.SpanCarregarValorA>
                </s.ContainerCarregarValorB>

                <s.SpanCarregarValor primary={false}>
                  <Button>
                    <Link href={'/carregarvalor/carregarvalor_c'}>
                      Continuar
                    </Link>
                  </Button>
                </s.SpanCarregarValor>
              </s.ContainerCarregarValorB>
            </s.ContainerEnglobaDivs>
          </s.Content>
        </s.ContainerPage>
      </LayoutAuth>
    </>
  );
}
