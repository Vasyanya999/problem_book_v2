import "./Footer.scss";

export default function Footer(props) {
  let footer = "";
  if (props.projects.length !== 0) {
    footer = (
      <div className='Footer container'>
        <div className='Footer-del' onClick={props.delProject}>
          <p className='Footer-del-text'>Delete Project</p>
          <i className='Footer-del-icon fa fa-trash-o' aria-hidden='true'></i>
        </div>
      </div>
    );
  } else {footer='';}
  return <>{footer}</>
}
