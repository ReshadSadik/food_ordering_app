import logo from './logo.svg';
import './App.css';
import Home from './components/Home/Home/Home';
import AuthProvider from './context/AuthProvider';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Menu from './components/Menu/Menu';
import Checkout from './components/Checkout/Checkout';

function App() {
  return (
    <div className="App" style={{ backgroundColor: '#f0f5ff' }}>
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home></Home>}>
              <Route path="" element={<Menu></Menu>}></Route>
              <Route path="/checkout" element={<Checkout></Checkout>}></Route>
            </Route>
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
