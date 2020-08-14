/**
 * (Type docs)
 *
 * @author Gopal Kataria
 * @description https://github.com/Gopalkataria
 */

// P.S. this file is common to all the pages
// firebase is already initialized

// easter eggs are a must for me at least
const GOPAL_KATARIA = ` %c
 ███████╗   ████████╗   ██████╗    █████╗    ██╗
██╔════╝   ██╔═ ══██╗   ██╔══██╗  ██╔══██╗  ██║
██║  ███╗  ██║     ██║   ██████╔╝  ███████║  ██║
██║   ██║  ██║     ██║   ██╔═══╝   ██╔══██║  ██║
╚██████╔╝  ╚██████╔╝    ██║        ██║  ██║  ███████╗
 ╚═════╝    ╚═════╝     ╚═╝         ╚═╝  ╚═╝  ╚══════╝

`;

console.log(GOPAL_KATARIA, " color: blue ; padding: 2px; border-radius:2px ; background: white ");
console.info(
	" btw \n Copyright, Gopal Kataria ,2020 \n you can't copy my code, just take inspiration to write your own"
);

function sleep(time) {
	return new Promise((resolve) => {
		window.setTimeout(resolve, time);
	});
}

const isMobile = /Mobile|iP(hone|od|ad)|Android|BlackBerry|IEMobile|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/i.test(
	navigator.userAgent
);

// refreshing on resize only if its not a mobile
if (!isMobile) {
	window.addEventListener("resize", () => {
		document.body.innerHTML = `<br/>
		<br/><h1> Loading new styles...   </h1> `;

		sleep(700).then(() => {
			location.reload();
		});
	});
}

firebase.analytics().logEvent("Page_visited");
