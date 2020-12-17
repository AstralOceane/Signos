import React from 'react'
import {HeaderStyled} from './styles'

import { ButtonsContainer } from "./styles";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";

import { useHistory } from "react-router-dom";
import {goToHomePage,  goBack} from "../../routes/Coordenator";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from '../../constants/theme'

const Header = () => {
const history = useHistory()

    return (

        <ThemeProvider theme={theme}>
            <AppBar className={"appbar"}>
                <Toolbar>
                    <ButtonsContainer>
                    <Button color="inherit" onClick={() => goToHomePage(history)}>
                        <h2>Ver baralho dos Signos</h2>
                    </Button>
                    <Button onClick={() => goBack(history)} color="inherit">
                        Voltar
                    </Button>
                    </ButtonsContainer>
                </Toolbar>
            </AppBar>
      </ThemeProvider>

    )
}

export default Header