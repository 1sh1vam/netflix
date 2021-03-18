import React from "react"
import {Container, Title, Text} from "./styles/features"

export default function Feature({children, ...props}) {
    return <Container {...props}>{children}</Container>
}

Feature.Title = function FeatureTitle({children, ...props}) {
    return (
        <Title {...props}>{children}</Title>
    )
}

Feature.Text = function FeatureText({children, ...props}) {
    return (
        <Text {...props}>{children}</Text>
    )
}