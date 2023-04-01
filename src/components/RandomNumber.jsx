import { useState } from "react";

const RandomNumber = () => {
	const [numberList, setNumberList] = useState([5, 8, 29, 57, 4, 77, 38, 6])

	let jsxList = numberList.map((number) => (
		<li key={number}> {number} </li>
	))

	let addNumber = () => {
		let copy = [...numberList]
		copy.push(Math.floor(Math.random() * 50))
		setNumberList(copy)
		// Obs! List-variabeln innehåller fortfarande det GAMLA värdet. Tills React renderar komponenten igen.
		console.log('addNumber: listan är ' + copy)
	}

	return (
		<>
			<ul>
				{jsxList}
			</ul>
			<button onClick={addNumber}> Lägg till nytt tal </button>
		</>
	)
}

export default RandomNumber