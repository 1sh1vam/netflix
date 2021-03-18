import React, {useContext} from "react"
import {Container, Header, Inner, Item, Title, Body, Logo} from "../accordian/styles/accordian"
import {Context} from "../../context/faq" 

export default function Accordian({children, ...props}) {
    return (
        <Container {...props}>
            <Inner>
                {children}
            </Inner>
        </Container>
    )
}



Accordian.Item = function AccordianItem({children, index, ...props}) {
    return (
        <Item {...props}>
                {children}
        </Item>
        
    )
}

Accordian.Header = function AccordianHeader({children, index, ...props}) {
    const {activeIndex, setActiveIndex} =  useContext(Context)
    const isActive = activeIndex === index + 1;

    return (
        <Header {...props} onClick={() => {isActive ? setActiveIndex(0) : setActiveIndex(index+1)}}>
            {children}
            <Logo open={isActive}>
                <svg id="thin-x" viewBox="0 0 26 26" class="svg-icon svg-icon-thin-x svg-closed" focusable="true"><path d="M10.5 9.3L1.8 0.5 0.5 1.8 9.3 10.5 0.5 19.3 1.8 20.5 10.5 11.8 19.3 20.5 20.5 19.3 11.8 10.5 20.5 1.8 19.3 0.5 10.5 9.3Z"></path></svg>
            </Logo>
        </Header>
    )
}

Accordian.Title = function AccordianTitle({children, ...props}) {
    return (
        <Title {...props}>{children}</Title>
    )
}

Accordian.Body = function AccordianBody({children, index, ...props}) {
    const {activeIndex} =  useContext(Context)
    const isActive = activeIndex === index + 1;
    return (
        isActive && <Body {...props}>{children}</Body>
    )
}

