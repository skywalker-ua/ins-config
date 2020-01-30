import React from 'react';
import './Header.css';
import { AppBar, Toolbar, Divider, Typography,
Button, IconButton, useMediaQuery    } from '@material-ui/core';
import Logo from '../Logo/Logo';
import styled from 'styled-components';
import TranslateIcon from '@material-ui/icons/Translate';
import CallIcon from '@material-ui/icons/Call';

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
    flex-grow: 1;
`;

const IconsSet = styled.div`
    display: flex;
    font-family: 'Roboto', sans-serif;
`;

const Header = (props) => {

    const matches = useMediaQuery('(min-width: 600px)');

    return(
        <div>
            <AppBar  elevation={1}  >
                <ToolbarS>
                    <Logo />
                    <TitleDivider orientation="vertical" />
                    {matches ? <PageTitle variant={`h5`} >
                        Калькулятор утеплення
                        </PageTitle> : <PageTitle variant={`h6`} >
                        Калькулятор утеплення
                        </PageTitle> }
                    { matches ?  
                        <IconsSet>
                            <Button style={{display: 'none'}} disabled color="secondary" variant="outlined" startIcon={<TranslateIcon />}>
                               Ukrainian
                            </Button >
                        </IconsSet>
                        : null
                    }   

                </ToolbarS>
            </AppBar>
            <Toolbar />
        </div>
    );
};



export default Header;