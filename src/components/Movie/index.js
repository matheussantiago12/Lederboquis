import React from 'react';
import { Container } from './styles';

const imgBaseURL = "http://image.tmdb.org/t/p/w185";

export default function Movie(props) {
    if(props.posterPath !== null) return (
        <Container>
            <img 
                src={imgBaseURL + props.posterPath} width="156" height="231" 
                alt={props.title}
            />
        </Container>
    )

    return ''; 
}