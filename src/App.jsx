import { useState, useEffect } from 'react'
import axios from 'axios'
import ActorCard from '../components/ActorCard';
import ActressesCard from '../components/ActressesCard';

function App() {

  const [actors, setActors] = useState([])
  const [actresses, setActresses] = useState([])
  const [combined, setCombined] = useState([]);
  useEffect(() => {
    axios.get("https://lanciweb.github.io/demo/api/actors/")
      .then((res) => setActors(res.data))

    axios.get("https://lanciweb.github.io/demo/api/actresses/").then((res) => setActresses(res.data))
  }, []);
  useEffect(() => {
    if (actors.length > 0 || actresses.length > 0) {
      setCombined([...actors, ...actresses]);
    }
  }, [actors, actresses]);

  return (
    <div className="container py-4">
      <h1>Actors & Actresses</h1>
      <div className="row">
        {combined.map((actor, index) => (
          < ActorCard key={index} actor={actor} />
        ))}


      </div>
    </div>
  )


  {/* <div className="container py-4">
       <h1>Actors & Actresses</h1>
       <div className="row">
       {actors.map((actor) =>{ 
        return (
          < ActorCard key={actor.id} actor={actor} />
          )
          })}
          {actress.map((actress) =>{
            return (
              < ActressCard key={actress.id} actress={actress} />
              )
              })}
              </div>
              </div>
              ) */}
}
export default App