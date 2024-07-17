import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import { Routes, Route , BrowserRouter} from "react-router-dom"
import Productdetail from './components/ProductDetail';
import AboutUsDetail from './components/AboutUsDetail';
import Search from './components/Search';
import Cart from './components/Cart';
import BestCollection from './components/BestCollection';
import Payment from './components/Payment';
import Footer from './components/Footer';


function App() {
  return (
   <BrowserRouter>
   <Navbar/>
   <Routes>
    <Route path='/' element={<Home/>}></Route>
    <Route path='/product/:slug' element={<Productdetail/>}></Route>
    <Route path='/aboutus' element={<AboutUsDetail/>}></Route>
    <Route path='/search' element={<Search/>}></Route>
    <Route path='/cart' element={<Cart/>}></Route>
    <Route path='/bestCollection' element={<BestCollection/>}></Route>
    <Route path='/payment' element={<Payment/>}></Route>
   </Routes>
   <Footer/>


   </BrowserRouter>

  );
}

export default App;
