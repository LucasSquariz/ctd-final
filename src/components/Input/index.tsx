import React, { useMemo, useState } from 'react';
import { useTheme } from 'styled-components';
import { IconContext } from 'react-icons';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { Controller } from 'react-hook-form';

import * as S from './styles';
import { InputProps } from './types';

export function Input({
  name,
  label,
  typePassword,
  type,
  control,
  disabled,
  icon: Icon,
  ...rest
}: InputProps) {
  const [isPasswordHidden, setIsPasswordHidden] = useState(true);
  const { colors } = useTheme();

  const inputType = isPasswordHidden ? 'password' : 'text';

  const handleClick = () => {
    setIsPasswordHidden(prevState => !prevState);
  };

  const iconContextProviderValue = useMemo(
    () => ({
      color: colors.gray[400]
    }),
    [colors.gray]
  );
  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange, onBlur, value, ref }, fieldState: { error, isDirty, isTouched } }) => (
        <S.Container>
          {label && <S.Label htmlFor={name}>{label}</S.Label>}

          <S.ContainerInput
            isDisabled={disabled}
            isFocused={isTouched}
            isFilled={isDirty}
            hasError={!!error}
            aria-label={`${name}-container`}
            typePassword={typePassword}
          >
            <S.Input
              type={type || inputType}
              id={name}
              hasError={!!error}
              disabled={disabled}
              onChange={onChange} 
              onBlur={onBlur}             
              {...rest}                            
            />

            {Icon && (
              <S.IconContainer>
                <Icon />
              </S.IconContainer>
            )}

            {typePassword && (
              <S.HidePasswordButtonContainer>
                <button type="button" onClick={handleClick}>
                  <IconContext.Provider value={iconContextProviderValue}>
                    {isPasswordHidden ? (
                      <AiOutlineEyeInvisible
                        color={colors.gray[200]}
                        size={16}
                      />
                    ) : (
                      <AiOutlineEye color={colors.gray[200]} size={16} />
                    )}
                  </IconContext.Provider>
                </button>
              </S.HidePasswordButtonContainer>
            )}
          </S.ContainerInput>

          {error && <S.Error>{error.message}</S.Error>}
        </S.Container>
      )}
    />
  );
}
