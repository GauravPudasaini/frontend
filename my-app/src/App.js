import React, { useState } from 'react';
import './App.css';

function App() {
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [tagAlongCount, setTagAlongCount] = useState(1);
  const [description, setDescription] = useState('');

  const handlePost = () => {

  };

  return (
    <div className="travel-page">
      <h1 className="title">Travelmate</h1>
      <div className="travel-form">
        <label>Starting location for the journey</label>
        <input type="text" value={from} onChange={e => setFrom(e.target.value)} />

        <label>Destination of Travel:</label>
        <input type="text" value={to} onChange={e => setTo(e.target.value)} />

        <label>Depature Date</label>
        <input type="date" value={startDate} onChange={e => setStartDate(e.target.value)} />

        <label>End Date</label>
        <input type="date" value={endDate} onChange={e => setEndDate(e.target.value)} />

        <label>Number of Travelers</label>
        <input
          type="number"
          value={tagAlongCount}
          onChange={e => setTagAlongCount(parseInt(e.target.value))}
        />

        <label>Travel description:</label>
        <textarea value={description} onChange={e => setDescription(e.target.value)} />

        <button className="post-button" onClick={handlePost}>Post</button>
      </div>
      
      
    </div>
    
  );
}

export default App;
