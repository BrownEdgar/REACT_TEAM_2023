import React from 'react'

export default function Products({ product, setProduct}) {
   const reduceProduct = () => {
    // const result = product.price * product.amount
    // console.log(product.price)
    const result = product.map(elem => elem.price * elem.amount)
    const total = result.reduce((a,b) => a + b)
    console.log(total)
    console.log(result)
   }

  return (
    <div className='Products'>
        {
            product.map(elem => {
                return (
                    <div key={elem.id} className="Products__Item">
                        <h1>Name:{elem.name}</h1>
                        <h1>Price:{elem.price}</h1>
                        <h1>Amount:{elem.amount}</h1>
                        <button onClick={reduceProduct}>Reduce products</button>
                        
                    </div>
                )
            })
        }
    </div>
  )
}
