import React from "react"
import { Item, Inner, Image, Title, Container, SubTitle, Pane} from "./styles/jumbotron"

export default function JumboTron({children, direction, ...props}) {
    return (
        <Item {...props}>
            <Inner direction={direction} >{children}</Inner>
        </Item>
    )
}

JumboTron.Container = function JumboTronContainer({children, ...props}) {
    return (
        <Container {...props}>{children}</Container>
    )
}

JumboTron.Title = function JumboTronTitle({children, ...props}) {
    return (
        <Title {...props}>{children}</Title>
    )
}

JumboTron.SubTitle = function JumboTronSubTitle({children, ...props}) {
    return (
        <SubTitle {...props}>{children}</SubTitle>
    )
}

JumboTron.Image = function JumboTronImage({...props}) {
    return (
        <Image {...props}/>
    )
}

JumboTron.Pane = function JumboTronPane({children, ...props}) {
    return (
        <Pane {...props}>{children}</Pane>
    )
}

