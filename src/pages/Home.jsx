import { Link } from 'react-router-dom';
import AppBanner from '../components/shared/AppBanner';
import Button from '../components/reusable/Button';
import About from '../pages/AboutMe';
import Contact from './Contact';
import MyProjects from './MyProjects/MyProjects';

const Home = () => {
	return (
		<div className="container mx-auto">
			<AppBanner></AppBanner>
			<MyProjects></MyProjects>

			{/* <ProjectsProvider>
				<ProjectsGrid></ProjectsGrid>
			</ProjectsProvider> */}

			<div className="mt-8 sm:mt-10 flex justify-center">
				<Link
					to="/projects"
					className="font-general-medium flex items-center px-6 py-3 rounded-lg shadow-lg hover:shadow-xl bg-indigo-500 hover:bg-indigo-600 focus:ring-1 focus:ring-indigo-900 text-white text-lg sm:text-xl duration-300"
					aria-label="More Projects"
				>
					<Button title="More Projects" />
				</Link>
			</div>
			<div className="text-center">
				<p className="font-general-medium text-2xl sm:text-4xl mt-12 mb-1 text-ternary-dark dark:text-ternary-light">
					About Me
				</p>
			</div>
			<About />
			<div className="text-center">
				<p className="font-general-medium text-2xl sm:text-4xl mt-12 mb-1 text-ternary-dark dark:text-ternary-light">
					Contact Me
				</p>
			</div>
			<Contact></Contact>
		</div>
	);
};

export default Home;
