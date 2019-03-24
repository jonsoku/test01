import React, { Component } from 'react';
import Player from 'react-player';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import Axios from 'axios';

const Box = styled.div`
    position: relative;
    padding: 2rem 3rem;
    position:relative;
    background: #F2F2F2;
    transition: all 0.6s;
    box-shadow : 6px 6px 6px #DBDBDB;
    &:hover{
        transform:scale(1.02)
    }
`;
const Id = styled.span`
    position : absolute;
    right:-25px;
    top:1rem;
    display:inline-block;
    background-color: black;
    color: #fff;
    width: 3rem;
    height: 3rem;
    text-align:center;
    line-height : 3rem;
    box-shadow : 6px 6px 6px #DBDBDB;
`;

const Comments = styled.span`
    position : absolute;
    right:-25px;
    top:5rem;
    display:inline-block;
    background-color: #FFD034;
    color: #fff;
    width: 3rem;
    height: 3rem;
    text-align:center;
    line-height : 3rem;
    box-shadow : 6px 6px 6px #DBDBDB;
`;

const Title = styled.span`
    font-weight : 900;
    font-size : 3rem;
`;

const Info = styled.div`
    margin: 1rem 0;
    text-align: right;

    span{
        font-size: 0.8rem;
        &::before{
            content : 'Created_at : '
        }
    }

`;

const Author = styled.span`
    font-size: 0.8rem;
    &::before{
        content : 'Author : '
    }
    margin-right: 1rem;
`;

const DescriptionBox = styled.div`
    width: 100%;
    height : 5vh;
    background-color: #EAEAEA;
    margin-top: 1.5rem;
    text-align:center;
    line-height : 5vh;
`;

const ShowBox = styled.div`
    margin-top: 1.5rem;
    a{
        width: 100%;
        border:0;
        cursor:pointer;
        transition: all 0.3s;
        text-transform :uppercase;
        &:hover{
            color:#fff;
            background-color: #434343;
        }
    }
`;

const ButtonBox = styled.div`
    margin-top: 1.5rem;
    button{
        width: 100%;
        border:0;
        cursor:pointer;
        transition: all 0.3s;
        text-transform :uppercase;
        &:hover{
            color:#fff;
            background-color: #434343;
        }
    }
`;

const Description = styled.span``;




export default class YoutubeRender extends Component {

    constructor(props){
        super(props);
        this.state = {
            title : '',
            url : '',
            description : '',
        }
    }
    render() {
        return this.props.youtubes.map(youtube => (
            <Box key={youtube.id}>
                <Id>#{youtube.id}</Id>
                <Comments>{youtube.youtube_comments.length}</Comments>
                <Title>{youtube.title.length > 15 ? youtube.title.substring(0,15)+'...' : youtube.title}</Title>
                <Info>
                    <Author>{youtube.user.name}</Author><span>{youtube.created_at}</span>
                </Info>
                <div className="player-wrapper">
                    <Player url={`${youtube.url}` } width="100%" height="100%" controls={true} className="react-player"/>
                </div>
                <DescriptionBox>
                    <Description>{youtube.description.length > 28 ? youtube.description.substring(0,28)+'...' : youtube.description}</Description>
                </DescriptionBox>
                <ShowBox>
                    <Link to={`/youtubes/${youtube.id}`}>show</Link>
                </ShowBox>
                <ButtonBox>
                    <button onClick={()=>this.props.onDelete(youtube.id)}>delete</button>
                </ButtonBox>
            </Box>
        ))
    }
}
