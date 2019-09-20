import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from "./components/Header.js";
import {BrowserRouter, Route, NavLink} from "react-router-dom";
import CharacterList from "./components/CharacterList";
import WelcomePage from "./components/WelcomePage.js"; 
import SearchForm from "./components/SearchForm";
export default function App() {

  const [chars, setChars] = useState([]);

  useEffect(() => {
    axios.get("https://rickandmortyapi.com/api/character/")
      .then(resp=>{
        setChars(resp.data.results);
      })
      .catch(err=>{
        console.log(err);
      });
    }
  ,[]);

  return (
    <BrowserRouter>
      <main>
        <Header />
        <Route path="/" component={WelcomePage} exact/>
        <NavLink to="/charList">Character list</NavLink>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/SearchForm">Search</NavLink>
        <Route path="/SearchForm" render={props => <CharacterList {...props} chars={chars} />}/>
        {/* <Route path="/charList" component={CharacterList}/> */}
        <Route path='/charList' render={props => <CharacterList {...props} chars={chars} />}/>
      </main>
    </BrowserRouter>
  );
}
