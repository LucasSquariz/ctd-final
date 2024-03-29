import styled, { css } from 'styled-components';

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

export const Content = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.gallery};
    color: ${theme.colors.black};
  `};
`;

export const ContentContainer = styled.div`
  margin: 104px 80px;
  ${({ theme }) => css`
    background-color: ${theme.colors.gallery};
    color: ${theme.colors.black};
  `};

  @media (max-width: 600px) {
    margin: 104px 20px 0 20px;
  }
`;

export const ContentMoneyContainer = styled.div`
  height: 230px;
  display: flex;
  justify-content: space-between;
  flex-direction: column-reverse;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  ${({ theme }) => css`
    background-color: ${theme.colors.color1};
    color: ${theme.colors.white};
    border-radius: ${theme.border.radius};
  `};
`;

export const MoneyContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  margin: 0 3rem 3rem 3rem;
`;

export const MoneyTextContainer = styled.h1`
  display: flex;
  align-items: flex-end;
  padding-bottom: 1rem;
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xxsmall};
    font-weight: ${theme.font.bold};
  `}
`;
export const MoneyValueContainer = styled.h1`
  display: flex;
  align-items: flex-end;
  padding: 1.5vh;
  height: 74px;
  border-radius: 100px;
  max-width: 285px;
  width: 100%;
  ${({ theme }) => css`
    border: 1px solid ${theme.colors.green};
    font-size: ${theme.font.sizes.xlarge};
    font-weight: ${theme.font.bold};
  `}
`;

export const CardOptionsContainer = styled.div`
  display: flex;
  margin: 2rem 4rem 0 0;
  justify-content: end;
`;

export const CardOptionsText = styled.h1`
  color: white;
  ${({ theme }) => css`
    margin-left: 1rem;
    font-size: ${theme.font.sizes.xxsmall};
    font-weight: ${theme.font.light};
  `}
`;

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 2rem;
  row-gap: 200px;

  @media (max-width: 600px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    row-gap: 20px;
  }
`;

export const Button = styled.button`
  width: 48%;
  height: 5rem;
  align-items: center;
  justify-content: center;
  border: none;
  cursor: pointer;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xsmall};
    font-weight: ${theme.font.bold};
    background-color: ${theme.colors.green};
    border-radius: ${theme.border.radius};
  `}

  @media (max-width: 600px) {
    width: 100%;
  }
`;

export const SearchBarLabel = styled.label`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 2rem;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
  ${({ theme }) => css`
    background-color: ${theme.colors.white};
    border-radius: ${theme.border.radius};
  `}
`;

export const SearchBarInput = styled.input`
  padding: 1.25rem;
  border: none;
  width: 100%;
  ${({ theme }) => css`
    color: ${theme.colors.gray[400]};
    border-radius: ${theme.border.radius};
  `}
`;

export const ActivityContainer = styled.div`
  background-color: white;
  height: 100%;
  margin-top: 2rem;
  padding: 2rem;
  flex-wrap: nowrap;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
  ${({ theme }) => css`
    border-radius: ${theme.border.radius};
  `}
`;

export const ActivityTitle = styled.h1`
  border-bottom: 1px solid black;
  margin: 1rem;
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xxsmall};
  `}
`;

export const MoreActivities = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1rem;
`;

export const MoreActivitiesTitle = styled.h1`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xsmall};
  `}
`;
