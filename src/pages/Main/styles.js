import styled from 'styled-components';

export const Container = styled.main`
    height: 100%;
    width: 100%;
    background-color: ${props => `${props.backgroundColor}`};

    div.body {
        width: 1100px;
        margin: 0 auto;
        display: flex;
        padding-top: 10px;
        flex-wrap: wrap;
        justify-content: space-between;
        height: 100%;
    }
`;