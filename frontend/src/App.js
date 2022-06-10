import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Pages from "./screens/Pages";

function App() {
  return (
    <BrowserRouter>
      <Pages />
    </BrowserRouter>
  );
}

export default App;
