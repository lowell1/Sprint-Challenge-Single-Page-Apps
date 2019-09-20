import React, { useState } from "react";
import CharacterCard from "./CharacterCard";

export default function SearchForm(props) {
  const [searchText, setSearchText] = useState("");
  const [foundChar, setFoundChar] = useState(<></>);
  
  const handleSubmit = e => {
    e.preventDefault();
  }

  const handleChange = e => {
    
  }

  return (
    <section className="search-form">
      <form onSubmit={e => handleSubmit(e)}>
        <input value="" onChange={e => handleChange(e)} type="text"/>
        <input type="submit"/>
      </form>
    </section>
  );
}
