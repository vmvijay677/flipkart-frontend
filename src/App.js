import './App.css';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import DataProvider from './Context/DataProvider';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DetailView from './Components/Details/DetailView';
import Cart from './Components/Cart/Cart';

function App() {
  return (
    <DataProvider className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/product/:id' element={<DetailView />} />
          <Route path='/cart' element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </DataProvider>
  );
}

export default App;
