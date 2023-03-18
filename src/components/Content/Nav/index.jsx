import { Container } from "./style";
import logoMarca from "../../assets/Frame.svg"
import menu from "../../assets/bars-solid2.svg"

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