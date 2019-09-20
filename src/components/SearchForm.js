import React, { useState } from "react";
import CharacterCard from "./CharacterCard";

export default function SearchForm({chars}) {
  const [searchText, setSearchText] = useState("");
  const [foundChar, setFoundChar] = useState(<></>);
  
  const handleSubmit = e => {
    e.preventDefault();
    Object.values(chars).forEach(val => {
      val.name.toLowerCase().includes(searchText) && setFoundChar(<CharacterCard char={val}/>);
      // setFoundChar(<CharacterCard char={val}/>);
      // console.log(<CharacterCard chars={chars}/>);
    });
  }

  const handleChange = e => {
    setSearchText(e.target.value);
  }

  return (
    <section className="search-form">
      <form onSubmit={e => handleSubmit(e)}>
        <input value={searchText} onChange={e => handleChange(e)} type="text"/>
        <input type="submit"/>
        {foundChar}
      </form>
    </section>
  );
}
