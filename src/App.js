import { BrowserRouter } from "react-router-dom";
import "./App.css";
import MainComponent from "./Components/MainComponent";
import store from "./Redux/Store";
import { Provider } from "react-redux";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <BrowserRouter>
          <MainComponent />
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
