import styled from 'styled-components/native';

export const ContainerButton = styled.TouchableOpacity`
  width: 100%;
  padding: 19px;
  align-items: center;
  justify-content: center;
  background-color: ${(props)=>props.theme.colors.main};
  margin-top:15px;
  border-radius:5px;
`;

export const TitleButton = styled.Text`
  font-size: 15px;
  font-family: ${(props)=>props.theme.fonts.heading};
  color: ${(props)=>props.theme.colors.background_secondary};
`;