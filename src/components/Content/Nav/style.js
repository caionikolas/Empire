import styled from "styled-components";
 
export const Container = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Lato:wght@100;300;400;700;900&family=Lilita+One&display=swap');

    
    @media (max-width: 428px){
        background: #3B200B0D;
        color: rgba(29, 6, 5, 0.9);
        display: flex;
        justify-content: space-between;
        width: 428px;
        height: 63.87px;

        .logoMarca{

            height: 35.19px;
            width: 264.69px;
            display: flex;
            justify-content: flex-start;
            margin-left: 24px;
            margin-top: 14.34px;
            margin-bottom: 14.34px;

                img{
                width: 30px;
                height: 30px;
                color: rgba(29, 6, 5, 0.9);
                }
                h1{
                width: 231px;
                height: 33px;
                font-family: 'Lato', sans-serif;
                font-weight: 400;
                font-size: 29.38px;
                line-height: 2rem;
                margin-left: 4.2px;
                    span{
                        font-weight: 900;
                    }
                } 
        }
        .menu{       
            width: 30px;
            height: 30px;
            margin: 16.94px;
            border-radius: 3px;
            border: none;

            :hover{
                background: #3B200B0D;
                color: rgba(29, 6, 5, 0.9);
            }
        }
    }
`