import { createContext, useContext, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Components/About/About';
import Blogs from './Components/Blogs/Blogs';
import Checkout from './Components/Checkout/Checkout';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Login from './Components/Login/Login';
import Main from './Components/Main/Main';
import NotFound from './Components/NotFound/NotFound';
import RequireAuth from './Components/RequireAuth/RequireAuth';
import Signup from './Components/Signup/Signup';

export const CheckoutContext = createContext();

function App() {
  const [checkItem,setCheckItem] = useState([]);
  
  return (
   <CheckoutContext.Provider value={[checkItem,setCheckItem]}>
      <div className="App bg-black">
    <Header></Header>
    <Routes>
      <Route path='/'element={<Main></Main>}></Route>
      <Route path='/about'element={<About></About>}></Route>
      <Route path='/blogs' element={<Blogs></Blogs>}></Route>
      <Route path='/checkout/:trainingId' element={
        <RequireAuth>
          <Checkout></Checkout>
        </RequireAuth>
      }></Route>
      <Route path='/login'element={<Login></Login>}></Route>
      <Route path='/signup' element={<Signup></Signup>}></Route>
      <Route path='*' element={<NotFound></NotFound>}></Route>
    </Routes>
    <Footer></Footer>
    </div>
   </CheckoutContext.Provider>
  );
}

export default App;
