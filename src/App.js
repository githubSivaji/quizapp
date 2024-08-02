import logo from './logo.svg';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './Components/Layout';
import Home from './Components/Home';
import NavBar from './Components/Navbar';
import Createquiz from './Components/Createquiz';

function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
      <Routes>
        <Route path='/' element = {<Layout/>}/>
        <Route path='/home' element= { <Home/>} />
        <Route path='/CreateQuiz' element={<Createquiz/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
