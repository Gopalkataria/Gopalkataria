import { BootstrapApp, GoHome } from "./index";
import Link from "next/link";

// Only the project cards related stuff is stored over here


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

export function ProjectCard(props: Project) {
	return (
		<div className="card border border-info col-sm-8 col-md-5 col-lg-5 m-2 p-2 w-18">
			<div className="card-body">
				<h5 className="card-title text-dark">{props.title}</h5>
				<div className="card-text">{props.description}</div>

				<a href={props.link} target="_blank" className=" card-link ">
					<strong> See this 👀 </strong>
				</a>
			</div>
		</div>
	);
}

export const MainProjects: Project[] = [
	// all project keys are UNIQUE
	//

	{
		key: 1,
		title: " Take My Note - Ionic & React ",
		description:
			" A web-app where you can temporarily keep some text. Built using Ionic and React. ",
		link: "https://takemynote.web.app",
	},
	{
		key: 2,
		title: " Earth Clock ",
		description: " An unpredictable world clock made in vanilla javascript. ",
		link: "https://earth-clock.web.app",
	},
	{
		key: 3,
		title: " Physiczard ",
		description:
			" An old-school game revisited where physics is intentionally made weird. Don't take it easy, it is harder than you think! ",
		link: "https://gopalkataria.github.io/bouncy-game/",
	},
];
const OtherProjects: Project[] = [
	// all project keys are UNIQUE
	// keys for other projects should always be 2 digit numbers
	{
		key: 10,
		title: " Cryptography Algorithms ",
		description:
			"Python Algorithm to encrypt/decrypt text using numerical keys text is encrypted multiple times with different techniques depending on no. of digits in the keys.",
		link: "https://github.com/Gopalkataria/Cryptography",
	},
	{
		key: 11,
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
		key: 13,
		title: " Cryptography Algorithms - Java ",
		description:
			"If you are sending secret messages, You need to check this. Written in java so that Android developers could benefit from it. Purposely made hard to read. ",
		link: "https://github.com/Gopalkataria/ceaser-cipher-java",
	},
	{
		key: 14,
		title: " Finding Prime Numbers - Java ",
		description:
			"Let's find some prime numbers, maybe a few thousand. Algorithm isn't as complicated as the language. ",
		link: "https://github.com/Gopalkataria/Prime-Numbers-Java",
	},
];

const AllProjects: Project[] = MainProjects.concat(OtherProjects);

export { AllProjects };






// The main projects view component below

export default function Projects() {
	return (
		<BootstrapApp title="Gopal's Projects">
			<div className="container ">
				<GoHome/>
				<div className=" border border-dark m-3 p-3 ">
					<div className="row ">
						<h5 className="col  text-center ">
							<strong>Projects</strong>
						</h5>
					</div>
					<div className="row">
						<div className=" col text-secondary mx-2 my-1 text-wrap text-center">
							These are some of my notable projects. Head over to My
							<a href="https://github.com/Gopalkataria" target="_blank" className="text-primary px-1 " >Github Profile</a> to find some more stuff
						</div>
					</div>
				</div>
				<div className="row justify-content-center">
					{AllProjects.map((project) => {
						return (
							<ProjectCard
								title={project.title}
								description={project.description}
								key={project.key}
								link={project.link}
							/>
						);
					})}
				</div>
			</div>
		</BootstrapApp>
	);
}
