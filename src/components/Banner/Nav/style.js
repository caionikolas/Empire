import styled from "styled-components";
 
export const Container = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Lato:wght@100;300;400;700;900&family=Lilita+One&display=swap');

    
    @media (max-width: 428px){
        background: rgba(59, 32, 11, 0.05);
        display: flex;
        justify-content: space-between;
        width: 428px;
        height: 63.87px;
        .logoMarca{
            height: 35.19px;
            width: 264.69px;
            margin-top: 14.34px;
            margin-left: 24px;
            display: flex;
            color: rgba(29, 6, 5, 0.9);
                img{
                width: 29.49px;
                height: 30.81px;
                }
                h1{
                width: 231px;
                height: 33px;
                margin-top: 1.99px;
                margin-left: 4.2px;
                font-family: 'Lato', sans-serif;
                font-style: mixed;
                text-align: left;
                vertical-align: top;
                font-weight: 400;
                font-size: 26px;
                line-height: 32.32px;
                    span{
                        font-weight: 900;
                    }
                } 
        }
        .menu{       
            width: 30px;
            height: 30px;
            border-radius: 3px;
            border: none;
            margin-top: 16.94px;
            margin-right: 16.94px;
            background: rgba(29, 6, 5, 0.15);
            :hover{
                background: rgba(29, 6, 5, 0.15);
            }
        }
    }
`