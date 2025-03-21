import { useState, useRef } from "react";

export default function Player() {

  const playersName = useRef(); // object like {current: *html element*}
  // REFs do not re-execute the component function, but STATE does

  const [playerName, setPlayerName] = useState(null);

/*   function handleChange(event) {
    setSubmitted(false);
    setPlayerName(event.target.value)
  } */

  function handleClick() {
    setPlayerName(playersName.current.value);
    playersName.current.value = ''; // careful with imperative code
  }

  return (
    <section id="player">
      <h2>Welcome {playerName ?? 'unknown entity'}</h2>
      <p>
        <input type="text" ref={playersName}/>
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
