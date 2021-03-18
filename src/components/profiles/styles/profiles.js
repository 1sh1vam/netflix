import styled from "styled-components"

export const Container = styled.div`
    color: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: auto;
    max-width: 80%;
`

export const Title = styled.h1`
    width: 100%:
    text-align: center;
    margin-bottom: 40px;
    margin-top: 100px;
`

export const List = styled.ul`

    padding: 0;
    margin: 0;
    display: flex;
    flex-dorection: row;

`

export const Name = styled.p`
    color: #808080;
    font-size: 16px;

    &:hover {
        font-weight: bold;
        color: #e5e5e5;
    }
    

`

export const Picture = styled.img`
    width: 100%;
    max-width: 150px;
    height: auto;
    border: 3px solid black;
    cursor: pointer;

`

export const Items = styled.li`
    list-style-type: none;
    max-height: 200px;
    max-width: 200px;
    text-align: center;
    margin-right: 30px;

    &:hover > ${Picture} {
        border: 3px solid #fff;
    }

    &:hover > ${Name} {
        font-weight: bold;
        color: #fff;
    }

    &:last-of-type {
        margin-right: 0px;
    }

`
