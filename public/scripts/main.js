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

firebase.analytics().logEvent("Page_visited");

const isMobile = /Mobile|iP(hone|od|ad)|Android|BlackBerry|IEMobile|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/i.test(
	navigator.userAgent
);

// refreshing only if its not a mobile
if (!isMobile) {
	window.addEventListener("resize", () => {
		document.body.innerHTML =
			"<br/><br/><h1> Restyling event detected, <br/> Please wait until New styles arrive. This is because the Window Size or Zoom Level changed    </h1> ";
		location.reload();
	});
}
