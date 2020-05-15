import styled from 'styled-components';

export const Container = styled.header`
    background-color: ${props => `${props.headerColor}`};
    height: 80px;
    color: ${props => `${props.primaryFontColor}`};
    align-content: center;

    main {
        width: 1100px;
        height: 100%;
        margin: 0 auto;
        display: flex;
        line-height: 80px;
    }

    div.logo {
        width: 300px;
        height: 100%;
        display: flex;
        align-items: center;
    }

    div.menu {
        width: 800px;
        height: 100%;
        color: ${props => `${props.secondaryFontColor}`};
        display: flex;
        justify-content: flex-end;

        ul {
            list-style-type: none;
            display: flex;
            justify-content: flex-end;
            font-weight: bold;
            
            a {
                text-decoration: none;
                color: ${props => `${props.secondaryFontColor}`};
            }

            li {
                margin: 0 10px; 
            }
        }
    }

    img {
        width: 86px;
        height: 32px;
        margin-right: 5px;
    }
`;

export const StyledInput = styled.input`
    width: 135px;
    padding: 10px;
    border: 0px;
    border-radius: 22px;
    outline: none;
    background-color: rgb(255,255,255,0.09);
    color: ${props => `${props.secondaryFontColor}`};
`;