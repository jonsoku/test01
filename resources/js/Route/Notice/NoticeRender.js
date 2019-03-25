import React, { Component } from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import NoticeCommentsRender from './NoticeCommentsRender';

const Container = styled.div`
    width: 1100px;
    margin: 0 auto;
`;

const Ul = styled.ul`
    margin : 2rem auto 0;
`;

const Li = styled.li`

    background-color: var(--white);
    padding : 1rem;
    &:nth-child(1){
        border-top: 1px solid #eaeaea;
        border-bottom: 1px solid #eaeaea;
        p{
            margin: 0.3rem 0;
        }
        span{
            display:inline-block;
            width:4rem;
            font-weight: 900;
            text-transform: uppercase;
        }
    }

    &:nth-child(2){
        border-top: 1px solid #eaeaea;
        border-bottom: 1px solid #eaeaea;
        margin-top: 1rem;
        height: 50vh;
    }
`;

const ButtonBox = styled.div`
    width: 80%;
    margin: 0 auto;
    text-align:center;

`;

const CommentFormBox = styled.div``;
const CommentForm = styled.form`
    textarea{
        width: 100%;
        border: 1px solid #eaeaea;
        height: 5vh;
    }
    button{
        width: 100%;
        border : 1px solid #eaeaea;
        padding: .3rem 0;
    }
`;



export default class NoticeRender extends Component {

    render() {
        return (
            <Container>
                <Ul>
                    <Li>
                        <p><span>date</span>{this.props.notice.created_at}</p>
                        <p><span>name</span>{this.props.notice.user && this.props.notice.user.name}</p>
                        <p><span>title</span>{this.props.notice.title}</p>
                    </Li>
                    <Li>
                        <span>{this.props.notice.description}</span>
                    </Li>
                </Ul>
                <ButtonBox>
                    <button onClick={()=>this.props.onDelete(this.props.notice.id)}>Delete</button>
                    <Link to={`/notices/${this.props.notice.id}/edit`}>Edit</Link>
                </ButtonBox>

                <CommentFormBox>
                    <CommentForm onSubmit={this.props.onSubmit}>
                        <textarea
                        onChange={this.props.onChange}
                        value={this.props.body}
                        placeholder="댓글을 작성해주세요."
                        />
                        <button type="submit">댓글작성</button>
                    </CommentForm>
                </CommentFormBox>

                <NoticeCommentsRender noticeComments={this.props.noticeComments}/>
            </Container>
        )
    }
}
