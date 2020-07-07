



import App from "./about"
export default function Index( ){return ( <App/> )};
// instead of redirecting to about borrowing and reexporting its default component above





import Head from "next/head";
import Link from "next/link"



// go home component

export function GoHome() {
	return (<div className="row">
		<div className="col-sm-2-4 mt-3 ml-2">
			<Link href="/about">
				<a className="text-primary border border-primary p-2">Go Back Home</a>
			</Link>
		</div>
	</div>);
}


// important component for using bootstrap throughout the website over here


export function BootstrapApp(props: { title: string; children: any }) {
	return (
		<div>
			<Head>
				<title>{props.title}</title>
				<link rel="icon" href="/G.svg" type="image/svg+xml" />

				 <meta data-charset="utf-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>


				<link rel="stylesheet" href="/bootstrap/css/bootstrap.min.css"></link>
				<style>
					{`
					html {
						scroll-behavior: smooth;
					}
					`}
				</style>
			</Head>

			<main>{props.children}</main>
			<script src="/jquery.slim.min.js"></script>
			{/* Firebase  Scripts over here  */}
			<script src="/__/firebase/7.15.5/firebase-app.js"></script>

			<script src="/__/firebase/7.15.5/firebase-analytics.js"></script>

			<script src="/__/firebase/init.js"></script>
			<script src="/bootstrap/logging.js"></script>

			<script src="/bootstrap/js/bootstrap.min.js"></script>
		</div>
	);
}