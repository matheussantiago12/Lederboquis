import React, { useState, useEffect } from 'react';

import { Container } from './styles';
import { darkTheme, lightTheme } from '../../themes/themes';
import Movie from '../../components/Movie';
import api from '../../services/api';

const apiKey = "614202b1349a9d24b50b55bbe161f514";

export default function Main() {
    const [theme, setTheme] = useState(darkTheme);
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        api.get(`/discover/movie?with_genres=18&sort_by=vote_average.desc&vote_count.gte=10&api_key=${apiKey}`)
            .then(response => {
                setMovies(response.data.results);
                console.log(response.data);
            });
    }, []);

    return (
        <Container
            backgroundColor={theme.color.background}
            primaryFontColor={theme.font.primary}
            secondaryFontColor={theme.font.secondary}
        >
            <div className="body">
                {movies.map(movie => (
                    <>
                        <Movie 
                            posterPath={movie.poster_path}
                        />
                        <Movie 
                            posterPath={movie.poster_path}
                        />
                    </>
                ))}
            </div>
        </Container>
    );
}