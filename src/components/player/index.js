import React, {useState, useContext, createContext} from "react"
import ReactDOM from "react-dom"
import {Container, Overlay, Button, Close, Inner} from "./styles/player"
const PlayerContext = createContext()

export default function Player({children, ...props}) {
    const [showPlayer, setShowPlayer] = useState(false)

    return (
        <PlayerContext.Provider value={{showPlayer, setShowPlayer}}>
            <Container {...props}>{children}</Container>
        </PlayerContext.Provider>
       
    )
}

Player.Video = function PlayerVideo({...props}) {
    const {showPlayer, setShowPlayer} = useContext(PlayerContext)

    return showPlayer ? 
        ReactDOM.createPortal(
            <Overlay onClick={() => setShowPlayer(!showPlayer)}>
                <Inner>
                    <video id="netflix-player" controls>
                        <source src="videos/joker.mp4" type="video/mp4" />
                    </video>
                    <Close />
                </Inner>
            </Overlay>,
            document.body
        ): null
}

Player.Button = function PlayerButton({children, ...props}) {
    const {setShowPlayer, showPlayer} = useContext(PlayerContext)

    return(
        <Button onClick={()=>setShowPlayer(!showPlayer)}>{children}</Button>
    )
}