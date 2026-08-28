function ProjectProfile({ profile}) {
    const {name, role, color} = profile;

    return (
        <div>
            style={{ background: color}}
            <p>{name}</p>
            <p>{role}</p>
        </div>
    )
};
export default ProjectProfile;