import "./localization.css"
import { Lilita_One  } from 'next/font/google'

import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import Menu from "../menu/Menu";
import Service from "../service/service";
import Delivery from "../delivery/delivery";
import Comments from "../comments/comments";


const lilitaOne = Lilita_One({ 
    subsets: ['latin'],
    weight: '400',
    variable: '--font-lilitaOne'
   })

let semana = ["Domingo", "Segunda-Feira", "Terça-Feira", "Quarta-Feira", "Quinta-Feira", "Sexta-Feira", "Sábado"];
const date = new Date();
const hora = date.getHours()
const diaSemana = semana[date.getDay()]
var d = new Date();

export default async function Localization(){
  

    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: "AIzaSyCbOItkQ7N9wn2Bmo3iyOGEnS8gwbdZICI"
    })
    return (
        <>
            <div id="localization">
                <div className="th">
                    <div className="timer-hash">
                        <div className="time">
                            {(hora > 17 && hora <23) && (diaSemana != "Domingo" && diaSemana != "Sábado") || ((hora > 18.30 && hora <23) && (diaSemana == "Domingo" || diaSemana == "Sábado"))
                             ? <div className="test"></div> : null}
                            <div className="timer"></div>
                            <div className="time-operation">
                                <h3 className={lilitaOne.className}>
                                    {(hora > 17 && hora <23) && (diaSemana != "Domingo" && diaSemana != "Sábado") || ((hora > 18.30 && hora <23) && (diaSemana == "Domingo" || diaSemana == "Sábado"))
                                    ? "Estamos Abertos!" : "Horário de funcionamento"}  
                                </h3>
                                <p>Segunda a sexta: 17h00 - 23h00</p>
                                <p>Sabado a Domíngo: 18h30 - 23h00</p>
                            </div>
                        </div>
                        <div className="hashtag">
                            <p>Não esqueça de marcar a gente no Instagram:</p>
                            <h2 className={lilitaOne.className}>#empireburger</h2>
                        </div>
                    </div>
                </div>
                <Menu/>
                <Service/>
                <Comments/>
                <Delivery/>
                <h3 className={lilitaOne.className}>Onde fica nosso castelo</h3>
                <p className="ploc">Estaremos de portas abertas para a nossa realeza.</p>
                <div className="map">
                    {isLoaded ? (
                        <GoogleMap
                            mapContainerStyle={{width: '100%', height: '100%'}}
                            center={{
                                lat: -5.086509858522025,
                                lng: -42.80310527611403
                            }}
                            zoom={15}
                        >
                            <></>
                        </GoogleMap>
                    ) : <></>}
                </div>
            </div>
        </>
    )
}