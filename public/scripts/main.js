/**
 * (Type docs)
 *
 * @author Gopal Kataria
 * @description https://github.com/Gopalkataria
 */

// P.S. this file is common to all the pages
// firebase is already initialized

// easter eggs are a must for me at least
const GOPAL_KATARIA = `
  _______ _______ _______ _______ ___          ___   _ _______ _______ _______ ______   ___ _______
 |       |       |       |   _   |   |        |   | | |   _   |       |   _   |    _ | |   |   _   |
 |    ___|   _   |    _  |  |_|  |   |        |   |_| |  |_|  |_     _|  |_|  |   | || |   |  |_|  |
 |   | __|  | |  |   |_| |       |   |        |      _|       | |   | |       |   |_||_|   |       |
 |   ||  |  |_|  |    ___|       |   |___     |     |_|       | |   | |       |    __  |   |       |
 |   |_| |       |   |   |   _   |       |    |    _  |   _   | |   | |   _   |   |  | |   |   _   |
 |_______|_______|___|   |__| |__|_______|    |___| |_|__| |__| |___| |__| |__|___|  |_|___|__| |__|
`;

console.log(GOPAL_KATARIA);
console.info(" btw \n Copyright, Gopal Kataria ,2020 \n you can't copy my code, just take inspiration to write your own")

firebase.analytics().logEvent("Page_visited")