// Loading.js
import React from 'react';
import Lottie from 'react-lottie';
import loading from '../../assets/lottie/loading.json';
import { DimDiv } from './div'; 
import styled from 'styled-components';

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: loading,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice"
  }
};

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 10000;
`;

const LottieContainer = styled.div`
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  z-index: 999;
`;

const Loading = () => {
  return (
    <Container>
      <DimDiv/>
      <LottieContainer>
        <Lottie 
          isClickToPauseDisabled={true}
          options={defaultOptions}
          height={150}
          width={150}
        />
      </LottieContainer>
    </Container>
    );
}

export default Loading;