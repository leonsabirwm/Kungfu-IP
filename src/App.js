import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Components/About/About';
import Blogs from './Components/Blogs/Blogs';
import Checkout from './Components/Checkout/Checkout';
import Footer from './Components/Footer/Footer';
import NavBar from './Components/Header/Header';
import Login from './Components/Login/Login';
import Main from './Components/Main/Main';
import Signup from './Components/Signup/Signup';

function App() {
  return (
    <div className="App bg-black">
    <NavBar></NavBar>
    <Routes>
      <Route path='/'element={<Main></Main>}></Route>
      <Route path='/about'element={<About></About>}></Route>
      <Route path='/blogs' element={<Blogs></Blogs>}></Route>
      <Route path='/checkout' element={<Checkout></Checkout>}></Route>
      <Route path='/login'element={<Login></Login>}></Route>
      <Route path='/signup' element={<Signup></Signup>}></Route>
    </Routes>
    <Footer></Footer>
    </div>
  );
}

export default App;
