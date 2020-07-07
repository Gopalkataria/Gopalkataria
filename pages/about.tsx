// Instructions about components
// If the component IS A PAGE VIEW ( wrapped in BootstrapPage ) , the name should end in "Page"
// if component is A PART OF THE PAGE, the name should end in "Component"
// The only exception to the above rule is BootstrapPage component, which ends with
// "Page" but it's not a page view, it is a wrapper for pages in bootstrap




import { MainProjects, ProjectCardComponent } from "./projects";
import { BootstrapPage } from "./index";
import Link from "next/link";
import { ContactLinksComponent } from "./contact";

// Important components below

export function SectionComponent(props: any) {
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

export function InterestComponent(props: any) {
	return (
		<div className="m-2 p-2">
			<strong> {props.title} </strong> <br />
			{props.children}
		</div>
	);
}

// main about view component below

export default function About() {
	return (
		<BootstrapPage title="Gopal Kataria">
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

				<SectionComponent title={"😃 About Me "}>
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
				</SectionComponent>

				<SectionComponent title="✋ Skills">
					<ul>
						<li>
							Good Knowledge of Front-end languages like CSS, HTML and
							Javascript
						</li>
						<li>
							Good Knowledge of Front-end frameworks like React.js, Next.js,
							Ionic (with React){" "}
						</li>
						<li>
							Good Knowledge of Python (algorithms, scrap-code, automation)
						</li>
						<li>Web UI Frameworks (Bootstrap and Ionic)</li>
						<li>Comfortable with command line (CMD, Powershell) </li>
						<li>Firebase hosting and analytics </li>
						<li>Comfortable with Git and Github</li>
						<li>Beginner level expertise in C# and Java </li>
					</ul>
				</SectionComponent>

				{/* project cards below

				BE VERY CAREFUL WITH <div></div> AS THEY ARE QUITE CONFUSING
				click on then to check which are their closing tags
				*/}
				<div>
					<div className="row d-flex justify-content-left">
						<h4 className="blockqoute mb-2 mt-5 col"> 🔬 Recent Projects </h4>
					</div>
					<div className="row d-flex justify-content-center">
						{MainProjects.map((project) => {
							return (
								<ProjectCardComponent
									title={project.title}
									description={project.description}
									link={project.link}
									key={project.key}
								></ProjectCardComponent>
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

				<SectionComponent title="🥇 Achievements">
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
						<li>Helped My friend get his first website working</li>
					</ul>
				</SectionComponent>

				<SectionComponent title="💕 Interests ">
					<InterestComponent title="Building PWA's ">
						While building websites, turning them into Progressive Web Apps
						(PWA's) makes them a lot faster, reliable and engaging. You can
						check some PWA's I've built in my{" "}
						<Link href="/projects">
							<a className="text-primary mx-1">projects section.</a>
						</Link>
					</InterestComponent>

					<InterestComponent title=" Solving algorithmic problems ">
						Hard programming problems are intrinsically fun to tackle. My main
						focus is to come up with creative solutions to rather mundane
						problems. These patterns can be found everywhere in my code.
					</InterestComponent>

					<InterestComponent title=" Tech Enthusiast ">
						I constantly keep myself updated with upcoming developments in the
						tech industry. This has made me the de-facto person to reach out for
						any Tech related advice and assistance amongst my friends and family
						members.
					</InterestComponent>
				</SectionComponent>

				<ContactLinksComponent />

				<footer className="row mt-5">
					<div className="col-12 d-flex justify-content-center text-center">
						<p>
							Made with ❤ using
							<a
								rel="noopener"
								className="px-1 text-primary"
								target="_blank"
								href="https://nextjs.org/"
							>
								Next.js
							</a>
							and
							<a
								rel="noopener"
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
		</BootstrapPage>
	);
}
