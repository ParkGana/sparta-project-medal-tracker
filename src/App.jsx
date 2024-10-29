import { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
    max-width: 1000px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
    border-radius: 8px;
    background-color: #ffffff;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
    padding: 20px;
    margin: 40px auto;
`;

const Title = styled.p`
    color: #003580;
    font-size: 32px;
    font-weight: 700;
`;

const Form = styled.form`
    display: flex;
    align-items: end;
    gap: 10px;
`;

const InputContainer = styled.div`
    text-align: center;
`;

const InputTitle = styled.p`
    color: #000000;
    font-size: 16px;
    font-weight: 700;
    margin-bottom: 10px;
`;

const Input = styled.input`
    width: 170px;
    height: 40px;
    border: 1px solid #dddddd;
    border-radius: 4px;
    color: #000000;
    font-size: 14px;
    padding: 10px;

    &:focus {
        outline: none;
    }
`;

const CreateUpdate = styled.input`
    width: 100px;
    height: 40px;
    border: none;
    border-radius: 4px;
    background-color: #ffcc00;
    color: #000000;
    font-size: 14px;
    font-weight: 700;
    cursor: pointer;
`;

const Message = styled.p`
    color: #000000;
    font-size: 16px;
    text-align: center;
`;

const ListContainer = styled.div`
    width: 100%;
    border-radius: 8px;
    overflow: hidden;
`;

const ListTitleContainer = styled.div`
    display: flex;
    background-color: #003580;
    padding: 15px;
`;

const ListTitle = styled.div`
    width: 20%;
    color: #ffffff;
    font-size: 16px;
    font-weight: 700;
    text-align: center;
`;

const ListValueContainer = styled.div`
    display: flex;
    align-items: center;
    background-color: #f4f4f9;
    padding: 15px;

    &:nth-child(2n) {
        background-color: #e6e6fa;
    }

    &:hover {
        background-color: #dcdcdc;
    }
`;

const ListValue = styled.div`
    width: 20%;
    color: #000000;
    font-size: 14px;
    text-align: center;
`;

const Delete = styled.button`
    border: none;
    border-radius: 4px;
    background-color: #ff0000;
    color: #ffffff;
    font-size: 14px;
    font-weight: 700;
    padding: 5px 10px;
    cursor: pointer;
`;

function App() {
    const [country, setCountry] = useState('');
    const [gold, setGold] = useState(0);
    const [silver, setSilver] = useState(0);
    const [bronze, setBronze] = useState(0);

    /* 국가명 값 변경 */
    const changeCountry = (e) => setCountry(e.target.value);

    /* 금메달 값 변경 */
    const changeGold = (e) => setGold(parseInt(e.target.value) < 0 ? 0 : parseInt(e.target.value));

    /* 은메달 값 변경 */
    const changeSilver = (e) => setSilver(parseInt(e.target.value) < 0 ? 0 : parseInt(e.target.value));

    /* 동메달 값 변경 */
    const changeBronze = (e) => setBronze(parseInt(e.target.value) < 0 ? 0 : parseInt(e.target.value));

    /* 추가 및 업데이트 이벤트 */
    const handleSubmit = (e) => {
        e.preventDefault();

        window.alert('버튼 클릭');

        setCountry('');
        setGold(0);
        setSilver(0);
        setBronze(0);
    };

    /* 삭제 이벤트 */
    const handleDelete = () => {
        window.alert('버튼 클릭');
    };

    const listItems = [
        { country: '대한민국', gold: 15, silver: 10, bronze: 7 },
        { country: '일본', gold: 7, silver: 12, bronze: 5 },
        { country: '중국', gold: 30, silver: 24, bronze: 14 }
    ];

    return (
        <Container>
            <Title>2024 파리 올림픽</Title>

            <Form onSubmit={(e) => handleSubmit(e)}>
                <InputContainer>
                    <InputTitle>국가명</InputTitle>
                    <Input type="text" placeholder="국가 입력" value={country} onChange={changeCountry} />
                </InputContainer>
                <InputContainer>
                    <InputTitle>금메달</InputTitle>
                    <Input type="number" value={gold} onChange={changeGold} />
                </InputContainer>
                <InputContainer>
                    <InputTitle>은메달</InputTitle>
                    <Input type="number" value={silver} onChange={changeSilver} />
                </InputContainer>
                <InputContainer>
                    <InputTitle>동메달</InputTitle>
                    <Input type="number" value={bronze} onChange={changeBronze} />
                </InputContainer>
                <CreateUpdate type="submit" value="국가 추가" />
                <CreateUpdate type="submit" value="업데이트" />
            </Form>

            <Message>아직 추가된 국가가 없습니다. 메달을 추적하세요!</Message>

            <ListContainer>
                <ListTitleContainer>
                    <ListTitle>국가명</ListTitle>
                    <ListTitle>금메달</ListTitle>
                    <ListTitle>은메달</ListTitle>
                    <ListTitle>동메달</ListTitle>
                    <ListTitle>액션</ListTitle>
                </ListTitleContainer>
                {listItems.map((item, index) => {
                    return (
                        <ListValueContainer key={index}>
                            <ListValue>{item.country}</ListValue>
                            <ListValue>{item.gold}</ListValue>
                            <ListValue>{item.silver}</ListValue>
                            <ListValue>{item.bronze}</ListValue>
                            <ListValue>
                                <Delete type="button" onClick={handleDelete}>
                                    삭제
                                </Delete>
                            </ListValue>
                        </ListValueContainer>
                    );
                })}
            </ListContainer>
        </Container>
    );
}

export default App;
