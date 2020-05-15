import styled from 'styled-components';

export const Container = styled.footer`
    height: 100px;
    width: 100%;
    background-color: ${props => `${props.footerColor}`};

    div.main {
        width: 1100px;
        height: 100%;
        margin: 0 auto;
        text-align: center;
        line-height: 100px;

        span {
            color: ${props => `${props.secondaryFontColor}`};
        }
    }
`;