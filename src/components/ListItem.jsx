import styled from 'styled-components';
import Button from './Button';

const ValueContainer = styled.div`
    display: flex;
    align-items: center;
    background-color: #f4f4f9;
    padding: 15px;

    ${(props) => props.isExist && `box-shadow: 0 0 0 3px #0000ff inset;`};

    &:nth-child(2n) {
        background-color: #e6e6fa;
    }

    &:last-child {
        border-radius: 0 0 8px 8px;
    }

    &:hover {
        background-color: #dcdcdc;
    }
`;

const Value = styled.div`
    width: 20%;
    color: #000000;
    font-size: 14px;
    text-align: center;
`;

function ListItem({ data, input, handleDelete }) {
    return (
        <ValueContainer isExist={data.country === input}>
            <Value>{data.country}</Value>
            <Value>{data.gold}</Value>
            <Value>{data.silver}</Value>
            <Value>{data.bronze}</Value>
            <Value>{data.total}</Value>
            <Value>
                <Button type="delete" handleDelete={handleDelete} />
            </Value>
        </ValueContainer>
    );
}

export default ListItem;
