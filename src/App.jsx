import Pokedex from './Pokedex';


/** Component for entire page.
 * Renders Pokedex component, passing in array of pokemon data objects as a property
 *
*/

function App() {
  return (
    <div className="App">
      <Pokedex />
    </div>
  );
};

export default App;
