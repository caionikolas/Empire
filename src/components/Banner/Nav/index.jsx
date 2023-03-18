import { Container } from "./style";
import logoMarca from "../../../assets/logoMarca.svg"
import menu from "../../../assets/menu.svg"

function Nav(){
    return(
        <Container>
            <div className="logoMarca">
                <img src={logoMarca}/>
                <h1><span>EMPIRE</span> BURGER</h1>
            </div>
            <button className="menu"><img src={menu}/></button>
        </Container>
    )
}

export default Nav 