import styled from "styled-components";

export const Container = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Lato:wght@100;300;400;700;900&family=Lilita+One&display=swap');

    @media (max-width: 428px){
        z-index: 1;
        background-color: rgba(255, 255, 255, 1);
        width: 355.57px;
        height: 322.97px;
        position: absolute;
        top: 748.21px;
        left: 33.21px;
        border-radius: 10px;
        .qualit{
            display: flex;
            align-items: center;
            .img{
                width: 60px;
                height: 60px;
                background-color: rgba(250, 226, 203, 1);
                display: flex;
                justify-content: center;
                align-items: center;
                border-radius: 50%;
                margin: 30.48px 18px 20.5px 36.21px;
            }
            h3{
                font-family: "Lilita One";
                color: rgba(29, 6, 5, 0.9);
                opacity: 80%;
                font-weight: 400;
                font-size: 20px;
                line-height: 22px;
            }
            P{
                width: 170px;
                font-family: "Lato";
                color: rgba(29, 6, 5, 0.69);
                opacity: 60%;
                font-weight: 400;
                font-size: 16px;
                line-height: 19.2px
            }
        }
    }
`
