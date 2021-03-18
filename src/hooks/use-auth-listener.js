import {useState, useContext, useEffect} from "react"
import { FireBaseContext } from "../context/firebase"

export default function useAuthListener() {
    const [user, setUser] = useState('');
    const {firebase} = useContext(FireBaseContext)

    useEffect(() => {
        const listener = firebase.auth().onAuthStateChanged(authUser => {
            if(authUser) {
                localStorage.setItem('authUser', JSON.stringify(authUser));
                setUser(authUser);
            } else {
                localStorage.removeItem('authUser')
                setUser(null)
            }
        });

        return ()=>listener();
    }, [])

    return {user}
}


