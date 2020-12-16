import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import AquariosPage from '../screens/AquariosPage/AquariosPage'
import AriesPage from '../screens/AriesPage/AriesPage'
import CancerPage from '../screens/CancerPage/CancerPage'
import CapricornioPage from '../screens/CapricornioPage/CapricornioPage'
import EscorpiaoPage from '../screens/EscorpiaoPage/EscorpiaoPage'
import GemeosPage from '../screens/GemeosPage/GemeosPage'
import HomePage    from '../screens/HomePage/HomePage'
import LeaoPage from '../screens/LeaoPage/LeaoPage'
import LibraPage from '../screens/LibraPage/LibraPage'
import PeixesPage from '../screens/PeixesPage/PeixesPage'
import SargitarioPage from '../screens/SagitarioPage/SagitarioPage'
import TouroPage from '../screens/TouroPage/TouroPage'
import VirgemPage from '../screens/VirgemPage/VirgemPage'

const Router = () =>{
    return (
        <BrowserRouter>
            <Switch>
                    <Route exact path={"/"} component={HomePage} />
                    <Route exact path={"/aqurios"} component={AquariosPage} />
                    <Route exact path={"/aries"} component={AriesPage} />
                    <Route exact path={"/cancer"} component={CancerPage} />
                    <Route exact path={"/capricornio"} component={CapricornioPage} />
                    <Route exact path={"/escorpiao"} component={EscorpiaoPage} />
                    <Route exact path={"/Gemeos"} component={GemeosPage} />
                    <Route exact path={"/leao"} component={LeaoPage} />
                    <Route exact path={"/libra"} component={LibraPage} />
                    <Route exact path={"/peixes"} component={PeixesPage} />
                    <Route exact path={"/sargitario"} component={SargitarioPage} />
                    <Route exact path={"/touro"} component={TouroPage} />
                    <Route exact path={"/virgem"} component={VirgemPage} />
            </Switch>
        </BrowserRouter>
    )
}

export default Router