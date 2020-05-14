import React, { useState, useEffect } from 'react';

import { Container } from './styles';
import { darkTheme, lightTheme } from '../../themes/themes';
import Movie from '../../components/Movie';
import api from '../../services/api';

const apiKey = "614202b1349a9d24b50b55bbe161f514";

export default function Main() {
    const [theme, setTheme] = useState(darkTheme);
    const [popularMovies, setPopularMovies] = useState([]);
    const [moviesForKids, setMoviesForKids] = useState([]);

    useEffect(() => {
        api.get(`/discover/movie?sort_by=popularity.desc&api_key=${apiKey}`)
            .then(response => {
                setPopularMovies(response.data.results);
            });
        
        api.get(`/discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc&api_key=${apiKey}`)
            .then(response => {
                setMoviesForKids(response.data.results);
            })
    }, []);

    return (
        <Container
            backgroundColor={theme.color.background}
            primaryFontColor={theme.font.primary}
            secondaryFontColor={theme.font.secondary}
        >
            <div className="body">
                <div className="sectionHeader">
                    <h2>FILMES POPULARES</h2>
                </div>
                <div className="popularMovies">
                    {popularMovies.slice(0, 18).map(popMovie => (
                        <Movie 
                            posterPath={popMovie.poster_path}
                        />
                    ))}
                </div>
                <div className="sectionHeader">
                    <h2>POPULAR ENTRE AS CRIANÇAS</h2>
                </div>
                <div className="popularMovies">
                    {moviesForKids.slice(0, 18).map(kidMovie => (
                        <Movie
                            posterPath={kidMovie.poster_path}
                        />
                    ))}
                </div>
            </div>
        </Container>
    );
}