import { useState } from "react"
import UsuarioContext from "./usuariocontext"

const usuarioProvider = ({children}) => {

    const [usuario, setUsuario] = useState("")

    return (
        <UsuarioContext.Provider
            value={{
                usuario, setUsuario
            }}
        >
            {children}
        </UsuarioContext.Provider>
    )
}

export default usuarioProvider