import MaskInput from 'react-native-mask-input'; 
import styled from 'styled-components/native';

interface Props {
  isFocused: boolean;
}

export const Container = styled.View`
  height:50px;
  margin-bottom: 10px;
`;

export const InputText = styled(MaskInput)<Props>`
  flex: 1;
  background-color:${(props)=>props.theme.colors.background_secondary};
  
  font-family: ${(props)=>props.theme.fonts.body};
  color: ${(props)=>props.theme.colors.text};
  
  height:50px;
  padding: 0 15px;

  border-bottom-width:1px;
  border-color:${({theme,isFocused})=>
    (isFocused) ? theme.colors.main : theme.colors.text_detail};
`;