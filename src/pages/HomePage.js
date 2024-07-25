import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
`;

function DetailPage() {
  return (
    <Container>
        <h1>Hello World!</h1>
    </Container>
  );
}

export default DetailPage;
