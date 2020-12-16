import React from 'react'
import Button from '@material-ui/core'
import {CardSignosContainer, NomeSigno, PeriodoNascimento} from './styles'

const CardSignos = (props) =>{
    return (
        <CardSignosContainer>
            <section>
                <NomeSigno><strong>{props.signo}</strong></NomeSigno>
            </section>
            <img src={props.imagem} alt={props.signo}/>
            <section>
                <PeriodoNascimento>{props.dataInicio} - {props.dataFim}</PeriodoNascimento>
            </section>
            {/* <Button variant="outlined" color="primary">Ver detalhes</Button> */}
        </CardSignosContainer>
    )
}

export default CardSignos