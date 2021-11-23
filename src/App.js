import './App.css';
import Sections from "./components/sections";
import Header from "./components/header";
import Banner from "./components/banner";
import {PlayerContextProvider} from "./context/playerContext";

function App() {
  return (
    <div className="App">
        <PlayerContextProvider >
            <Header/>
            <Banner/>
            <Sections/>
        </PlayerContextProvider>

    </div>
  );
}

export default App;
