import React,{useState} from 'react'
import Component from './Componet'

import "./App.scss"

function App() {
    const [sum, setSum] = useState(0)
    const [data, setData] = useState([
        {
            id:1,
            img: '🍔',
            name: 'Hamburger',
            price: 30,
            amount: 10,
        },
        {
            id:2,
            img: '🍨',
            name: 'Ice Cream',
            price: 20,
            amount: 3,
        },
        {
            id:3,
            img: '🍿',
            name: 'Popcorn',
            price: 10,
            amount: 5,
        },
        {
            id:4,
            img: '🍵',
            name: 'Teacup',
            price: 5,
            amount: 9,
        },
    ])

const handelAmout = (id) => {
    // data.map(el => {
    //     if(el.id === id){
    //         el.amount -= 1
    //     }
    //     console.log(el.amount);
    // })
}

const hendleSum = () => {
    const foo = data.reduce(function(a,b){
        return a + b.price
    },0)
    setSum(foo);
}
const hendelData  = () => {
    setData([...data,     {
        id:1,
        img: '🍯',
        name: 'Honey Pot',
        price: 13,
        amount: 2,
    },])
}
  return (
    <>
        <Component data={data} hendelData={hendelData} hendleSum={hendleSum} sum={sum}/>
    </>
  )
}

export default App