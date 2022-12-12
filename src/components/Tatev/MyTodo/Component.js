import React from 'react'

function Component({handleSubmit, data, handleDelet, hendlCount, count, minusCount}) {
  return (
    <div className='Component'>
        <h3>Your have {count} todos</h3>
        <div>
            <ul>
                {data.map(elem => <li className='Component-LI' key={elem.id}>{elem.value} <button className='Component-btndel' onClick={() => handleDelet(elem.id)}>X</button></li>)}
            </ul>
        </div>
        <div>
            <form  className='Component-Form' onSubmit={handleSubmit}>
                <input className='Component-inp' type='text' id='item'/>
                <button className='Component-btn' onClick={hendlCount}>Submit</button>
            </form>
        </div>
    </div>
  )
}

export default Component
