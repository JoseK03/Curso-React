import './App.css'
import A from './pages/A';
import B from './pages/B';
import C from './pages/C';
import {BrowserRouter,Route,Routes,Navigate} from 'react-router-dom'
import Error404 from './pages/Error404.js';
import Nav from './components/Nav.jsx';
import React from 'react';

function App() {
  return (
    <BrowserRouter>
    <Nav/>
      <Routes>
        <Route path='/' element={<A/>}/>
        <Route path='/pagina2' element={<B/>}/>
        <Route path='/pagina3' element={<C/>}/>
        <Route path='/pagina4/:letra' element={<D/>}/>
        <Route path='/pagina1' element={<Navigate to='/'/>}/>
        <Route path='*' element={<Error404/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
