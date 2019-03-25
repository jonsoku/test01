import React, { Component } from 'react';
import styled from 'styled-components';

const Container = styled.div`
    width: 100vw;
    text-transform : uppercase;
    text-align: center;
    background:radial-gradient(ellipse farthest-corner at center bottom, #69d2fb 0%, #20438E 100%);
    padding: 5rem;
`;


const Header = styled.div``;

const SubTitle = styled.p`
    font-size: 2rem;
`;

const Title = styled.p`
    display:inline-block;
    font-size: 9rem;
    font-weight : 900;
    color: #fff;
    font-style:italic;
`;



const GridBox = styled.div`
`;

const Box = styled.ul`
    font-size: 1.5rem;
    li{
        margin: 3rem 0;
        p{

        }
    }

    table{
        width: 100%;
    }
    tr{
        height: 49px;
        line-height: 49px;
    }
`;



export default class Teacher extends Component {
    render() {
        return (
        <Container>
            <Header>
                <SubTitle>MAIN 강사 소개</SubTitle>
                <Title>kim jung hwa</Title>
            </Header>
            <GridBox>
                <Box>
                    <li>
                        <p>경력</p>
                        <span>
                            인하대 졸업
                            인하과외 커뮤니티 대표강사
                            강의 경력 9년
                            현 IT프리랜서
                            현 KIMSCHOOL 메인강사
                        </span>
                    </li>
                    <li>
                        <p>지도가능 언어 및 툴</p>
                        <table>
                            <tr>
                                <td>MAIN</td>
                                <td>JAVA7, JAVA8, VBA, ColFusion</td>
                            </tr>
                            <tr>
                                <td>VIEW</td>
                                <td>JSP, HTML, CSS, JavaScript, jQuery</td>
                            </tr>
                            <tr>
                                <td>DB</td>
                                <td>Oracle(PLSQL), MySQL, MariaDB</td>
                            </tr>
                            <tr>
                                <td>FRAMEWORK</td>
                                <td>Spring, Struts1, Struts2, Seasar2</td>
                            </tr>
                            <tr>
                                <td>OS</td>
                                <td>Windows, Unix, Linux</td>
                            </tr>
                            <tr>
                                <td>TOOL</td>
                                <td>A5M2, CSE, TeraTerm, Maven, Ant</td>
                            </tr>
                        </table>
                    </li>
                </Box>
            </GridBox>
        </Container>
        )
    }
}
