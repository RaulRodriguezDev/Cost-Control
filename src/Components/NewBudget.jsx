import React from 'react'

const NewBudget = () => {
  return (
    <div className='contenedor-presupuesto contenedor sombra'>
      <form className='formulario'>
        <div className='campo'>
            <label>Define Budget</label>
            <input
                className='nuevo-presupuesto'
                type='text'
                placeholder='Add your budget'
            />
        </div>
        <input type='submit' value='Add'/>
      </form>
    </div>
  )
}

export default NewBudget