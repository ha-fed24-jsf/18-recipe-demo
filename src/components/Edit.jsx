
const Edit = () => {


	return (
		<main>
			<form>
				<h1>Ändra recept</h1>

				<label htmlFor="title">Titel</label>
				<input type="text" id="title" name="title" value="Spaghetti Bolognese" required />

				<label htmlFor="description">Beskrivning</label>
				<textarea id="description" name="description" rows="5" required value={'Text area'} />

				<button type="submit">Spara ändringar</button>
			</form>
		</main>
	)
}
export default Edit
