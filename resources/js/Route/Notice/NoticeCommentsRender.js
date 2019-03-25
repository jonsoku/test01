import React, { Component } from 'react';
import styled from 'styled-components';

const Container = styled.div`
    background-color: #D1DDDB ;
`;

const Ul = styled.ul`
    padding: 1rem;
    margin: .5rem 0;
`;
const Li = styled.li`
    margin: .5rem 0;
`;

const CommentName = styled.span`
    font-weight: 900;
`;
const CommentCreated = styled.span`
    margin-left: .5rem;
    font-size: .5rem;
    font-style: italic;
`;
const CommentBody = styled.span`
    margin-top: 1rem;
    letter-spacing: 1px;
`;

const ButtonBox = styled.div`
    padding: 0 1rem 1rem 1rem;
`;

export default class NoticeCommentsRender extends Component {
    render() {
        return this.props.noticeComments.map(noticeComment => (
            <Container key={noticeComment.id}>
                <Ul>
                    <Li><CommentName>{noticeComment.user.name}</CommentName><CommentCreated>{noticeComment.created_at}</CommentCreated></Li>
                    <Li><CommentBody>{noticeComment.body}</CommentBody></Li>
                </Ul>
                <ButtonBox>
                    <button>수정</button>
                    <button>삭제</button>
                </ButtonBox>
            </Container>
        ))
    }
}
