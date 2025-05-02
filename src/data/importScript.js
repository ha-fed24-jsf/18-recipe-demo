import { addDoc, collection } from "firebase/firestore";
import { db } from "./database.js";

// Din JavaScript-lista med recept
const recipes = [
	{
		id: 1,
		name: "Spaghetti Bolognese",
		ingredients: "spaghetti, köttfärs, tomatsås, lök, vitlök"
	},
	{
		id: 2,
		name: "Kyckling Curry",
		ingredients: "kyckling, curry, kokosmjölk, lök, röd paprika"
	},
	{
		id: 3,
		name: "Grönsakssoppa",
		ingredients: "morötter, potatis, selleri, lök, grönsaksbuljong"
	},
	{
		id: 4,
		name: "Pannkakor",
		ingredients: "mjöl, ägg, mjölk, smör, socker"
	},
	{
		id: 5,
		name: "Caesarsallad",
		ingredients: "romansallad, kyckling, parmesan, krutonger, caesardressing"
	}
];

// Referens till din 'recipes'-collection
const recipesCollectionRef = collection(db, "recipes");

// Funktion för att importera data
async function importRecipes() {
	console.log("Påbörjar import av recept...");

	recipes.forEach(async recipe => {
		try {
			// Lägg till receptet som ett nytt dokument i 'recipes'-collection
			const docRef = await addDoc(recipesCollectionRef, recipe);
			console.log(`Recept "${recipe.name}" tillagt med ID: ${docRef.id}`);
		} catch (e) {
			console.error(`Fel vid import av recept "${recipe.name}": `, e);
		}
	})

	console.log("Import klar!");
}

/*
För att importera recepten till Firestore, skriv i terminalen:
node importScript.js
*/
// importRecipes();
