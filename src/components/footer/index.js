import React from "react"
import { Container, Row, Column, Text, Title, Link, Break, ContainerDiv } from "../footer/styles/footer"

export default function Footer({children, ...props}) {
    return (
        <Container {...props}>
            <ContainerDiv>
                {children}
            </ContainerDiv>
        </Container>
    )
}


Footer.Row = function FooterRow({children, ...props}) {
    return (
        <Row {...props}>{children}</Row>
    )
}

Footer.Column = function FooterColumn({children, ...props}) {
    return (
        <Column {...props}>{children}</Column>
    )
}

Footer.Title = function FooterTitle({children, ...props}) {
    return (
        <Title {...props}>{children}</Title>
    )
}

Footer.Text = function FooterText({children, ...props}) {
    return (
        <Text {...props}>{children}</Text>
    )
}

Footer.Link = function FooterLink({...props}) {
    return (
        <Link {...props} />
    )
}

Footer.Break = function FooterBreak() {
    return (
        <Break />
    )
}

