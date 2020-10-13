import React from 'react';
import { Link } from "react-router-dom";

function Menu() {

  return(
    <div>
      <Link to="/playerstats">
        <div>Player Stats</div>
      </Link>
    </div>
  )
}

export default Menu