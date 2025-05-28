
import React from "react";
import './../styles/App.css';

const App = () => {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
        {/* Do not remove the main div */}
        <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        style={{
          padding: '8px',
          fontSize: '16px',
          marginBottom: '10px',
          width: '100%',
          maxWidth: '300px',
        }}
      />
      {name && (
        <h2 style={{ marginTop: '10px' }}>Hello, {name}!</h2>
      )}
    </div>
  )
}

export default App
