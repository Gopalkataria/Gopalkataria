// Instructions about components
// If the component IS A PAGE VIEW ( wrapped in BootstrapPage ) , the name should end in "Page"
// if component is A PART OF THE PAGE, the name should end in "Component"
// The only exception to the above rule is BootstrapPage component, which ends with
// "Page" but it's not a page view, it is a wrapper for pages in bootstrap

import { MainProjects, ProjectCardComponent } from "./projects";
import { BootstrapPage } from "./index";
import Link from "next/link";
import { ContactLinksComponent } from "./contact";


declare global {
    namespace JSX {
        interface IntrinsicElements {
            'ion-icon': { name : string , size ?: string };
        }
    }
}

// Important components below

export function SectionComponent(props: { children : any , title : string , icon : string }) {
	return (
		<div data-aos='zoom-out-right'>
			<div className='row d-flex justify-content-left'>
				<h4 className='blockqoute mb-2 mt-5 col blink'>
					{" "}
					<ion-icon size='large' name={props.icon} /> {props.title}{" "}
				</h4>
			</div>
			<div className='row d-flex justify-content-left'>
				<div className=' col lead m-2 '>{props.children}</div>
			</div>
		</div>
	);
}

export function InterestComponent(props: any) {
	return (
		<div data-aos='flip-left' className='m-2 p-2 intrests'>
			<strong> {props.title} </strong> <br />
			{props.children}
		</div>
	);
}

// main about view component below

export default function AboutPage() {
	return (
		<BootstrapPage title='Gopal Kataria'>
			<div className='container-fluid '>
				<div className='row d-flex justify-content-center mx-auto mt-3 p-3 bg-gradient'>
					<div className='col-sm-8 col-md-4  mx-auto h-100 px-auto my-auto py-2 '>
						<div className=' d-flex my-auto flex-column h-100 justify-content-center'>
							<img
								src='/avatar.webp'
								alt="One of the Gopal's best pictures"
								className='img-fluid '></img>
						</div>
					</div>
					<div className='col-sm-6 col-md-8 col-lg-6 my-auto text-center'>
						<h1 className='  display-4 '>
							{" "}
							<b>Gopal Kataria</b>
						</h1>
						<h4 className='text-muted '>High school student</h4>
						<h4 className='text-muted '>Born in 2004</h4>
					</div>
				</div>

				<SectionComponent title={"About Me "} icon='person-outline'>
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
					<strong className='px-1'>
						Feel free to
						<a href='#contact-me' className=' text-primary px-1'>
							contact me
						</a>
						with your requirements, I will do all my best to come upto more than
						your expectations.
					</strong>
				</SectionComponent>

				<SectionComponent title='Skills' icon='construct-outline'>
					<ul>
						<li>
							Good Knowledge of Front-end languages like CSS, HTML and
							Javascript
						</li>
						<li>
							Basic Knowledge of Front-end frameworks like React.js, Next.js,
							Ionic (with React){" "}
						</li>
						<li>
							Good Knowledge of Python (algorithms, scrap-code, automation)
						</li>
						<li>Strong base in Mathematics (as a high school student)</li>
						<li>Firebase hosting and analytics </li>
						<li>Comfortable with Git and Github</li>
						<li>Beginner level expertise in C# and Java </li>
						<li>A talented elocutionist</li>
					</ul>
				</SectionComponent>

				{/* project cards below

				BE VERY CAREFUL WITH <div></div> AS THEY ARE QUITE CONFUSING
				click on then to check which are their closing tags
				*/}
				<div data-aos='zoom-out-up'>
					<div className='row d-flex justify-content-left'>
						<h4 className='blockqoute mb-2 mt-5 col blink'>
							{" "}
							<ion-icon name='color-wand-outline' /> Recent Projects
						</h4>
					</div>
					<div className='row d-flex justify-content-center'>
						{MainProjects.map((project) => {
							return (
								<ProjectCardComponent
									title={project.title}
									description={project.description}
									link={project.link}
									key={project.key}></ProjectCardComponent>
							);
						})}

						<div
							data-aos='zoom-in-up'
							className='card bg-dark border border-warn col-sm-8 col-md-5 col-lg-5 m-2 p-2 '>
							<div className='card-body text-center bg-dark text-light '>
								<div className='card-title'>
									<h6>🔎 Explore All Projects</h6>{" "}
								</div>
								<div className='card-text mb-5'>
									Have a look at all my Projects.
								</div>
								<div className='jiggle card-link raisable btn btn-dark border border-white px-4  display-4 '>
									<Link href='\projects'>
										<div className='text-light '>
											<strong> See all Projects </strong>
										</div>
									</Link>
								</div>
							</div>
						</div>

						{/* end of row of project cards  */}
					</div>

					{/* end of projects section cards  */}
				</div>

				<SectionComponent title='Achievements' icon='trophy-sharp'>
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
							Quizzes, and compèring).
						</li>
						<li>
							Secured 188th position out of 3,000 participants in Global Citizen
							Scholarship entrance exam held on 20th June 2020.
						</li>
						<li>
							Helped My friend get his{" "}
							<a
								href='https://david-learns-coding.github.io/Time-table/'
								target='_blank'
								rel='noreferrer'>
								first website
							</a>{" "}
							working
						</li>
					</ul>
				</SectionComponent>

				<SectionComponent title=' Interests ' icon='heart-circle-sharp'>
					<InterestComponent title="Building PWA's ">
						While building websites, turning them into Progressive Web Apps
						(PWA's) makes them a lot faster, reliable and engaging. You can
						check some PWA's I've built in my{" "}
						<Link href='/projects'>
							<a className='text-primary mx-1'>projects section.</a>
						</Link>
					</InterestComponent>

					<InterestComponent title=' Solving algorithmic problems '>
						Hard programming problems are intrinsically fun to tackle. My main
						focus is to come up with creative solutions to rather mundane
						problems. These patterns can be found everywhere in my code.
					</InterestComponent>

					<InterestComponent title=' Tech Enthusiast '>
						I constantly keep myself updated with upcoming developments in the
						tech industry. This has made me the de-facto person to reach out for
						any Tech related advice and assistance amongst my friends and family
						members.
					</InterestComponent>
				</SectionComponent>

				<ContactLinksComponent />

				<footer className='row mt-5'>
					<div className='col-12 d-flex justify-content-center text-center'>
						<p>
							Made with ❤ using
							<a
								rel='noreferrer'
								className='px-1 text-primary'
								target='_blank'
								href='https://nextjs.org/'>
								Next.js
							</a>
							and
							<a
								rel='noreferrer'
								className='px-1 text-primary'
								target='_blank'
								href='https://getbootstrap.com/'>
								Bootstrap
							</a>
						</p>
					</div>
				</footer>
			</div>
		</BootstrapPage>
	);
}
