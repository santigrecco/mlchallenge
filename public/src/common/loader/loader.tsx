import React, { Component } from "react";
import "./loader.scss";

export default class Loader extends Component<{ isLoading: boolean }> {
   render() {
      return this.props.isLoading ? (
         <div className="loader-container">
            <div className="loader" />
         </div>
      ) : null;
   }
}
