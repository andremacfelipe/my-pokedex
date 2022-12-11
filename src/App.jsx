
import './App.css';
import Header from './components/Header/Header';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './Pages/Home/Home';


import { AllPokemonsProvider } from './contexts/AllPokemonsContext';




function App() {    

  return (
    <div className="App">
      <AllPokemonsProvider>
        <Router>
          <Routes>
            <Route path='/' element={<Header/>}>
              <Route index element={ <Home/> } />
            </Route>
          </Routes>
        </Router>
      </AllPokemonsProvider>
        
    </div>
  );
}

export default App;
