import { useState } from 'react'
import Header from './Components/Header'
import NewBudgetIcon from './img/nuevo-gasto.svg'
import Modal from './Components/Modal'

function App() {

  const[budget, setBudget] = useState(0)
  const [isValidBudget, setIsValidBudget] = useState(false)
  const [modal, setModal] = useState(false)
  const [animateModal, setAnimateModal] = useState(false)

  const handleNewSpent = () => {

    setModal(true)

    setTimeout(() => {
      setAnimateModal(true)
    }, 500);
  }

  return ( 
    <div>
      <Header 
        budget={budget} 
        setBudget={setBudget}
        isValidBudget={isValidBudget}
        setIsValidBudget={setIsValidBudget}
        />
        {isValidBudget && (
          <div className='nuevo-gasto'>
            <img src={NewBudgetIcon} onClick={handleNewSpent}/>
          </div>
        )}
        {modal && <Modal setModal={setModal} animateModal={animateModal} setAnimateModal={setAnimateModal}/>}
    </div>
   )
}

export default App
