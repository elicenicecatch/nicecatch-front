import { Routes, Route } from 'react-router-dom';
import Layout from './components/atoms/Layout/Layout';
import Chat from './components/pages/ChatPage/ChatPage';
import Login from './components/pages/LoginPage/LoginPage';
import Join from './components/pages/JoinPage/JoinPage';
import Draw from './components/pages/DrawPage/DrawPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Login />} />
        <Route path="/join" element={<Join />} />
        <Route path="/game" element={<Draw />} />
        <Route path="/chat" element={<Chat />} />
      </Route>
    </Routes>
  );
}

export default App;
