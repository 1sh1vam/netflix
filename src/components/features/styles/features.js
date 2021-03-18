import styled from "styled-components"

export const Container = styled.div`
    color: #fff;
    max-width: 950px;
    margin: 75px auto;
    margin-top: 90px;
    padding: 75px 0;
    text-align: center;

    @media (max-width: 550px) {
        margin-top: 0px;
        margin-botom: 30px;
    }
`

export const Title = styled.h1`
    font-size: 4rem;
    max-width: 800px;
    margin: 0 auto;
    line-height: 1.1;

    @media (max-width: 1440px) {
        font-size: 3.125rem;
        max-width: 640px;
        margin: 0 auto
    }

    @media (max-width: 550px) {
        max-width: 90%;
        font-size: 1.75rem;
    }
`

export const Text = styled.p`
    font-size: 1.625rem;
    font-weight: 400;
    max-width: 800px;
    margin: 1rem auto;

    @media (max-width: 550px) {
        max-width: 90%;
        font-size: 1.125rem;
    }
`