import React from 'react';
import styled from 'styled-components';
import LeftProfileBar from '../components/LeftProfileBar'
import RightProfileBar from '../components/RightProfileBar';
import StimulationSheet from '../components/stimulationSheet';

const Container = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
`;

function DetailPage() {
  return (
    <Container>
      <LeftProfileBar />
      <StimulationSheet />
      <RightProfileBar />
    </Container>
  );
}

export default DetailPage;
