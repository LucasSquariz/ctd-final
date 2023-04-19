import styled, { css } from 'styled-components';

export const ContainerPage = styled.div`
  height: 100vh;
  display: flex;     
  ${({ theme }) => css`
    background-color: ${theme.colors.background};
  `};
`;

export const Title = styled.h1`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.large};
    font-weight: ${theme.font.bold};
    color: ${theme.colors.white};
  `};
`;

export const ContainerLogin = styled.form`
  ${({ theme }) => css`
    font-family: ${theme.font.family};
  `}
  margin: auto;
  display: flex;
  flex-direction: column;
  row-gap: 20px;
  width: 100%;
  max-width: 320px;
  height: 332px;
  text-align: center;
`;

export const MessageError = styled.span`
  font-style: italic;
  ${({ theme }) => css`
    color: ${theme.colors.danger};
  `}
`;
