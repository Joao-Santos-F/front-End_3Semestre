import { useState, useEffect } from "react"
import ProdutoContext from "./produtoContext"
import api from "../services/Services"

const ProdutoProvider = ({ children }) => {
    const [produtos, setProdutos] = useState([])

    const getProdutos = async () => {
        try {
            const res = await api.get("/Produtos")
            setProdutos(res.data)
        } catch (error) {
            console.error("Erro ao buscar produtos:", error)
        }
    }

    const addProduto = async (nome) => {
        try {
            const res = await api.post("/Produtos", { nome })
            setProdutos((prev) => [...prev, res.data])
            return res.data
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