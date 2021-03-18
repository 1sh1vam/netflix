import styled from "styled-components"

export const Inner = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: ${({direction}) => direction};
    width: 100%;
    max-width: 1100px;
    margin: 0 auto;
    @media (max-width: 1000px) {
        flex-direction: column;
        height: auto;
    }
`
export const Pane = styled.div`
    width: 50%;
    @media (max-width: 1000px) {
        width: 100%;
        text-align: center;
        
    }

    @media (min-width: 1000px) {
        position: relative;
        top: -40px;
    }

    ${({direction}) => direction==="row-reverse" &&
    `
        @media (min-width: 1000px) {
            position: relative;
            left: -7em;
        }
    `
}
`

export const Item = styled.div`
    border-bottom: 8px #222 solid;
    padding: 50px 25px;
    @media(min-width: 1000px) {
        max-height: 325px;
        padding: 70px 45px;
    }
    

`
export const Container = styled.section`
    background-color: #000;
    color: #fff;
`

export const Title = styled.h1`
    font-size: 3rem;
    margin: 0;
    margin-bottom: 0.3em;
    @media (max-width: 600px) {
        font-size: 2rem;
        margin-bottom: 0.25em;
    }
`

export const SubTitle = styled.h2`
    font-weight: 400;
    font-size: 1.5rem;
    margin: 0;
    @media (max-width: 600px) {
        font-size: 1.2rem;
    }
`

export const Image = styled.img`
    max-width: 100%;
    height: auto;
`