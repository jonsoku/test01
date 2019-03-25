import React, { Component } from 'react'
import Axios from 'axios';
import styled from 'styled-components';
import NoticesRender from './NoticesRender';
import {Link} from 'react-router-dom';
import Pagination from 'react-js-pagination';


const Info = styled.div`
    width: 100%;
    height: 170px;
    line-height : 170px;
    background-color: black;
    color: #fff;
    font-size: 3rem;
    font-weight:900;
`;


const Container = styled.div`
    width: 1100px;
    margin : 0 auto;
`;

const Search = styled.input`
    width: 100%;
    margin: 2rem 0;
    height: 29px;
`;

const CreateLink = styled(Link)`
    display:inline-block;
    background-color:var(--dark);
    color:var(--white);
    text-align:center;
    margin-top: 2rem;
    padding: 1rem 2rem;

`;


export default class Notice extends Component {

    constructor(props){
        super(props);
        this.state = {
            notices : [],
            error : null,
            loading : true,
            keyword : '',
            //react-js-pagination 부분
            activePage: 1,
            itemsCountPerPage: 1,
            totalItemsCount: 1,
            pageRangeDisplayed: 10
        }
        this.handleSearch = this.handleSearch.bind(this);
        this.handlePageChange = this.handlePageChange.bind(this);
    }

    handleSearch(e){
        this.setState({
            keyword : e.target.value
        })
    }

    handlePageChange(pageNumber) {
        console.log(`active page is ${pageNumber}`);
        console.log(this.state, 'from handlepagechage')
        this.setState({activePage: pageNumber});
        Axios.get('/notices?page='+pageNumber)
        .then(response => {
            this.setState({
                notices : [...response.data.notices.data],
                activePage: response.data.notices.current_page,
                itemsCountPerPage: response.data.notices.per_page,
                totalItemsCount: response.data.notices.total,
            })
        })
      }

    async getNotices(){
        try{
            return await Axios.get('/notices').then(response => this.setState({
                notices : [...response.data.notices.data],
                activePage: response.data.notices.current_page,
                itemsCountPerPage: response.data.notices.per_page,
                totalItemsCount: response.data.notices.total
            }))
        }catch{
            this.setState({
                error : 'getNotice() error'
            })
        }finally{
            this.setState({
                loading : false
            })
        }
    }
    componentDidMount(){
        this.getNotices();
    }

    render() {
        return (
        <>
            <Info>
                <Container>#Notice</Container>
            </Info>
            <Container>
                <Search onChange={this.handleSearch} value={this.state.keyword} placeholder="검색하실 게시물의 TITLE을 입력해주세요. paging처리하니까 안되네.." />
                <NoticesRender notices={this.state.notices.filter(
                    notice => notice.title.indexOf(this.state.keyword) > -1
                )} />
                <Pagination
                    activePage={this.state.activePage}
                    itemsCountPerPage={this.state.itemsCountPerPage}
                    totalItemsCount={this.state.totalItemsCount}
                    pageRangeDisplayed={this.state.pageRangeDisplayed}
                    onChange={this.handlePageChange}
                    itemClass='page-item'
                    linkClass='page-link'
                    />
                <CreateLink to={`/notices/create`}>Create</CreateLink>
            </Container>
        </>
        )
    }
}
