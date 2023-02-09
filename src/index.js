import React from "react";
import ReactDOM from "react-dom/client";

import App from './App'
import DATA from './utils/data'

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<App tasks={DATA} />)