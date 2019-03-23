import React, { Component } from 'react'
import Axios from 'axios';
import YoutubeRender from './YoutubeRender';
import Loader from '../../components/Loader';
import {Link} from 'react-router-dom';
import Pagination from 'react-js-pagination';
import styled from 'styled-components';

const GridContainer = styled.div`
    width: 1100px;
    margin: 0 auto;
    display:grid;
    grid-template-columns : repeat(2, minmax(250px, 1fr));
    grid-gap: 60px;
`;
const PagenationBox = styled.div``;


export default class Youtube extends Component {

    constructor(props){
        super(props);
        this.state = {
            youtubes : [],

            title : '',
            url : '',
            description : '',
            error : null,
            loading : true,
            //react-js-pagination 부분
            activePage: 1,
            itemsCountPerPage: 1,
            totalItemsCount: 1,
            pageRangeDisplayed: 10
        }
        this.handleDelete = this.handleDelete.bind(this);
        this.handlePageChange = this.handlePageChange.bind(this);

    }

    handlePageChange(pageNumber) {
        console.log(`active page is ${pageNumber}`);
        console.log(this.state, 'from handlepagechage')
        this.setState({activePage: pageNumber});
        Axios.get('/youtubes?page='+pageNumber)
        .then(response => {
            this.setState({
                youtubes : [...response.data.youtubes.data],
                activePage: response.data.youtubes.current_page,
                itemsCountPerPage: response.data.youtubes.per_page,
                totalItemsCount: response.data.youtubes.total,
            })
        })
      }

    async handleDelete(id){
        try{
            return await Axios.delete(`/youtubes/${id}`)
        }catch{

        }finally{
            this.getYoutubes();
            this.handlePageChange();
        }
    }


    async getYoutubes(){
        try{
            return await Axios.get('/youtubes').then(response => this.setState({
                youtubes : [...response.data.youtubes]
            }))
        }catch{
            this.setState({
                error : 'getYoutubes() error'
            })
        }finally{
            this.setState({
                loading : false
            })
        }
    }

    componentDidMount(){
        this.getYoutubes();
        this.handlePageChange();
    }

    render() {
        return (
        <div>
            <Link to="/youtubes/create">Create</Link>
            {this.state.loading
                ? (<Loader />)
                : (
                    <GridContainer>
                        <YoutubeRender
                        youtubes={this.state.youtubes}
                        onDelete={this.handleDelete}
                        />

                    </GridContainer>
                )}
                <PagenationBox className="pagenation-box">
                <Pagination
                    activePage={this.state.activePage}
                    itemsCountPerPage={this.state.itemsCountPerPage}
                    totalItemsCount={this.state.totalItemsCount}
                    pageRangeDisplayed={this.state.pageRangeDisplayed}
                    onChange={this.handlePageChange}
                    itemClass='page-item'
                    linkClass='page-link'
                />
                </PagenationBox>
        </div>
        )
    }
}
