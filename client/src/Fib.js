import axios from "axios";
import React, { Component } from "react";

class Fib extends Component {
  state = {
    seeIndexes: [],
    values: {},
    index: ""
  };

  componentDidMount() {
    this.fetechValues();
    this.fetchIndexed();
  }

  async fetechValues() {
    const value = await axios.get("/api/values/current");
    this.setState({
      values: value.data
    });
  }
  async fetchIndexed() {
    const indexes = await axios.get("/api/values/all");
    this.setState({
      seeIndexes: indexes.data
    });
  }
  renderSeenIndexes() {
    return this.state.seeIndexes.map(({ number }) => number).join(", ");
  }
  renderValues() {
    const entries = [];
    for (let key in this.state.values) {
      entries.push(
        <div key={key}>
          For index {key} I calculated {this.state.values[key]}
        </div>
      );
    }
    return entries;
  }
  handleSubmit = async e => {
    e.preventDefault();

    await axios.post("/api/values", {
      index: this.state.index
    });

    this.setState({ index: "" });
  };
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="">Enter your index:</label>
          <input
            value={this.state.index}
            onChange={e => this.setState({ index: e.target.value })}
          />
          <button>Submit</button>
        </form>
        <h3>Indexes I have seen:</h3>
        {this.renderSeenIndexes()}
        <h3>Calculated values:</h3>
        {this.renderValues()}
      </div>
    );
  }
}

export default Fib;
