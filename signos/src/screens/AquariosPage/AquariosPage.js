import React from 'react'
import {goToHomePage} from '../../routes/Coordenator'
import {Button} from '@material-ui/core'
import { useHistory } from 'react-router-dom'

const AquariosPage = () =>{
    const history = useHistory()

    return (
        <div>
            <section>
                <Button
                 onClick={() => goToHomePage(history)}
                 variant="contained"
                color="secondary">Voltar</Button>
            </section>

            Aquarios
        </div>
    )
}

export default AquariosPage