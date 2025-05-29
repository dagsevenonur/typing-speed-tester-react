import Header from './components/header/header'
import './App.css'
import Section from './components/section/section'
import { GlobalProvider } from './contexs/globalStore';

function App() {
  return (
    <GlobalProvider>
      <Header />
      <Section />
    </GlobalProvider>
  );
}

export default App
