import styled, { css } from 'styled-components';

export const ContainerPage = styled.div`
  height: 100vh;    
  display: grid;
  grid-template-columns: 4fr 8fr;
  
  ${({ theme }) => css`
    background-color: ${theme.colors.gallery};
  `};
`;

export const Content = styled.div`
  height: 100%; 
  ${({ theme }) => css`
    background-color: ${theme.colors.gallery};
    color: ${theme.colors.black};
  `};
`;

export const ContentContainer = styled.div`
  margin: 10em 5em;
  ${({ theme }) => css`
    background-color: ${theme.colors.gallery};
    color: ${theme.colors.black};
  `};
`;

export const SearchContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 2rem;
`;

export const SearchBarLabel = styled.label`
  display: flex;
  width: 65rem;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
  ${({ theme }) => css`
    background-color: ${theme.colors.white};
    border-radius: ${theme.border.radius};
  `}
`;

export const FilterContainer = styled.div`
  width: 12rem;
  height: 5rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-left: 1rem;
  cursor: pointer;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xsmall};
    font-weight: ${theme.font.light};
    font-weight: ${theme.font.bold};
    background-color: ${theme.colors.green};
    border-radius: ${theme.border.radius};
  `}
`;

export const FilterButton = styled.button`
  border: none;
  cursor: pointer;
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xsmall};
    font-weight: ${theme.font.light};
    font-weight: ${theme.font.bold};
    background-color: ${theme.colors.green};
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
  display: flex;
  justify-content: center;
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xsmall};
  `}
`;
