import { style } from '@mui/system';
import styled, { css } from 'styled-components';
import theme from 'styles/theme';

export const ContainerEnglobaDivs = styled.div`
  height: 100vh;
  display: grid;
  place-content: center;
`;
export const ContainerEnglobaDivsA = styled.div`
  height: 100vh;
  display: grid;
  place-content: center;
  @media (max-width: 850px) {
    margin: 5.5em;
  }
`;

export const ContainerCarregarValor = styled.div<{ vertical: boolean }>`
  background-color: #201f22;
  margin: 0.3em;
  display: flex;
  justify-content: space-evenly;
  border-radius: 10px;
  align-items: center;
  padding: '2em';
  padding-right: '25em' !important;
  width: '100%';

  //width: 250px;
  ${props =>
    props.vertical &&
    css`
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    `}
  @media (max-width: 850px) {
    display: grid !important ;
    place-items: center !important;
    grid-template-columns: 1fr !important;
    //  padding-right: 2em !important;
    width: 100%;
    margin: 1em auto;
    padding: 0.7em 0.2em;
  }
`;
export const SpanCarregarValor = styled.span<{ primary: boolean }>`
  color: #c1fd35;
  font-weight: bolder;

  margin: 5px;
  font-size: ${theme.font.sizes.medium};
  ${props =>
    props.primary &&
    css`
      color: white;

      font-size: small;
    `}
`;

export const ContainerSpecific = styled.div`
  display: 'flex';
  justify-content: 'space-between';
  align-items: ' center';
  @media (max-width: 850px) {
    display: grid !important ;
    place-items: center !important;
    grid-template-columns: 1fr !important;
    //  padding-right: 2em !important;
    width: 100%;
    margin: 1em auto;
    padding: 0.7em 0.7em !important;
  }
`;

export const Content = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.gallery};
    color: ${theme.colors.black};
  `};
`;

export const ContentContainer = styled.div`
  margin: auto;
  ${({ theme }) => css`
    background-color: ${theme.colors.gallery};
    color: ${theme.colors.black};
  `};
`;

export const ContainerPage = styled.div`
  height: 100%;
  display: grid;
  grid-template-columns: 2.5fr 10fr;
  justify-content: space-between;
  ${({ theme }) => css`
    background-color: ${theme.colors.gallery};
  `};
`;

export const SetaEText = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
`;

export const CarregarValorA = styled.div`
  padding-right: 25em;
  @media (max-width: 850px) {
    display: grid !important ;
    place-items: center !important;
    grid-template-columns: 1fr !important;
    padding-right: 0 !important;
    width: 60%;
  }
`;
export const ContainerCarregarValorB = styled.div<{ vertical: boolean }>`
  background-color: #201f22;
  display: flex;
  justify-content: space-evenly;
  border-radius: 10px;
  align-items: center;
  //width: 250px;
  ${props =>
    props.vertical &&
    css`
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    `}
  @media (max-width: 850px) {
    display: grid !important ;
    place-items: center !important;
    grid-template-columns: 1fr !important;
    padding-right: 0 !important;
    //width: 60%;
  }
  @media (min-width: 851px) {
    display: flex !important ;
    justify-content: center;
    // padding-right: 25em !important;
    //width: 60%;
  }
`;
export const SpanCarregarValorA = styled.span<{ primary: boolean }>`
  color: #c1fd35;
  font-weight: bolder;
  margin: 5px;
  margin: 1.3em;
  font-size: ${theme.font.sizes.medium};
  ${props =>
    props.primary &&
    css`
      color: white;

      font-size: small;
    `}
`;

export const ContainerCarregarValorC = styled.div<{ vertical: boolean }>`
  background-color: #201f22;
  margin: 0.3em;
  display: flex;
  justify-content: center;
  padding: 7em;
  border-radius: 10px;
  align-items: center;
  //width: 250px;
  ${props =>
    props.vertical &&
    css`
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    `}
  @media (max-width: 850px) {
    display: grid !important ;
    place-items: center !important;
    grid-template-columns: 1fr !important;
    margin: 1.3em;
    padding: 1em;
    // padding-right: 0 !important;
    //width: 60%;
  }
`;

export const ContainerCarregarValorD = styled.div<{ vertical: boolean }>`
  background-color: #201f22;
  width: 200%;
  margin: 0.3em;
  display: flex;
  justify-content: space-evenly;
  border-radius: 10px;
  align-items: center;
  //width: 250px;
  ${props =>
    props.vertical &&
    css`
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    `}
  @media (max-width: 850px) {
    display: grid !important ;
    place-items: center !important;
    grid-template-columns: 1fr !important;

    width: 100%;
    padding: 0;
  }
`;
export const ContainerCarregarValorE = styled.div<{ vertical: boolean }>`
  background-color: #201f22;
  width: 200%;
  margin: 0.3em;
  display: flex;
  justify-content: space-evenly;
  border-radius: 10px;
  align-items: center;
  //width: 250px;
  ${props =>
    props.vertical &&
    css`
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    `}
  @media (max-width: 850px) {
    display: grid !important ;
    place-items: center !important;
    grid-template-columns: 1fr !important;
    padding-right: 0 !important;
    width: 100% !important;
    padding: 0;
  }
  @media (max-width: 1710px) and (min-width: 851px) {
    width: 80%;
  }
`;

export const EnglobaBotaoD = styled.div`
  display: flex;
  @media (max-width: 850px) {
    display: block !important;
  }
`;

export const DivCVU = styled.div`
  display: flex;
  width: 100%;
  min-height: 264px;
  flex-direction: column;
  background: #201f22;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  padding: 40px 35px 30px 35px;

  @media (max-width: 658px) {
    font-size: 14px;
    padding: 18px 25px 30px 25px;
  }
`;

export const TitleDivCVU = styled.h1`
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 22px;
  color: #ffffff;
  margin-bottom: 39px;

  @media (max-width: 658px) {
    font-size: 14px;
  }
`;

export const DivSpaceBetween = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const CVUTitle = styled.h2`
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
  color: #c1fd35;
`;

export const CVUData = styled.h2`
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 117.68%;
  color: #eeeaea;
`;

export const DivColumn = styled.div`
  display: flex;
  flex-direction: column;
`;
