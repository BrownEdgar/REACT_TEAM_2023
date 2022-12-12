import React, { useState} from 'react'
import MainForm from './pages/MainForm'
import BlogList from "./pages/BlogList";

import './sass/App.scss'

export default function App() {
  const [initialValue, setInitialValue] = useState([])
  return (
    <div className="Container">
      <MainForm  setInitialValue={setInitialValue} initialValue={initialValue}/>
      <BlogList data={initialValue} />
    </div>
  )
}