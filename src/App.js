import {React} from 'react-dom';
import { BrowserRouter ,Route , Routes } from 'react-router-dom';
// import { Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import ProductDetails from './components/ProductDetails';
import ProductListing from './components/ProductListing';

function App() {
  return (
    <div className="App">
      <Header/>
     <BrowserRouter>  
      <Routes>
        <Route  path ="/" element ={<ProductListing/>} />
        <Route  path ="/product/:productId" element ={<ProductDetails/>} />
        {/* <Route> 404 Not Found</Route> */}
      </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;




