import './App.css'
import { NavLink, Outlet } from 'react-router'

function App() {
	return (
		<div className="app">
			<header>
				<nav>
					<NavLink to="/"> Start </NavLink>
					<NavLink to="/recepies">Alla recept</NavLink>
					<NavLink to="/add">Lägg till recept</NavLink>
				</nav>
			</header>
			<Outlet />
		</div>
	)
}

export default App
