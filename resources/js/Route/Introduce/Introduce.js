import React, { Component } from 'react'
import Academy from './Academy';
import Lecture from './Lecture';
import Teacher from './Teacher';
import styled from 'styled-components';

const Container = styled.div`
    display:grid;
`;

export default class Introduce extends Component {
    render() {
        return (
            <Container>
                <Academy />
                <Teacher />
                <Lecture />
            </Container>
        )
    }
}
