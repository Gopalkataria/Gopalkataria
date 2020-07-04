// Only the project cards related stuff is stored over here

import { Project } from "./components";



export const MainProjects : Project[] = [
    {
        pid: 1,
        title: " Project Name ",
        description: " Project's longest part is the description in itself ",
        link: " localhost:8000",
    },
    {
        pid: 3,
        title: " Project Name ",
        description: " Project's longest part is the description in itself ",
        link: " localhost:8000",
    },
    {
        pid: 2,
        title: " Project Name ",
        description: " Project's longest part is the description in itself ",
        link: " localhost:8000",
    },
];




export const OtherProjects: Project[] = [
    {
        pid: 11,
        title: " Project Name ",
        description: " Project's longest part is the description in itself ",
        link: " localhost:8000",
    },
    {
        pid: 13,
        title: " Project Name ",
        description: " Project's longest part is the description in itself ",
        link: " localhost:8000",
    },
    {
        pid: 12,
        title: " Project Name ",
        description: " Project's longest part is the description in itself ",
        link: " localhost:8000",
    },
];



const AllProjects: Project[] = MainProjects.concat(OtherProjects); 

export  {AllProjects};