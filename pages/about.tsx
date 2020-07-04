
import { Section, Interest, ProjectCard, Project } from "./components/components";
import { MainProjects } from "./components/projects"
import Head from "next/head";

function About() {
	return (
		<div>
			<Head>
				<title>Gopal Kataria</title>
				<link rel="icon" href="/favicon.ico" />

				{/* Firebase  Scripts over here  */}
				<script src="/__/firebase/7.15.5/firebase-app.js"></script>

				<script src="/__/firebase/7.15.5/firebase-analytics.js"></script>

				<script src="/__/firebase/init.js"></script>
				<link rel="stylesheet" href="/bootstrap/css/bootstrap.css"></link>
			</Head>
			<div className="container ">
				<div className="row d-flex justify-content-center m-4 bg-light">
					<div className="col-sm-4 mx-auto px-auto ">
						<img
							src="/avatar.jpg"
							alt="One of the Gopal's best pictures"
							className="img-fluid "
						></img>
					</div>
					<div className="col-sm-8 text-center">
						<h1 className="  display-4">Gopal Kataria</h1>
						<h4 className="text-muted ">High school student</h4>
					</div>
				</div>

				<Section title={" About Me "}>
					<strong>
						I am a high school student and a self-taught programmer.
					</strong>
					While main my main focus is web development, I love trying my hand and
					new languages, software and frameworks. My ultimate goal is to build
					something transformative for the society using my programming skills.
					<br />
					<br />
					<strong className="px-1">
						Feel free to contact me if you any ideas which you think I can bring
						to reality.
					</strong>
					I have a good experience with front-end languages ( HTML, CSS,
					Javascript ) and frameworks ( React , Next.js, Bootstrap, Ionic ) along with
					great knowledge of Python.
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
									key={project.pid.toString()}
								></ProjectCard>
							);
						})}
					</div>
				</div>

				<Section title="Achievements">
					<ul>
						<li>Participated in Google's kickstart competition.</li>
						<li>Scored 8.0 Band in IELTS academic test</li>
						<li>An active member of Hack Club community</li>
						<li>
							Represented the school in various inter-school competitions.
						</li>
						<li>
							Participated in various stage activities in school (Debates,
							Quizzes, and compèring )
						</li>
					</ul>
				</Section>

				<Section title="Interests ">
					<Interest title=" PWA's ">
						While building websites, turning them into Progressive Web Apps
						(PWA's) makes them a lot faster, reliable and engaging. You can
						check some PWA's I've built in my projects section.
					</Interest>

					<Interest title=" Algorithms ">
						Hard programming problems are intrinsically fun to tackle. My main
						focus is to come up with creative solutions to rather mundane
						problems. These patterns can be found everywhere in my code.
					</Interest>

					<Interest title=" Teach Enthusiast ">
						I constantly keep myself updated with upcoming developments in the
						tech industry. This has made me the de-facto person to reach out for
						any Tech related advice and assistance amongst my friends and family
						members.
					</Interest>
				</Section>

				<Section title="Contact me ">
					<ul className="list-group ">
						Either personal message me on my social media accounts or send an Email. I will surely get back to you within 48 hours.
						<li className="list-group-item text-primary">
							<a href="https://twitter.com/gopal_kataria_" target="_blank">
								Twitter ( @gopal_kataria_ )
							</a>
						</li>
						<li className="list-group-item text-primary">
							<a href="https://www.instagram.com/iam_gopalk/" target="_blank">
								Instagram ( @iam_gopalk )
							</a>
						</li>
						<li className="list-group-item text-primary "  >

								Email: gopalkataria@yahoo.com

						</li>
					</ul>
				</Section>

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

			<script src="/bootstrap/js/bootstrap.js"></script>
		</div>
	);
}


export default About;