import logo from './logo.svg';
import Homepage from './components/homepage/Homepage';
import Register from './components/register/Register';
import TextingPage from './components/texting-page/TextingPage';
import FindFriends from "./components/find-friends/FindFriends";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/textingPage" element={<TextingPage />} />
        <Route path="/findFriends" element={<FindFriends />} />

      </Routes>
    </Router>
  );
}

export default App;
