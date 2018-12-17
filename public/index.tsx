import * as React from "react";
import * as ReactDom from "react-dom";

import { App } from "./src/app";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.scss";

ReactDom.render(<App />, document.getElementById("app"));
