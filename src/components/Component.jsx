function Component(props) {
	return (
		<div>
			{
				props.list.map(elem => {
					return <p key={String(Date.now())}>{elem}</p>
				})
			}
			<button onClick={props.handlerClick}>Click</button>
		</div>
	)
}

export default Component