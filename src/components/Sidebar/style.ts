import styled, { css } from 'styled-components';
import { StyledActivePath } from './types';

export const NavBar = styled.div`
  height: 100%;
  max-width: 276px;
  flex-wrap: nowrap;
  ${({ theme }) => css`
    background-color: ${theme.colors.green};
    color: ${theme.colors.black};
  `};
  @media (max-width: 600px) {
    display: none;
  }
`;

export const NavBarContainer = styled.div`
  padding-top: 100px;
  margin-left: 20px;
  width: 100%;
  display: flex;
  flex-direction: column;
  row-gap: 8px;
`;

export const LinksNavBar = styled.h1<StyledActivePath>`
  ${({ theme, activePath }) => css`
    font-size: ${theme.font.sizes.xsmall};
    cursor: pointer;
    font-weight: ${activePath ? 'none' : theme.font.light};
  `};
`;

export const EndSessionLinkNavBar = styled.h1`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xsmall};
    color: ${theme.colors.gray};
    cursor: pointer;
  `};
`;
