import styled from "styled-components"
import { Link as ReachRouterLink } from "react-router-dom"

export const Container = styled.section`
     display: flex;
     flex-direction: column;
     padding: 60px 68px 40px;
     background-color: rgba(0,0,0,0.75);
     border-radius: 4px;
     border: unset;
     width: 100%;
     max-width: 450px;
     margin: 0 auto;
     margin-bottom: 90px;
     margin-top: 10px;
     box-sizing: border-box;
     color: #fff;

     @media(max-width: 720px) {
            background-color: rgba(0,0,0,0.25);
         max-width: 100%;
         width: 100%;
         padding: 40px 5% 30px ;
         margin-top: 0px;
         margin-left: auto;
         margin-right: auto;
         margin-bottom: 0px;
         border-bottom: 1px solid #8c8c8c;
         border-radius: 0px;
     }
`

export const Base = styled.form`
    display: flex;
    flex-direction: column;
    max-width: 450px;
    width: 100%;
    justify-content: space-between;

    @media(max-width: 720px) {
        max-width: 100%;
        width: 645px;

    }
    
`

export const Input = styled.input`
    width: 100%;
    background: #333;
    height: 50px;
    line-height: 50px;
    padding: 0 20px 0;
    box-sizing: border-box;
    border: unset;
    border-radius: 4px;
    margin-bottom: 20px;
    color: #fff;
    font-weight: 500;
`
export const Title = styled.h1`
    font-size: 32px;
    font-weight: 700;
    margin-top: 0;
    margin-bottom: 28px;

`

export const Text = styled.p`
    color: #737373;
    font-size: 16px;
    margin-bottom: 0;
`
export const SmallText = styled.p`
    font-size: 13px;
    color: #8c8c8c;
    margin-bottom: 0;

`
export const Link = styled(ReachRouterLink)`
    text-decoration: none;
    color: #fff;
`
export const Error = styled.p`
    font-size: 16px;
    background: #e87c03;
    border-radius: 4px;
    margin: 0 0 16px;
    color: white;
    padding: 15px 20px;
`
export const Facebook = styled.div`
    display: flex;
    justify-content: flex start;
    align-items: center;
    font-size: 13px;
    color: #737373;
    font-weight: 500;
    cursor: pointer;
    margin-top: 20px;
    
`
export const Submit = styled.button`

    border-radius: 4px;
    border: unset;
    font-size: 16px;
    background: #e50914;
    padding: 16px;
    font-weight: 700;
    color: #fff;
    margin: 24px 0 12px;
    width: 100%;
    max-width: 100%;
    min-width: 98px;
    min-height: 37px;
    cursor: pointer;
    margin-bottom: 0;

    &:disabled {
        opacity: 0.5;
    }
`