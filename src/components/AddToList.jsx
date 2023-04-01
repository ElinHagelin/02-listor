import { useState } from 'react'

const AddToList = () => {
	const [list, setList] = useState([])


	const add = (input, key) => {
		const inputObject = { text: input, id: key }
		const copy = [...list, inputObject]
		setList(copy)
	}

	let jsxList = list.map((item) => (
		<li key={item.id}> {item.text} </li>
	))

	return (
		<div className="todo-list">
			<input type='text' placeholder='Lägg till ny sak i listan' onKeyDown={(event) => {
				if (event.key == 'Enter') {
					add(event.target.value, event.timeStamp)
					event.target.value = ''
				}
			}}></input>
			<ul>
				{jsxList}
			</ul>
		</div>
	)
}

export default AddToList