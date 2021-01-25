import "./App.scss";
import { Component } from "react";
import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";
import Nav from "./Components/Nav/Nav";
import Footer from "./Components/Footer/Footer";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      projects: [],
      switchApearWin: { switch: false, whatToAdd: "" },
      currentValueApearWin: "",
      currentProjId: "",
      currentTaskId: "",
      currentValueText: "",
    };
  }

  addProject = () => {
    this.setState({
      switchApearWin: { switch: true, whatToAdd: "project" },
    });
  };
  addTask = () => {
    this.setState({
      switchApearWin: { switch: true, whatToAdd: "task" },
    });
  };
  closeApearWin = () => {
    this.setState({
      switchApearWin: { switch: false, whatToAdd: "" },
      currentValueApearWin: "",
    });
  };
  btnSaveApearWin = () => {
    let name = this.state.currentValueApearWin;
    if (name.trim() !== "") {
      let projects = this.state.projects.concat();
      let id = Date.now();
      if (this.state.switchApearWin.whatToAdd === "project") {
        projects.push({
          projectName: name,
          id,
          tasks: [],
        });
        this.setState({
          projects,
          currentProjId: id,
        });
      } else if (this.state.switchApearWin.whatToAdd === "task") {
        projects.map((proj) => {
          if (proj.id === this.state.currentProjId) {
            proj.tasks.push({
              title: this.state.currentValueApearWin,
              text: "",
              id,
            });
          }
        });
        this.setState({
          projects,
        });
      }
    }
    this.closeApearWin();
  };
  valueInputApearWin = (e) => {
    this.setState({
      currentValueApearWin: e.target.value,
    });
  };
  currentTask = (event, id) => {
    event.stopPropagation();
    this.setState({
      currentTaskId: id,
    });
  };
  closeTask = (event) => {
    event.stopPropagation();
    this.setState({
      currentTaskId: "",
    });
  };
  saveTextariaValue = (event) => {
    this.setState({
      currentValueText: event.target.value,
    });
  };
  selectProject = (id) => {
    this.setState({ currentProjId: id });
  };
  delTask = () => {
    let projects = this.state.projects.concat();
    let taskId = this.state.currentTaskId;
    let projectId = this.state.currentProjId;
    projects.map((proj) => {
      if (proj.id === projectId) {
        proj.tasks.map((task, i) => {
          if (task.id === taskId) {
            proj.tasks.splice(i, 1);
            this.setState({
              projects,
              currentTaskId: "",
            });
          }
        });
      }
    });
  };
  delProject = () => {
    let projects = this.state.projects.concat();
    let projectId = this.state.currentProjId;
    projects.map((proj, i) => {
      if (proj.id === projectId) {
        projects.splice(i, 1);
        this.setState({ projects });
      }
    });
  };

  render() {
    return (
      <div className='App'>
        <Header
          addTask={this.addTask}
          currentTaskId={this.state.currentTaskId}
          delTask={this.delTask}
        />
        <Nav
          addProject={this.addProject}
          projects={this.state.projects}
          selectProject={this.selectProject}
        />
        <Main
          switchApearWin={this.state.switchApearWin}
          closeApearWin={this.closeApearWin}
          btnSaveApearWin={this.btnSaveApearWin}
          valueInputApearWin={this.valueInputApearWin}
          projects={this.state.projects}
          currentProjId={this.state.currentProjId}
          currentTask={this.currentTask}
          currentTaskId={this.state.currentTaskId}
          closeTask={this.closeTask}
          saveTextariaValue={this.saveTextariaValue}
        />
        <Footer projects={this.state.projects} delProject={this.delProject} />
      </div>
    );
  }
}
