import React from 'react'
import Home from "./Home"
import Blog from "./Blog"
import About from "./About"
import Navbar from "./Navbar"

import { Routes, Route } from 'react-router-dom'
import ErrorPage from './ErrorPage'
import Posts from './Posts'
import Post from './Post'
import ROUTES from './ROUTES/ROUTES'

export default function App() {
	return (
		<div>
			
			<Routes>
				<Route path={ROUTES.HOME} element={<Navbar />} >
					<Route index element={<Home />} />
					<Route path={ROUTES.BLOG} element={<Blog />} />
					<Route path={ROUTES.ABOUT} element={<About />} />
					<Route path={ROUTES.POSTS}>
						<Route index element={<Posts />} />
						<Route path={ROUTES.SPECIAL_POST} element={<Post />} />
					</Route>
					<Route path={ROUTES.NOT_FOUND} element={<ErrorPage />} />
				</Route>
			</Routes>

			
			
			
		</div>
	)
}
