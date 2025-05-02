import { useEffect } from "react"
import { useRecipeStore } from "../data/store.js"
import { getRecipes } from "../data/crud.js"

const Recipes = () => {
	const recipes = useRecipeStore(state => state.recipes)
	const setRecipes = useRecipeStore(state => state.setRecipes)

	useEffect(() => {
		// Hindra onödiga uppdateringar, om vi redan har hämtat recepten
		if( recipes.length === 0 ) {
			getRecipes(setRecipes)
		}
	}, [])

	return (
		<main>
			<h1>Alla recept</h1>

			{recipes.map(r => (
				<div key={r.id} className="recipe">
					<h2> {r.name} </h2>
					<p> {r.ingredients} </p>
				</div>
			))}
		</main>
	)
}
export default Recipes
