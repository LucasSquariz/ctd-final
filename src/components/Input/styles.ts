import styled, { css } from 'styled-components';

import { StyledContainerProps } from './types';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;
export const ContainerInput = styled.div<StyledContainerProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 25px 20px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
  background: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.gray[400]};
  border-radius: ${({ theme }) => theme.border.radius};
  width: 100%;
  transition: all 100ms;

  ${({ isFocused }) =>
    isFocused &&
    css`
      border: 1px solid ${({ theme }) => theme.colors.color3};
    `}
  ${({ isFilled }) =>
    isFilled &&
    css`
      border: 1px solid ${({ theme }) => theme.colors.color1};
    `}
  ${({ hasError }) =>
    hasError &&
    css`
      border: 1px solid ${({ theme }) => theme.colors.danger};
    `}

    ${({ isDisabled }) =>
    isDisabled &&
    css`
      background: #dfdae6;
      color: ${({ theme }) => theme.colors.gray[300]};
    `}
`;

export const Input = styled.input<StyledContainerProps>`
  flex: 1;
  background: transparent;
  border: none;
  height: 100%;
  width: 100%;
  outline: none;
  color: ${({ theme }) => theme.colors.gray[400]};
  &::placeholder {
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
  }

  ${({ hasError, theme }) =>
    hasError &&
    css`
      &::placeholder {
        color: ${theme.colors.danger};
      }
    `}
`;

export const Label = styled.label`
  color: ${({ theme }) => theme.colors.black};
  font-weight: 700;
  line-height: 150%;
  width: 100%;
  display: flex;
  justify-content: flex-start !important;
  align-items: center;
`;

export const IconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 1.4375rem;
`;

export const HidePasswordButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  border-radius: 0 0.625rem 0.625rem 0 !important;
  height: 1.125rem;
  button {
    background: none;
    border: none;
    width: 100%;
    margin: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    svg {
      margin-right: 0 !important;
    }
  }
`;

export const Error = styled.span`
  color: ${({ theme }) => theme.colors.danger};
  font-family: 'Open Sans';
  font-style: italic;
  font-weight: 400;
  font-size: 15px;
  line-height: 140.62%;
  margin-top: 20px;
`;
