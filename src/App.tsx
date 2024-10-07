import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import AppLayout from './components/AppLayout/AppLayout'
import Home from './pages/Home/Home'

const router = createBrowserRouter([
	{
		path: '/',
		element: <AppLayout />,
		children: [{ index: true, element: <Home /> }],
	},

	// { path: '*', element: <ErrorPage /> },
])

const App = () => {
	return <RouterProvider router={router}></RouterProvider>
}

export default App
