import styled from 'styled-components';
import theme from './theme';

export const Form = styled.form`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;

  & > p,
  h1 {
    grid-column: 1/-1;
    place-self: center;
    color: #fff;
  }

  & > button {
    width: 100%;
  }

  @media (max-width: 850px) {
    grid-template-columns: 1fr;
    margin: 2rem;
    & button {
      grid-column: 1/-1;
      max-width: 100%;
      width: 100%;
    }
  }
`;

//850 px -> muda pra 1 coluna
