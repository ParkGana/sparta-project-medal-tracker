import styled from 'styled-components';

const CreateUpdate = styled.input`
    width: 10%;
    height: 40px;
    border: none;
    border-radius: 4px;
    background-color: #ffcc00;
    color: #000000;
    font-size: 14px;
    font-weight: 700;
    cursor: pointer;
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

function Button({ type, name, handleDelete }) {
    return (
        <>
            {(type === 'create' || type === 'update') && <CreateUpdate type="submit" name={type} value={name} />}

            {type === 'delete' && (
                <Delete type="button" onClick={handleDelete}>
                    삭제
                </Delete>
            )}
        </>
    );
}

export default Button;
