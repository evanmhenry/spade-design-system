import { createBrowserRouter } from 'react-router-dom'
import AppLayout from './app-layout/AppLayout'
import SettingsPage from '@/pages/SettingsPage'
import ErrorPage from '@/pages/ErrorPage'
import ChartsPage from '@/pages/ChartsPage'
import CardsPage from '@/pages/CardsPage'
import DataTablePage from '@/pages/DataTablePage'
import InputsPage from '@/pages/InputsPage'
import ButtonsPage from '@/pages/ButtonsPage'
import LandingPage from '@/pages/landingPage/LandingPage'
import GettingStartedPage from '@/pages/docs/GettingStartedPage'
import WebLayout from './web-layout/WebLayout'
import DocsLayout from './docs-layout/DocsLayout'
import GuidesPage from '@/pages/docs/GuidesPage'

const BrowserRouter = createBrowserRouter([
	{
		path: '/',
		element: <WebLayout />,
		children: [
			{
				path: '',
				element: <LandingPage />,
			},
		],
		errorElement: <ErrorPage />,
	},
	{
		path: '/docs',
		element: <DocsLayout />,
		children: [
			{
				path: '',
				element: <GettingStartedPage />,
			},
			{
				path: 'guides',
				element: <GuidesPage />,
			},
		],
	},
	{
		path: '/',
		element: <AppLayout />,
		children: [
			{
				path: 'buttons',
				element: <ButtonsPage />,
			},
			{
				path: 'charts',
				element: <ChartsPage />,
			},
			{
				path: 'data-table',
				element: <DataTablePage />,
			},
			{
				path: 'cards',
				element: <CardsPage />,
			},
			{
				path: 'inputs',
				element: <InputsPage />,
			},
			{
				path: 'settings',
				element: <SettingsPage />,
			},
		],
		errorElement: <ErrorPage />,
	},
])

export default BrowserRouter
