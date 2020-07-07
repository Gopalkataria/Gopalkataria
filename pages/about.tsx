
import { MainProjects, ProjectCard } from "./projects";
import { BootstrapApp } from "./index";
import Link from "next/link";
import { ContactLinks } from "./contact";





// Important components below

export function Section(props: any) {
	return (
		<div>
			<div className="row d-flex justify-content-left">
				<h4 className="blockqoute mb-2 mt-5 col"> {props.title} </h4>
			</div>
			<div className="row d-flex justify-content-left">
				<div className=" col-12 lead m-2 ">{props.children}</div>
			</div>
		</div>
	);
}

export function Interest(props: any) {
	return (
		<div className="m-2 p-2">
			<strong> {props.title} </strong> <br />
			{props.children}
		</div>
	);
}






// main about view component below


function About() {
	return (
		<BootstrapApp title="Gopal Kataria">
			<div className="container ">
				<div className="row d-flex justify-content-center m-4 bg-light">
					<div className="col-sm-4 mx-auto px-auto my-2 py-2 ">
						<img
							src="/avatar.jpg"
							alt="One of the Gopal's best pictures"
							className="img-fluid "
						></img>
					</div>
					<div className="col-sm-8 text-center">
						<h1 className="  display-4">Gopal Kataria</h1>
						<h4 className="text-muted ">High school student</h4>
						<h4 className="text-muted ">Born in 2004</h4>
					</div>
				</div>

				<Section title={" About Me "}>
					<strong>
						I am a high school student and a self-taught programmer.
					</strong>
					While my main focus is web development, I love trying my hand at new
					languages, software and frameworks. My ultimate goal is to build
					something transformative for the society using my programming skills.
					<br />
					<br />I have a good experience with front-end languages (HTML, CSS,
					Javascript) and frameworks (React, Next.js, Bootstrap, Ionic) along
					with great knowledge of Python.
					<strong className="px-1">
						Feel free to
						<a href="#contact-me" className="text-primary px-1">
							contact me
						</a>
						with your requirements, I will do all my best to come upto more than
						your expectations. I will render my services
						<a className="text-success"> AT NO FEE </a> but at a little cost of
						appreciation from you and your friends.
					</strong>
				</Section>

				<div>
					<div className="row d-flex justify-content-left">
						<h4 className="blockqoute mb-2 mt-5 col"> Recent Projects </h4>
					</div>
					<div className="row d-flex justify-content-center">
						{MainProjects.map((project) => {
							return (
								<ProjectCard
									title={project.title}
									description={project.description}
									link={project.link}
									key={project.key}
								></ProjectCard>
							);
						})}

						<div className="card bg-dark border border-warn col-sm-8 col-md-5 col-lg-5 m-2 p-2 ">
							<div className="card-body text-center bg-dark text-light ">
								<div className="card-title">
									<h6>🔎 Explore All Projects</h6>{" "}
								</div>
								<div className="card-text mb-5">
									Have a look at all my Projects.
								</div>
								<div className=" card-link btn btn-dark border border-white px-4  display-4 ">
									<Link href="\projects">
										<a className="text-light">
											<strong> See all Projects </strong>
										</a>
									</Link>
								</div>
							</div>
						</div>

						{/* end of row of project cards  */}
					</div>

					{/* end of projects section cards  */}
				</div>

				<Section title="Achievements">
					<ul>
						<li>
							Participated in Google's kickstart competition. Solved numerous
							algorithmic problems for the same.
						</li>
						<li>Scored 8.0 Band in IELTS academic test at the age of 16. </li>
						<li>An active member of Hack Club community.</li>
						<li>
							Represented the school in various inter-school competitions.
						</li>
						<li>
							Participated in various stage activities in school (Debates,
							Quizzes, and compèring ).
						</li>
						<li>
							Secured 188th position out of 3,000 participants in Global Citizen
							Scholarship entrance exam.
						</li>
					</ul>
				</Section>

				<Section title="Interests ">
					<Interest title="Building PWA's ">
						While building websites, turning them into Progressive Web Apps
						(PWA's) makes them a lot faster, reliable and engaging. You can
						check some PWA's I've built in my{" "}
						<Link href="/projects">
							<a className="text-primary mx-1">projects section.</a>
						</Link>
					</Interest>

					<Interest title=" Solving algorithmic problems ">
						Hard programming problems are intrinsically fun to tackle. My main
						focus is to come up with creative solutions to rather mundane
						problems. These patterns can be found everywhere in my code.
					</Interest>

					<Interest title=" Tech Enthusiast ">
						I constantly keep myself updated with upcoming developments in the
						tech industry. This has made me the de-facto person to reach out for
						any Tech related advice and assistance amongst my friends and family
						members.
					</Interest>
				</Section>

				<ContactLinks/>

				<footer className="row mt-5">
					<div className="col-12 d-flex justify-content-center text-center">
						<p>
							Made with ❤ using
							<a
								className="px-1 text-primary"
								target="_blank"
								href="https://nextjs.org/"
							>
								Next.js
							</a>
							and
							<a
								className="px-1 text-primary"
								target="_blank"
								href="https://getbootstrap.com/"
							>
								Bootstrap
							</a>
						</p>
					</div>
				</footer>
			</div>
		</BootstrapApp>
	);
}

export default About;
