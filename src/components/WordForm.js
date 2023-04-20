import { React, useState } from "react";

export default function WordForm() {
  const [length, setLength] = useState(0);
  const [word, setWord] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    debugger
    setLength(length + word.length);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={word}
          onChange={(e) => setWord(e.target.value)}
        />
        <button>click me!</button>
      </form>
      <p>{length}</p>
    </>
  );
}

// challenges module has examples
// challenges.live



// const counter = 0

// form onsubmit = (incrememnt counter by target value length)
//     input
//         text

// button
//     click me

// p tag with counter that displays word length starting at 0
