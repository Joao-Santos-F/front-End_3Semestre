import { useState } from 'react'
import './cadfruta.css'

function CadFruta() {

    const [fruta, setFruta] = useState('')
    const [quantidade, setQuantidade] = useState('')

    //array para o cadastro de frutas
    const [arrFrutas, setArrFrutas] = useState([
        { id: 1, nome: "abacaxi", quantidade: 3 },
        { id: 2, nome: "Limão", quantidade: 12 }
    ])

    function Cadastrar(e) {
        e.preventDefault() //não deixa postar o formulário
        setArrFrutas([...arrFrutas, { id: Date.now(), nome: fruta, quantidade: quantidade }])

        setFruta("")
        setQuantidade(0)

    }

    return (
        <section className='sessao-cadastro'>
            <h2>Cadastro</h2>

            <form action="" onSubmit={Cadastrar}>

                <fieldset className='cadastro'>

                    <label htmlFor="Fruta" className='cadastro__rotulo'>Digite o nome da fruta</label>
                    <input type="text" id='fruta' placeholder='nome da fruta' className='cadastro__entrada' value={fruta} onChange={
                        (e) => {
                            setFruta(e.target.value)
                        }
                    } />

                    <label htmlFor="Fruta" className='cadastro__rotulo'>Digite a quantidade de frutas</label>
                    <input type="number" id='quantidade' placeholder='quantidade de frutas' className='cadastro__entrada' value={quantidade} onChange={
                        (e) =>{
                            setQuantidade(e.target.value)
                        }
                    } />

                </fieldset>

                <button type='submit' className='cadastro__btncadastrar'>Cadastrar</button>

            </form>

            <div className='resultados'>
                <h3>Frutas Cadastradas</h3>
                <ul>
                    {
                        arrFrutas.map((f) => {
                            return (
                            <li key={f.id}>
                                {f.nome} - {f.quantidade}
                            </li>

                            )

                        })
                    }
                </ul>
            </div>

        </section>
    )
}

export default CadFruta