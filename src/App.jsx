import { Routes, Route } from 'react-router-dom';
import Layout from './components/atoms/Layout/Layout';
import Chat from './components/pages/ChatPage/ChatPage';
import Login from './components/pages/LoginPage/LoginPage';
import Draw from './components/pages/DrawPage/DrawPage';
import Quiz from './components/pages/QuizPage/QuizPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Login />} />
        <Route path="/game" element={<Draw />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/quiz" element={<Quiz />} />
      </Route>
    </Routes>
  );
}

export default App;
