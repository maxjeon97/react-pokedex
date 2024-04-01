import './Pokedex.css';
import Pokecard from "./Pokecard";

const pokemons = [
    { id: 4, name: 'Charmander', type: 'fire', base_experience: 62 },
    { id: 7, name: 'Squirtle', type: 'water', base_experience: 63 },
    { id: 11, name: 'Metapod', type: 'bug', base_experience: 72 },
    { id: 12, name: 'Butterfree', type: 'flying', base_experience: 178 },
    { id: 25, name: 'Pikachu', type: 'electric', base_experience: 112 },
    { id: 39, name: 'Jigglypuff', type: 'normal', base_experience: 95 },
    { id: 94, name: 'Gengar', type: 'poison', base_experience: 225 },
    { id: 133, name: 'Eevee', type: 'normal', base_experience: 65 }
];

/** Takes in array of pokemon data objects, maps over array to render Pokecard component for each pokemon,
 * returns Pokedex component
 */
function Pokedex({ pokemon=pokemons }) {
    return (
        <div className="Pokedex">
            <h1 className="Pokedex-title">Pokedex</h1>
            <div className="Pokedex-cards">
                {pokemon.map(p => <Pokecard name={p.name} id={p.id} type={p.type} exp={p.base_experience} />)}
            </div>
        </div>
    );
}

export default Pokedex;