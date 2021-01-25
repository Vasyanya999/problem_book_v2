import "./Project.scss";
import Task from "../Task/Task";

export default function Project(props) {
return(
 <>
 { props.projects.map((proj, i) => {
    if (proj.id === props.currentProjId) {
      return (
        <div className='Project container' key={i}>
          {proj.tasks.length > 0
            ? proj.tasks.map((task, index) => {
                return (
                  <Task
                    currentTask={props.currentTask}
                    id={task.id}
                    key={index}
                    title={task.title}
                    text={task.text}
                    currentTaskId={props.currentTaskId}
                    closeTask={props.closeTask}
                    saveTextariaValue={props.saveTextariaValue}
                  />
                );
              })
            : null}
        </div>
      );
    }
  })}
 </>
 )
}
