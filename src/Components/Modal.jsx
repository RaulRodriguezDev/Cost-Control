import React from 'react'
import CloseBtn from '../img/cerrar.svg'

const Modal = ({setModal, animateModal, setAnimateModal}) => {

    const hideModal = () => {
        setModal(false)
        setAnimateModal(false)
    }

  return (
    <div className="modal">
      <div className="cerrar-modal">
        <img src={CloseBtn} onClick={hideModal}/>
      </div>
      <form className={`formulario ${animateModal ? "animar" : ''}`}>
        <legend>New Expense</legend>
        <div className='campo'>
          <label htmlFor='name'>Expense Name</label>
          <input id="name" type="text" placeholder="Add expense name"/>
        </div>
        <div className='campo'>
          <label htmlFor='quantity'>Quantity</label>
          <input id="quantity" type="text" placeholder="Add expense quantity Ex. 300"/>
        </div>
        <div className='campo'>
          <label htmlFor='category'>Category</label>
          <select id='category'>
            <option value=''>--- Select --</option>
            <option value='saving'>Saving</option>
            <option value='food'>Food</option>
            <option value='home'>Home</option>
            <option value='hobbies'>Hobbie</option>
            <option value='health'>Health</option>
            <option value='suscriptions'>Suscriptions</option>
            <option value='miscellaneous'>Miscellaneous Expenses</option>
          </select>
        </div>
        <input type='submit' value='Add Expense' />
      </form>
    </div>
  )
}

export default Modal
