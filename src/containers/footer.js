import React from "react"
import {Footer} from "../components"

export function FooterContainer({minimal}) {

    return (
        <Footer>
            <Footer.Title>Questions? Call 000-800-040-1843</Footer.Title>
            <Footer.Break />
            <Footer.Row>
                <Footer.Column>
                    <Footer.Link href="#">FAQ</Footer.Link>
                    {!minimal && <Footer.Link href="#">Investor Realtions</Footer.Link>}
                    <Footer.Link href="#">Privacy</Footer.Link>
                    {!minimal && <Footer.Link href="#">Speed Test</Footer.Link>}
                </Footer.Column>
                
                <Footer.Column>
                    <Footer.Link href="#">Help Centre</Footer.Link>
                    {!minimal && <Footer.Link href="#">Jobs</Footer.Link>}
                    <Footer.Link href="#">Cookie Preferences</Footer.Link>
                    {!minimal && <Footer.Link href="#">Legal Notices</Footer.Link>}
                </Footer.Column>

                <Footer.Column>
                    {!minimal && <Footer.Link href="#">Account</Footer.Link>}
                    {!minimal && <Footer.Link href="#">Ways to Watch</Footer.Link>}
                    <Footer.Link href="#">Corporate Information</Footer.Link>
                    {!minimal && <Footer.Link href="#">Netflix Originals</Footer.Link>}
                </Footer.Column>

                <Footer.Column>
                    {!minimal && <Footer.Link href="#">Media Centre</Footer.Link>}
                    <Footer.Link href="#">Terms of Use</Footer.Link>
                    {!minimal && <Footer.Link href="#">Contact Us</Footer.Link>}
                </Footer.Column>
            </Footer.Row>
            <Footer.Text>Netflix India</Footer.Text>
        </Footer>
    )
}