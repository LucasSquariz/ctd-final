import styled, { css } from 'styled-components';
import { ActivePaginationPath } from './types';

export const SearchBarLabel = styled.label<ActivePaginationPath>`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 2rem;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
  ${({ theme, activePath }) => css`
    background-color: ${theme.colors.white};
    border-radius: ${theme.border.radius};
    display: ${activePath ? '' : 'none'};
  `}
`;

export const SearchContainer = styled.div<ActivePaginationPath>`
  display: flex;
  justify-content: space-between;
  margin-top: 2rem;
  ${({ activePath }) => css`
    display: ${activePath ? '' : 'none'};
  `}
`;

export const SearchBarLabelActivity = styled.label`
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

export const ActivityCards = styled.div`
  border-bottom: 1px solid black;
  text-decoration: none;
  margin: 1rem;
  padding-bottom: 0.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;  
`;

export const ActivityCardsDescriptionAndImg = styled.div`
  margin-left: 0.5rem;
  display: flex;
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xxsmall};
    font-weight: ${theme.font.light};
  `}
`;

export const ActivityCardsDescription = styled.div`
  margin-left: 1rem;
  display: flex;
  align-items: center;
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xxsmall};
    font-weight: ${theme.font.light};
  `}
`;

export const ActivityCardsCashAndDate = styled.div``;

export const ActivityCardsCash = styled.h1`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xsmall};
    font-weight: ${theme.font.light};
  `}
`;

export const ActivityCardsDate = styled.h1`
  display: flex;
  justify-content: flex-end;
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xxsmall};
    font-weight: ${theme.font.light};
    color: ${theme.colors.lightGray};
  `}
`;

export const MoreActivities = styled.div<ActivePaginationPath>`
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  ${({ activePath }) => css`
    display: ${activePath ? '' : 'none'};
  `}
`;

export const MoreActivitiesTitle = styled.div`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xsmall};
  `}
`;

export const PaginationContainer = styled.div``;
