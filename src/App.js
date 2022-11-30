import Component from "./components/Component";
import React, { useState } from 'react';


function App() {
	const [value, setvalue] = useState(1)

	const handlerClick = () => { 

		setvalue(value + 1)
		setvalue(value + 2)

	 }

  return (
    <div className="App">
			<h1>Hello React</h1>
			<Component list={arr} handlerClick={handlerClick}/>
			

    </div>
  );
}

export default App;
