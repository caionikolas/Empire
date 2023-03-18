import Content from "./components/Content"
import { GlobalStyle } from "./style/global"
import Banner from "./components/Banner"
import Cardapio from "./components/Cardapio"
import Funcionamento from "./components/Funcionamento"

function App() {
  return (
    <>
    <GlobalStyle/>
    <Banner/>
    <Content/>
    <Cardapio/>
    <Funcionamento/>
    </>
  )
}

export default App