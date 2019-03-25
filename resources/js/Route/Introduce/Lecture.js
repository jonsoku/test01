import React, { Component } from 'react';
import styled from 'styled-components';

const Container = styled.div`
    width: 100vw;
    text-transform : uppercase;
    text-align: center;
    background:radial-gradient(ellipse farthest-corner at center top, #6CEBCF 0%, #38a7aa 100%);
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

const Description = styled.p`
    font-size:1.5rem;
`;

const GridBox = styled.div`
    display:grid;
    grid-gap: 3rem;
    padding: 3rem;
    grid-template-columns: 1fr;
`;

const Box = styled.div`
    width: 100%;
    margin: 0 auto;
    padding: 1.5rem;
    background-color: #fff;
    transition: all 0.5s;
    box-shadow : 7px 7px 5px grey;
    p{
        margin-bottom: 2rem;
        font-size: 2.2rem;
        font-weight: 900;
    }
    span{
        text-align:left;
        letter-spacing: 0.2px;
    }

    table{
        width: 100%;
        border: 1px solid #eaeaea;
    }
    &:hover{
        transform:scale(1.05);
    }
`;


export default class Lecture extends Component {
    render() {
        return (
        <Container>
            <Header>
                <Title>LECTURE</Title>
                <Description>
                    일본 내 기업 중 가장 선호도가 높은 언어 ... 불라불라불라 더미데이터일본 내 기업 중 가장 선호도가 높은 언어 ... 불라불라불라 더미데이터
                </Description>
            </Header>
            <GridBox>
                <Box>
                    <p>JAVA 기초</p>
                    <span>
                    ・JAVA입문지식
                    (데이터타입, FOR, IF, ARRAY, LIST, METHOD, BEAN)
                    <br></br>
                    ・DB입문지식
                    (SELECT, INSERT, UPDATE, DELETE)
                    </span>
                </Box>
                <Box>
                    <p>JAVA 응용</p>
                    <span>
                    ・JAVA 기초실무지식
                    (DAO, DTO, Debug모드 사용법, Servlet, Batch처리코딩1(검색), Batch처리코딩2(등록), Batch처리코딩3(갱신), Batch처리코딩4(삭제-논리))
                    <br></br>
                    ・HTML, JSP 기초지식
                    <br></br>
                    ・DB 기초실무지식
                    (INNER JOIN(Table MAX 3개), OUTER JOIN(Table MAX 3개), GROUP BY, HAVING)
                    </span>
                </Box>
                <Box>
                    <p>SPRING 반</p>
                    <span>
                    ・MVC 패턴기초지식
                    (Model, View, Controller의 기본 구조 이해, 필수 @어노테이션, 기본 게시판 작성)
                    <br></br>
                    ・Mybatis
                    (MyBatis연동 및 Mapper 작성 및 Test Class작성 )
                    <br></br>
                    ・Linux
                    (Tera Term을 이용하여, Log 파일 분석(grep, find, awk), 설정파일 작성 및 변경(vi))

                    </span>
                </Box>
                <Box>
                    <p>JSP WEB 기초</p>
                    <span>
                    ・HTML5 + CSS
                    (홈페이지 구성을 위한 필수 HTML, CSS)
                    <br></br>
                    ・JSP(JSTL)
                    (화면간 오브젝트 전달방법, 자바와의 오브젝트 전달방법, c:if c:foreach c:choose을 통한 프론트 기본처리 학습)
                    <br></br>
                    ・JavaScript
                    (입력체크Function, 체크박스ALL Checked or ALL Unchecked등 유용한 Function 작성)
                    </span>
                </Box>
                <Box>
                    <p>블로그, 홈페이지 만들기</p>
                    <span>
                    ・HTML
                    (홈페이지 구성을 위한 필수 HTML태그를 활용)
                    <br></br>
                    ・CSS
                    (기본적인 블로그 및 홈페이지 레이아웃작업)
                    <br></br>
                    ・JavaScript / jQuery
                    (기본적인 블로그 및 홈페이지 이벤트기능 추가 , 라이브러리 사용방법 등)
                    <br></br>
                    ・기존 BACK-END 수강생들을 위한 OPTION
                    (자신이 만든 프로젝트에 HTML/CSS를 입혀서 포트폴리오 업그레이드!

                    </span>
                </Box>
            </GridBox>
        </Container>
        )
    }
}
