import React, { Component } from 'react';
import styled from 'styled-components';

const Container = styled.div`
    width: 100vw;
    text-transform : uppercase;
    text-align: center;
    background:radial-gradient(ellipse farthest-corner at center top, #f39264 0%, #f2606f 100%);
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
    grid-template-columns: repeat(2, 1fr);
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


export default class Academy extends Component {
    render() {
        return (
        <Container>
            <Header>
                <SubTitle>일본 현지 IT 프로그래밍 교육</SubTitle>
                <Title>kimschool</Title>
                <Description>
                    IT를 하고싶은데 무슨 말인지 모르겠고, 배우는데 뭐가 뭔지 모르겠다고요?
                    백엔드의 JAVA부터 프론트엔드의 JAVASCRIPT 퍼블리셔의 HTML/CSS까지
                    KIMSCHOOL에서 같이 공부하세요 !
                </Description>
            </Header>
            <GridBox>
                <Box>
                    <p>전문성</p>
                    <span>
                        일본IT업계의 테스터부터 리더까지의 경험을 갖춘
                        한국 강사 출신 일본 WEB개발 7년차 개발자가
                        일본 IT의 WEB기술을 심도 있게 지도 및 관리합니다
                    </span>
                </Box>
                <Box>
                    <p>기간 및 비용</p>
                    <table>
                        <thead>
                            <tr>
                                <td></td>
                                <td>김스쿨</td>
                                <td>타 기관</td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>기간</td>
                                <td>약 110시간 => 3개월</td>
                                <td>약 1200시간 => 9 ~ 12개월</td>
                            </tr>
                            <tr>
                                <td>비용</td>
                                <td>약 60만원</td>
                                <td>약 1000만원</td>
                            </tr>
                        </tbody>
                    </table>
                </Box>
                <Box>
                    <p>무료 강의영상</p>
                    <span>
                        수업에 참석하지 못한 수강생 한번 더 강의를 듣고 싶은
                        수강생에게 무료로 제공되는 김스쿨 강의영상
                        제 어디서든 학습이 가능하도록 수업 영상을 평생무료제공
                    </span>
                </Box>
                <Box>
                    <p>사후관리</p>
                    <span>
                        최고의 교통편의를 갖춘 KIMSCHOOL은 도쿄의 타카다노바바에
                        위치, 교통의 장점을 살려 취업후에도
                        평일(10:00 - 20:00), 주말(09:00- 19:00)까지 운영하며
                        업무지원 및 기술지원 , 취업자 무료스터디 및 실시간 대응이
                        가능한 유일무일한 교육기관
                    </span>
                </Box>
            </GridBox>
        </Container>
        )
    }
}
