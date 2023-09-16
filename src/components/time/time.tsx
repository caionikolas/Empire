import "./time.css"
import { Lilita_One  } from 'next/font/google'

const lilitaOne = Lilita_One({ 
    subsets: ['latin'],
    weight: '400',
    variable: '--font-lilitaOne'
   })

let semana = ["Domingo", "Segunda-Feira", "Terça-Feira", "Quarta-Feira", "Quinta-Feira", "Sexta-Feira", "Sábado"];
const date = new Date();
const hora = date.getHours()
const diaSemana = semana[date.getDay()]

export default function Time(){
    return (
        <div id="time">
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
        </div>
    )
}