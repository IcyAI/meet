import { useState } from "react";

const NumberOfEvents = ({ setCurrentNOE }) => {

  const [numEvents, setNumEvents] = useState("32");

  const handleInputChanged = (event) => {
    const value = event.target.value;
    setNumEvents(value);
    setCurrentNOE(value);
  }

  return (
    <div id="number-of-events">
      <input
        type="text"
        value={numEvents}
        onChange={handleInputChanged}
      />
    </div>
  );
}

export default NumberOfEvents;