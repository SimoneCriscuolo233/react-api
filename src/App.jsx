import { useState, useEffect } from 'react'
import axios from 'axios'
import ActorCard from '../components/ActorCard';
import ActressCard from '../components/ActressCard';

function App() {
  const [actors, setActors] = useState([])
  const [actress, setActress] = useState([])

  useEffect(() => {
    axios.get("https://lanciweb.github.io/demo/api/actors/")
      .then((res) => setActors(res.data))

    axios.get("https://lanciweb.github.io/demo/api/actresses/").then((res) => setActress(res.data))
  }, []);

  return (

    <div className="container py-4">
      <h1>Actors & Actresses</h1>
      <div className="row">
        {actors.map((actor) => {
          return (
            < ActorCard key={actor.id} actor={actor} />
          )
        })}
        {actress.map((actress) => {
          return (
            < ActressCard key={actress.id} actress={actress} />
          )
        })}
      </div>
    </div>
  )
}
export default App