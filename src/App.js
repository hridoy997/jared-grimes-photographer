import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Pages/Shared/Header/Header';
import Footer from './Pages/Shared/Footer/Footer';
import { Route, Routes } from 'react-router-dom';
import About from './Pages/About/About';
import Login from './Pages/LogIn/Login/Login';
import NotFound from './Pages/Shared/NotFound/NotFound';
import Home from './Pages/Home/Home/Home';
import Services from './Pages/Home/Services/Services';
import Blogs from './Pages/Blogs/Blogs';
import Checkout from './Pages/Checkout/Checkout';
import ServiceDetail from './Pages/ServiceDetail/ServiceDetail';
import OrderSuccessful from './Pages/Checkout/OrderSuccessful ';
import Gallery from './Pages/Gallerys/Gallery/Gallery';



function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/services' element={<Services/>}/>
        <Route path='/service/:serviceId' element={<ServiceDetail/>}/>
        <Route path='/checkout' element={<Checkout/>}/>
        <Route path='/orderSuccessful' element={<OrderSuccessful/>}/>
        <Route path='/gallery' element={<Gallery/>}/>
        <Route path='/blogs' element={<Blogs/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
