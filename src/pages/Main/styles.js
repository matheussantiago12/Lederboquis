import styled from 'styled-components';

export const Container = styled.main`
    width: 100%;
    background-color: ${props => props.backgroundColor};

    div.body {
        width: 1100px;
        margin: 0 auto;
        padding-top: 10px;
        height: 100%;
    }

    div.popularMovies {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        margin-bottom: 25px;
    }
    
    div.sectionHeader {
        width: 98%;
        border-bottom: 1px solid #bcbfc7;
        margin: 0 auto;
        margin-top: 15px;
        margin-bottom: 2px;

        h2 {
            color: #bcbfc7;
            font-weight: lighter;
            font-size: 18px;
        }
    }
`;