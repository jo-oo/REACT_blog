//import logo from './logo.svg';      //visar den fina loggan Saun har

import Navbar from './Navbar'; //importerar vpår NavBar-Template
import Home1 from './Home1';//importerar vår Home1-Template (den första koden)
import Home from './Home';//importerar vår Home-Template

//Appen med classname App har injectats in i Html-filen. Den filen renderar app och skciukar till DOM

function App() {
  return (
    <div className="App"> 
        <Navbar /> 
        <div className="content">
          <Home1 />
          <Home />
        </div>
    </div>
  );
}

//exporetarar vår komponent-funktion.
//Importerar den i index.js
export default App;


//Appen med lite test-utskrifter på
/*
function App() {
  const title = "Welcome to the blog";
  const likes = 50;
  const link = "http://www.google.com";

  //skriver ut värdet av title och likes inne i funktionen
  return (
    <div className="App"> 
        <div className="content">
          <h1>{ title }</h1>
          <p>Number of likes { likes } times </p>

          
          <p>{ 10 }</p>  
          <p>{ "I can add value directly in here" }</p> 
          <p>{  [1,2,3,3,5 ] }</p>
          <p>{  Math.random() * 10 }</p>

          <a href={ link }>Google</a>

        </div>
    </div>//Ouput value directly in the function: rad 19-22, nummer, sträng, array, en uträkning
  );
}
*/



//Från början såg sidan ut såhär: + inkludera den utkommenterade loggan översat på sidan
/*
function App() {
  return (
    <div className="App"> 
      <header className= "App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>
        Edit 
        <code>
          src/App.js
        </code>
        and save to reload.
      </p>
      <a
        className= "App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
        </a>
      </header>
    </div>
  );
}
*/
