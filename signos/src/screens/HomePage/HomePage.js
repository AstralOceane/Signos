import React from 'react'
import {useHistory} from 'react-router-dom'
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
import {goToAquariosPage, goToPeixesPage, goToAriesPage, goToTouroPage, goToCancerPage, goToLeaoPage, goToVirgemPage, goToLibraPage, goToEscorpiaoPage, goToSargitarioPage, goToCapricornioPage } from '../../routes/Coordenator'

const Homepage = () =>{
  const history = useHistory()
    return (
        <HomePageContainer>
            <CardSignos
          signo="Aquário" dataInicio="21/01"
          dataFim="19/02" imagem={Aquario}
          funcao={() => goToAquariosPage(history)}
          />

        <CardSignos
          signo="Peixes" dataInicio="20/02"
          dataFim="20/03" imagem={Peixes}
          funcao={() => goToPeixesPage(history)}
          />

        <CardSignos
          signo="Áries" dataInicio="21/03"
          dataFim="20/04" imagem={Aries}
          funcao={() => goToAriesPage(history)}
          />

        <CardSignos
          signo="Touro" dataInicio="21/04"
          dataFim="21/05" imagem={Touro}
          funcao={() => goToTouroPage(history)}
          />

        <CardSignos
          signo="Gêmeos" dataInicio=" 22/05"
          dataFim="21/06" imagem={Gemeos}
          funcao={() => goToAriesPage(history)}
          />

        <CardSignos
          signo="Câncer" dataInicio="21/06"
          dataFim="23/07" imagem={Cancer} 
          funcao={() => goToCancerPage(history)}

          />

        <CardSignos
          signo="Leão" dataInicio="24/07"
          dataFim="23/08" imagem={Leao}
          funcao={() =>  goToLeaoPage(history)}
          />

        <CardSignos
          signo="Virgem" dataInicio="24/08"
          dataFim="23/09" imagem={Virgem}
          funcao={() =>  goToVirgemPage(history)}
          />

        <CardSignos
          signo="Libra" dataInicio="24/09"
          dataFim="23/10" imagem={Libra}
          funcao={() =>  goToLibraPage(history)}
          />

        <CardSignos
          signo="Escorpião" dataInicio="24/10"
          dataFim="22/11" imagem={Escorpiao}
          funcao={() =>  goToEscorpiaoPage(history)}
          />

        <CardSignos
          signo="Sagitário" dataInicio="23/11"
          dataFim="21/12" imagem={Sargitario}
          funcao={() =>  goToSargitarioPage(history)}
          />

        <CardSignos
          signo="Capricórnio" dataInicio="22/12"
          dataFim="20/01" imagem={Capricornio}
          funcao={() =>  goToCapricornioPage(history)}
          />
        </HomePageContainer>
    )
}

export default Homepage