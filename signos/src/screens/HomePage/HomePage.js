import React from 'react'
import {HomePageContainer} from './styles'
import CardSignos from '../../components/CardSignos/CardSignos'
import Aquario from '../../assets/Aquarius.png'
import Peixes from '../../assets/Pisces.png'
import Aries from '../../assets/Aries.png'
import Touro from '../../assets/Taurus.png'
import Gemeos from '../../assets/Gemini.png'
import Cancer from '../../assets/Cancer.png'
import Leao from '../../assets/Leo.png'
import Virgem from '../../assets/Virgo.png'
import Libra from '../../assets/Libra.png'
import Escorpiao from '../../assets/Scorpio.png'
import Sargitario from '../../assets/Sagittarius.png'
import Capricornio from '../../assets/Capricorn.png'

const Homepage = () =>{
    return (
        <HomePageContainer>
            <CardSignos
          signo="Aquário" dataInicio="21/01"
          dataFim="19/02" imagem={Aquario}/>

        <CardSignos
          signo="Peixes" dataInicio="20/02"
          dataFim="20/03" imagem={Peixes} />

        <CardSignos
          signo="Áries" dataInicio="21/03"
          dataFim="20/04" imagem={Aries} />

        <CardSignos
          signo="Touro" dataInicio="21/04"
          dataFim="21/05" imagem={Touro} />

        <CardSignos
          signo="Gêmeos" dataInicio=" 22/05"
          dataFim="21/06" imagem={Gemeos} />

        <CardSignos
          signo="Câncer" dataInicio="21/06"
          dataFim="23/07" imagem={Cancer} />

        <CardSignos
          signo="Leão" dataInicio="24/07"
          dataFim="23/08" imagem={Leao} />

        <CardSignos
          signo="Virgem" dataInicio="24/08"
          dataFim="23/09" imagem={Virgem} />

        <CardSignos
          signo="Libra" dataInicio="24/09"
          dataFim="23/10" imagem={Libra} />

        <CardSignos
          signo="Escorpião" dataInicio="24/10"
          dataFim="22/11" imagem={Escorpiao} />

        <CardSignos
          signo="Sagitário" dataInicio="23/11"
          dataFim="21/12" imagem={Sargitario} />

        <CardSignos
          signo="Capricórnio" dataInicio="22/12"
          dataFim="20/01" imagem={Capricornio} />
        </HomePageContainer>
    )
}

export default Homepage