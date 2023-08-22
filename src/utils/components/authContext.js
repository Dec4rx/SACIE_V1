import React, {createContext, useContext} from 'react'

const context = createContext();

export function AuthProvider({children}) {
    const userId ={
            }
    return (
        <context.Provider value={{userId}}>
            {children}
        </context.Provider>
    )
}