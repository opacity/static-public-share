import * as React from "react";
import * as ReactDOM from "react-dom";
import SharePage from "./pages/SharePage/SharePage";
import "./index.scss";

function App() {
  return (
    <SharePage />
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
