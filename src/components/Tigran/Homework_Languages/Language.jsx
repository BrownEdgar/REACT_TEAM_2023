import React from 'react'

import l from "./Language.module.css"

export default function Language({ list, handelDelete}) {
  return (
    <div>
      <h1 className={l.title}>My Todos</h1>
    <div className={l.my_todos}>
      {list.map((elem) => {
        return <div className={l.language} key={Date.now()}>
          <p>{elem}</p>
          <button className={l.delete_btn} onClick={() => handelDelete()}>Delete</button>
        </div>
      })}
    </div>
    </div>
  )
}
