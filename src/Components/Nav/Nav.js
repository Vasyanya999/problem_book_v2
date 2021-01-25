import "./Nav.scss";

export default function Nav(props) {
  return (
    <div className='Nav-projects container p-2'>
      {props.projects.map((project, index) => {
        return (
          <div
            key={index}
            className={"Nav-projects-project"}
            onClick={() => {
              props.selectProject(project.id)}}
          >
            {project.projectName}
          </div>
        );
      })}

      <i
        onClick={props.addProject}
        className='Nav-projects-btnAdd fa fa-plus-square'
        aria-hidden='true'
      ></i>
    </div>
  );
}
