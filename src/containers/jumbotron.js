import React from "react"
import {JumboTron} from "../components"
import jumbodata from "../fixtures/jumbo.json"

export function JumboTronContainer() {
    return (
        <JumboTron.Container>
            {jumbodata.map(data => (
                <JumboTron key={data.id} direction={data.direction}>
                    <JumboTron.Pane>
                        <JumboTron.Title>{data.title}</JumboTron.Title>
                        <JumboTron.SubTitle>{data.subTitle}</JumboTron.SubTitle>
                    </JumboTron.Pane>
                        
                    <JumboTron.Pane direction={data.direction}>
                        <JumboTron.Image src={data.image} alt={data.alt} />
                    </JumboTron.Pane>
                    
                </JumboTron>
                
            ))}
        </JumboTron.Container>
    )
}