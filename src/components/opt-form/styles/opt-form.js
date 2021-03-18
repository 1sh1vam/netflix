import styled from "styled-components"

export const Container = styled.div`
    width: 100%;
    margin: 0 auto;
    margin-top: ${({margintop}) => !margintop ? "0px" : "33.2px"};
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    @media (max-width: 949px) {
        flex-direction: column;
        align-items: center;
    }

`

export const Text = styled.p`
    font-size: 1.2rem;
    text-align: center;
    padding: 0 5%;
    @media (max-width: 949px) {
        font-size: 23px;
        padding: 0 10%;
        max-width: 450px;
        margin: 0 auto;
        padding-bottom: 15px;
    }

    @media (max-width: 730px) {
        font-size: 18px;
        padding: 0 10%;
        max-width: 450px;
        margin: 0 auto;
        padding-bottom: 10px;
    }


`

export const Input = styled.input`
    width: 500px;
    height: 70px;
    padding: 0 10px;
    border-radius: 2px;
    border: unset;
    border-bottom: 2px solid #ffa00a;
    box-sizing: border-box;
    font-size: 16px;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;

    @media(max-width: 949px) {
        max-width: 500px;
        width: 100%;
        height: 60px;
        border-top-right-radius: 2px;
        border-bottom-right-radius: 2px;

    }

    @media(max-width: 700px) {
        max-width: 450px;
        width: 90%;
        margin: 0 auto;
        height: 48px;
        border-top-right-radius: 2px;
        border-bottom-right-radius: 2px;
    }

`

export const Button = styled.button`
    height: 70px;
    padding: 0 1em;
    box-sizing: border-box;
    border-radius: 2px;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    border: unset;
    background-image: linear-gradient(to bottom,#e50914,#db0510);
    color: white;
    font-size: 1.875rem;
    cursor: pointer;
    @media (max-width: 949px) {
        height: 60px;
        border-top-left-radius: 2px;
        border-bottom-left-radius: 2px;
        height: 40px;
        margin-top: 10px; 
        font-size: 1rem;
    }

    img {
        max-width: 24px;
        filter: brightness(0) invert(1);
        width: 100%;
        color: white;

        @media (max-width: 949px) {
            max-width: 16px;
        }
    }

    &:hover {
        background: #f40612;
    }

`

// export const Logo = styled.div`
    
// `
