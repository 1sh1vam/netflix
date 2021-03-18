import styled from "styled-components"

export const Container = styled.section`
    padding: 70px 45px;
    border-bottom: 8px solid #222;

    @media (max-width: 550px) {
        padding: 70px 0;
    }
`
export const Inner = styled.div`
    color: white;
    width: 90%;
    max-width: 815px;
    margin: 0 auto;
    @media (max-width: 550px) {
        width: 100%;
    }
    @media (max-width: 949px) {
        width: 100%;
    }
    

`
export const Item = styled.div`
    margin-bottom: 8px;
    font-size: 1.625rem;

    @media (max-width: 949px) {
        font-size: 1.25rem;
        width: 90%;
        margin: 0 auto;
        margin-bottom: 8px;
    }

    @media (max-width: 550px) {
        width: 100%;
        font-size: 1.25rem;
    }

`

export const Header = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #303030;
    margin-bottom: 1px;
    padding: .8em 2.2em .8em 1.2em;
    position: relative;
    cursor: pointer;
`

export const Title = styled.h1`
    font-size: 3.125rem;
    text-align: center;
    margin-top: 0;
    
    @media (max-width: 524px) {
        font-size: 1.625rem;
    }

    @media (max-width: 949px) {
        font-size: 2.5rem;
    }

`
export const Body = styled.div`
    padding: 1.2em;
    background-color: #303030;
    text-align: left;
`

export const Logo = styled.div`
    position: absolute;
    top: 50%;
    right: 1em;
    transform: translateY(-50%);
    width: 1em;
    height: 1em;
    fill: #fff;

    ${({open}) => open === false && `
        transform: rotate(-45deg);
        top:30%;
    `}
`

