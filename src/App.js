import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import News from './pages/News';
import Shows from './pages/Shows';
import Entertainment from './pages/Entertainment';
import ConcertsinUSA from './pages/ConcertsinUSA';
import NewsBlog from './pages/NewsBlog';


function App() {
  return (
    <Router>
      <Routes>
        {/* Main Layout ke liye routes */}
        <Route path="/" element={<MainLayout><Home /></MainLayout>} />
        <Route path="/News" element={<MainLayout><News /></MainLayout>} />
        <Route path="/Shows" element={<MainLayout><Shows /></MainLayout>} />
        <Route path="/Entertainment" element={<MainLayout><Entertainment /></MainLayout>} />
        <Route path="/ConcertsinUSA" element={<MainLayout><ConcertsinUSA /></MainLayout>} />
        <Route path="/NewsBlog" element={<MainLayout><NewsBlog /></MainLayout>} />
      </Routes>
    </Router>
  );
}

export default App;
