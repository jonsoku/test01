import React, { Component } from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

const Table = styled.table`
    width: 100%;
    border: 1px solid #eaeaea;
`;
const Thead = styled.thead`
    font-weight:900;
    border-bottom: 1px solid #eaeaea;
    background-color: var(--dark);
    color:#fff;
`;
const Tbody = styled.tbody`
    td:nth-child(2){
        text-align:left;
    }
`;
const Tr = styled.tr`
    transition: all 0.2s;
    &:hover{
        background-color: var(--dark);
        color:#fff;
    }
    td{
        text-align:center;
    }
    height: 39px;
    line-height: 39px;
    border-bottom: 1px solid #eaeaea;
`;
const No = styled.td`
    width: 5%;
`;
const Title = styled.td`
    width: 50%;
    a{
        display:block;
    }
`;

const Comment = styled.span`
    font-weight : 900;
    margin-left: 1rem;
`
const Author = styled.td`
    width: 15%;
`;
const Created = styled.td`
    width: 30%;
`;

export default class NoticesRender extends Component {
  render() {
        return (
            <Table>
                <Thead>
                    <Tr>
                        <td>no</td>
                        <td>title</td>
                        <td>author</td>
                        <td>created_at</td>
                    </Tr>
                </Thead>
                <Tbody>
                    {this.props.notices.map(notice => (
                        <Tr key={notice.id}>
                            <No>{notice.id}</No>
                            <Title><Link to={`/notices/${notice.id}`}>{notice.title}<Comment>{notice.notice_comments.length ? '['+notice.notice_comments.length+']' : ''}</Comment></Link></Title>
                            <Author>{notice.user.name}</Author>
                            <Created>{notice.created_at}</Created>
                        </Tr>
                    ))}
                </Tbody>
            </Table>
        )
    }
}
