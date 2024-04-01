import './Pokedex.css';
import Pokecard from "./Pokecard";


function Pokedex({pokemon}) {
    return (
        <div className='Pokedex'>
            <h1>Pokedex</h1>
            {pokemon.map(p => <Pokecard name={p.name} id={p.id} type={p.type} exp={p.base_experience} />)}
        </div>
    )
}

export default Pokedex;