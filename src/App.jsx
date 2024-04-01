import Pokegame from './Pokegame';


/** Component for entire page.
 * Renders Pokedex component, passing in array of pokemon data objects as a property
 *
*/

function App() {
  return (
    <div className="App">
      <Pokegame />
    </div>
  );
};

export default App;
