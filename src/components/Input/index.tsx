import { useState } from 'react';
import {Mask,MaskInputProps} from 'react-native-mask-input';
import { Container, InputText } from './styles';

export type IProps = MaskInputProps & {
  value?: string;
  mask:Mask;
}

export function Input({ value,mask, ...rest }: IProps) {
  const [isFocused, setIsFocused] = useState(false);

  function handleInputFocus() {
    setIsFocused(true);
  }

  function handleInputBlur() {
    setIsFocused(false);
  }

  return (
    <Container >
      
      <InputText
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        isFocused={isFocused}
        autoCorrect={false}
        autoCapitalize="none"
        value={value}
        mask={mask}
        {...rest}
      />
      
    </Container>
  );
}