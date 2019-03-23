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
    left:-15px;
    top:-15px;
    display:inline-block;
    background-color: black;
    color: #fff;
    width: 3rem;
    height: 3rem;
    text-align:center;
    line-height : 3rem;
    border-radius: 50%;
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



const Description = styled.span``;

export default class YoutubeShow extends Component {

    constructor(props){
        super(props);
        this.state = {
            youtube : [],
            error : null,
            loading : true
        }
        this.renderYoutube = this.renderYoutube.bind(this)
    }


    renderYoutube(){
        console.log(this.state.youtube.user, 'renderyoutube()')
        return (
            <Box key={this.state.youtube.id}>
                <Id>#{this.state.youtube.id}</Id>
                <Title>{this.state.youtube.title}</Title>
                <Info>
                    <Author>{this.state.youtube.user.name}</Author><span>{this.state.youtube.created_at}</span>
                </Info>
                <div className="player-wrapper">
                    <Player url={`${this.state.youtube.url}` } width="100%" height="100%" controls={true} className="react-player"/>
                </div>
                <DescriptionBox>
                    <Description>{this.state.youtube.description}</Description>
                </DescriptionBox>
            </Box>
        )
    }

    async getYoutube(){
        try{
            return await Axios.get(`/youtubes/${this.props.match.params.id}`).then(response => this.setState({
                youtube : response.data.youtube,
            }))
        }catch{
            this.setState({
                error : 'YoutubeShow error'
            })
        }finally{
            this.setState({
                loading : false
            })
        }
    }

    componentDidMount(){
        this.getYoutube();
    }

    render() {
        return (
        <div>
            {this.renderYoutube()}
        </div>
        )
    }
}
