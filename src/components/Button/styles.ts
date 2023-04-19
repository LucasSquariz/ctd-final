import styled, { css } from 'styled-components';

import { ButtonProps } from './types';

const variants = {
  primary: css`
    background: ${({ theme }) => theme.colors.green};
    color: ${({ theme }) => theme.colors.black};
    border: 1px solid ${({ theme }) => theme.colors.color2};
    max-width: 320px;

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

export const Container = styled.button<ButtonProps>`
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
  `}
`;
