import { Routes, Route } from 'react-router-dom';
import Home from './components/pages/HomePage/HomePage';
import Layout from './components/atoms/Layout/Layout';
import Game from './components/pages/GamePage/GamePage';
import Chat from './components/pages/GamePage/ChatPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/game" element={<Game />} />
        <Route path="/chat" element={<Chat />} />
      </Route>
    </Routes>
  );
}

export default App;
