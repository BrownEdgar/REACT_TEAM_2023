import React from 'react'
import { Link, NavLink, Outlet } from 'react-router-dom'

import "./Navbar.scss"
import ROUTES from './ROUTES/ROUTES'

export default function Navbar() {
	return (
			<>
			<header>
				<nav>
					<ul>
						<li>
							<NavLink to={ROUTES.HOME}>Home</NavLink>
						</li>
						<li>
							<NavLink to={ROUTES.BLOG}>Blog</NavLink>
						</li>
						<li>
							<NavLink to={ROUTES.ABOUT}>About</NavLink>
						</li>
						<li>
							<NavLink to={ROUTES.POSTS}>Posts</NavLink>
						</li>
					</ul>
				</nav>
			</header>
				<Outlet />
			</>
	)
}
