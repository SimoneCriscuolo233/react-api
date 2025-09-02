import { useState, useEffect } from 'react'
import axios from 'axios'
import ActorCard from '../components/ActorCard';


function App() {
  const [actors, setActors] = useState([])
  useEffect(() => {
    axios.get("https://lanciweb.github.io/demo/api/actors/")
      .then((res) => setActors(res.data))
  }, []);

  return (
    <>
      <div className="container py-4">
        <h1>Actors & Actresses</h1>
        <div className="row">
          {actors.map((actor) => {
            return (
              < ActorCard key={actor.id} actor={actor} />)

          })}

        </div>
      </div>

    </>
  )
}

export default App
