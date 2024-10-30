import styled from 'styled-components';

const Container = styled.div`
    width: 20%;
    text-align: center;
`;

const Label = styled.p`
    color: #000000;
    font-size: 16px;
    font-weight: 700;
    margin-bottom: 10px;
`;

const Input = styled.input`
    width: 100%;
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

function FormInput({ type, placeholder, name, value, handleChange }) {
    return (
        <Container>
            <Label>{name}</Label>
            <Input type={type} placeholder={placeholder} value={value} onChange={handleChange} />
        </Container>
    );
}

export default FormInput;
