import styled, { css } from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(20%, auto));
  gap: 20px;
  align-items: center;
  margin: 20px;

  @media (max-width: 955px) {
    display: flex;
    flex-direction: column;
  }
`;

export const InputCard = styled.input`
  width: 100%;
  padding: 18px;
  border: 0;
  border-radius: 10px;
  box-shadow: 0px 10px 7px 0px rgba(0, 0, 0, 0.1);
`;

export const ContainerButton = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
  margin: 10px;
  gap: 20px;
`;

export const ButtonCard = styled.button`
  padding: 10px;
  border: 0;
  padding: 18px;
  border-radius: 10px;
  font-weight: bold;
  width: 50%;
  background-color: #c1fd35;
  text-align: center;

  @media (max-width: 955px) {
    width: 100%;
  }
`;
