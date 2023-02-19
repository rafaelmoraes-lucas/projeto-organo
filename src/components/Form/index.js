import { useState } from 'react'
import { Button } from '../Button'
import { TextField } from '../TextField'
import { Dropdown } from '../Dropdown'
import './Form.css'

export const Form = (props) => {

    const [name, setName] = useState('')
    const [role, setRole] = useState('')
    const [image, setImage] = useState('')
    const [team, setTeam] = useState('')

    const onSaving = (event) => {
        event.preventDefault()
        props.onContributorRegistered({
            name,
            role,
            image,
            team
        })
        setName('')
        setRole('')
        setImage('')
        setTeam('')
    }

    return (
        <section className="form">
            <form onSubmit={onSaving}>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <TextField 
                    required={true}
                    label="Nome"
                    placeholder="Digite seu nome" 
                    value={name}
                    onChanging={value => setName(value)}
                />
                <TextField
                    required={true}
                    label="Cargo"
                    placeholder="Digite seu cargo" 
                    value={role}
                    onChanging={value => setRole(value)}
                />
                <TextField
                    label="Imagem"
                    placeholder="Digite o endereço da imagem" 
                    value={image}
                    onChanging={value => setImage(value)}
                />
                <Dropdown
                    required={true}
                    label="Time" 
                    itens={props.teams}
                    value={team}
                    onChanging={value => setTeam(value)}
                />
                <Button>
                    Criar Card
                </Button>
            </form>
        </section>
    )
}

