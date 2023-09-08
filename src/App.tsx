import './App.css'
import { Modal } from './components/modal/modal';
import { Rifa } from './components/rifa';
import { useRifaData } from './hooks/useRifaData';
import { useState } from 'react';

function App() {

  const { data } = useRifaData();
  const [isModalOpen, setIsModalOpen] = useState(false) 

   const handleOpenModal = () => {
    setIsModalOpen(prev => !prev)
   }

  return (
    <div className="container">
      <h1>Rifas</h1>
      <div className='card-grid'>
        {data?.map(rifaData =>
          <Rifa
            number={rifaData.number}
            name={rifaData.name}
            quantity={rifaData.quantity}
          />
        )}
      </div>
        {isModalOpen && <Modal closeModal={handleOpenModal}/>}
        <button onClick={handleOpenModal}>Novo</button>
    </div>
  )
}

export default App