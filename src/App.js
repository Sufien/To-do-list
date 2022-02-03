import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Card from './components/Card';
import Form from './components/Form';
import ContentManager from './components/ContentManager';

const text = ["blablablablablablablabla", "blablablablablablablabla", "blablablablablablablabla"];

function App() {
  return (
    
    <div class="container">
      <Navbar />
      <ContentManager data={text}/>
    </div>
  );
}

export default App;
