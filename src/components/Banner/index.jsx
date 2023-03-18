import { Container, BannerName, BannerDescription, BannerMenssager, BannerButton } from "./style";
import Nav from "./Nav";

export function Banner() {
  return (
    <Container>
        <Nav/>
        <BannerMenssager>Uma nova experiência!</BannerMenssager>
        <BannerName>KING <span>BURGER</span></BannerName>
        <BannerDescription>Para quem tem um <span>Apetite de um REI!</span></BannerDescription>
        <BannerButton><span>Compre Agora</span></BannerButton>
    </Container>
  )
}

export default Banner