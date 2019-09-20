import React from "react";
import CharacterCard from "./CharacterCard";

export default function CharacterList({chars}) {
  // TODO: Add useState to track data from useEffect
  
  return (
    <section className="character-list">
      {
        chars.map((char, idx) => {
          return <CharacterCard char={char} key={idx}/>;
        })
      }
    </section>
  );
}
