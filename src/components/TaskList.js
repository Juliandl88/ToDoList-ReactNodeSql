import React from "react";

class TaskList extends React.Component {
  state = {
    task: "",
  };

  render() {
    return (
      <div>
        <div className="container">
          <h3 className="display-3 m-3">Todo List</h3>
          <div className="row">
            <div className="input-group m-5 col-6">
              <button
                className="btn btn-outline-secondary"
                type="button"
                id="button-addon1"
              >
                Agregar tarea
              </button>
              <input
                value={this.state.task}
                onChange={(e) => this.setState({ task: e.target.value })}
                type="text"
                className="form-control"
                placeholder="Escribí la tarea"
                aria-label="Example text with button addon"
                aria-describedby="button-addon1"
              ></input>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-6 mx-auto">
            <div className="card">
              <div className="card-body">
                <p className="card-text">
                  With supporting text below as a natural lead-in to additional
                  content.
                </p>
                <a href="#" className="btn btn-outline-success m-2">
                  Tarea completada
                </a>
                <a href="#" className="btn btn-outline-danger m-2">
                  Eliminar tarea
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default TaskList;
