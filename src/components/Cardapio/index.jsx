import { Container} from "./style";
import oferta1 from "./../../assets/oferta1.png"
import oferta2 from "./../../assets/oferta2.png"
import oferta3 from "./../../assets/oferta3.png"

export function Cardapio() {
  return (
    <Container>
        <div className="oferta">
            <h2>OFERTAS ESPECIAIS</h2>
            <p>Aproveite todas as nossas ofertas, fiquei de olho porque sempre estamos mudando o nosso cardapio.</p>
        </div>
        <div className="cardapio">
            <div className="img">
              <h3>BURGER PRIME+BATATA</h3>
              <img src={oferta1} alt="imagem do cardapio" />
            </div> 
        </div>
        <div className="cardapio">
            <div className="img">
              <h3>BURGER PRIME+BATATA</h3>
              <img src={oferta2} alt="imagem do cardapio" />
            </div>
        </div>
        <div className="cardapio">
            <div className="img">
              <h3>BURGER PRIME+BATATA</h3>
              <img src={oferta3} alt="imagem do cardapio" />
              
            </div>
        </div>
    </Container>
  )
}

export default Cardapio