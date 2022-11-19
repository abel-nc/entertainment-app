import React from 'react';
import { Route, Routes } from 'react-router';
import Nav from './components/Nav';
import Searcher from './components/Searcher';
import './main.scss';
import Home from './pages/Home';
import Movies from './pages/Movies';
import Series from './pages/Series';
import Genre from './pages/Genre';
import Search from './pages/Search';
import Details from './pages/Details';

const App = () => {

  const Pages = () => {
    return (
      <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/movies' element={<Movies />} />
          <Route path='/series' element={<Series />} />
          <Route path='/:type/genre/:id/:name' element={<Genre />} />
          <Route path='/search/:query' element={<Search />} />
          <Route path='/:type/:id' element={<Details />} />
          <Route path='/series/:id' element={<Details />} />
      </Routes>
    )
  }

  return (
    <main className='d-flex p-4'>
      <Nav />
      <div className='app-ct'>
        <Searcher />
        <Pages />
      </div>
    </main>
  )
}

export default App;
