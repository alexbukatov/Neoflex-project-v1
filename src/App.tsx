
import './scss/app.scss';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';

function App() {
  // Возможно далее сделаю с помощью outlet дочерние элементы, но пока не уверен т.к приложение небольшое и этого достаточно
  return (
    <div className='wrapper'>
      <div className='container'>
        <Header/>
        <main className='content'>
          <Routes>
            <Route path='/' element={<Home/>}/>         
          </Routes>
        </main>
      </div> 
      <Footer/>
    </div>
  );
}

export default App;
