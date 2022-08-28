import React, { createContext, useState } from "react";

export const Context = createContext()

const AppContext = ({children})=>{

    const [nombreUsuario,setNombreUsuario] = useState('Pablo Villablanca')

    return <Context.Provider value={{nombreUsuario}}>
            {children}
           </Context.Provider>

}

export default AppContext