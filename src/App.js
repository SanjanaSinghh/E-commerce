import './App.css';
import { Navbar } from './components/Navbar';
import Pages from './pages/Pages';
import {Routes,Route} from 'react-router-dom'
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';
import Grocery from './components/Grocery';
import Pharma from './components/Pharma';
import Product from './components/Product';
import Cart from './components/Cart';

function App() {
  return (
    <div >
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/signup' element={<Signup/>}></Route>
        <Route path='/grocery' element={<Grocery/>}></Route>
        <Route path='/pharma' element={<Pharma/>}></Route>
        <Route path='/:id' element={<Product/>}></Route>
        <Route path='/cart' element={<Cart/>}></Route>
      </Routes>
      <Pages/>
    </div>
  );
}

export default App;
