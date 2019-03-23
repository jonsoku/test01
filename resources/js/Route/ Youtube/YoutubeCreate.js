import React, { Component } from 'react'
import Axios from 'axios';

export default class YoutubeCreate extends Component {

    constructor(props){
        super(props);
        this.state = {
            title : "",
            url : "",
            description : ""
        }
        this.handleChange1 = this.handleChange1.bind(this);
        this.handleChange2 = this.handleChange2.bind(this);
        this.handleChange3 = this.handleChange3.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange1(e){
        this.setState({
            title : e.target.value
        })
    }
    handleChange2(e){
        this.setState({
            url : e.target.value
        })
    }
    handleChange3(e){
        this.setState({
            description : e.target.value
        })
    }
    async handleSubmit(e){
        e.preventDefault();
        try{
            return await Axios.post('/youtubes',{
                title : this.state.title,
                url : this.state.url,
                description : this.state.description
            })
        }catch{

        }finally{
            this.props.history.push(`/youtubes`)
        }
    }
    render() {
        return (
        <div>
            <form onSubmit={this.handleSubmit}>
                <div>
                    <input
                        onChange={this.handleChange1}
                        value={this.state.title}
                        placeholder="title을 입력해주세요."
                    />
                </div>
                <div>
                    <textarea
                        onChange={this.handleChange2}
                        value={this.state.url}
                        placeholder="youtube주소를 입력해주세요. 예제 : https://youtu.be/2W2jnlygA08"
                    />
                </div>
                <div>
                    <textarea
                        onChange={this.handleChange3}
                        value={this.state.description}
                        placeholder="description 을 입력해주세요."
                    />
                </div>
                <div>
                    <button type="submit">작성완료</button>
                </div>
            </form>
        </div>
        )
    }
}
