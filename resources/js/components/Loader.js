import React, { Component } from 'react';
import styled from 'styled-components';

const Container = styled.div`
    width: 100vw;
    height: 80vh;
    line-height : 80vh;
    text-align: center;
    span{
        font-size: 5rem;
    }
`;

class Loader extends Component {
  render() {
    return (
      <Container>
        <span>loading... ⏰</span>
      </Container>
    )
  }
}
export default Loader;
