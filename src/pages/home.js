import React from "react"
import {JumboTronContainer} from "../containers/jumbotron"
import {FooterContainer} from "../containers/footer"
import {AccordianContainer} from "../containers/faq"
import {HeaderContainer} from "../containers/header"
import {Feature, OptForm} from "../components"

function Home() {
    
    return (
        <>
        <HeaderContainer>
            <Feature>
                <Feature.Title>Unlimited movies, TV shows and more.</Feature.Title>
                <Feature.Text>Watch anywhere. Cancel anytime.</Feature.Text>
                <OptForm margintop={false}>
                    <OptForm.Text>Ready to watch? Enter your email to create or restart your membership.</OptForm.Text>
                    <OptForm.Input 
                        placeholder="Email address" 
                    />
                    <OptForm.Button >Get Started</OptForm.Button>
                </OptForm>
            </Feature>
        </HeaderContainer>
        <JumboTronContainer />
        <AccordianContainer />
        <FooterContainer />
        </>
    )
}

export default Home