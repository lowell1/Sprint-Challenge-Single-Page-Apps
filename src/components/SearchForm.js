import React, { useState } from "react";
import CharacterCard from "./CharacterCard";

export default function SearchForm({chars}) {
  const [searchText, setSearchText] = useState("");
  const [foundChars, setFoundChars] = useState([]);
  
  const handleSubmit = e => {
    e.preventDefault();

    var newFoundChars = [];

    Object.values(chars).forEach(val => {
      val.name.toLowerCase().includes(searchText) && 
        newFoundChars.push(val);
      // setFoundChar(<CharacterCard char={val}/>);
      // console.log(<CharacterCard chars={chars}/>);
    });
    setFoundChars(newFoundChars);
  }

  const handleChange = e => {
    setSearchText(e.target.value);
  }

  return (
    <section className="search-form">
      <form onSubmit={e => handleSubmit(e)}>
        <input value={searchText} onChange={e => handleChange(e)} type="text"/>
        <input type="submit"/>
        {foundChars.map((val, idx) => {
          return <CharacterCard  key={idx} char={val}/>;
        })}
      </form>
    </section>
  );
}
