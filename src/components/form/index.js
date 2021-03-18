import React from "react"
import {
    Container,
    Title,
    Text,
    SmallText,
    Base,
    Input,
    Error,
    Facebook,
    Link,
    Submit
} from "./styles/form"

export default function Form({children, ...props}) {
    return (
        <Container {...props}>{children}</Container>
    )
}

Form.Title = function FormTitle({children, ...props}) {
    return (
        <Title {...props}>{children}</Title>
    )
}

Form.Base = function FormBase({children, ...props}) {
    return <Base {...props}>{children}</Base>
}

Form.Input = function FormInput({...props}) {
    return (
        <Input {...props} />
    )
}

Form.Text = function FormText({children, ...props}) {
    return (
        <Text {...props}>{children}</Text>
    )
}

Form.SmallText = function FormSmallText({children, ...props}) {
    return (
        <SmallText {...props}>{children}</SmallText>
    )
}

Form.Link = function FormLink({children, ...props}) {
    return(
        <Link {...props}>{children}</Link>
    )
}

Form.Facebook = function FormFacebook ({children, ...props}) {
    return (
        <Facebook {...props}>
            <img width="20" height="20" 
            src="../images/misc/fb-logo.png"
            style={{"marginRight": "10px"}}
            alt="facebook"
            />
            {children}
        </Facebook>
    )
}

Form.Error = function FormError({children, ...props}) {
    return (
        <Error {...props}>{children}</Error>
    )
}

Form.Submit = function FormSubmit({children, ...props}) {
    return(
        <Submit {...props}>{children}</Submit>
    )
}