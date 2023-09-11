//@ts-nocheck
import { render } from 'preact';
import './style.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Post from './pages/post';
import Cloud from './pages/cloud';
import Layout from './layout';

export const PostPath = '/cloud-share/';
export const CloudPath = '/cloud-share/cloud';

const router = createBrowserRouter([
	{
		Component: Layout,
		children: [
			{
				path: PostPath,
				Component: Post,
			},
			{
				path: CloudPath,
				Component: Cloud,
			}
		]
	},
])

export function App() {
	return (
		<>
			<RouterProvider router={router} />
		</>
	);
}

render(<App />, document.getElementById('app'));
