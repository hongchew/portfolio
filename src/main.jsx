import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.jsx';
import './index.css';
import ErrorPage from './pages/ErrorPage.jsx';
import WorkPage from './pages/workPage.jsx';
import SkillsPage from './pages/SkillsPage.jsx';
import ProjectsPage from './pages/ProjectsPage.jsx';
import EducationPage from './pages/EducationPage.jsx';

const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		errorElement: <ErrorPage />,
	},
  {
		path: '/work',
		element: <WorkPage />,
		errorElement: <ErrorPage />,
	},
  {
		path: '/skills',
		element: <SkillsPage />,
		errorElement: <ErrorPage />,
	},
  {
		path: '/projects',
		element: <ProjectsPage />,
		errorElement: <ErrorPage />,
	},
  {
		path: '/education',
		element: <EducationPage />,
		errorElement: <ErrorPage />,
	},

]);

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<RouterProvider router={router} />{' '}
	</React.StrictMode>
);
