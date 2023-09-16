"use client"

import "./localization.css"
import { Lilita_One  } from 'next/font/google'
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';

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
        <div id="localization">
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
    )
}