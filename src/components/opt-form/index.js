import React, {useContext} from "react"
import {Container, Text, Input, Button} from "./styles/opt-form"
import { useHistory } from "react-router-dom"
import { OptEmailContext } from "../../app"

export default function OptForm({children, ...props}) {
    return (
        <Container {...props}>{children}</Container>
    )
}

OptForm.Text = function OptFormText({children, ...props}) {
    return (
        <Text {...props}>{children}</Text>
    )
}


OptForm.Input = function OptFormInput({...props}) {
    const {setOptEmail} = useContext(OptEmailContext)
    return (
        <Input onChange={({target})=>setOptEmail(target.value)} {...props} />
    )
}

OptForm.Button = function OptFormButton({children, ...props}) {
    const history = useHistory()
    return (
        <Button onClick={()=>history.push("/signup")} {...props}>
            {children} <img src="/images/icons/chevron-right.png" alt="Try Now" />
        </Button>
    )
}