import { Route, Routes } from 'react-router-dom';
import React from 'react';
import { Home } from './pages/Home';
import { Products } from './pages/Products';
import Nav from './component/Nav';
import { Footer } from './component/Footer';

function App() {
  return (
    <div className=' col-span-full'>
      <Nav />
      <div className=' col-span-1 w-full bg-bmw m-auto'>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/pockers/:id' element={<Products />}></Route>
        </Routes>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
