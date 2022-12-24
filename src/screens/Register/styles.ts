import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color:${(props)=>props.theme.colors.background_primary};

  padding: 24px;
`;

export const Form = styled.View`
  width: 100%;
  margin-top: 64px;
  margin-bottom: 10px;
`;