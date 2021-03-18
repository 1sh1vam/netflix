import React, {useState, useContext} from "react"
import { Form } from "../components"
import { HeaderContainer } from "../containers/header"
import {FooterContainer} from "../containers/footer"
import { FireBaseContext } from "../context/firebase"
import {useHistory} from "react-router-dom"
import * as ROUTES from "../constants/routes"

export default function SignIn() {
    const [error, setError] = useState('')
    const [emailAddress, setEmailAddress] = useState('')
    const [password, setPassword] = useState('')
    const isInValid = emailAddress === '' || password === ''
    const history = useHistory()
    const {firebase} = useContext(FireBaseContext)

    function handleSignIn(event) {
        event.preventDefault();

        firebase
            .auth()
            .signInWithEmailAndPassword(emailAddress, password)
            .then(() => {
                history.push(ROUTES.BROWSE)
            }).catch(error => {
                setEmailAddress('')
                setPassword('')
                setError(error.message)
            })
    }

    return (
        <>
        <HeaderContainer dontShowOnSmallViewport={true}>
            <Form>
                <Form.Title>Sign In</Form.Title>
                {error && <Form.Error>{error}</Form.Error>}

                <Form.Base onSubmit={handleSignIn}>
                    <Form.Input
                        required
                        placeholder="Email or phone number"
                        value={emailAddress}
                        onChange={({target}) => setEmailAddress(target.value)}
                    />
                    <Form.Input 
                        required
                        autocomplete="off"
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={({target}) => setPassword(target.value)}
                    />
                    <Form.Submit 
                        type="submit"
                        disabled={isInValid}
                    >Sign In</Form.Submit>
                </Form.Base>
                <Form.Text>
                    <input type="checkbox" /> Remember me
                </Form.Text>

                <Form.Facebook>Login with Facebook</Form.Facebook>
                <Form.Text>New to Netflix? <Form.Link to="/signup">Sign up now.</Form.Link></Form.Text>
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
        <FooterContainer minimal={true}/>
        </>
    )
}