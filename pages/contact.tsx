// Instructions about components
// If the component IS A PAGE VIEW ( wrapped in BootstrapPage ) , the name should end in "Page"
// if component is A PART OF THE PAGE, the name should end in "Component"
// The only exception to the above rule is BootstrapPage component, which ends with
// "Page" but it's not a page view, it is a wrapper for pages in bootstrap





import { SectionComponent } from "./about"
import { BootstrapPage, GoHomeComponent } from ".";

export function ContactLinksComponent() {
    return (
			<SectionComponent title="📞 Contact me ">
				<ul className="list-group " id="contact-me">
					Either personal message me on my social media accounts or send an
					Email. I will surely get back to you within 48 hours. <br/>
					<strong>
						<li className="list-group-item text-primary">
							<a href="https://twitter.com/gopal_kataria_" rel="noopener" target="_blank">
								Twitter @gopal_kataria_
							</a>
						</li>
						<li className="list-group-item text-primary">
							<a href="https://www.instagram.com/iam_gopalk/" rel="noopener" target="_blank">
								Instagram @iam_gopalk
							</a>
						</li>
						<li className="list-group-item text-primary">
							<a href="https://github.com/Gopalkataria" rel="noopener" target="_blank">
								Github @GopalKataria
							</a>
						</li>
						<li className="list-group-item text-primary  ">
							<a rel="noopener" href="mailto:gopalkataria@yahoo.com?subject=Saw_Your_Site">
								Email: gopalkataria@yahoo.com
							</a>
						</li>
					</strong>
				</ul>
			</SectionComponent>
		);
}


export default function ContactPage() {
    return (
        <BootstrapPage title="Contact Gopal">
            <div className="container">

            <div className="row align-items-center">

                <GoHomeComponent />

            <ContactLinksComponent/>
            </div>
            </div>
        </BootstrapPage>
    )
}