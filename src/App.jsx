
import './App.css';
import Header from './components/Header/Header';
import Content from './components/Content/Content';

import { AllPokemonsProvider } from './contexts/AllPokemonsContext';


function App() {    

  return (
    <div className="App">
        
        <Header />
        <AllPokemonsProvider>
            <main>
                <Content />
            </main>
        </AllPokemonsProvider>
    </div>
  );
}

export default App;
