import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Questions from './components/Questions';
import InitialScreen from './components/InitialScreen';
import { SettingsProvider } from './context/SettingsContext';

function App() {
  return (
    <SettingsProvider>
      <Router>
        <Header />
        <Routes>
          <Route path='/' exact element={<InitialScreen />} />
          <Route path='/questions' element={<Questions />} />
        </Routes>
      </Router>
    </SettingsProvider>
  );
}

export default App;
