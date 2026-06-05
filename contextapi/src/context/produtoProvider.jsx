import { useState, useEffect } from "react"
import ProdutoContext from "./produtoContext"
import api from "../services/Services"

const ProdutoProvider = ({ children }) => {
    const [produtos, setProdutos] = useState([])

    const getProdutos = async () => {
        try {
            const retornoAPI = await api.get("/Produtos")   
            setProdutos(retornoAPI.data)
        } catch (error) {
            console.error("Erro ao buscar produtos:", error)
        }
    }

    const addProduto = async (nome) => {
        try {
            const retornoAPI = await api.post("/Produtos", { nome })
            setProdutos((prev) => [...prev, retornoAPI.data])
            return retornoAPI.data
        } catch (error) {
            console.error("Erro ao adicionar produto:", error)
            throw error
        }
    }

    useEffect(() => {
        getProdutos()
    }, [])

    return (
        <ProdutoContext.Provider
            value={{
                produtos,
                setProdutos,
                getProdutos,
                addProduto,
            }}
        >
            {children}
        </ProdutoContext.Provider>
    )
}

export default ProdutoProvider