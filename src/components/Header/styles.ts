import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  margin-top: 32px;
`;

export const Title = styled.Text`
  font-size: 40px;
  font-family: ${(props)=>props.theme.fonts.heading};
  color: ${(props)=>props.theme.colors.title};
  text-align: center;

  margin-top: 20px;
`;

export const Subtitle = styled.Text`
  font-size: 18px;
  font-family: ${(props)=>props.theme.fonts.heading};
  color: ${(props)=>props.theme.colors.text};
  margin-top: 20px;
  line-height: 30px;
  `;