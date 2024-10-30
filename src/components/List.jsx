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
    color: #ffffff;
    font-size: 16px;
    font-weight: 700;
    text-align: center;
`;

const Message = styled.p`
    color: #000000;
    font-size: 16px;
    text-align: center;
`;

function List({ data, children }) {
    return (
        <>
            {data ? (
                <Container>
                    <TitleContainer>
                        <Title>국가명</Title>
                        <Title>금메달</Title>
                        <Title>은메달</Title>
                        <Title>동메달</Title>
                        <Title>액션</Title>
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
