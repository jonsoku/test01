import React, { Component } from 'react'
import Axios from 'axios';
import styled from 'styled-components';

const FormBox = styled.div`
    width:100vw;
    overflow:hidden;
    background-color: #eaeaea;


`;

const Form = styled.form`
    width: 400vw;
    margin-left : ${props => props.marginLeft ? props.marginLeft : null};
    transition: all 1s;
`;

const Sex = styled.div`
    float:left;
    width: 100vw;

`

const Male = styled.div`
    width:50%;
`;

const Female = styled.div`
    width:50%;
`;

const Info1 = styled.div`
    float:left;
    width: 100vw;
    margin: 3rem auto;
    text-align:center;
    input{
        display:inline-block;
        width:40%;
        font-size: 3rem;
        text-align:center;
        border: 0;
        margin: 1rem 0;
        border-radius:30px;
        height: auto;
        line-height : normal;
        padding: .8em .5em;
        font-family: inherit;
        outline-style: none;
    }
`;

const Info2 = styled.div`
    float:left;
    width: 100vw;
    margin: 3rem auto;
    text-align:center;
    select{
        display:inline-block;
        width:40%;
        font-size: 3rem;
        text-align:center;
        border: 0;
        margin: 1rem 0;
        border-radius:30px;
        height: auto;
        line-height : normal;
        padding: .8em .5em;
        font-family: inherit;
        outline-style: none;
    }
`;

const Submit = styled.div`
    float:left;
    width: 100vw;
    margin: 0 auto;
    text-align:center;
    button{
        border: 0;
        padding: 2rem 5rem;
        font-size: 2rem;
        background-color: black;
        color: #fff;
        cursor:pointer;
    }
`;

const NextButton = styled.div`
    display:inline-block;
    background-color:black;
    color:#fff;
    font-weight:900;
    font-size:3rem;
    padding: 1rem 2rem;
`;

export default class Apply extends Component {

    constructor(props){
        super(props);
        this.state = {
            gender: '',
            name : '',
            age : '',
            sns : '',
            visa : '',
            level: '',
            it : '',
            error : null,
            loading : true,
            page: 0

        }
        this.handleRadioGender = this.handleRadioGender.bind(this);

        this.handleChangeName = this.handleChangeName.bind(this);
        this.handleChangeAge = this.handleChangeAge.bind(this);
        this.handleChangeSns = this.handleChangeSns.bind(this);

        this.handleChangeVisa = this.handleChangeVisa.bind(this);
        this.handleChangeLevel = this.handleChangeLevel.bind(this);
        this.handleChangeIt = this.handleChangeIt.bind(this);

        this.handleSubmit = this.handleSubmit.bind(this);

        this.handleNextButton = this.handleNextButton.bind(this);
    }

    handleNextButton(){
        this.setState({
            page : this.state.page + 1
        })
    }


    //============================
    async handleSubmit(e){
        e.preventDefault();
        try{
            return await Axios.post('/applies',{
                gender : this.state.gender,
                name : this.state.name,
                age : this.state.age,
                sns : this.state.sns,
                visa : this.state.visa,
                level : this.state.level,
                it : this.state.it
            })
        }catch{
            this.setState({
                error : 'apply post error'
            })
        }finally{
            this.setState({
                loading : false
            })
            this.props.history.push('/')
        }
    }

    //============================
    handleRadioGender(e){
        this.setState({
            gender: e.target.value
        });
    }
    //============================
    handleChangeName(e){
        this.setState({
            name : e.target.value
        })
    }
    handleChangeAge(e){
        this.setState({
            age : e.target.value
        })
    }
    handleChangeSns(e){
        this.setState({
            sns : e.target.value
        })
    }
    //============================
    handleChangeVisa(e){
        this.setState({
            visa : e.target.value
        })
    }
    handleChangeLevel(e){
        this.setState({
            level : e.target.value
        })
    }
    handleChangeIt(e){
        this.setState({
            it : e.target.value
        })
    }
    //===========================

    render() {
        console.log(this.state)
        return (
        <>
        <FormBox>
            <Form onSubmit={this.handleSubmit} marginLeft={'-'+'100'*`${this.state.page}`+'vw'}>
                <Sex>
                    <Male>
                        <label htmlFor="apply_male"><i className="fas fa-male"></i></label>
                        <div>
                            <input
                            id="apply_male"
                            type="radio"
                            name="radioGender"
                            value="male"
                            onChange={this.handleRadioGender}
                            />
                        </div>
                    </Male>
                    <Female>
                        <label htmlFor="apply_female"><i className="fas fa-female"></i></label>
                            <div>
                            <input
                            id="apply_female"
                            type="radio"
                            name="radioGender"
                            value="female"
                            onChange={this.handleRadioGender}
                            />
                        </div>
                    </Female>
                </Sex>
                <Info1>
                    <input
                    onChange={this.handleChangeName}
                    value={this.state.name}
                    placeholder="name"
                    />
                    <br></br>
                    <input
                    onChange={this.handleChangeAge}
                    value={this.state.age}
                    placeholder="age"
                    />
                    <br></br>
                    <input
                    onChange={this.handleChangeSns}
                    value={this.state.sns}
                    placeholder="sns"
                    />
                </Info1>
                <Info2>
                    <select value={this.state.visa} onChange={this.handleChangeVisa}>
                        <option value="워킹홀리데이">워킹홀리데이</option>
                        <option value="기술">기술</option>
                        <option value="배우자">배우자</option>
                        <option value="고도인재">고도인재</option>
                    </select>
                    <br></br>
                    <select value={this.state.level} onChange={this.handleChangeLevel}>
                        <option value="상">상</option>
                        <option value="중">중</option>
                        <option value="하">하</option>
                    </select>
                    <br></br>
                    <select value={this.state.it} onChange={this.handleChangeIt}>
                        <option value="1년 미만">1년 미만</option>
                        <option value="1-2년">1-2년</option>
                        <option value="2-3년">2-3년</option>
                        <option value="3년 이상">3년 이상</option>
                    </select>
                </Info2>
                <Submit>
                    <button type="submit">수강신청</button>
                </Submit>
            </Form>
        </FormBox>
        <NextButton onClick={this.handleNextButton}>next</NextButton>
        </>
        )
    }
}
