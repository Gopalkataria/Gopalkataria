// Only the project cards related stuff is stored over here

import { Project } from "./components";



export const MainProjects : Project[] = [
    {
        key: 1,
        title: " Take My Note ",
        description: " A web-app where you can temporarily keep some text. Built using Ionic and React. ",
        link: "https://takemynote.web.app",
    },
    {
        key: 3,
        title: " Earth Clock ",
        description: " An unpredictable world clock made in vanilla javascript. ",
        link: "https://earth-clock.web.app",
    },
    {
        key: 2,
        title: " Physiczard ",
        description: " An old-school game revisited where physics is intentionally made weird. Don't take it easy, it is harder than you think! ",
        link: "https://gopalkataria.github.io/bouncy-game/",
    },
    {
        key: 3,
        title: " Cryptography Algorithms ",
        description: "Python Algorithm to encrypt/decrypt text using numerical keys text is encrypted multiple times with different techniques depending on no. of digits in the keys.",
        link: "https://github.com/Gopalkataria/Cryptography"
    }
];




export const OtherProjects: Project[] = [
    {
        key: 11,
        title: " Project Name ",
        description: " Project's longest part is the description in itself ",
        link: " localhost:8000",
    },
    {
        key: 13,
        title: " Project Name ",
        description: " Project's longest part is the description in itself ",
        link: " localhost:8000",
    },
    {
        key: 12,
        title: " Project Name ",
        description: " Project's longest part is the description in itself ",
        link: " localhost:8000",
    },
];



const AllProjects: Project[] = MainProjects.concat(OtherProjects);

export { AllProjects };



export default function NoEntry() {
    return (<h1> Access denied </h1>)
}