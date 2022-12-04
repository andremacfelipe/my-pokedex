
import './App.css';
import Header from './components/Header/Header';
import PokemonCard from './components/PokemonCard/PokemonCard';



function App() {
  return (
    <div className="App">
        <Header />
    
        <main>
            <PokemonCard />
        </main>
    </div>
  );
}

export default App;
