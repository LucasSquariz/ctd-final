import React, { useState } from 'react';
import Cards from 'react-credit-cards-2';
import 'react-credit-cards-2/es/styles-compiled.css';
import { useCreateCard } from 'hooks/useCards/useCreateCard';
import { useAuthState } from 'contexts/auth/AuthContext';

import * as S from './styles';

export const Card = () => {
  const [state, setState] = useState({
    number: '',
    expiry: '',
    cvc: '',
    name: '',
    focus: ''
  });

  const { user } = useAuthState();
  const { mutate: createCard } = useCreateCard();

  const handleInputChange = evt => {
    const { name, value } = evt.target;
    let newValue = value;
    if (name === 'number') {
      // remove todos os caracteres que não são números
      newValue = value.replace(/\D/g, '');
      // limita o número de caracteres em 12
      newValue = newValue.slice(0, 16);
    }

    setState(prev => ({ ...prev, [name]: newValue }));
  };

  const handleInputFocus = evt => {
    setState(prev => ({ ...prev, focus: evt.target.name }));
  };

  const handleSubmit = () => {
    createCard({
      userId: user?.user_id,
      input: {
        cod: state.cvc,
        expiration_date: state.expiry,
        first_last_name: state.name,
        number_id: state.number
      }
    });    
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

      <form
        onSubmit={e => {
          e.preventDefault();
          handleSubmit();
        }}
      >
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
            maxLength="4"
            value={state.expiry}
            onChange={handleInputChange}
            onFocus={handleInputFocus}
          />
          <S.InputCard
            type="cvc"
            name="cvc"
            maxLength="3"
            placeholder="cvc"
            value={state.cvc}
            onChange={handleInputChange}
            onFocus={handleInputFocus}
          />
        </S.Container>
        <S.ContainerButton>
          <S.ButtonCard type="submit">Continuar</S.ButtonCard>
        </S.ContainerButton>
      </form>
    </div>
  );
};

export default Card;
