import { InputHTMLAttributes } from 'react';
import { FieldError, Control } from 'react-hook-form';
import { IconBaseProps } from 'react-icons';

export type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  name: string;
  label?: string;
  error?: FieldError;
  typePassword?: boolean;
  control: Control<any, any>;
  icon?: React.ComponentType<IconBaseProps>;
};

export type StyledContainerProps = {
  isFocused?: boolean;
  isFilled?: boolean;
  hasError: boolean;
  isDisabled?: boolean;
  typePassword?: boolean;
};
