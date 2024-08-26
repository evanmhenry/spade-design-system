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
import WebLayout from './web-layout/WebLayout'
import DashboardPage from '@/pages/DashboardPage'
import ComponentsPage from '@/pages/ComponentsPage'
import ProjectsPage from '@/pages/ProjectsPage'
import ProjectPage from '@/pages/ProjectPage'

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
		path: '',
		element: <AppLayout />,
		children: [
			{
				path: 'dashboard',
				element: <DashboardPage />,
			},
			{
				path: 'components',
				element: <ComponentsPage />,
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
			},
			{
				path: 'projects',
				element: <ProjectsPage />,
				children: [
					{
						path: 'pay-grids',
						element: <ProjectPage />,
					},
					{
						path: 'back-ops',
						element: <ProjectPage />,
					},
				],
			},
		],
		errorElement: <ErrorPage />,
	},
])

export default BrowserRouter
