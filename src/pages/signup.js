import React, {useContext, useState} from "react"
import {useHistory} from "react-router-dom"
import {HeaderContainer} from "../containers/header"
import {FooterContainer} from "../containers/footer"
import {Form} from "../components"
import { FireBaseContext } from "../context/firebase"
import { OptEmailContext } from "../app"
import * as ROUTES from "../constants/routes"

export default function SignUp() {
    const { optEmail } = useContext(OptEmailContext)
    const [error, setError] = useState('')
    const [firstName, setFirstName] =useState('')
    const [emailAddress, setEmailAddress] = useState(optEmail)
    const [password, setPassword] = useState('')
    const isInValid = firstName==='' || emailAddress ==='' || password===""
    const history = useHistory()
    const {firebase} = useContext(FireBaseContext)


    function handleClick(event) {
        event.preventDefault()
        firebase
            .auth()
            .createUserWithEmailAndPassword(emailAddress, password)
            .then(result => result.user
                .updateProfile({
                    displayName: firstName,
                    photoURL: Math.floor(Math.random() * 5) + 1,
                }))
                .then(() => {
                    history.push(ROUTES.BROWSE)
                }).catch(error => {
                    setEmailAddress('');
                    setPassword('');
                    setError(error.message)
                })
    }

    return(
        <>
        <HeaderContainer dontShowOnSmallViewport={true}>
            <Form>
                <Form.Title>Sign Up</Form.Title>
                {error && <Form.Error>{error}</Form.Error>}

                <Form.Base onSubmit={handleClick}>
                    <Form.Input
                        placeholder="First Name"
                        value={firstName}
                        onChange={({target})=>setFirstName(target.value)}
                    />
                    <Form.Input
                        placeholder="Email Address"
                        value={emailAddress}
                        onChange={({target})=>setEmailAddress(target.value)}
                    />
                    <Form.Input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={({target})=>setPassword(target.value)}
                    />

                    <Form.Submit type="submit"
                        disabled={isInValid} >Sign Up </Form.Submit>
                </Form.Base>
                <Form.Facebook>Signup with Facebook</Form.Facebook>
                <Form.Text>Already a member? <Form.Link to="/signin">Sign In now.</Form.Link></Form.Text>
                <Form.SmallText>This page is protected by Google reCAPTCHA to ensure you're not a bot. 
                    <a href="#learnmore">Learn more.</a>
                </Form.SmallText>
                <Form.SmallText id="learnmore">
                The information collected by Google reCAPTCHA is subject to the Google Privacy Policy and Terms of Service, 
                and is used for providing, maintaining, and improving the reCAPTCHA service and for general security 
                purposes (it is not used for personalised advertising by Google).
                </Form.SmallText>

            </Form>
        </HeaderContainer>
        <FooterContainer minimal={true} />
        </>
    )
}