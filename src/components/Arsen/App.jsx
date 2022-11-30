import React, { useState } from 'react';

function App() {
	const [value, setvalue] = useState(0)

	const clickPlus = () => { 
		setvalue(value + 1)
	}

  const clickMinus = () => { 
		setvalue(value - 1)
	}

  const clickReset = () => { 
		setvalue(0)
	}

  const clickMinusTen = () => { 
		setvalue(value - 10)
	}

  const clickPlusten = () => { 
		setvalue(value + 10)
	}
  
  return (
    <div className="App">
			<h1>{value}</h1>
      <div className="btn">
        <button onClick={clickMinusTen}> - 10 </button>
        <button onClick={clickMinus}> - 1 </button>
        <button onClick={clickReset}>Reset</button>
			  <button onClick={clickPlus}> + 1 </button>
			  <button onClick={clickPlusten}> + 10 </button>
      </div>
      
    </div>
  )
}

export default App