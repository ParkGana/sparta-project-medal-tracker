import { useState } from 'react';
import styled from 'styled-components';
import Form from './components/Form';
import FormInput from './components/FormInput';
import List from './components/List';
import ListItem from './components/ListItem';
import Button from './components/Button';

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

function App() {
    const [country, setCountry] = useState('');
    const [gold, setGold] = useState(0);
    const [silver, setSilver] = useState(0);
    const [bronze, setBronze] = useState(0);
    const [list, setList] = useState([]);

    /* 국가명 값 변경 */
    const changeCountry = (e) => setCountry(e.target.value);

    /* 금메달 값 변경 */
    const changeGold = (e) => setGold(e.target.value);

    /* 은메달 값 변경 */
    const changeSilver = (e) => setSilver(e.target.value);

    /* 동메달 값 변경 */
    const changeBronze = (e) => setBronze(e.target.value);

    /* form submit 이벤트 */
    const handleSubmit = (e) => {
        e.preventDefault();

        e.nativeEvent.submitter.name === 'create' && handleCreate();
        e.nativeEvent.submitter.name === 'update' && handleUpdate();
    };

    /* 추가 이벤트 */
    const handleCreate = () => {
        if (!country) {
            window.alert('국가명을 입력해주세요.');
        } else if (parseInt(gold) < 0 || parseInt(silver) < 0 || parseInt(bronze) < 0) {
            window.alert('메달의 갯수는 0보다 작을 수 없습니다.');
        } else if (parseInt(gold) > 100 || parseInt(silver) > 100 || parseInt(bronze) > 100) {
            window.alert('메달의 갯수는 100보다 클 수 없습니다.');
        } else {
            setList([...list, { country, gold: gold || 0, silver: silver || 0, bronze: bronze || 0 }]);
            setCountry('');
            setGold(0);
            setSilver(0);
            setBronze(0);
        }
    };

    /* 수정 이벤트 */
    const handleUpdate = () => {
        let updated = list.filter((item) => item.country === country)[0];

        if (!updated) {
            window.alert('해당 국가가 등록되어 있지 않습니다.');
        } else {
            setList([...list.filter((item) => item.country !== country), { country, gold: gold || 0, silver: silver || 0, bronze: bronze || 0 }]);
            setCountry('');
            setGold(0);
            setSilver(0);
            setBronze(0);
        }
    };

    /* 삭제 이벤트 */
    const handleDelete = (deleted) => {
        setList([...list.filter((item) => item.country !== deleted)]);
    };

    return (
        <Container>
            <Title>2024 파리 올림픽</Title>

            <Form handleSubmit={handleSubmit}>
                <FormInput type="text" placeholder="국가 입력" name="국가명" value={country} handleChange={changeCountry} />
                <FormInput type="number" name="금메달" value={gold} handleChange={changeGold} />
                <FormInput type="number" name="은메달" value={silver} handleChange={changeSilver} />
                <FormInput type="number" name="동메달" value={bronze} handleChange={changeBronze} />
                <Button type="create" name="국가 추가" />
                <Button type="update" name="업데이트" />
            </Form>

            <List data={list.length}>
                {list
                    .sort((a, b) => b.gold - a.gold)
                    .map((item, index) => {
                        return <ListItem key={index} data={item} handleDelete={() => handleDelete(item.country)} />;
                    })}
            </List>
        </Container>
    );
}

export default App;
