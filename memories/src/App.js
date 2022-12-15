import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from './pages/Login';
import SignUp from './pages/SignUp';

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/' exact element={<Home/>}/>
        <Route path='/login' exact element={<Login/>}/>
        <Route path='/signup' exact element={<SignUp/>}/>
      </Routes>
    </Router>
  );
}

export default App;
