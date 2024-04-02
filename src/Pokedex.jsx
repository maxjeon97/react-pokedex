import './Pokedex.css';
import Pokecard from "./Pokecard";


/** Takes in array of pokemon data objects, maps over array to render Pokecard component for each pokemon,
 * returns Pokedex component
 */
function Pokedex({ pokemon, totalExp, isWinner }) {
    return (
        <div className="Pokedex">
            <h1 className="Pokedex-title">Pokedex</h1>
            <div className="Pokedex-cards">
                {pokemon.map(p => <Pokecard name={p.name} id={p.id} type={p.type} exp={p.base_experience} />)}
            </div>
            {isWinner ? <div className="Pokedex-winner-alert alert alert-success">^ THIS HAND WINS!</div> : <div></div>}
        </div>
    );
}

export default Pokedex;