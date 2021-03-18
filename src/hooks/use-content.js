import { useState, useEffect, useContext } from "react"
import { FireBaseContext } from "../context/firebase"

export default function useContent(target) {
    const [content, setContent] = useState([])
    const {firebase} = useContext(FireBaseContext)

    useEffect(()=>{
        firebase.firestore()
            .collection(target)
            .get()
            .then(snapshot => {
                const allContents = snapshot.docs.map(object => ({
                    ...object.data(),
                    docId: object.id
                }))

                setContent(allContents)
            }
                
            )
    }, [])

    return { [target]: content}
}

