import styled, { css } from 'styled-components';

export const ContainerPage = styled.div`
  height: 100vh;
  display: grid;
  grid-template-columns: 3fr 12fr;
  ${({ theme }) => css`
    background-color: ${theme.colors.gallery};
  `};
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: auto;
  height: 100vh;
  margin: 8rem 4em 0 4em;
  ${({ theme }) => css`
    background-color: ${theme.colors.gallery};
    color: ${theme.colors.black};
  `};
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 1em 6em;
  border-bottom: 1px solid white;
  ${({ theme }) => css`
    background-color: ${theme.colors.color1};
    color: ${theme.colors.white};
    border-radius: ${theme.border.radius};
  `};
`;

export const DateAprovalContainer = styled.div`
  width: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid white;
`;

export const AprovalContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const AprovalTitle = styled.h1`
  padding: 0.45em;
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.medium};
    color: ${theme.colors.green};
  `};
`;

export const DateContainer = styled.div``;

export const DateTitle = styled.h1`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xxsmall};
  `};
`;

export const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export const TransferAmountContainer = styled.div`
  padding: 1em 0;
`;

export const TransferAmountTitle = styled.h1`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small};
  `};
`;

export const TransferAmount = styled.h1`
  ${({ theme }) => css`
    color: ${theme.colors.green};
    font-weight: ${theme.font.bold};
    font-size: ${theme.font.sizes.large};
  `};
`;

export const TransferDestinationContainer = styled.div`
  padding: 1em 0;
`;
export const TransferDestinationTitle = styled.h1`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small};
  `};
`;
export const TransferDestination = styled.h1`
  ${({ theme }) => css`
    color: ${theme.colors.green};
    font-weight: ${theme.font.bold};
    font-size: ${theme.font.sizes.large};
  `};
`;

export const TransferNumberContainer = styled.div`
  padding: 1em 0;
`;

export const TransferNumberTitle = styled.h1`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small};
  `};
`;
export const TransferNumber = styled.h1`
  ${({ theme }) => css`
    color: ${theme.colors.green};
    font-weight: ${theme.font.light};
    font-size: ${theme.font.sizes.large};
  `};
`;

export const ButtonContainer = styled.div`
  display: grid;
  grid-template-columns: 10fr 1fr 1fr;
  margin-top: 2em;  
`;

export const ButtonInicio = styled.button`
  width: 12em;
  height: 5rem;
  border: none;
  cursor: pointer;
  white-space: nowrap;
  margin-right: 2em;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xsmall};
    font-weight: ${theme.font.bold};
    background-color: ${theme.colors.gris};
    border-radius: ${theme.border.radius};
  `}
`;

export const ButtonPaymentVoucher = styled.button`
  width: 12em;
  height: 5rem;
  border: none;
  cursor: pointer;
  white-space: nowrap;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xsmall};
    font-weight: ${theme.font.bold};
    background-color: ${theme.colors.green};
    border-radius: ${theme.border.radius};
  `}
`;
