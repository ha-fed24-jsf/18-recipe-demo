import { useState } from "react"
import { validateForm } from "../data/validation.js"

const Add = () => {
	const [form, setForm] = useState({ name: '', ingredients: '' })

	const { message, formIsValid } = validateForm(form)

	const submitForm = event => {
		console.log('Add: Submit form')
		event.preventDefault()
		// Lägg till nya receptet till databasen
		// Hämta recepten till Zustand store
	}

	return (
		<main>
		<form noValidate onSubmit={null}>
			<h1>Lägg till recept</h1>

			<label htmlFor="add-name"> Namn </label>
			<input
				type="text"
				id="add-name"
				name="add-name"
				required
				value={form.name}
				onChange={event => setForm({ ...form, name: event.target.value })}
				/>
			<div className="error-message"> {message.name} </div>

			<label htmlFor="add-ingredients"> Ingredienser </label>
			<textarea
				id="add-ingredients"
				name="add-ingredients"
				rows="5"
				required
				value={form.ingredients}
				onChange={event => setForm({ ...form, ingredients: event.target.value })}
				/>
			<div className="error-message"> {message.ingredients} </div>

			<button type="submit"
				disabled={!formIsValid}
				onClick={submitForm}
				>Spara recept</button>
		</form>
		</main>
	)
}
export default Add
