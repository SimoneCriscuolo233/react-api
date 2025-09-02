import { useState, useEffect } from 'react'
import axios from 'axios'


function App() {
  useEffect(() => {
    axios.get("https://lanciweb.github.io/demo/api/actors/")
      .then((res) => console.log("Actors:", res.data));
  }, []);

  return (

    <div className="container py-4">
      <h1>Actors & Actresses</h1>
    </div>

  )
}

export default App
