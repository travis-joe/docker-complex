import React, { Component } from "react";
import axios from "axios";

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
    this.setState({ values: value.data });
  }
  async fetchIndexed() {
    const indexes = await axios.get("/api/values/all");
    this.setState({ seeIndexes: indexes.data });
  }
}
