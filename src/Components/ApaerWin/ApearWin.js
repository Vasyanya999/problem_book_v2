import "./ApearWin.scss";

export default function ApearWin(props) {
  return (
    props.switchApearWin.switch ?
    <div
      className= "ApearWin container shadow rounded"
    >
      <p className='ApearWin-text'>
        {props.switchApearWin.whatToAdd === "project"
          ? "Название проекта:"
          : props.switchApearWin.whatToAdd === "task"
          ? "Название задачи:"
          : ""}
      </p>
      <input
        className='ApearWin-input'
        type='text'
        onInput={props.valueInputApearWin}
      />
      <button className='ApearWin-button' onClick={props.btnSaveApearWin}>
        Add
      </button>
      <button className='ApearWin-button' onClick={props.closeApearWin}>
        Close
      </button>
    </div>
    : null
  );
}
