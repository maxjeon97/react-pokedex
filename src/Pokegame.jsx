import Pokedex from "./Pokedex";

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

/**Returns a randomly selected item from array of items */
function choice(items) {
    const randomIndex = getRandomInt(0, items.length);
    return items[randomIndex];
}

/**Removes the first matching item from an items array if item exists,
 * and returns it. Otherwise, return undefined
 */
function remove(items, item) {
    for(let i = 0; i < items.length; i++) {
        if(items[i] === item) {
            items.splice(i, 1);
            return items;
        }
    }
    return undefined;
}

/**Returns a random integer between two integers */
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

/**Calculates and returns total exp from an array of pokemon data*/
function calculateTotalExp(deck) {
    return deck.reduce((acc, d) => acc + d.base_experience, 0)
    // let total = 0;
    // deck.forEach(p => total += p.base_experience);
    // return total;
}


function Pokegame({pokemon = pokemons}) {
    const FIRST_DECK = [];
    const SECOND_DECK = [];
    const halfLength = pokemon.length/2;

    for (let i = 0; i < halfLength; i++) {
        let randomPokemon = choice(pokemon);
        FIRST_DECK.push(randomPokemon);
        remove(pokemon, randomPokemon);
    }
    SECOND_DECK.push(...pokemon);

    const firstDeckExp = calculateTotalExp(FIRST_DECK);
    const secondDeckExp = calculateTotalExp(SECOND_DECK);

    const firstDeckWinStatus = firstDeckExp > secondDeckExp
    ? true
    : false;

    const secondDeckWinStatus = firstDeckExp < secondDeckExp
    ? true
    : false;

    return (
        <div className="Pokegame">
            <Pokedex pokemon={FIRST_DECK} totalExp={firstDeckExp} isWinner={firstDeckWinStatus}/>
            <Pokedex pokemon={SECOND_DECK} totalExp={secondDeckExp} isWinner={secondDeckWinStatus}/>
        </div>
    )
}

export default Pokegame;