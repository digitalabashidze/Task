import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { useEffect } from 'react'
import AppLayout from './components/AppLayout/AppLayout'
import Games from './pages/Games/Games'
import Leaderboards from './pages/Leaderboards/Leaderboards'
import Missions from './pages/Missions/Missions'
import ColorPicker from './pages/ColorPicker/ColorPicker'

const router = createBrowserRouter([
	{
		path: '/',
		element: <AppLayout />,
		children: [
			{ index: true, element: <Games /> },
			{ path: 'leaderboards', element: <Leaderboards /> },
			{ path: 'missions', element: <Missions /> },
		],
	},
	{ path: 'color-picker', element: <ColorPicker /> },
])

const App = () => {
	useEffect(() => {
		// Function to load and apply colors from localStorage or use defaults
		const loadColors = (): void => {
			const defaultColors = {
				color1: '#189541',
				color2: '#00141e',
				color3: '#062733',
			}

			const color1 = localStorage.getItem('color1') || defaultColors.color1
			const color2 = localStorage.getItem('color2') || defaultColors.color2
			const color3 = localStorage.getItem('color3') || defaultColors.color3

			// Apply the colors to the CSS variables
			document.documentElement.style.setProperty('--color-accent', color1)
			document.documentElement.style.setProperty('--color-base', color2)
			document.documentElement.style.setProperty('--color-secondary', color3)
		}

		// Load colors on mount
		loadColors()
	}, [])

	return <RouterProvider router={router} />
}

export default App
