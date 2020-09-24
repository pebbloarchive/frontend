import React from 'react';
import { Text, TextInput, View } from 'react-native';
import styled from 'styled-components/native'


export default function App() {
  return (
            <Container>
                <Titlebar>
                    <Title>Share your story on</Title>
                    <Name>Pebblo</Name>
                </Titlebar>

                <Footer>
                  <Test>Already have an account?</Test>
                </Footer>
            </Container>

  );
}

const Container = styled.View`
    flex: 1;
    background-color: white;
    padding-top: 40px;
`;

const Titlebar = styled.View`
    width: 100%;
    margin-top: 50px;
    padding-left: 40px;
`;

const Title = styled.Text`
    font-size: 20px;
    font-weight: 600;
    color: #b8bece;
`;

const Name = styled.Text`
    font-size: 70px;
    color: #3c4560;
    font-weight: bold;
    margin-top: -10px;
`;

const Footer = styled.View`
  flex: 1;
  position: absolute;
  bottom: 0;
  left: 0;
  height: 100px;
  width: 100%;
  align-items: center;
  justify-content: center;
`;

const Test = styled.Text`
  font-size: 14px;
  color: #717171;
  padding: 14px 16px;
  background-color: #f8f8f8;
  border-radius: 100px;
`;