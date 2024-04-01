import './Pokecard.css';

/**Takes in pokemon data as properties, returns Pokecard component */
function Pokecard({ id, name, type, exp }) {
    const pokemonImg = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
    return (
        <div className="Pokecard">
            <div className="Pokecard-card card">
                <h5 className="Pokecard-title">{name}</h5>
                <img className="Pokecard-image" src={pokemonImg} alt={name} />
                <p className="Pokecard-type">Type: {type}</p>
                <p className="Pokcard-exp"> EXP: {exp}</p>
            </div>
        </div>
    );

}

export default Pokecard;