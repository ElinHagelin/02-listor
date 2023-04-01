import { useState } from 'react'

const NumberList = () => {
	const [list, setList] = useState([7, 9, 35])

	// Key måste vara något som är unikt för varje element i listan
	// Talen är unika, de skulle fungera
	// Id är bäst - om det finns
	// Index är okej
	let jsxList = list.map((number, index) => (
		<li key={index}> {number} </li>
	))

	let addNumber = () => {
		let copy = [...list]
		copy.push(17)
		setList(copy)
		// Obs! List-variabeln innehåller fortfarande det GAMLA värdet. Tills React renderar komponenten igen.
		// console.log('addNumber: listan är ' + copy)
	}

	// console.log('Listan är: ', list)

	return (
		<>
			<ul>
				{jsxList}
			</ul>
			<button onClick={addNumber}> Lägg till nytt tal </button>
		</>
	)
}

export default NumberList
