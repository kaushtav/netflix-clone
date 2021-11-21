import logo from './netflix_logo.svg';
import './App.css';
import {useState} from "react";
import Sections from "./sections";
// import Row from "./Row";

function App() {
  const [headerSelected, setHeaderSelected] = useState('Home')
  return (
    <div className="App">
      <header className="App-header" >
        <img src={logo} className="App-logo" alt="logo" />
        <p
            onClick={()=>setHeaderSelected('Home')}
            style={headerSelected === 'Home'?{fontWeight:'bold'}:{fontWeight:'normal'}}>
          Home
        </p>
        <p
            onClick={()=>setHeaderSelected('TV')}
            style={headerSelected === 'TV'?{fontWeight:'bold'}:{fontWeight:'normal'}}>TV Shows</p>
        <p
            onClick={()=>setHeaderSelected('Movies')}
            style={headerSelected === 'Movies'?{fontWeight:'bold'}:{fontWeight:'normal'}}>Movies</p>
        <p
            onClick={()=>setHeaderSelected('New')}
            style={headerSelected === 'New'?{fontWeight:'bold'}:{fontWeight:'normal'}}>New & Popular</p>
        <p
            onClick={()=>setHeaderSelected('List')}
            style={headerSelected === 'List'?{fontWeight:'bold'}:{fontWeight:'normal'}}>My List</p>
        <p
            onClick={()=>setHeaderSelected('Rewatch')}
            style={headerSelected === 'Rewatch'?{fontWeight:'bold'}:{fontWeight:'normal'}}>Rewatch</p>
      </header>
      <Sections/>
      {/*<Row title={'asd'}/>*/}
      {/*<Row title={'asd'}/>*/}
    </div>
  );
}

export default App;
