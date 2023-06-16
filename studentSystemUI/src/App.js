import './App.css';
import Appbar from './components/Appbar';
import BasicTextFields from './components/Student';
function App() {
  return (
    <div className="App">
      <header>
      <Appbar/>
      <BasicTextFields/></header>
    </div>
  );
}

export default App;
