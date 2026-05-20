import { useState } from 'react'
import './formulariostate.css'

function FormularioState() {

    const [nome, setNome] = useState()
    const [sobrenome, setSobrenome] = useState()

    // function pegarSobrenome(e) {
    //     setSobrenome(e.target.value)
    // }

    return (
        <div>
            <h2>Formulário com State</h2>
            <label htmlFor="nome">Nome</label>
            <input type="text" placeholder="Digite seu nome" onChange={
                (e) => {
                    // e - evento capturado/disparado, no caso o change
                    //target - elemento que disparou o evento,no caso o input
                    //value - oras, o value do input, no caso o valor digitado
                    setNome(e.target.value)
                }
            } />
            <br />

            <label htmlFor="sobrenome">Sobrenome</label>
            <input type="text" placeholder='Digite seu Sobrenome' onChange={ //pegarSobrenome
                (e) => {
                    setSobrenome(e.target.value)
                }
            } />
            <br />

            <label htmlFor="">Texto Digitado - <strong>{nome} {sobrenome}</strong> </label>
        </div>
    )
}

export default FormularioState