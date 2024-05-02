// src/components/CityEventsChart.js

// import { useState, useEffect } from 'react';
// import {
//   ScatterChart,
//   Scatter,
//   XAxis, YAxis,
//   CartesianGrid,
//   Tooltip,
//   ResponsiveContainer
// } from 'recharts';

// const CityEventsChart = ({ allLocations, events }) => {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     setData(getData());
//   }, [`${data}`]);

//   const getData = () => {
//     const data = allLocations.map((location) => {
//       const count = events.filter((event) => event.location === location).length
//       const city = location.split((/, | - /))[0]
//       return { city, count };
//     })
//     return data;
//   };

//   return (
//     <ResponsiveContainer width="99%" height={400}>
//       <ScatterChart
//         margin={{
//           top: 20,
//           right: 20,
//           bottom: 20,
//           left: 20,
//         }}
//       >
//         <CartesianGrid fill="#3b3b3b" />
//         <XAxis type="category" dataKey="city" name="City" />
//         <YAxis type="number" dataKey="count" name="Number of events" />
//         <Tooltip cursor={{ strokeDasharray: '3 3' }} />
//         <Scatter name="Events" data={data} fill="#8884d8" />
//       </ScatterChart>
//     </ResponsiveContainer>
//   );
// }

// export default CityEventsChart;

import { ScatterChart, Scatter, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { useState, useEffect } from 'react';

const CityEventsChart = ({ allLocations, events }) => {

  const [data, setData] = useState([]);

  useEffect(() => {
    setData(getData());
    //when user updates city or number of events we want useEffect to re-execute. this is why we use stringified value inside dependency array
  }, [`${events}`]);

  const getData = () => {
    const data = allLocations.map((location) => {
      const count = events.filter((event) => event.location === location).length
      const city = location.split((/, | - /))[0]
      return { city, count }  //shorthand for {city: city, count: count}
    })
    return data;
  };

  return (
    <ResponsiveContainer width="99%" height={400}>
      <ScatterChart
        margin={{
            top: 20,
            right: 20,
            bottom: 60,
            left: -30,
        }}
      >
        <CartesianGrid fill="#f0f3bd" fillOpacity={0.4} />
        <XAxis type="category" dataKey="city" name="City" angle={60} interval={0}
          tick={{ dx: 20, dy: 40, fontSize: 14 }}
        />
        <YAxis type="number" dataKey="count" name="Number of events" allowDecimals={false} />
        <Tooltip cursor={{ strokeDasharray: '3 3' }} />
        <Scatter name="Events" data={data} fill="#05668d" />
      </ScatterChart>
    </ResponsiveContainer>
  );
}



export default CityEventsChart;