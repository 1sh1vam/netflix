import {useState} from "react"

export default function useOptEmail(){
    const [optEmail, setOptEmail] = useState('')
    return {optEmail, setOptEmail}
}
