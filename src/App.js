import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import React, { Component } from "react";
import Plan from "./Plan";

class App extends Component {
  state = {
    items: [],
    text: " ",
  };

  handleChange = (e) => {
    this.setState({ text: e.target.value });
  };
  handleAdd = (e) => {
    if (this.state.text !== "") {
      const updatedItems = [...this.state.items, this.state.text];
      this.setState({ items: updatedItems, text: "" });
    }
  };
  handleDelete = (id) => {
    console.log("Deleted", id);
    const oldItems = [...this.state.items];
    console.log("oldItems", oldItems);
    const remainingItems = oldItems.filter((element, i) => {
      return i !== id;
    });
    console.log(remainingItems);
    this.setState({ items: remainingItems });
  };
  render() {
    return (
      <div className="container-fluid my-5">
        <div className="row">
          <div className="col-sm-6 mx-auto text-white shadow-lg p-3">
            <h2 className="text-centre">Today's Plan</h2>
            <div className="row">
              <div className="col-8">
                <input type="text" className="form-control" placeholder="Write Plan Here" value={this.state.text} onChange={this.handleChange}/>
              </div>
              <div className="col-4">
                <button className="btn btn-warning px-5 font-weight-bold" onClick={this.handleAdd}>Add</button>
              </div>
              <div className="container-fluid">
                <ul className="container-fluid">
                  <Plan plan={this.state.items} sendData={this.handleDelete} />
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
