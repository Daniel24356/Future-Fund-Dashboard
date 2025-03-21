import { ThemeProvider } from './context/ThemeContext';
import './App.css';
import AppRouter from './AppRouter';

function App() {
  return (
    <ThemeProvider>
      <div className="app">
        <AppRouter />
      </div>
    </ThemeProvider>
  );
}

export default App;
