import Head from 'next/head' ;
import Link from "next/link" ;

import { Typography , Card , Paper , Box , Avatar} from "@material-ui/core" ;



export default function App() {
  return (
		<div>
			<Head>
				<title>Gopal Kataria</title>
			  <link rel="icon" href="/favicon.ico" />
<script src="/__/firebase/7.15.5/firebase-app.js"></script>

<script src="/__/firebase/7.15.5/firebase-analytics.js"></script>

<script src="/__/firebase/init.js"></script>
			</Head>

			<main>
				<Box mx="auto"  pl="40%" pt="10%">
					<Avatar > GK </Avatar>
				</Box>

				<Paper>
					<Box p="2rem" m="1rem">
						<Typography variant="h6"> About me</Typography>
					  <Typography variant="body2" >

							I am a high school student with an intermediate experience in
							programming. While main my main focus is web development , I love
							trying my hand and new languages, software and frameworks.

						  <br />


							My languages of expertise are C#, Python and Javascript. I use C#
							and Python for solving algorithmic problems and javascript for
							web development. Besides I have a basic knowledge of some other
							languages as well.

						  <br />

							My ultimate goal is to build something transformative for the
							society using my programming skills.

						</Typography>
					</Box>
				</Paper>
			</main>
		</div>
	);
}