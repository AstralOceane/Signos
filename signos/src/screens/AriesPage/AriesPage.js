import React from 'react'
//signos images
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

//simbolos
import CabecaCarneiro1 from '../../assets/cabeça-carneiro1.svg'
import CabecaCarneiro2 from '../../assets/cabeça-carneiro2.svg'
import Simbolo from '../../assets/simbolo-carneiro.svg'

//Planet images
import Lua from '../../assets/lua.png'
import Mercurio from '../../assets/mercurio.png'
import Venus from '../../assets/venus.png'
import Marte from '../../assets/marte.png'
import Jupter from '../../assets/jupiter.png'
import Saturno from '../../assets/saturno.png'
import Urano from '../../assets/urano.png'
import Neturno from '../../assets/netuno.png'
import Plutao from '../../assets/plutao.png'

//Coordenadas Signos
import {goToAquariosPage, goToPeixesPage, goToAriesPage, goToTouroPage, goToGemeosPage,goToCancerPage, goToLeaoPage, goToVirgemPage, goToLibraPage, goToEscorpiaoPage, goToSargitarioPage, goToCapricornioPage } from '../../routes/Coordenator'

import {InfoSignosContainer, SignoContainter, OutrosSingnosContainer, CaracteristicasDoSignoContainer, DataSignoContainer, SingnificadoDoSignoContainer, FlexCabecaCarneiro1,FlexSimbolo,FlexCabecaCarneiro2, FlexInfo4  } from './styles'

import {Button} from '@material-ui/core'
import { useHistory } from 'react-router-dom'

