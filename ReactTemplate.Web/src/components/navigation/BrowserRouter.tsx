import { createBrowserRouter } from 'react-router-dom'
import AppLayout from './app-layout/AppLayout'
import Page from '@/pages/Page'
import ErrorPage from '@/pages/ErrorPage'

const BrowserRouter = createBrowserRouter([
	{
		path: '/',
		element: <AppLayout />,
		children: [
			{
				path: 'page',
				element: <Page />,
			},
		],
		errorElement: <ErrorPage />,
	},
])

export default BrowserRouter
