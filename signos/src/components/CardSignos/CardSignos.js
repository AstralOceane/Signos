import React from 'react'
import Button from '@material-ui/core'

const CardSignos = (props) =>{
    return (
        <div>
            <section>
                <p><strong>{props.signo}</strong></p>
            </section>
            <img src={props.imagem} alt={props.signo}/>
            <section>
                <p>{props.dataInicio} - {props.dataFim}</p>
            </section>
            {/* <Button variant="outlined" color="primary">Ver detalhes</Button> */}
        </div>
    )
}

export default CardSignos