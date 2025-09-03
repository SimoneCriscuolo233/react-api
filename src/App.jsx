import { useState, useEffect } from 'react'
import axios from 'axios'
import ActorCard from '../components/ActorCard';
import ActressesCard from '../components/ActressesCard';
import SearchBar from "../components/SearchBar";
function App() {

  const [actors, setActors] = useState([])
  const [actresses, setActresses] = useState([])
  const [combined, setCombined] = useState([]);
  const [query, setQuery] = useState("");
  const [filtered, setFiltered] = useState([])
  useEffect(() => {
    axios.get("https://lanciweb.github.io/demo/api/actors/")
      .then((res) => setActors(res.data))

    axios.get("https://lanciweb.github.io/demo/api/actresses/").then((res) => setActresses(res.data))
  }, []);
  useEffect(() => {
    setCombined([...actors, ...actresses]);

  }, [actors, actresses]);
  useEffect(() => {
    const tempFiltered = combined.filter(actor =>
      actor.name.toLowerCase().includes(query.toLowerCase())
    );
    setFiltered(tempFiltered)

  }, [query]);
  return (
    <div className="container py-4">
      <h1>Actors & Actresses</h1>
      <div className="row">
        <SearchBar query={query} setQuery={setQuery} />
        {filtered.map((actor, index) => (
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