import ReactDOM from "react-dom"
import React from 'react'
import { BrowserRouter as Router } from "react-router-dom"

import Kennel from "./components/Kennel"
import "./index.css"

ReactDOM.render(<Router><Kennel /></Router>, document.querySelector("#root"));