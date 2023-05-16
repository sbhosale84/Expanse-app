import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'

const ExpanseTotal = () => {
  const {expenses} = useContext(AppContext)
  const SpentAmount = expenses.reduce((total,item)=>{
    return (total += item.cost)
  },0)
  return (
    <div className='alert alert-primary'>
        <span>Spent so far: ${SpentAmount}</span>
    </div>
  )
}
export default ExpanseTotal;