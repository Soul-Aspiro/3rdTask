import React, { component } from "react";

class Hello extends component {
  constructor() {
    console.log("dfag");
  }
  render() {
    return (
      <div>
        <h2>Class component</h2>
        <p>This is a Class component</p>
      </div>
    );
  }
}
export default Hello;
