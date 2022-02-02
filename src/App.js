import logo from './logo.svg';
import './App.css';
import TextBar from './components/textBar';
import Navbar from './components/Navbar';
import Card from './components/Card';

const text = ["My first content", "Second one", "Third one"];

function App() {
  return (
    <div>
      <Navbar />
      <div class="row">
        <Card data={text}/>
      </div>
      
    </div>
  );
}

export default App;
