import Titlebox from './containers/Titlebox';
import './App.css';

function App() {



  return (
    <div className="App">
     <h1>Movie Titles</h1>
     <Titlebox/>
     <div>
     <a type = "button" href= "https://www.imdb.com/">View more up and coming movies</a>
    </div>
    </div>

  );



}

export default App;
