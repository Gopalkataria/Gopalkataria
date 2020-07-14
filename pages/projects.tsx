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
	key: number;
	title: string;
	description: string;
	link: string;
}




// Important components and data below

export function ProjectCardComponent(props: Project) {
	return (
		<div
			data-aos='zoom-in-up'
			className='card border border-info col-sm-8 col-md-5 col-lg-5 m-2 p-2 w-18'>
			<div className='card-body d-flex flex-column justify-content-around '>
				<h5 className='card-title  text-dark'>{props.title}</h5>
				<div className='card-text'>{props.description}</div>

				<a
					href={props.link}
					target='_blank'
					className=' d-flex justify-content-center card-link btn btn-raisable bg-primary text-white mt-2  stretched_link '>
					<strong>See this 🥽 </strong>
				</a>
			</div>
		</div>
	);
}

export const MainProjects: Project[] = [
	// all project keys are UNIQUE
	// only three projects here
	{
		key: 1,
		title: " My Portfolio Page ",
		description:
			" The page you are looking at right now is made using Next.js and Bootstrap from ground up ",
		link: "https://gopalkataria.web.app",
	},
	{
		key: 2,
		title: " Take My Note - Ionic & React ",
		description:
			" A web-app where you can temporarily keep some text. Built using Ionic and React. ",
		link: "https://takemynote.web.app",
	},

	{
		key: 3,
		title: "Time table",
		description:
			"A place to keep your weekly schedule. Made in collaboration with My friend David Yadav",
		link: "https://david-learns-coding.github.io/Time-table/",
	},
];

const OtherProjects: Project[] = [
	// all project keys are UNIQUE
	// number alloted to keys for these projects should always be more than 9
	// keys are in descending order, Because new projects are added on top

	{
		key: 16,
		title: " Physiczard ",
		description:
			" An old-school game revisited where physics is intentionally made weird. Don't take it easy, it is harder than you think! ",
		link: "https://gopalkataria.github.io/bouncy-game/",
	},

	{
		key: 15,
		title: " Earth Clock ",
		description: " An unpredictable world clock made in vanilla javascript. ",
		link: "https://earth-clock.web.app",
	},
	{
		key: 14,
		title: " Cryptography Algorithms ",
		description:
			"Python Algorithm to encrypt/decrypt text using numerical keys text is encrypted multiple times with different techniques depending on no. of digits in the keys.",
		link: "https://github.com/Gopalkataria/Cryptography",
	},
	{
		key: 13,
		title: " Finding square roots",
		description:
			" An algorithm written in python to find square roots of positive whole numbers. Can find values of square roots of numbers upto ten thousand decimal places accurately ",
		link: "https://github.com/Gopalkataria/square-root/",
	},
	{
		key: 12,
		title: " Notepy - a notepad clone ",
		description:
			" Notepy is a notepad clone written in Python. It's real power lies in customization. Everything from ribbons to menus can be easily customized by changing the code, though you need to figure out how it works first",
		link: "https://github.com/Gopalkataria/Notepad-for-pythonists",
	},
	{
		key: 11,
		title: " Cryptography Algorithms - Java ",
		description:
			"If you are sending secret messages, You need to check this. Written in java so that Android developers could benefit from it. Purposely made hard to read. ",
		link: "https://github.com/Gopalkataria/ceaser-cipher-java",
	},
	{
		key: 10,
		title: " Finding Prime Numbers - Java ",
		description:
			"Let's find some prime numbers, maybe a few thousand. Algorithm isn't as complicated as the language. ",
		link: "https://github.com/Gopalkataria/Prime-Numbers-Java",
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
								key={project.key}
								link={project.link}
							/>
						);
					})}
				</div>
			</div>
		</BootstrapPage>
	);
}
