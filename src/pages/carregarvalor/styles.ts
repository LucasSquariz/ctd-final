import { style } from '@mui/system';
import styled, { css } from 'styled-components';
import theme from 'styles/theme';
import { ButtonProps } from '../../components/Button/types';

export const ContainerEnglobaDivs = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: 10px;
  justify-content: center;
  align-items: center;
`;

export const ContainerEnglobaDivsA = styled.div`
  display: grid;
  // place-content: center;
  margin: 20px;
  @media (max-width: 950px) {
    display: flex;
  }
`;

export const ContainerCarregarValor = styled.div<{ vertical: boolean }>`
  background-color: #201f22;
  display: flex;
  justify-content: space-evenly;
  border-radius: 10px;
  align-items: center;
  padding: 2em;
  width: 100%;

  //width: 250px;
  ${props =>
    props.vertical &&
    css`
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    `}
  @media (max-width: 950px) {
    display: flex;
    //  padding-right: 2em !important;
    padding: 2em;
  }
  @media (max-width: 400px) {
    display: flex;
    //  padding-right: 2em !important;
    padding: 2em;
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

  @media (max-width: 1198px) {
    font-size: 20px;
  }

  @media (max-width: 1000px) {
    font-size: 18px;
  }

  @media (max-width: 655px) {
    font-size: 16px;
  }
`;

export const ContainerSpecific = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 850px) {
    display: flex !important ;
    place-items: center !important;
    grid-template-columns: 1fr !important;
    //  padding-right: 2em !important;

    padding: 0.7em 0.7em !important;
  }
`;

export const Content = styled.div`
  margin: 104px 80px;
  ${({ theme }) => css`
    background-color: ${theme.colors.gallery};
    color: ${theme.colors.black};
  `};

  @media (max-width: 600px) {
    margin: 104px 20px 0 20px;
  }
`;

export const ContentContainer = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.gallery};
    color: ${theme.colors.black};
  `};
  /* @media (max-width: 1391px) {
    margin: 60px 50px 0 50px;
  }
*/
  /* @media (max-width: 1391px) {
    margin: 60px 50px 0 50px;
  } */
`;

export const ContainerPage = styled.div`
  height: 100%;
  display: grid;
  min-height: 1215px;
  grid-template-columns: 2.5fr 10fr;
  justify-content: space-between;
  ${({ theme }) => css`
    background-color: ${theme.colors.gallery};
  `};

  @media (max-width: 600px) {
    display: flex;
    flex-direction: column;
  }
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
    /* display: grid !important ;
    place-items: center !important;
    grid-template-columns: 1fr !important;
    padding-right: 0 !important; */
    //width: 60%;
  }
  @media (min-width: 851px) {
    display: flex !important ;
    justify-content: center;
    flex-direction: column;
    width: 60%;
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
  @media (max-width: 990px) {
    /* display: grid !important ;
    place-items: center !important;
    grid-template-columns: 1fr !important; */
    margin: auto;
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
    padding: 0 !important;
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

export const DivIcon = styled.div`
  margin-left: 25px;
  @media (max-width: 850px) {
    margin-left: 0;
  }
`;
export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 2rem;
  row-gap: 200px;
`;

const variants = {
  primary: css`
    background: ${({ theme }) => theme.colors.green};
    color: ${({ theme }) => theme.colors.black};
    border: 1px solid ${({ theme }) => theme.colors.color2};

    &:hover {
      opacity: 0.7;
    }
  `,
  secondary: css`
    background: ${({ theme }) => theme.colors.color2};
    color: ${({ theme }) => theme.colors.green};
    border: 1px solid ${({ theme }) => theme.colors.color2};

    &:hover {
      opacity: 0.7;
    }
  `,
  gray: css`
    background: ${({ theme }) => theme.colors.gris};
    color: ${({ theme }) => theme.colors.black};
    border: 1px solid ${({ theme }) => theme.colors.gris};

    &:hover {
      opacity: 0.7;
    }
  `
};

export const ContainerButton = styled.button<ButtonProps>`
  ${({ theme, variant, color, background }) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 2.5rem 1.25rem;
    gap: 10px;
    background: ${background || theme.colors.green};
    width: 100%;
    color: ${color || theme.colors.black};
    border-radius: ${({ theme }) => theme.border.radius};
    height: 2.9375rem;
    transition: color 200ms;
    border: 1px solid ${({ theme }) => theme.colors.green};
    cursor: pointer;
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 22px;
    width: 360px;
    &:hover {
      opacity: 0.7;
    }

    &:disabled {
      cursor: not-allowed;
    }

    ${variant && variants[variant]};

    @media (max-width: 650px) {
      width: 260px;
    }
  `}
`;
