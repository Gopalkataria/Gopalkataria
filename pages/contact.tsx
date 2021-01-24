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

import { SectionComponent } from "./about";
import { BootstrapPage, GoHomeComponent } from ".";

export function ContactLinksComponent() {
	return (
		<SectionComponent title='Contact me ' icon='call-sharp'>
			<ul className='list-group ' id='contact-me'>
				Currently I am not open to accept any new projects [ I am busier than Elon Musk ].
				If you want to discuss something else, 
				 Feel free to Email me. I will get back to you within a week or so subject to the topic of your Email.  
				<strong>
					<li className='list-group-item links  '>
						<div className='github'>
							<ion-icon name='logo-github'></ion-icon> {"  "}
							<a
								href='https://github.com/Gopalkataria'
								rel='noreferrer'
								target='_blank'
								className=' text-primary'>
								Github @GopalKataria
							</a>
						</div>
					</li>
					<li className='list-group-item  email links '>
						<div className='email'>
							<ion-icon name='mail-outline'></ion-icon> {"  "}
							<a
								rel='noreferrer'
								className=' text-primary'
								href='mailto:gopalkataria@yahoo.com?subject=Saw_Your_Site'>
								Email: gopalkataria@yahoo.com
							</a>
						</div>
					</li>
				</strong>
			</ul>
		</SectionComponent>
	);
}

export default function ContactPage() {
	return (
		<BootstrapPage title='Contact Gopal'>
			<div className='container'>
				<GoHomeComponent />

				<ContactLinksComponent />
			</div>
		</BootstrapPage>
	);
}
