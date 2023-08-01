import { Routes, Route } from 'react-router-dom';
import Layout from './components/atoms/Layout/Layout';
import Chat from './components/pages/ChatPage/ChatPage';
import Login from './components/pages/LoginPage/LoginPage';
import Draw from './components/pages/DrawPage/DrawPage';
import Waitingroom from './components/pages/WaitroomPage/WaitroomPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Login />} />
        <Route path="/game" element={<Draw />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/waitingroom" element={<Waitingroom />} />
      </Route>
    </Routes>
  );
}

export default App;
