import React from 'react';
import './Header.css';
import { AppBar, Toolbar, Divider, Typography  } from '@material-ui/core';
import Logo from '../Logo/Logo';
import styled from 'styled-components';

const ToolbarS = styled(Toolbar)`
    display: flex;
    flex-flow: row nowrap;
    justify-content: flex-start;
`;

const TitleDivider = styled(Divider)`
    align-self: stretch;
    height: auto;
    margin-left: 24px;
`;

const PageTitle = styled(Typography)`
    margin-left: 24px;
    font-family: 'Montserrat', sans-serif;
`;

const Header = () => {
    return(
        <div>
            <AppBar pos elevation={1}>
                <ToolbarS>
                    <Logo />
                    <TitleDivider orientation="vertical" />
                    <PageTitle variant="h5">Калькулятор утеплення</PageTitle>
                </ToolbarS>
            </AppBar>
            <Toolbar />
        </div>
    );
};

export default Header;