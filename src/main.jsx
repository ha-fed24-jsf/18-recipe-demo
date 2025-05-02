import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createHashRouter, RouterProvider } from 'react-router'
import Welcome from './components/Welcome.jsx'
import Recipes from './components/Recipes.jsx'
import Edit from './components/Edit.jsx'
import Add from './components/Add.jsx'

const router = createHashRouter([
	{
		path: '/',
		Component: App,
		children: [
			{
				index: true,
				Component: Welcome
			},
			{
				path: '/recepies',
				Component: Recipes
			},
			{
				path: '/edit/:id',
				Component: Edit
			},
			{
				path: '/add',
				Component: Add
			}
		]
	}
])

createRoot(document.getElementById('root')).render(
	<StrictMode>
		<RouterProvider router={router} />
	</StrictMode>,
)
