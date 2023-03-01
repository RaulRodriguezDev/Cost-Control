import React from 'react'

const BudgetControl = ({budget}) => {

    const formatQuantity = (quantity) => {

        return quantity.toLocaleString('en-US',)
        }
    

  return (
    <div className='contenedor-presupuesto contenedor sombra dos-columnas'>
        <div>
            <p>Gráfica aquí</p>
        </div>
        <div className='contenido-presupuesto'>
            <p>
                <span>Presupuesto: </span>{formatQuantity(budget)}
            </p>
            <p>
                <span>Available: </span>{formatQuantity(0)}
            </p>
            <p>
                <span>Spended: </span>{formatQuantity(0)}
            </p>
        </div>
    </div>
  )
  }

export default BudgetControl
