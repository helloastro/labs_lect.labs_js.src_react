import React from 'react';
import './style.css';
import styled from 'styled-components';

const SimpleButton = styled.button`
  color: white;
  background-color: green;
`;
const LargeButton = styled(SimpleButton)`
  font-size: 50px;
`;
const ReactButton = (props) => {
  console.log('props', props);
  return <button className={props.className}>{props.children}</button>;
};
const ReactLargeButton = styled(ReactButton)`
  font-size: 50px;
`;
const PrimaryButton = styled.button`
  color: ${(props) => (props.primary ? 'white' : 'black')};
  background-color: ${(props) => (props.primary ? 'blue' : 'gray')};
`;

export default function App() {
  return (
    <div>
      <SimpleButton>Simple</SimpleButton>
      <LargeButton>Large</LargeButton>
      <br></br>
      <ReactButton>React</ReactButton>
      <ReactLargeButton>React Large</ReactLargeButton>
      <br></br>
      <PrimaryButton>Normal</PrimaryButton>
      <PrimaryButton primary>Primary</PrimaryButton>
    </div>
  );
}
