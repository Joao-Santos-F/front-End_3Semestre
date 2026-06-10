import { useEffect, useState } from "react"
import { UsuarioContext } from "./usuarioContext"

const UsuarioProvider = ({ children }) => {
    const [usuario, setUsuario] = useState(null)
    // const [Listausuario, setListaUsuario] = useState([])


    useEffect(() => {
        const usuarioStorage = JSON.parse(localStorage.getItem("usuario") || "null")
        setUsuario(usuarioStorage === "" ? null : usuarioStorage)
    },[])


    return (
        <UsuarioContext.Provider
            value={{
                usuario,
                setUsuario
            }}
        >
            {children}
        </UsuarioContext.Provider>
    )
}

export default UsuarioProvider