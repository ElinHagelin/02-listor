
const Fruits = () => {
	const fruitList = ['Päron', 'Banan', 'Apelsin', 'Mango']

	let jsxList = fruitList.map((fruit) => (
		<li key={fruit}> {fruit} </li>
	))

	return (
		<ul>
			{jsxList}
		</ul>
	)
}

export default Fruits