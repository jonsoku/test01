import React, { Component } from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import Axios from 'axios';

const Container = styled.div`
    width: 1100px;
    margin: 0 auto;
`;

const Ul = styled.ul`
    width: 80%;
    margin : 2rem auto 0;
    padding: 2rem;

`;

const Li = styled.li`

    background-color: var(--white);
    padding : 1rem;
    &:nth-child(1){
        border-top: 1px solid #eaeaea;
        border-bottom: 1px solid #eaeaea;
        p{
            margin: 0.3rem 0;
            input{
                width: 90%;
                height : 30px;
                border: #eaeaea;
            }

        }
        span{
            display:inline-block;
            width:10%;
            font-weight: 900;
            text-transform: uppercase;
        }
    }

    &:nth-child(2){
        border-top: 1px solid #eaeaea;
        border-bottom: 1px solid #eaeaea;
        margin-top: 1rem;

        textarea{
            width: 100%;
            height : 50vh;
            border: #eaeaea;
        }
    }
`;

const ButtonBox = styled.div`
    width: 80%;
    margin: 0 auto;
    text-align:center;
`;


export default class NoticeCreate extends Component {

    constructor(props){
        super(props);
        this.state = {
            title : '',
            description : '',
            error : null,
            loading : true
        }
        this.handleChange1 = this.handleChange1.bind(this);
        this.handleChange2 = this.handleChange2.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange1(e){
        this.setState({
            title : e.target.value
        });
    }

    handleChange2(e){
        this.setState({
            description : e.target.value
        })
    }
    async handleSubmit(e){
        e.preventDefault();
        return await Axios.post(`/notices`, {
            title : this.state.title,
            description : this.state.description
        }).then(
            this.setState({
                loading : false
            }),
            this.props.history.push('/notices')

        )
    }

    render() {
        console.log(this.state)
        return (
            <Container>
                <form onSubmit={this.handleSubmit}>
                <Ul>
                    <Li>
                        <p>
                            <span>title</span>
                            <input
                                onChange={this.handleChange1}
                                value={this.state.title}
                                placeholder="제목을 입력하세요."
                                required
                            />
                        </p>
                    </Li>
                    <Li>
                        <span>
                            <textarea
                                onChange={this.handleChange2}
                                value={this.state.description}
                                placeholder="본문을 입력하세요."
                                required
                            />
                        </span>
                    </Li>
                </Ul>
                <ButtonBox>
                    <button type="submit">수정완료</button>
                </ButtonBox>
                </form>
            </Container>
        )
    }
}
