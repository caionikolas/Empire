import styled from "styled-components";
import bannerMobile from '../../assets/bannerMobile.jpg';

export const Container = styled.section`
  @import url('https://fonts.googleapis.com/css2?family=Lato:wght@100;300;400;700;900&family=Lilita+One&display=swap');

  position: absolute;
  width: 428px;
  height: 855.46px;
  left: 0px;
  top: 0px;

background: url(${bannerMobile});
`

export const BannerName = styled.h1`
    position: absolute;
    width: 322px;
    height: 59px;
    left: 23.85px;
    top: 127px;

    font-family: 'Lilita One';
    font-style: normal;
    font-weight: normal;
    font-size: 53.3477px;
    line-height: 59px;
    

    span{
      color: #F59A1B;
    }

    color: #3B200B;
`

export const BannerDescription = styled.p`
  position: absolute;
  width: 270px;
  height: 23px;
  left: 23.85px;
  top: 186px;

  font-family: 'Lato';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;

  color: rgba(29, 6, 5, 0.69);

  span{
    font-weight: 900;
    color: #1D0605B0;
    background-color: #F59A1B;
    border-radius: 3px;
  }
`

export const BannerMenssager = styled.p`

position: absolute;
width: 184px;
height: 26px;
left: 23.85px;
top: 101px;

font-family: 'Lato';
font-style: normal;
font-weight: 700;
font-size: 18px;
line-height: 25px;
`

export const BannerButton = styled.button`

position: absolute;
width: 151.64px;
height: 43.32px;
left: 23.85px;
top: 225.23px;

font-weight: 700;

background: #F43127;

border-radius: 5.08023px;
border: none;
span{
  width: 111px;
height: 23px;

font-family: 'Lato';
font-style: normal;
font-weight: 700;
font-size: 16px;
line-height: 22px;
color: white;

}
`
