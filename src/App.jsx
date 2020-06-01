import React, { useState, useEffect } from 'react';
console.log(process.env.REACT_APP_API_BASE_URL);

function App() {
  const [obj, setObj] = useState(null);
  useEffect(
    () => {
      fetch(`${process.env.REACT_APP_API_BASE_URL}/api/meme`)
        .then((res) => res.json())
        .then((data) => setObj(data))
        .catch((err) => alert(err.message));
    },
    []
  );
  return (
    <div>
      <h1>Sample React App</h1>
      <div>
Server responded with this data:
        {
	  obj && (
	    <div>
		<img src={obj.pictureUrl} alt="Meme" />
		<p>{obj.title}</p>
            </div>
	  )
	}
      </div>
    </div>
  );
}

export default App;
