import { TouchableOpacityProps } from 'react-native';

import { ContainerButton, TitleButton } from './styles';

interface IProps extends TouchableOpacityProps {
  title: string;
}

export function Button({title, ...rest}:IProps){
  return (
    <ContainerButton {...rest}>
      <TitleButton>
        {title}
      </TitleButton>
    </ContainerButton>
  )
}