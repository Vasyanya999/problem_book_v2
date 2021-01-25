/** @format */

import "./Main.scss";
import ApearWin from "../ApaerWin/ApearWin";
import Project from "../Project/Project";

export default function Main(props) {
  return (
    <div className='Main container p-0'>
      <ApearWin
        switchApearWin={props.switchApearWin}
        closeApearWin={props.closeApearWin}
        btnSaveApearWin={props.btnSaveApearWin}
        valueInputApearWin={props.valueInputApearWin}
      />
      <Project
        projects={props.projects}
        currentProjId={props.currentProjId}
        currentTask={props.currentTask}
        currentTaskId={props.currentTaskId}
        closeTask={props.closeTask}
        saveTextariaValue={props.saveTextariaValue}
      />
    </div>
  );
}
