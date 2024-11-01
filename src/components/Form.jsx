import styled from 'styled-components';

const Container = styled.form`
    width: 100%;
    display: flex;
    align-items: end;
    gap: 10px;
`;

function Form({ handleSubmit, children }) {
    return <Container onSubmit={(e) => handleSubmit(e)}>{children}</Container>;
}

export default Form;
