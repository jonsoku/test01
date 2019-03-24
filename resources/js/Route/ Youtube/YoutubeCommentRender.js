import React, { Component } from 'react'
import styled from 'styled-components';
const Container = styled.div`
    margin-top: 3rem;
    background-color :#fff;
`;

const Box = styled.div`
    background-color :#fff;
    padding: 1.5rem;
`;

const Body = styled.p`
    font-size: 1.2rem;
    font-weight: 900;
    margin-bottom: 0.5rem;
`;

const UserName = styled.p`
    &::before{
        content : '작성자 : '
    }
    font-size: 0.8rem;
    margin-bottom: 0.5rem;
`;

const Delete = styled.button`
    margin: 0.3rem;
    background-color: red;
    color: #fff;
    border: 0;
`;

const Edit = styled.button`
    margin: 0.3rem;
    background-color: blue;
    color: #fff;
    border : 0;
`;

export default class YoutubeCommentRender extends Component {
    render() {
        return this.props.youtubeComments.map(youtubeComment => (
            <Container key={youtubeComment.id}>
                <Box>
                    <Body>{youtubeComment.body}</Body>
                    <UserName>{youtubeComment.user.name}</UserName>
                    <Edit>댓글 수정</Edit>
                    <Delete onClick={()=>this.props.onDelete(youtubeComment.id)}>댓글 삭제</Delete>
                </Box>
            </Container>

        ))
    }
}