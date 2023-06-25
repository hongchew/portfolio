import React from 'react';

const Header = () => {
	return (
		<section className="bg-cover bg-no-repeat bg-[url('/public/header-background.jpg')] bg-gray-400 bg-blend-multiply min-h-screen ">
			<div className='flex flex-col px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56'>


				<h1 className='mb-10 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl'>
					Toh Hong Chew (Sena)
				</h1>
				<p className='mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48'>
					Masters Student at the University of Tokyo <br />
					Social Scientist & Programmer <br />
					Excited about the crossroads of People, Technology & Society
				</p>

				<div className='flex justify-evenly w-1/3 m-auto'>
					<div className='flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4'>
						<a
							href='https://www.github.com/hongchew'
							className='inline-flex justify-center hover:text-gray-900 items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg border border-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-400'
						>
							Github
						</a>
					</div>
					<div className='flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4'>
						<a
							href='https://www.linkedin.com/in/hongchew'
							className='inline-flex justify-center hover:text-gray-900 items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg border border-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-400'
						>
							LinkedIn
						</a>
					</div>

					<div className='flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4'>
						<a
							href='mailto:tohhongchew@outlook.com'
							className='inline-flex justify-center hover:text-gray-900 items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg border border-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-400'
						>
							Email
						</a>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Header;
