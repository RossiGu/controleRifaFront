import "./rifa.css"

interface RifaProps {
    number: number,
    name: string,
    quantity: number
}

export function Rifa({number, name, quantity} : RifaProps) {
    return (
        <div className="card">
           <h2>Rifa</h2>
           <p>Número: {number}</p>
           <p>Nome: {name}</p>
           <p>Quantidade: {quantity}</p>
        </div>
    )
}