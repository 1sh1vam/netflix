import styled from "styled-components"

export const Container = styled.div`
    max-width: 1000px;
    margin: 0 auto;
    color: #757575;
    padding: 50px 25px;

    @media (min-width: 700px) {
        padding: 70px 45px;
    }
`
export const ContainerDiv = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 900px;
    margin: 0 auto;
    padding: 0 45px;
    @media(max-width: 1000px) {
        padding: 0 25px;
    }
`
export const Break = styled.div`
    flex-basis: 100%;
    height: 0;
`

export const Row = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    grid-gap: 15px;

    @media(max-width: 1000px) {
        grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
        grid-gap: 0px;
    }

`
export const Column = styled.div`
    display: flex;
    flex-direction: column;
    height: max-content;
    justify-content: space-between;
    margin: 0;

`

export const Title = styled.h2`
    margin: 0 75px;
    font-size: 1rem;
    font-weight: 400;
    margin: 0;
    margin-bottom: 25px;
`

export const Text = styled.p`
    font-size: 0.8rem;
    margin-top: 40px;
    margin-bottom: 0;
`

export const Link = styled.a`
    font-size: 0.8rem;
    text-decoration: none;
    color: inherit;
    margin: 9px 0;

    &:hover {
        text-decoration: underline;
    }
`

