export function Section(props: any) {
	return (
		<div>
			<div className="row d-flex justify-content-left">
				<h4 className="blockqoute mb-2 mt-5 col"> {props.title} </h4>
			</div>
			<div className="row d-flex justify-content-left">
				<div className=" col-12 lead m-2 ">{props.children}</div>
			</div>
		</div>
	);
}

export function Interest(props: any) {
	return (
		<div className="m-2 p-2">
			<strong> {props.title} </strong> <br />
			{props.children}
		</div>
	);
}

export interface Project {
	pid?: Number;
	key?: String;
	title: string;
	description: string;
	link: string;
}


export function ProjectCard(props: Project) {
	return (
		<div className="card col-sm-6 col-md-6 col-lg-5 m-2 p-2 w-18">
			<div className="card-body">
				<div className="card-title">{props.title}</div>
				<div className="card-text">{props.description}</div>

				<a href={props.link} target="_blank" className=" card-link ">
					<strong> Show this 🥽 </strong>
				</a>
			</div>
		</div>
	);
}
