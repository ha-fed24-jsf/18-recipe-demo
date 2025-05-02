
const Add = () => {


	return (
		<main>
		<form noValidate onSubmit={null}>
			<h1>Lägg till recept</h1>

			<label htmlFor="title">Titel</label>
			<input type="text" id="title" name="title" required />
			<div className="error-message">Titel är obligatoriskt.</div>

			<label htmlFor="description">Beskrivning</label>
			{/* <textarea id="description" name="description" rows="5" required value={'Text area'} /> */}
			<div className="error-message">Beskrivning är obligatorisk.</div>

			<button type="submit">Spara recept</button>
		</form>
		</main>
	)
}
export default Add
