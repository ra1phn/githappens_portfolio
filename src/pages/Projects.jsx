import ProjectProfile from "./Profile";

const Projects = [
    {
        id: 'project-1',
        catalogNo: 'PRJ-001',
        title: 'Project 1',
        description: 'Description of the project',
        createdAt: new Date("2026-08-28").toISOString(),
        profile: {
            name: 'Amari Swei',
            role: 'Lead Enginner',
            color: '#6366f1',
        },
    },
    {
        id: 'project-2',
        catalogNo: 'PRJ-002',
        title : 'Project 2',
        description: 'Description of the project',
        createdAt: new Date('2026-08-27').toISOString(),
        profile: {
            name: 'Devin Rode',
            role: 'Product Manager',
            color: '#0ea5e9',
        },
    },
    {
        id: 'project-3',
        catalogNo: 'PRJ-003',
        title: 'Project 3',
        description: 'Description of the project',
        createdAt: new Date('2026-08-25').toISOString(),
        profile: {
            name: 'Priyer Noir',
            role: 'Project Designer',
            color: '#f59e0b',
        },
    },
];


function formatDate(isoString) {
    return new Date(isoString).toLocaleDateString("en-Us", {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
    });
}

function ProjectCard({project}) {
    const {title, catalogNo, description, createdAt,profile} = project;

    return (
       <div>
        <span>{catalogNo}</span>
        <span>{formatDate(createdAt)}</span>
        <h3>{title}</h3>
        <p>{description}</p>
        <ProjectProfile profile={profile} />
       </div> 
    );
}

export default function ProjectsList() {
    return(
        <div>
            <h2>Projects</h2>
            <p>
            {Projects.length} active projects
            </p>
            <div>
               {Projects.map((project)=>
               <ProjectCard key={project.id} project={project} />
            )}
            </div>
        </div>
    );
}
