import { collection, getDocs } from "firebase/firestore";
import { db } from "./database";

async function getRecipes(setMessages) {
	const recipesCollection = collection(db, 'recipes');
	const recipesSnapshot = await getDocs(recipesCollection);
	const recipesList = recipesSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
	setMessages(recipesList);
	console.log('getRecipes', recipesList)
}

export { getRecipes }
