import styled from "styled-components";

export const Container = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Lato:wght@100;300;400;700;900&family=Lilita+One&display=swap');

  @media (max-width: 428px){
  width: 380px;
  height: 734.66px;
  position: absolute;
  top: 1135.18px;
  left: 25px;
    .oferta{
      h2{
        font-family: "Lilita One";
        font-weight: 400px;
        font-size: 25px;
        line-height: 27.5px;
        color: rgba(29, 6, 5, 0.9);
      }
      p{
        font-family: "Lato";
        font-weight: 400;
        font-size: 16px;
        line-height: 22.4px;
        color: rgba(29, 6, 5, 0.69);
        margin-bottom: 8px;
      }
    }
    .cardapio{
      .img{
        position: relative;
        margin-top: 8px;
        img, .img{
          height: 211.91px;
          width: 379.46px;
        }
        h3{
          position: absolute;
          z-index: 1;
          top: 13.63px;
          font-family: "Lilita One";
          font-weight: 400;
          font-size: 20.49px;
          line-height: 22.54px;
        }
      }
    }
  }
`