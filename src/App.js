import Component from "./components/Component";


function App() {
	const arr = ['html', 'css', 'Java Script', 'React.js', 'Node.js', 'Python' ];

	const handlerClick = () => { 
		console.log("click");
	 }
  return (
    <div className="App">
			<h1>Hello React</h1>
			<Component list={arr} handlerClick={handlerClick}/>

    </div>
  );
}

export default App;
