import styled from "styled-components"
import { Link as ReachRouterLink } from 'react-router-dom';

export const Background = styled.div`
    padding-top: 20px;
    background: url(${({src}) => (src ? 
            `images/misc/${src}.jpg`: 
            "images/misc/home-bg.jpg"
        ) }), #555;
    background-size: cover;
    background-repeat: no-repeat;
    background-blend-mode: multiply;
    border-bottom: 8px solid #222;
    
    ${({browse}) => browse && `
        height: 100%; 
        background-blend-mode: overlay;
        border: 0;
        @media (max-width: 949px) {
            background: none;
            height: auto;
        }
    `};

    @media (max-width: 720px) {
        ${({dontShowOnSmallViewport}) => dontShowOnSmallViewport && "background: none"};
    }
`
export const Container = styled.div`
    padding-top: 8px;
    display: flex;
    justify-content: space-between;
    margin: 0 3.5em;
    @media (max-width: 949px) {
        margin: 0 5%;
        ${({nobg}) => nobg && 'margin-top: 20px'}
    }

    ${({nobg}) => nobg && 'margin-top: 20px'};

    a {
        display: flex;
    }
    
`

export const Logo = styled.div`
    fill: #e50914;
    width: 10.4375rem;
    height: 2.8125rem
    line-height: normal;

    @media (max-width: 1440px) {
        width: 8.375rem;
        height: 2.25rem;
    }

    @media (max-width: 948px) {
        width: 6.75rem;
        height: 2rem;
    }

    @media (max-width: 530px) {
        height: 1.5rem;
        padding-top: 0;
    }


`

export const Link = styled.p`
    color: #fff;
    text-decoration: none;
    margin-right: 30px;
    font-weight: ${({active}) => active ? '700': 'normal'};
    cursor: pointer;

    &:hover {
        font-weight: bold;
    }

    &:last-of-type {
        margin-right: 0;
    }

    &:first-of-type {
        margin-left: 30px;
    }
`
export const Feature = styled(Container)`
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: normal;
    padding: 120px 0 290px 0;

    @media (max-width: 949px) {
        display: none;
        padding: 0;
        margin-top: 0;
    }

`
export const FeatureCallout = styled.h2`
    color: #fff;
    font-size: 50px;
    line-height: normal;
    font-weight: bold;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.45)
    margin: 0;

`

export const PlayButton = styled.button`
    box-shadow: 0 0.6vw 1vw -0.4vw rgba(0, 0, 0, 0.35);
    background-color: #e6e6e6;
    color: #000;
    padding: 10px 20px;
    border-radius: 4px;
    border: unset;
    max-width: 130px;
    font-weight: bold;
    font-size: 20px;
    margin-top: 10px;
    cursor: pointer;
    transition: background-color 0.5s ease;

    &:hover {
        background-color: #ff1e1e;
        color: white;
    }
`

export const ButtonLink = styled(ReachRouterLink)`
    align-self: flex-start;
    color: #fff;
    background: #e50914;
    text-decoration: none;
    padding: 7px 17px;
    border-radius: 3px;
    font-size: 1rem;
    line-height: normal;

    @media (max-width: 530px) {
        font-size: .9rem;
        padding: .25rem .5rem;
    }
`

export const Group = styled.div`
    display: flex;
    align-items: center;
`

export const Text = styled.p`
    margin-top: 0;
    font-size: 22px;
    color: #fff;
    line-height: normal;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.45);
`

export const Picture = styled.button`
    width: 32px;
    background: url(${({src})=> src});
    background-size: contain;
    border: 0;
    height: 32px;
    cursor: pointer;
    position: relative;
`


export const DropDown = styled.div`
    display: none;
    position: absolute;
    background-color: black;
    padding: 10px;
    width: 100px;
    top: 32px;
    right: 0px;

    ${Group}: last-of-type {
        margin-bottom: 10px;
        &: last-of-type {
            margin-bottom: 0;
        }

    }

    button {
        margin-right: 10px;
    }

    p {
        font-size: 12px;
        margin-bottom: 0;
        margin-top: 0;
    }

`

export const Profile = styled.div`
    display: flex;
    align-items: flex-start;
    margin-left: 20px;
    position: relative;

    ${Group}: first-of-type {
        justify-content: space-around;
        margin-bottom: 5px;
        img {
            max-height: 32px;
            max-width: 32px;
            
        }
    }

    button {
        cursor: pointer;
    }

    &:hover > ${DropDown} {
        display: flex;
        flex-direction: column;
    }

    ${Link}: last-of-type {
        margin-left: 10px;
    }

`

export const Search = styled.div`
    display: flex;
    align-items: center;

    @media (max-width: 949px) {
        display: none;
    }
`

export const SearchIcon = styled.button`
    cursor: pointer;
    background-color: transparent;
    border: 0;

    img {
        filter: brightness(0) invert(1);
        width: 16px;
    }

`

export const SearchInput = styled.input`
    background-color: #44444459;
    color: #fff;
    height: 30px;
    border: 1px solid white;
    transition: width 0.5s;
    border-radius: 4px;
    margin-left: ${({active}) => active ? "10px": "0"};
    padding: ${({active}) => active ? "0 10px": "0"};
    opacity: ${({active}) => active ? "1": "0"};
    width: ${({active}) => active ? "200px": "0"};
`