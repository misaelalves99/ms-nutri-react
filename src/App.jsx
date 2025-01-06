// src/App.jsx
import { Routes, Route } from 'react-router-dom';
import Header from "./components/Header";
import Layout from './components/Layout';
import Home from './pages/Home';
import Sobre from './pages/Sobre';
import Contato from "./pages/Contato";
import Footer from './components/Footer';
import './App.css';

const App = () => {
  return (
    <div>
      <Header/>
      <Layout>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/sobre' element={<Sobre/>}/>
          <Route path='/contato' element={<Contato/>}/>
        </Routes>
      </Layout>
      <Footer/>
    </div>
  );
};

export default App;
