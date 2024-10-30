import styled from 'styled-components';

const Container = styled.div`
    width: 100%;
    border-radius: 8px;
    overflow: hidden;
`;

const TitleContainer = styled.div`
    display: flex;
    background-color: #003580;
    padding: 15px;
`;

const Title = styled.div`
    width: 20%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    color: #ffffff;
    font-size: 16px;
    font-weight: 700;
    text-align: center;
    cursor: pointer;
`;

const Sort = styled.p`
    font-size: 12px;
`;

const Message = styled.p`
    color: #000000;
    font-size: 16px;
    text-align: center;
`;

function List({ data, sort, handleSort, children }) {
    return (
        <>
            {data ? (
                <Container>
                    <TitleContainer>
                        <Title>국가명</Title>
                        <Title onClick={() => handleSort('gold')}>
                            금메달
                            <Sort>{sort === 'gold' ? '▼' : '▽'} </Sort>
                        </Title>
                        <Title onClick={() => handleSort('silver')}>
                            은메달
                            <Sort>{sort === 'silver' ? '▼' : '▽'} </Sort>
                        </Title>
                        <Title onClick={() => handleSort('bronze')}>
                            동메달
                            <Sort>{sort === 'bronze' ? '▼' : '▽'} </Sort>
                        </Title>
                        <Title onClick={() => handleSort('total')}>
                            합계
                            <Sort>{sort === 'total' ? '▼' : '▽'} </Sort>
                        </Title>
                        <Title></Title>
                    </TitleContainer>
                    {children}
                </Container>
            ) : (
                <Message>아직 추가된 국가가 없습니다. 메달을 추적하세요!</Message>
            )}
        </>
    );
}

export default List;
