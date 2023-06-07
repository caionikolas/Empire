import "./localization.css"
import Image from "next/image"
import clock from "../../assets/images/timer.svg"
import { lilitaOne } from "@/app/layout"

export default function Localization(){
    return (
        <>
            <div id="localization">
                <div className="time">
                    <div className="timer">
                        <Image 
                            src={clock}
                            alt="icone de relogio"
                        />
                    </div>
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
                
                <h3 className={lilitaOne.className}>Onde fica nosso castelo</h3>
                <p>Estaremos de portas abertas para a nossa realeza.</p>
                <div className="map">
                    <h1>mapa aqui</h1>
                </div>
            </div>
        </>
    )
}