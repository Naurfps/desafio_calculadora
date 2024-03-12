import styled from 'styled-components';

export const ButtonContainer = styled.button`
    padding: 10px;
    border: 1px solid #CDCDCD;
    background-color: #FFFFFF;
    color: #000000;
    font-weight: 700;
    font-size: 20px;
    flex: 1;

    &:hover {
        opacity: 0.6;
        transition: 0.2s;
        background-color: #000000;
        color: #FFFFFF;
    }
`