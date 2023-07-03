import ProjectsGrid from '../components/projects/ProjectsGrid';
import { ProjectsProvider } from '../context/ProjectsContext';
import MyProjects from './MyProjects/MyProjects';

const Projects = () => {
	return (
		<ProjectsProvider>
			<div className="container mx-auto">
				<MyProjects></MyProjects>
			</div>
		</ProjectsProvider>
	);
};

export default Projects;
