import React, { Component } from 'react';
import Player from 'react-player';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import Axios from 'axios';
import YoutubeCommentRender from './YoutubeCommentRender';

const Box = styled.div`
    width:60%;
    margin: 0 auto;
    position: relative;
    padding: 2rem 3rem;
    position:relative;
    background: #F2F2F2;
    transition: all 0.6s;
    box-shadow : 6px 6px 6px #DBDBDB;
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
            loading : true,
            youtubeComments : [],
            body : ''
        };
        this.renderYoutube = this.renderYoutube.bind(this);
        this.handleChange1= this.handleChange1.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    }

    handleChange1(e){
        this.setState({
            body : e.target.value
        })
    }
    handleSubmit(e){
        e.preventDefault();
        Axios.post(`/youtubes/${this.state.youtube.id}/youtubeComments`,{
            body : this.state.body
        }).then(
            this.getYoutube()
        )
    }
    async handleDelete(id){
        try{
            return await Axios.delete(`/youtubes/${this.state.youtube.id}/youtubeComments/${id}`)
        }catch{

        }finally{
            this.getYoutube();
        }
    }


    renderYoutube(){
        return (
            <Box key={this.state.youtube.id}>
                <Id>#{this.state.youtube.id}</Id>
                <Title>{this.state.youtube.title}</Title>
                <Info>
                    <Author>{this.state.youtube.user && this.state.youtube.user.name}</Author><span>{this.state.youtube.created_at}</span>
                </Info>
                <div className="player-wrapper">
                    <Player url={`${this.state.youtube.url}` } width="100%" height="100%" controls={true} className="react-player"/>
                </div>
                <DescriptionBox>
                    <Description>{this.state.youtube.description}</Description>
                </DescriptionBox>

                <div>
                    <form onSubmit={this.handleSubmit}>
                        <textarea
                            onChange={this.handleChange1}
                            value={this.state.body}
                        />
                        <button type="submit">댓글작성</button>
                    </form>
                </div>

                <YoutubeCommentRender
                youtubeComments={this.state.youtubeComments}
                onDelete={this.handleDelete}
                />

            </Box>
        )
    }

    async getYoutube(){
        try{
            return await Axios.get(`/youtubes/${this.props.match.params.id}`).then(response => this.setState({
                youtube : response.data.youtube,
                youtubeComments: [...response.data.youtubeComments]
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
