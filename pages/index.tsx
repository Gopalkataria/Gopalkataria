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
export default function IndexPage() {
	return <App />;
}
// instead of redirecting to about page borrowing and re-exporting its default component above

declare global {
	const AOS: any;
	const firebase: any;
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
	useEffect(() => {
		AOS.init({
			disable: "phone", // disable all animations on small screens
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
				<link rel='icon' href='/favicon.ico' type='image/x-icon' />

				<meta data-charset='utf-8' />
				<meta name='viewport' content='width=device-width, initial-scale=1, shrink-to-fit=no' />

				<meta
					name='Description'
					content='Gopal Kataria : High school student, self-taught programmer. Find More information about him over here. '
				/>

				{/* bootstrap css */}
				<link rel='stylesheet' href='./bootstrap/css/bootstrap.min.css' />
			</Head>

			<main>{props.children}</main>
			{/* custom css */}
			<link rel='stylesheet' href='/scripts/main.css?ver=1.5' />

			{/* custom fonts */}
			<link
				href='https://fonts.googleapis.com/css2?family=Sora:wght@400&display=swap'
				rel='stylesheet'></link>

			<link href='https://unpkg.com/aos@2.3.1/dist/aos.css' rel='stylesheet'></link>

			{/* 			Bootstrap scripts, use only when required
			<script src="/bootstrap/jquery.slim.min.js"></script>
			<script src="/bootstrap/js/bootstrap.min.js"></script> */}

			{/* Firebase  Scripts over here  */}
			<script src='/__/firebase/7.15.5/firebase-app.js'></script>
			<script src='/__/firebase/7.15.5/firebase-analytics.js'></script>
			<script src='/__/firebase/init.js'></script>

			{/* AOS scrolling library  */}
			<script src='https://unpkg.com/aos@2.3.1/dist/aos.js'></script>

			{/* Custom javascript below */}
			<script src='/scripts/main.js?ver=1.3'></script>
			{/* ionicons js */}
			<script
				type='module'
				src='https://unpkg.com/ionicons@5.1.2/dist/ionicons/ionicons.esm.js'></script>
			<script
				noModule={false}
				src='https://unpkg.com/ionicons@5.1.2/dist/ionicons/ionicons.js'></script>
		</div>
	);
}
