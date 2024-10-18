import { useState } from "react";

export default function () {
  
  const [team, setTeam] = useState(11);
  function handleTeam() {
    const newTeamCount = team + 1;
    
    setTeam(newTeamCount);
    
  }
  function handleRemove() {
  //   if (team <= 0) {
  //   alert("Team count cannot be less than 0");
  //   return; // Exit the function to avoid decrementing further
    // }
    const newCount = team - 1;
    
    { team <= 0 ? alert("Team count cannot be less than 0"):setTeam(newCount)}
    
    
      
  // const newTeamCount = team - 1;
    
   
   
  }
  return (
    <div style={{ border:'2px solid red',padding:'10px',borderRadius:'10px'}}>
      <h2>Player: {team}</h2>
      <button onClick={handleTeam}>Add Player</button>
      <button onClick={handleRemove}>Remove</button>
    </div>
  )
}