import React, {createContext, useState} from "react"

const Context = createContext()

function ContextProvider({children}) {
    const [activeIndex, setActiveIndex] = useState(0)

    return (
        <Context.Provider value={{activeIndex, setActiveIndex}}>
            {children}
        </Context.Provider>
    )
}

export {ContextProvider, Context}