const AriesPage = () =>{
    const history = useHistory()
    return(
        <InfoSignosContainer>
            <SignoContainter>
                <img src={Aries} alt="Aries"/>
                <section>
                    <h2>Àries</h2>
                    <p>
                        21/03 - 19/04
                    </p>
                    <p>
                        Esse é mesmo o seu signo
                    </p>
                </section>

            </SignoContainter>
            <section>
                <h2>HORÓSCOPO DO AMOR</h2> 
                    Reflita com afinco a respeito dos problemas com 
                    muita dedicação para conseguir priorizar o amor.
                    Foque no seu bem-estar emocional e seja racional
                    perante as dificuldades, conforme pede Saturno.
            </section>
            <OutrosSingnosContainer>
                    <h2><strong>OUTROS SIGNOS:</strong></h2>
                    <section>
                        
                        <Button color="inherit" onClick={() => goToAquariosPage(history)}>
                            <img src={Aquario} alt="aquário"/>
                        </Button>
                        

                        <Button color="inherit" onClick={() => goToPeixesPage(history)}>
                            <img src={Peixes} alt="peixes"/>
                        </Button>

                        <Button color="inherit" onClick={() => goToAriesPage(history)}>
                            <img src={Aries} alt="aries"/>
                        </Button>

                        <Button color="inherit" onClick={() => goToTouroPage(history)}>
                            <img src={Touro} alt="touro"/>
                        </Button>

                        <Button color="inherit" onClick={() => goToGemeosPage(history)}>
                            <img src={Gemeos} alt="gêmeos"/>
                        </Button>

                        <Button color="inherit" onClick={() => goToCancerPage(history)}>
                            <img src={Cancer} alt="câncer"/>
                        </Button>

                        <Button color="inherit" onClick={() => goToLeaoPage(history)}>
                            <img src={Leao} alt="leão"/>
                        </Button>

                        <Button color="inherit" onClick={() => goToVirgemPage(history)}>
                            <img src={Virgem} alt="virgem"/>
                        </Button>

                        <Button color="inherit" onClick={() => goToLibraPage(history)}>
                            <img src={Libra} alt="libra"/>
                        </Button>

                        <Button color="inherit" onClick={() => goToEscorpiaoPage(history)}>
                            <img src={Escorpiao} alt="escorpião"/>
                        </Button>

                        <Button color="inherit" onClick={() => goToSargitarioPage(history)}>
                            <img src={Sargitario} alt="sargitário"/>
                        </Button>

                        <Button color="inherit" onClick={() => goToCapricornioPage(history)}>
                            <img src={Capricornio} alt="capricórnio"/>
                        </Button>
                    </section>
                    
                </OutrosSingnosContainer>
            <CaracteristicasDoSignoContainer >
                    <h2>CARACTERÍSTICAS DO SIGNO DE ÁRIES</h2>
                    <p>

                    Dinâmicos e sinceros, quem tem sol em Áries costuma ter um forte
                    contato com a sua individualidade, que pode parecer egoísmo em alguns momentos.
                    Arianas e arianos tendem a ser alegres e muito extrovertidos, mas também podem ser
                    bastante competitivos e soar um pouco autoritários. Podem preferir trabalhar sozinhos,
                    mas costumam ter um ótimo espírito de liderança.
                    </p>
                    <p>
                    Quem tem o signo de Áries em posição marcante no Mapa Astral de nascimento, geralmente,
                    não se cansa com facilidade; sua disposição e resistência físicas podem ser invejadas por todos
                    os outros signos. Áries é direto para alcançar suas metas e, em casos de pouca maturidade, arianas
                    e arianos podem gostar de criar rivalidades e ser um tanto quanto mandões. Marte como regente reforça
                    o perfil guerreiro do signo e também sinaliza possíveis explosões emocionais.
                    </p>
            </CaracteristicasDoSignoContainer >
            <DataSignoContainer>

                    <section>
                        <h2>SIGNO DE ÁRIES - DATA: 21 DE MARÇO A 19 DE ABRIL</h2>
                        <p>

                            As pessoas consideradas de Áries, ou seja, que nasceram com o sol neste signo,
                            fazem aniversário em geral entre 21 de março e 19 de abril. Mas se você nasceu
                            nos primeiros 3 dias ou no últimos 3 dias de Áries, confirme se este é mesmo o seu signo.
                            A cada ano, o início e término de um signo podem variar. Faça a amostra gratuita do seu
                            Mapa Astral, com sua hora de nascimento, para confirmar seu signo solar e descobrir seu ascendente.
                        </p>
                            <p>
                                <strong>Planeta Regente: </strong>Marte
                            </p>
                        <img src={Marte} alt="planeta-marte"/>
                        <p>
                            Marte se relaciona com nossa força realizadora. Como regente de Áries,
                            destaca o impulso imediatista, a coragem para agir e tomar decisões.
                        </p>
                    </section>
                    <section>
                        <h3>Elemento:Fogo</h3>
                        <img src="" alt="fogo"/>
                        <p>Os signos do elemento Fogo veem o mundo de forma entusiasta.
                        Tendem a desenvolver uma forte criatividade e se guiar pelo seu poder de ação.</p>
                    </section>
                    <section>
                        <h3>Ritmo: Cardinal</h3>
                        <p>Os signos que são de ritmo cardinal se caracterizam pela força de liderança para
                        iniciar projetos e novos ciclos. Áries simboliza a energia vital do fogo.</p>
                    </section>
                    <section>
                        <h3>Cores: Amarelo, Azul e verde</h3>
                        <p>Amarelo destaca a criatividade e ajuda a manter a concentração para novos projetos e ações.
                        Azul e verde trazem mais equilíbrio e podem ajudar a controlar ansiedade e estresse.</p>
                        
                    </section>
                    <section>
                        <h3>Flores: Impatiens</h3>
                        <p>Ajuda a lidar com impaciência, irritabilidade
                        e pode equilibrar agitação, momentos de tensão e nervosismo.</p>
                    </section>
                    <section>
                        <h3>Pedras: Amentista e Turmalina Rosa</h3>
                        <p>A ametista traz mais sabedoria e pode ajudar a canalizar os atos mais impulsivos.
                        Já a turmalina rosa pode direcionar uma energia amorosa à ação.</p>
                    </section>
            </DataSignoContainer>
            <SingnificadoDoSignoContainer>
                    <h3>SIGNIFICADO DO SIGNO DE ÁRIES</h3>
                <section>
                    <section>

                        <FlexCabecaCarneiro1>
                            <img src={CabecaCarneiro1} alt="cabeça de carneiro"/>
                            
                                <p>
                                    Áries, o carneiro. Não consegue voltar atrás depois de se lançar de cabeça em uma direção,
                                    age de modo firme, forte e impetuoso. A decisão soberana que desperta todo o resto.
                                </p>
                        
                        </FlexCabecaCarneiro1>
                    </section>
                    <section>

                        <FlexSimbolo>
                            <img src={Simbolo} alt="Simbolo de aries"/>
                        <p>
                                O símbolo de Áries pode ser interpretado como uma fonte que jorra energia para todos os lados
                                e destaca o potencial de motivação do signo. A ação do fogo que ganha corpo na terra,
                                raciocínio no ar e sentimento na água.
                            </p>
                        </FlexSimbolo>
                    </section>
                    <section>

                        <FlexCabecaCarneiro2>
                            <img src={CabecaCarneiro2}  alt="a cabeça do carneiro"/>
                            <p>
                                A cabeça do carneiro é o que motiva e impulsiona os outros onze signos, que abre todas as portas com sua força
                                e resistência inabaláveis. É o primeiro movimento que inicia qualquer realização.
                            </p>
                        </FlexCabecaCarneiro2>
                    </section>
                    <section>

                        <FlexInfo4>
                            Os chifres representam o sentido de poder e a elevação, a potência viril dos guerreiros que alcançam
                            a vitória nos combates. Força representada nas roupas de guerra dos antigos cavaleiros.
                        </FlexInfo4>
                    </section>
                </section>
                </SingnificadoDoSignoContainer>
                <OutrosSingnosContainer>
                <h2><strong>OUTROS SIGNOS:</strong></h2>
                    <section>
                        
                        <Button color="inherit" onClick={() => goToAquariosPage(history)}>
                            <img src={Aquario} alt="aquário"/>
                        </Button>
                        

                        <Button color="inherit" onClick={() => goToPeixesPage(history)}>
                            <img src={Peixes} alt="peixes"/>
                        </Button>

                        <Button color="inherit" onClick={() => goToAriesPage(history)}>
                            <img src={Aries} alt="aries"/>
                        </Button>

                        <Button color="inherit" onClick={() => goToTouroPage(history)}>
                            <img src={Touro} alt="touro"/>
                        </Button>

                        <Button color="inherit" onClick={() => goToGemeosPage(history)}>
                            <img src={Gemeos} alt="gêmeos"/>
                        </Button>

                        <Button color="inherit" onClick={() => goToCancerPage(history)}>
                            <img src={Cancer} alt="câncer"/>
                        </Button>

                        <Button color="inherit" onClick={() => goToLeaoPage(history)}>
                            <img src={Leao} alt="leão"/>
                        </Button>

                        <Button color="inherit" onClick={() => goToVirgemPage(history)}>
                            <img src={Virgem} alt="virgem"/>
                        </Button>

                        <Button color="inherit" onClick={() => goToLibraPage(history)}>
                            <img src={Libra} alt="libra"/>
                        </Button>

                        <Button color="inherit" onClick={() => goToEscorpiaoPage(history)}>
                            <img src={Escorpiao} alt="escorpião"/>
                        </Button>

                        <Button color="inherit" onClick={() => goToSargitarioPage(history)}>
                            <img src={Sargitario} alt="sargitário"/>
                        </Button>

                        <Button color="inherit" onClick={() => goToCapricornioPage(history)}>
                            <img src={Capricornio} alt="capricórnio"/>
                        </Button>
                    </section>
                    
                </OutrosSingnosContainer>
                <section>
                    <h3>ÁRIES NO MAPA ASTRAL</h3>
                <p>
                    Você pode se identificar com as características de Áries mesmo que tenha o sol em outro signo no seu Mapa Astral.
                     Alguns posicionamentos sinalizam para personalidades “quase arianas”, como por exemplo, Sol na Casa 1, Lua em
                    Áries ou Ascendente em Áries. Mesmo que você não tenha nenhum planeta no signo, a casa que ele ocupa no seu mapa 
                    revela a área da vida onde você expressa as características de Áries.
                </p>
                <img src="" alt="exemplo de madala astrologica"/>

                </section>
                <section>
                        <h3>ASCENDENTE EM ÁRIES</h3>
                        <p>
                            Geralmente quem tem ascendente em Áries tende a ter posturas impacientes, ambiciosas e agitadas,
                             além de uma pressa quase constante de aproveitar a vida. Áries como signo ascendente também pode
                             demonstrar características como franqueza, dinamismo e espírito empreendedor, e ainda, uma dose extra
                            de ansiedade e possível necessidade de autoafirmação.</p>
                </section>
                <section>
                        <h3>OS PLANETAS EM ÁRIES </h3>
                        <section>
                            <img src={Lua} alt="lua"/>
                            <section>
                                <h4>LUA EM ÁRIES: como sentimos e vivenciamos as emoções</h4>
                                <p>Não costuma ter muita paciência, principalmente para esperar por ação de outras pessoas.
                                    Busca desenvolver sua independência e pode ter reações agressivas. A segurança emocional
                                    vem principalmente da auto-afirmação e confiança pessoal.</p>
                            </section>
                        </section>
                        <section>
                            <img src={Mercurio} alt="mercúrio"/>
                            <section>
                                <h4>MERCÚRIO EM ÁRIES: como pensamos e como nos comunicamos</h4>
                                <p>Agilidade mental e capacidade de tomar decisões rápidas. Costuma ter uma comunicação direta,
                                espontânea, bem franca e os confrontos podem ser necessários para o aprendizado. O interesse em si
                                 mesmo também é uma marca, além da criatividade.</p>
                            </section>
                        </section>
                        <section>
                            <img src={Venus} alt="vênus"/>
                            <section>
                                <h4>VÊNUS EM ÁRIES: nossa forma de amar e o como enxergamos a beleza</h4>
                                <p>Vênus no signo de Áries ama com impulsividade. Provavelmente, toma a iniciativa nas relações,
                                     mas também preza pela individualidade e independência. Demonstra afeto de forma direta e gosta,
                                    especialmente, dos inícios de relacionamento.</p>
                            </section>
                        </section>
                        <section>
                            <img src={Marte} alt="marte"/>
                            <section>
                                <h4>MARTE EM ÁRIES: como buscamos o que queremos ocnquistar</h4>
                                <p>Um dos posicionamentos mais intensos do planeta. Marte em Áries age
                                     diretamente em direção aos seus objetivos, costuma enfrentar obstáculos de
                                    frente e pode fazer isso com certa imprudência. Geralmente demonstra muita
                                    força de vontade.</p>
                            </section>
                        </section>
                        <section>
                            <img src={Jupter} alt="júpiter"/>
                            <section>
                                <h4>JÚPITER EM ÁRIES: onde estão nossas maiores oportunidades</h4>
                                <p>Júpiter em Áries pode apresentar muito entusiasmo para novos projetos,
                                    além de uma ótima capacidade para motivar outras pessoas. Entende a importância
                                    da fé em seu próprio potencial e pode também desenvolver agressividade em excesso.</p>
                            </section>
                        </section>
                        
                        <section>
                            <img src={Saturno} alt="saturno"/>
                            <section>
                                <h4>SATURNO EM ÁRIES: os desafios e lições que precisamos superar</h4>
                                <p>Costuma manter um pé atrás quando está iniciando novos projetos e pode ter seu 
                                    potencial de ação limitado pelo excesso de cautela. A aceitação de responsabilidades
                                    pessoais e comportamentos infantis também podem ser característicos.</p>
                            </section>
                        </section>
                        <section>
                            <img src={Urano} alt="urano"/>
                            <section>
                                <h4>URANO EM ÁRIES: quais caminhos podem nos surpreender</h4>
                                <p>Urano em Áries pode significar comportamentos fora do convencional,
                                     posturas rebeldes e um gosto voltado para tudo que é moderno ou de vanguarda.
                                    Pioneirismo e apreço pela liberdade também podem ser características fortes.</p>
                            </section>
                        </section>
                        <section>
                            <img src={Neturno} alt="neturno"/>
                            <section>
                                <h4>NETUNO EM ÁRIES: onde somos sensíveis ao engano e á ilusão</h4>
                                <p>Esse posicionamento no Mapa Astral pode indicar um perfil facilmente influenciável
                                    pelo ambiente em que está inserido. Geralmente, são pessoas intuitivas e criativas. Contudo,
                                    o planeta esteve no signo de Áries pela última vez entre 1861 e 1874.</p>
                            </section>
                        </section>
                        <section>
                            <img src={Plutao} alt="plutão"/>
                            <section>
                                <h4>PLUTÃO EM ÁRIES: onde buscamos poder e transformações</h4>
                                <p>Plutão em Áries aponta para uma personalidade profunda e obsessiva,
                                    que possui uma influência inegável no seu ambiente externo. O planeta
                                    esteve no signo pela última vez entre 1822 e 1851, só quem nasceu nesse
                                    período tem esse posicionamento.</p>
                            </section>
                        </section>
                        
                </section>
         
        </InfoSignosContainer>
    )
}

export default AriesPage