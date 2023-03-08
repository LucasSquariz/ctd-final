import React, { useState } from 'react';
import Cards from 'react-credit-cards-2';
import 'react-credit-cards-2/es/styles-compiled.css';

import * as S from './styles';

const Card = () => {
  const [state, setState] = useState({
    number: '',
    expiry: '',
    cvc: '',
    name: '',
    focus: ''
  });

  const handleInputChange = evt => {
    const { name, value } = evt.target;

    setState(prev => ({ ...prev, [name]: value }));
  };

  const handleInputFocus = evt => {
    setState(prev => ({ ...prev, focus: evt.target.name }));
  };

  return (
    <div id="PaymentForm">
      <Cards
        number={state.number}
        expiry={state.expiry}
        cvc={state.cvc}
        name={state.name}
        focused={state.focus}
        placeholders={{ name: 'NOME DO TITULAR' }}
        locale={{ valid: 'DATA' }}
      />

      <form>
        <S.Container>
          <S.InputCard
            type="number"
            name="number"
            placeholder="Numero Do cartão"
            value={state.number}
            onChange={handleInputChange}
            onFocus={handleInputFocus}
          />
          <S.InputCard
            type="name"
            name="name"
            placeholder="Nome do titular"
            value={state.name}
            onChange={handleInputChange}
            onFocus={handleInputFocus}
          />
          <S.InputCard
            type="expiry"
            name="expiry"
            placeholder="MM/AA"
            value={state.expiry}
            onChange={handleInputChange}
            onFocus={handleInputFocus}
          />
          <S.InputCard
            type="cvc"
            name="cvc"
            placeholder="cvc"
            value={state.cvc}
            onChange={handleInputChange}
            onFocus={handleInputFocus}
          />
          
        </S.Container>
        <S.ContainerButton>
            <S.ButtonCard>Continuar</S.ButtonCard>
          </S.ContainerButton>
      </form>
    </div>
  );
};

export default Card;
