// src/components/Event.js

// const Event = () => {
//     return (
//       <li></li>
//     );
//   }
  
//   export default Event;

import { useState } from "react";

const Event = ({ event }) => {

  const [showDetails, setShowDetails] = useState(false);

  return (
    <li className="event">
    <h4>{event.summary}</h4>
    <p>{event.created}</p>
    <p>{event.location}</p>
    <button className="details-button"
      onClick={() => setShowDetails(!showDetails)}>
      {showDetails ? 'Hide Details' : 'Show Details'}
    </button>
    {showDetails ? (
      <div className="details">
        <h3>Event Details</h3>
        <p>{event.description}</p>
      </div>
    ) : null}
  </li>
  );
}

export default Event;