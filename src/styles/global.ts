import { createGlobalStyle } from 'styled-components';

//GlobalStyle e' acessivel a qualquer componente da aplicacao
export const GlobalStyle = createGlobalStyle`
    //paleta de cores
    :root{
        --background: #f0f2f5;
        --red: #e52e4d;
        --blue: #5429cc;
        --light-blue: #6933ff;
        --green: #33cc95;
        --text-title: #363f5f;
        --text-body: #969cb3;
        --shape: #ffffff;
    }    

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box
    }

    html{
        /*Usado para configurar medida de rem:
        o que e' rem?
        1rem = tamanho da fonte size da pagina(padrao = 16px)
        usando rem e' boa pratica para html/css responsivel
        *usa-se o porcento ao inves de px para adaptabilidade do usuario, aso ele queira aumentar a tela ou diminuir
        */

        @media(max-width: 1000px){
            font-size: 93.75%; //15px
        }

        @media(max-width: 720px){
            font-size: 87.5%;
        }
    }

    body{
        background: var(--background);
        -webkit-font-smoothing: antialissed;
    }

    //todos os botoes terao o pointer do mouse
    button{
        cursor: pointer;
    }

    //elementos que nao recebem a font (google fonts) por padrao
    body, input, textarea, button{
        font-family: "Poppins", sans-serif;
        font-weight: 400;
    }

    //para header, negrito e titulos
    h1, h2, h3, h4, h5, h6, strong{
        font-weight: 600px;
    }

    //para tudo que estiver disabilitado
    [disabled]{
        opacity: 0.6;
        cursor: not-allowed;
    }

    .react-modal-overlay{
        background: rgba(0,0,0,0.5);
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .react-modal-content{
        width: 100%;
        max-width: 576px;
        background: var(--background);
        padding: 3rem;
        position: relative;
        border-radius: 0.25rem;
    }

    .close-button{
        position: absolute;
        right: 1.5rem;
        top: 1.5rem;
        border: 0;
        background: transparent;
        transition: filter 0.2s;

        &:hover{
            filter: brightness(0.9);
        }
    }
`