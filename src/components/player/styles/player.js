import styled from "styled-components"

export const Container = styled.div`

`
export const Overlay = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0, 0.5);

`

export const Inner = styled.div`
    position: relative;
    width: 100%;
    max-width: 1000px;
    margin: auto;

    video {
        height: 100%;
        width: 100%;
    }
`

export const Close = styled.div`
    position: absolute;
    top: 15px;
    right: 15px;
    width: 22px;
    height: 22px;
    background-color: transparent;
    cursor: pointer;
    opacity: 0.3;

    &:before,&:after {
        content: '';
        color: #fff;
        position: absolute;
        height: 2px;
        width: 22px;
        background-color: white;
    }

    &:before {
        top: 10px;
        left: 0;
        transform: rotate(45deg)
    }

    &:after {
        top: 10px;
        right: 0;
        transform: rotate(-45deg)
    }

    &:hover {
        opacity: 1;
    }

}
`

export const Button = styled.button`
    color: white;
    background-color: #e50914;
    border-color: #ff0a16;
    width: 115px;
    height: 45px;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 18px;
    height: 45px;
    cursor: pointer;
    text-align: center;

    &:hover {
        transform: scale(1.05);
        background-color: #ff0a16;
    }
`