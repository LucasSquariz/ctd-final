import styled, { css } from 'styled-components';
import { ActivePaginationPath } from './types';

export const ActivityCards = styled.div`
  border-bottom: 1px solid black;
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
