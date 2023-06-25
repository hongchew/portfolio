import React from 'react';
import { Link } from 'react-router-dom';

const TopNav2 = ({ currentPage }) => {
	const links = [
		['Home', '/'],
		['Work', '/work'],
		['Education', '/education'],
		['Skills', '/skills'],
		['Projects', '/projects'],
	];
	const page = currentPage;

	return (
		<nav className='bg-white dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600'>
			<div className='max-w-screen-xl flex flex-wrap items-center justify-center mx-auto p-4'>
				<div
					className='items-center justify-between hidden w-full md:flex md:w-auto md:order-1'
					id='navbar-sticky'
				>
					<ul className='flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700'>
						{links.forEach((link) => {
							console.log(link)
							if (link[0] == page) {
								//same page
								console.log(true)
								return (
									<li>
										<Link
											to={link[1]}
											className='block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500'
										>
											{link[0]}
										</Link>
									</li>
								);
							} else {
								console.log(false)

								return (
									<li>
										<Link
											to='/work'
											className='block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700'
										>
											{link}
										</Link>
									</li>
								);
							}
						})}
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default TopNav2;
