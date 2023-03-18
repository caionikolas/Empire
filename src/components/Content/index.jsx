import { Container } from "./style";
import logoBurger from "../../assets/hamburger.svg"
import logoDelivery from "../../assets/delivery.svg"
import logoAtendimento from "../../assets/atendimento.svg"

export function Content() {
  return (
    <Container>
        <div className="qualit">
            <div className="img">
                <img src={logoBurger} alt=""/>
            </div>
            <div>
                <h3>ARTESENAL</h3>
                <p>Nossas receitas são feitas com todo cuidado</p>
            </div>
        </div>
        <div className="qualit">
            <div className="img">
                <img src={logoAtendimento} alt=""/>
            </div>
            <div>
                <h3>ATENDIMENTO</h3>
                <p>Totalmente personalizado</p>
            </div>
        </div>
        <div className="qualit">
            <div className="img">
                <img src={logoDelivery} alt=""/>
            </div>
            <div>
                <h3>DELIVERY SPEED</h3>
                <p>Entregamos menos de 30 minutos</p>
            </div>
        </div>
    </Container>
  )
}

export default Content