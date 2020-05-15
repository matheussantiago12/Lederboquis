import React, { useState } from 'react';

import { Container, StyledInput } from './styles';
import { darkTheme, lightTheme } from '../../themes/themes';
import logo from'../../assets/logo.png';

export default function Header() {
    const [theme, setTheme] = useState(darkTheme);

    return (
        <Container 
            headerColor={theme.color.header}
            primaryFontColor={theme.font.primary}
            secondaryFontColor={theme.font.secondary}
        >
            <main>
                <div className="logo">
                    <img src={logo} alt="Logo" />
                    <h1>Lederboquis</h1>
                </div>
                <div className="menu">
                    <ul>
                        <li>
                            <a href="#">POPULAR</a>
                        </li>
                        <li>
                            <a href="#">FILMES</a>
                        </li>
                        <li>
                            <a href="#">SÉRIES</a>
                        </li>
                        <li>
                            <a href="#">ESTÃO POR VIR</a>
                        </li>
                        <li>
                            <form>
                                <StyledInput 
                                    secondaryFontColor={theme.font.secondary}
                                />
                            </form>
                        </li>
                    </ul>
                </div>
            </main>
        </Container>
    );
}