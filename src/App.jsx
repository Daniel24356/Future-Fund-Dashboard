import { ThemeProvider } from './context/ThemeContext';
import './App.css';
import AppRouter from './AppRouter';
export const BASE_URL = "https://future-fund-backend-production.up.railway.app"

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
