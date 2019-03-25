import React, { Component } from 'react'
import Axios from 'axios';
import NoticeRender from './NoticeRender';

export default class NoticeShow extends Component {

    constructor(props){
        super(props);
        this.state = {
            notice : [],
            noticeComments : [],
            error : null,
            loading : true,
            body : '',
        }
        this.handleDelete = this.handleDelete.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    async getNotice(){
        try{
            return await Axios.get(`/notices/${this.props.match.params.id}`).then(response => this.setState({
                notice : response.data.notice,
                noticeComments : [...response.data.noticeComments]
            }))
        }catch{

        }finally{
            this.setState({
                loading : false
            })
        }
    }

    async handleSubmit(e){
        e.preventDefault();
        try{
            return await Axios.post(`/notices/${this.state.notice.id}/noticeComments`,{
                body : this.state.body
            })
        }catch{
            console.log('error');
        }finally{
            this.getNotice();
        }
    }

    handleChange(e){
        console.log(this.state)
        this.setState({
            body : e.target.value
        })
    }

    handleDelete(id){
        Axios.delete(`/notices/${id}`).then(
            this.props.history.push('/notices')
        )
    }

    componentDidMount(){
        this.getNotice();
    }

    render() {
        return (
        <>
            <NoticeRender
            notice={this.state.notice}
            noticeComments={this.state.noticeComments}
            onDelete={this.handleDelete}
            onSubmit={this.handleSubmit}
            onChange={this.handleChange}
            body={this.state.body}
            />
        </>
        )
    }
}
