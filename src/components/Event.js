// src/components/Event.js

import { useState } from "react";

const Event = ({ event }) => {

  const [showDetails, setShowDetails] = useState(false);

  return (
    <li className="event">
     <h2>{event.summary}</h2>
    <p>{event.location}</p>
    <p>{event.created}</p>
      {showDetails ?
        <p className="details">{event.description}</p>
        : null
      }
      <button className="details-btn"
      onClick={() => setShowDetails(!showDetails)}>
      {showDetails ? 'Hide Details' : 'Show Details'}
    </button>
  </li>
  );
}

export default Event;