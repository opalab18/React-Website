import './App.css';
<<<<<<< HEAD
=======
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
>>>>>>> 9a91ed2b618279e3082bbdf62d35b69e9fd62a29
import {BrowserRouter as Router} from 'react-router-dom';
import Home from './pages';

function App() {
  return (
    <Router>
<<<<<<< HEAD
      <Home />
=======
      <Sidebar />
      <Navbar />
>>>>>>> 9a91ed2b618279e3082bbdf62d35b69e9fd62a29
    </Router>
  );
}

export default App;