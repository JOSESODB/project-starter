import { useRef } from "react"
import { useState } from "react"

export default function Player() {
  const playerNameRef = useRef()
  const [playerName, setPLayerName] = useState(null)

  // function handleNameChange(){
  //   setSubmitted(false)
  //   setPLayerName(playerNameRef.current.value)
  // }
  function handleSubmit() {
    setPLayerName(playerNameRef.current.value)
    playerNameRef.current.value = ''
  }

  return (
    <section id="player">
      <h2>Welcome {playerName ?? 'unknown entity'}  </h2>
      <p>
        <input
          ref={playerNameRef}
          type="text" />
        <button onClick={handleSubmit}>Set Name</button>
      </p>
    </section>
  );
}
