import styled from "styled-components"


export const Container = styled.div`
    width: 100%;
    overflow: hidden;
`;

export const Presentation = styled.div`
    height: max-content;
    
    padding-bottom: 120px;
    
    p {
        font-size: 24px;
        color: white;
        margin-left: 250px;  
        font-weight: bold;
        text-shadow: -15px 10px 15px #000000;
    }

    .texts {
        margin-top: 200px;
    }

    .texts h1:nth-child(2) {
        margin-left: -280px;
    }
    .texts h1:nth-child(3) {
        margin-left: 250px;
    }
    p:nth-child(4) {
        margin-left: 800px;
        text-align: justify;
    }
    
    h1 {
        font-size: 150px;
        font-weight: bold;
        color: #DFEDFF;
        text-align: center;
        text-shadow: -15px 10px 5px #000000;
        text-transform: uppercase;
        line-height: 100px;
        margin: 30px 0;
    };

    a {
        position: relative;
        left: 1015px;
        bottom: 260px;
        
    }

    img {
        width: 55px;
        height: 55px;
        transition: filter 0.2s;
    }

    img:hover {
        transform: scale(1.1);
        transition: 0.2s;
        filter: brightness(0.1);
    }
`;


export const Content = styled.div`
    
    align-items: center;

    .bc {
        display: grid;
        grid-template-columns: 1fr 1fr;
        
        
        border-radius: 10px;
        margin: 100px;
        padding: 50px;
        background: linear-gradient(90deg, #212121, #737373);
    }

    >  .bc .details {
        
        height: 100vh;
        padding: 0 20px;
        color: #E1E1E1;
        font-size: 24px;

        > h1 {
            
            font-size: 92px;
            color: #E1E1E1;
            
            margin: 24px auto 65px;
        }

        > h2 {
            font-size: 24px;
            color: whitesmoke;
            font-weight: 900;

            margin: 16px auto;
        }

        > p, li {
            font-size: 15px;
            color: #E1E1E1;   
        }

        li {
            display: flex;
            align-items: center;
            gap: 5px;
        }

        > p {
            margin-bottom: 10px;
        }

        > button {
            border: 3px solid #565656;
            outline: none;
            border-radius: 8px;
            background: linear-gradient(90deg, #212121, #34302D);
            padding: 12px;
            margin: 50px auto;
        }

        > button a {
            color: white;   
            font-size: 16px;
            font-weight: bold;
        }
    }
    
    

    .imgone img {
        display: flex;
        width: 440px;
        align-items: center;
        justify-content: center;
     
        position: relative;
        left: 220px;
        top: 450px;
    }
    .imgtwo img {
        width: 450px;
        border: 10px solid #212121;
        border-top: 6px solid #212121;
        border-radius: 6px;
        margin-top: 50px;
        margin-left: 50px;
        position: absolute;
        background: #212121;
        box-shadow: -8px 5px 10px #212121;
    }

    .img3 img {
        box-shadow: -8px 5px 10px #212121;
        width: 600px;
        margin: 50px auto;
        border-radius: 6px;
    }
    .img4 img {
        box-shadow: -8px 5px 10px #212121;
        width: 600px;
        border-radius: 6px;
    }

    .img6 img{
        width: 200px;
        position: relative;
        z-index: 1;
    }

    .img5 img{
        position: relative;
        bottom: 100px;
        width: 600px;
    }
    .icons {
        display: flex;
        gap: 10px;
        margin-top: 10px;
        flex-direction: column;
        justify-content: center;

    }
    
`;