function Component(props) {
	return (
		<div>
			{
				props.list.map((elem,index) => {
					return <p key={index}>{elem}</p>
				})
			}
			<button onClick={props.handlerClick}>Click</button>
		</div>
	)
}

export default Component