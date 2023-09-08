import { useState, useEffect } from 'react';
import { useRifaDataMutate } from '../../hooks/useRifaDataMutate';
import { rifaData } from '../../interface/rifaData';
import './modal.css'

interface InputProps {
    label: string,
    value: string | number,
    updateValue(value: any): void
}

interface ModalProps {
    closeModal(): void
}

const Input = ({ label, value, updateValue }: InputProps) => {
    return (
        <>
            <label>{label}</label>
            <input value={value} onChange={e => updateValue(e.target.value)}></input>
        </>
    )
}

export function Modal({closeModal}: ModalProps) {

    const [number, setNumber] = useState(0);
    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState(0);
    const {mutate, isSuccess, isLoading} = useRifaDataMutate();

    const submit = () => {
        const rifaData: rifaData = {
            number,
            name,
            quantity
        }

        mutate(rifaData)
    }

    useEffect(() => {
        if(!isSuccess) return
        closeModal()
    },[isSuccess])

    return (
        <div className="modal-overlay">
            <div className="modal-body">
                <h2>Nova rifa</h2>
                <form className="input-container">
                    <Input label="number" value={number} updateValue={setNumber} />
                    <Input label="name" value={name} updateValue={setName} />
                    <Input label="quantity" value={quantity} updateValue={setQuantity} />
                </form>
                <button onClick={submit} className='button-secondary'>
                    {isLoading ? 'Postando...' : 'Nova rifa'}
                </button>
            </div>
        </div>
    )
}