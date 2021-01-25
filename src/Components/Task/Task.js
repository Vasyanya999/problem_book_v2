import "./Task.scss";

export default function Task(props) {
  let boleanId = props.currentTaskId === props.id;

  return (
    <div>
      <div
        className={` shadow-lg ${
          boleanId ? " selectedTask container" : "Task"
        }`}
        onClick={(event) => {
          props.currentTask(event, props.id);
        }}
      >
        <div className='Task-title'>
          <h2>{props.title}</h2>
        </div>
        <p
          className={`Task-exit ${boleanId ? "" : "none"}`}
          onClick={props.closeTask}
        >
          EXIT
        </p>
        <div className='Task-text'>
          <textarea
            cols='300'
            rows='100'
            defaultValue={props.text}
            onInput={props.saveTextariaValue}
            readOnly={boleanId ? false : true}
            disabled={boleanId ? false : true}
          />
        </div>
      </div>
    </div>
  );
}
