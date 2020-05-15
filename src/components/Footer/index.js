import React, { useState } from 'react';

import { Container } from './styles';
import { darkTheme, lightTheme } from '../../themes/themes';

export default function Footer() {
    const [theme, setTheme] = useState(darkTheme);

    return (
        <Container
            footerColor={theme.color.footer}
            backgroundColor={theme.color.background}
            primaryFontColor={theme.font.primary}
            secondaryFontColor={theme.font.secondary}
        >
            <div className="main"> 
                <span>Feito por Matheus Santiago, Brasil.</span>
            </div>
        </Container>
    );
}