import React from "react"
import { Accordian, OptForm } from "../components"
import faqData from "../fixtures/faq.json"
import {ContextProvider} from "../context/faq"


export function AccordianContainer(){

    return (
        <ContextProvider>
            <Accordian>
                <Accordian.Title>Frequently Asked Questions</Accordian.Title>
                {faqData.map((data, index )=> (
                    <Accordian.Item index={index}>
                        <Accordian.Header index={index}>
                            {data.header}
                        </Accordian.Header>
                        <Accordian.Body index={index}>
                            {data.body}
                        </Accordian.Body>
                    </Accordian.Item>
                )
                )}

                <OptForm>
                    <OptForm.Text>Ready to watch? Enter your email to create or restart your membership.</OptForm.Text>
                    <OptForm.Input type="email" placeholder="Email address" />
                    <OptForm.Button type="submit">Get Started</OptForm.Button>
                </OptForm>

            </Accordian>

        </ContextProvider>
        
    )
}