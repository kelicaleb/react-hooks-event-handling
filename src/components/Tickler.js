import React from "react";
import {useState} from 'react'

function Tickler() {
  const [state, setUseState] = useState('')
  function tickle() {
    console.log("Teehee!");
  }
  function submit(e){
    e.preventDefault();
    console.log(state)
  }

  return(
    <>
    <button onClick={tickle}>Tickle me!</button>
    <form onSubmit={submit}>
      <input type="text" placeholder="username" value={state} onChange={(e)=> setUseState(e.target.value)}/>
      <button>submit me </button>
    </form>    
    </>
  )
}

export default Tickler;
