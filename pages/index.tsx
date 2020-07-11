// Instructions about components
// If the component IS A PAGE VIEW ( wrapped in BootstrapPage ) , the name should end in "Page"
// if component is A PART OF THE PAGE, the name should end in "Component"
// The only exception to the above rule is BootstrapPage component, which ends with
// "Page" but it's not a page view, it is a wrapper for pages in bootstrap


import App from "./about"
export default function IndexPage( ){return ( <App/> )};
// instead of redirecting to about page borrowing and re-exporting its default component above





import Head from "next/head";
import Link from "next/link"



// go home component

export function GoHomeComponent() {
	return (<div className="row">
		<div className="col-sm-2-4 mt-3 ml-2">
			<Link href="/about">
				<a className="text-primary border border-primary p-2">Go Back Home</a>
			</Link>
		</div>
	</div>);
}


// important component for using bootstrap throughout the website over here


export function BootstrapPage(props: { title: string; children: any }) {
	return (
		<div>
			<Head>
				<title>{props.title}</title>
				<link rel='icon' href='/G.svg' type='image/svg+xml' />

				<meta data-charset='utf-8' />
				<meta
					name='viewport'
					content='width=device-width, initial-scale=1, shrink-to-fit=no'
				/>

				<meta
					name='Description'
					content='Gopal Kataria : High school student, self-taught programmer. Find More information about him over here. '
				/>

				{/* bootstrap css */}
				<link rel='stylesheet' href='/bootstrap/css/bootstrap.min.css'></link>
				{/* custom css */}
				<link rel='stylesheet' href='/scripts/main.css' />
				{/* ionicons js */}
				<script src='https://unpkg.com/ionicons@5.1.2/dist/ionicons.js'></script>
			</Head>

			<main>{props.children}</main>

			{/* 			Bootstrap scripts, use only when required
			<script src="/bootstrap/jquery.slim.min.js"></script>
			<script src="/bootstrap/js/bootstrap.min.js"></script> */}

			{/* Firebase  Scripts over here  */}
			<script src='/__/firebase/7.15.5/firebase-app.js'></script>
			<script src='/__/firebase/7.15.5/firebase-analytics.js'></script>
			<script src='/__/firebase/init.js'></script>

			{/* Custom javascript below */}
			<script src='/scripts/main.js'></script>
		</div>
	);
}