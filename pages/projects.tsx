//  © 2020, Gopal Kataria

/**
 * (Type docs)
 *
 * @author Gopal Kataria
 * @description https://github.com/Gopalkataria
 */

// Instructions about components
// If the component IS A PAGE VIEW ( wrapped in BootstrapPage ) , the name should end in "Page"
// if component is A PART OF THE PAGE, the name should end in "Component"
// The only exception to the above rule is BootstrapPage component, which ends with
// "Page" but it's not a page view, it is a wrapper for pages in bootstrap

import { BootstrapPage, GoHomeComponent } from "./index";

//data structure for projects is a list of projects
// there are main projects which display on front page
// other projects are displayed only on projects page

export interface Project {
	uid: number;
	key?: number | string;
	title: string;
	description: string;
	link: string;
}

// Important components and data below

export function ProjectCardComponent(props: Project) {
	return (
		<div data-aos='zoom-in-up' className='card border border-info col-12 m-2 p-2 '>
			<div className='row no-gutter d-flex flex-row justify-content-center'>
				<div className='col-md-8 col-lg-7 col-xl-6 d-flex flex-column justify-content-center'>
					{" "}
					<picture className='card-img img-fluid '>
						<source srcSet={`/img/${props.uid}.webp`} type='image/webp' />
						<source srcSet={`/img/${props.uid}.png`} type='image/png' />
						<img
							src={`/img/${props.uid}.png`}
							className='card-img img-fluid '
							alt={props.title}
							loading='lazy'
						/>
					</picture>
				</div>
				<div className='col-md-11 col-lg-5 col-xl-6'>
					<div className='card-body d-flex flex-column justify-content-around '>
						<h5 className='card-title  text-dark'>{props.title}</h5>
						<div className='card-text'>{props.description}</div>

						<a
							href={props.link}
							target='_blank'
							rel='noreferrer'
							onClick={() => {
								firebase.analytics().logEvent(`project_${props.uid}_visited`);
							}}
							className=' d-flex justify-content-center card-link btn btn-raisable jiggle bg-primary text-white mt-2  stretched_link '>
							<strong>See this </strong>
						</a>
					</div>
				</div>
			</div>
		</div>
	);
}

export const MainProjects: Project[] = [
	// all project keys are UNIQUE
	// only three projects here

	{
		uid: 2,
		title: " My Portfolio Page ",
		description:
			" The page you are looking at right now is made using Next.js and Bootstrap from ground up ",
		link: "https://gopalkataria.web.app",
	},
	{
		uid: 3,
		title: " Take My Note - Ionic & React ",
		description:
			" A web-app where you can temporarily keep some text. Built using Ionic and React. ",
		link: "https://takemynote.web.app",
	},
];

const OtherProjects: Project[] = [
	// all project keys are UNIQUE
	// number alloted to keys for these projects should always be more than 9
	// keys are in descending order, Because new projects are added on top

	{
		uid: 16,
		title: " Physiczard ",
		description:
			" An old-school game revisited where physics is intentionally made weird. Don't take it easy, it is harder than you think! ",
		link: "https://gopalkataria.github.io/bouncy-game/",
	},

	{
		uid: 15,
		title: " Earth Clock ",
		description: "Worlds most unpredictable and unreliable clock, but the time it tells is *(usually) correct. Vanilla javascript. ",
		link: "https://earth-clock.web.app",
	},
	{
		uid: 12,
		title: " Notepy - a notepad clone ",
		description:
			" Notepy is a notepad clone written in Python. It's real power lies in customization. Everything from ribbons to menus can be easily customized by changing the code, though you need to figure out how it works first",
		link: "https://github.com/Gopalkataria/Notepad-for-pythonists",
	},

];

const AllProjects: Project[] = MainProjects.concat(OtherProjects);

export { AllProjects };

// The main projects view component below

export default function ProjectsPage() {
	return (
		<BootstrapPage title="Gopal's Projects">
			<div className='container '>
				<GoHomeComponent />
				<div className=' projects-heading border border-dark m-3 p-3 '>
					<div className='row '>
						<h5 className='col  text-center '>
							<strong>Projects</strong>
						</h5>
					</div>
					<div className='row'>
						<div className=' col text-secondary mx-2 my-1 text-wrap text-center'>
							These are some of my notable projects. Head over to
							<a
								href='https://github.com/Gopalkataria'
								target='_blank'
								className='text-primary px-1 '>
								{" "}
								My Github Profile
							</a>{" "}
							to find some more stuff
						</div>
					</div>
				</div>
				<div className='row justify-content-center'>
					{AllProjects.map((project) => {
						return (
							<ProjectCardComponent
								title={project.title}
								description={project.description}
								uid={project.uid}
								key={project.uid}
								link={project.link}
							/>
						);
					})}
				</div>
			</div>
		</BootstrapPage>
	);
}
