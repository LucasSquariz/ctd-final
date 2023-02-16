import { ButtonHTMLAttributes } from 'react';

export type ButtonVariants = 'primary' | 'secondary' | 'gray';

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariants;
  background?: string;
  color?: string;
  loading?: boolean;
};
