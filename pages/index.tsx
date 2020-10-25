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

import App from "./about";
import AOS from "aos";

export default function IndexPage() {
	return <App />;
}
// instead of redirecting to about page borrowing and re-exporting its default component above

declare global {
	const firebase: any;
	const AOS: any;
}

import Head from "next/head";
import Link from "next/link";
import { useEffect } from "react";

// go home component

export function GoHomeComponent() {
	return (
		<div className='row'>
			<div className='col-sm-2-4 mt-3 ml-2'>
				<Link href='/about'>
					<a className='text-primary border border-primary raisable p-2'>Go to About Page</a>
				</Link>
			</div>
		</div>
	);
}

// important component for using bootstrap throughout the website over here

export function BootstrapPage(props: { title: string; children: any }) {
	// react hook for animations
	useEffect(() => {
		AOS.init({
			// disable: "phone", // disable all animations on small screens
			offset: 60,
			duration: 900, // values from 0 to 3000, with step 50ms
			easing: "ease", // animation
			mirror: true, // do the opposite animation on prev div
			anchorPlacement: "center-center", // defines which position of the element regarding to window should trigger the animation
		});
		AOS.refresh();
	});

	return (
		<div>
			<Head>
				<title>{props.title}</title>
				{/*  Cool GK styles  icon  */}
				<link rel='icon' href='/favicon.ico' type='image/x-icon' />

				<meta data-charset='utf-8' />

				{/* ownership verification fingerprint */}
				<meta
					name='google-site-verification'
					content='_W5FDuxsinuC7rs-ixsDh6feSq2cSDBm4Lr23VP92Bs'
				/>
				<meta name='viewport' content='width=device-width, initial-scale=1, shrink-to-fit=no' />

				{/*  for crawling purposes  */}
				<meta
					name='Description'
					content='Gopal Kataria : High school student, self-taught programmer. Find More information about him over here. '
				/>
			</Head>

			{/* emotional atyachaar to enable js */}
			<noscript>
				<h1>
					I have made this website painstakingly by working day and night. Javascript makes up an
					essential part of the page, including animations and other important core functionality.
					<br />
					<br />
					I think without the core functionality which I provide using Javascript, your user
					experience on this site will not be upto the level which I want you to experience.
					<br />
					<br />
					So as a HUMBLE request please ENABLE Javascript for my sake, at least on this web page. I
					promise to collect only and only analytical data which doesn't include your personal
					information at all.
				</h1>
			</noscript>

			{/* main content of the page goes here  */}
			<main>{props.children}</main>

			{/* custom css */}
			<link rel='preload' href='/scripts/main.css?ver=1.12' as='style' />
			<link rel='stylesheet' href='/scripts/main.css?ver=1.12' />
			{/* aos css */}
			<link rel='preload' href='/scripts/aos.css?ver=1.91' as='style' />

			{/* custom fonts from Google */}
			<link
				href='https://fonts.googleapis.com/css2?family=Sora:wght@400&display=swap'
				rel='preload'></link>
			<link
				rel='stylesheet'
				href='https://fonts.googleapis.com/css2?family=Sora:wght@400&display=swap'
			/>
			<link
				href='https://fonts.googleapis.com/css2?family=Luckiest+Guy&display=swap'
				rel='preload'></link>
			<link
				rel='stylesheet'
				href='https://fonts.googleapis.com/css2?family=Luckiest+Guy&display=swap'
			/>
			{/* animate on scroll css - required */}
			<link rel='stylesheet' href='/scripts/aos.css?ver=1.91' />

			{/* Firebase  Scripts over here  */}
			<script defer src='/__/firebase/7.15.5/firebase-app.js'></script>
			<script defer src='/__/firebase/7.15.5/firebase-analytics.js'></script>
			<script defer src='/__/firebase/init.js'></script>

			{/* Custom javascript below -- after firebase jumps in */}
			<script defer src='/scripts/main.js?ver=1.8'></script>
			{/* ionicons js - 2 files  */}
			<script
				type='module'
				async
				src='https://unpkg.com/ionicons@5.1.2/dist/ionicons/ionicons.esm.js'></script>
			<script
				noModule={false}
				async
				src='https://unpkg.com/ionicons@5.1.2/dist/ionicons/ionicons.js'></script>
		</div>
	);
}
