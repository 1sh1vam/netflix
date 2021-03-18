import React from "react"
import ReactDOM from "react-dom"
import App from "./app"
import { FireBaseContext } from "./context/firebase"
import { GlobalStyles } from "./globalStyle"
import { firebase} from "./lib/firebase.prod"

ReactDOM.render(
    <React.StrictMode>
        <FireBaseContext.Provider value={{firebase}}>
            <GlobalStyles />
            <App />
        </FireBaseContext.Provider>
    </React.StrictMode>
    
    ,
document.getElementById("root"))
