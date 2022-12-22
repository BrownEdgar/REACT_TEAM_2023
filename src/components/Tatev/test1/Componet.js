import React from 'react'

function Componet({data, hendelData, hendleSum, sum}) {
  return (
    <div className='Container'>
        {data.map(elem => {
            
        return (
        <div className='Container-Box' key={elem.id}>
            <h1>{elem.img}</h1>
            <h3>{elem.name}</h3>
            <p>price: {`${elem.price}$`}</p>
            <p>amout: {elem.amount}</p>
        </div>
        )})}
        <button className='Container-Btn' onClick={hendelData}>click</button>
        <button className='Container-Btn' onClick={hendleSum}>{`PRICE:${sum}`}</button>
    </div>
  )
}

export default Componet