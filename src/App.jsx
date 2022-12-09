
import './App.css';
import Header from './components/Header/Header';
import Content from './components/Content/Content';
import Menu from './components/Menu/Menu'

import { AllPokemonsProvider } from './contexts/AllPokemonsContext';


function App() {    

  return (
    <div className="App">
        
        <Header />
        <AllPokemonsProvider>
          <Menu />
          <Content />
        </AllPokemonsProvider>
    </div>
  );
}

export default App;
