import "./localization.css"
import { Lilita_One  } from 'next/font/google'

import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import Menu from "../menu/Menu";
import Service from "../service/service";
import Delivery from "../delivery/delivery";

const lilitaOne = Lilita_One({ 
    subsets: ['latin'],
    weight: '400',
    variable: '--font-lilitaOne'
   })

export default function Localization(){

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
                            <div className="timer"></div>
                            <div className="time-operation">
                                <h3 className={lilitaOne.className}>Horário de funcionamento</h3>
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