import {Section} from "./about"
import { BootstrapApp, GoHome } from ".";

export function ContactLinks() {
    return (
			<Section title="Contact me ">
				<ul className="list-group " id="contact-me">
					Either personal message me on my social media accounts or send an
					Email. I will surely get back to you within 48 hours. <br/>
					<strong>
						<li className="list-group-item text-primary">
							<a href="https://twitter.com/gopal_kataria_" target="_blank">
								Twitter @gopal_kataria_
							</a>
						</li>
						<li className="list-group-item text-primary">
							<a href="https://www.instagram.com/iam_gopalk/" target="_blank">
								Instagram @iam_gopalk
							</a>
						</li>
						<li className="list-group-item text-primary">
							<a href="https://github.com/Gopalkataria" target="_blank">
								Github @GopalKataria
							</a>
						</li>
						<li className="list-group-item text-primary  ">
							<a href="mailto:gopalkataria@yahoo.com?subject=Saw_Your_Site">
								Email: gopalkataria@yahoo.com
							</a>
						</li>
					</strong>
				</ul>
			</Section>
		);
}


export default function Contact() {
    return (
        <BootstrapApp title="Contact Gopal">
            <div className="container">

            <div className="row align-items-center">

                <GoHome />

            <ContactLinks/>
            </div>
            </div>
        </BootstrapApp>
    )
}