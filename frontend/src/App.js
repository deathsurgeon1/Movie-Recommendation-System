import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import RecommendationCard from './components/Card.jsx'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RecommendationCard/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
