import { useRouteError } from 'react-router-dom';
import TopNav from '../components/TopNav';
import Header from '../components/Header';

export default function ErrorPage() {
	const error = useRouteError();
	console.error(error);

	return (
		<>
			<TopNav />
			<section className="bg-cover bg-no-repeat bg-[url('/public/header-background.jpg')] bg-gray-400 bg-blend-multiply h-screen">
				<div className='px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56'>
					<h1 className='mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl'>
						Whoops!
					</h1>
					<p className='mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48'>
						Seems like we had encountered an error. <br />
						Maybe try again later?
					</p>
				</div>
			</section>
		</>
	);
}
