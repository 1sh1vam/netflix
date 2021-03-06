import React, {createContext} from "react"
import {BrowserRouter as Router, Switch} from "react-router-dom"
import {Home, SignIn, Browse} from "./pages"
import { SignUp } from "./pages"
import { useAuthListener } from "./hooks"
import { IsUserRedirect, ProtectedRoute } from "./helpers/routes"
import * as ROUTES from "./constants/routes"
import { useOptEmail } from "./hooks"

export const OptEmailContext = createContext()
function App() {
    const {user} = useAuthListener()
    const {optEmail, setOptEmail } = useOptEmail()

    return (
        <OptEmailContext.Provider value={{optEmail, setOptEmail}}>
        <Router>
            <Switch>
                <IsUserRedirect user={user} loggedInPath={ROUTES.BROWSE} path={ROUTES.SIGN_IN}>
                    <SignIn />
                </IsUserRedirect>
            
                <IsUserRedirect user={user} loggedInPath={ROUTES.BROWSE} path={ROUTES.SIGN_UP}>
                    <SignUp />
                </IsUserRedirect>

                <ProtectedRoute user={user} path={ROUTES.BROWSE}>
                    <Browse/>
                </ProtectedRoute>

                <IsUserRedirect user={user} loggedInPath={ROUTES.BROWSE} path={ROUTES.HOME}>
                    <Home />
                </IsUserRedirect>
            </Switch>
        </Router>
        </OptEmailContext.Provider>
    )
}

export default App