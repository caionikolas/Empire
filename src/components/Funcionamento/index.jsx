import { Container, ContainerText } from "./style";
import relogio from "../../assets/relogio.svg"

function Funcionamento(){

  return(
  <>
    <Container>
      <img src={relogio}/>
    </Container>
    <ContainerText>
      <h2>Horário de funcionamento</h2>
    </ContainerText>
  </>
  )
}

export default Funcionamento;