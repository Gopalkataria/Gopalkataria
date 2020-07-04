
import { Section, Interest, ProjectCard, Project } from "./components/components";
import { MainProjects } from "./components/projects"
import Head from "next/head";

function App() {
	return (
		<div>
			<Head>
				<title>Gopal Kataria</title>
				<link rel="icon" href="/favicon.ico" />

				{/* Firebase  Scripts over here  */}
				<script src="/__/firebase/7.15.5/firebase-app.js"></script>

				<script src="/__/firebase/7.15.5/firebase-analytics.js"></script>

				<script src="/__/firebase/init.js"></script>
				<link
					rel="stylesheet"
					href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
					integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk"
					crossorigin="anonymous"
				></link>
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
						{" "}
						I am a high school student and a self-taught programmer.{" "}
					</strong>{" "}
					While main my main focus is web development, I love trying my hand and
					new languages, software and frameworks. My ultimate goal is to build
					something transformative for the society using my programming skills.
				</Section>

				<div>
					<div className="row d-flex justify-content-left">
						<h4 className="blockqoute mb-2 mt-5 col"> Reacent Projects </h4>
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
					<ul>
						<li>

						</li>
					</ul>
				</Section>

				<footer className="row mt-5">
					<div className="col-12 d-flex justify-content-center text-center">
						<p>
							Made with ❤ using{" "}
							<a
								className="px-1 text-primary"
								target="_blank"
								href="https://nextjs.org/"
							>
								{" "}
								Next.js{" "}
							</a>
							and
							<a
								className="px-1 text-primary"
								target="_blank"
								href="https://getbootstrap.com/"
							>
								{" "}
								Bootstrap{" "}
							</a>
						</p>
					</div>
				</footer>
			</div>

			<script
				src="https://code.jquery.com/jquery-3.5.1.slim.min.js"
				integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj"
				crossorigin="anonymous"
			></script>
			<script
				src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js"
				integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo"
				crossorigin="anonymous"
			></script>
			<script
				src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js"
				integrity="sha384-OgVRvuATP1z7JjHLkuOU7Xw704+h835Lr+6QL9UvYjZE3Ipu6Tp75j7Bh/kR0JKI"
				crossorigin="anonymous"
			></script>
		</div>
	);
}


export default App;