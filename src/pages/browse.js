import React from "react"
import {BrowseContainer} from "../containers/browse"
import {useContent} from "../hooks"
import { SelectMap } from "../utils"

export default function Browse() {
    const {series} = useContent("series")
    const {films} = useContent("films")
    const slides = SelectMap({series, films})

    return(
        <BrowseContainer slides={slides}/>
    )
}