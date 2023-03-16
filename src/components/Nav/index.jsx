import { Container } from "./style";
import logoMarca from "../../assets/frame.svg"
import menu from "../../assets/bars-solid 2.svg"

function Nav(){
    return(
        <Container>
            <div className="logoMarca">
                <img src={logoMarca}/>
                <h1><span>EMPIRE</span> BURGER</h1>
            </div>
            <img className="menu" src={menu}/>
        </Container>
    )
}

export default Nav 