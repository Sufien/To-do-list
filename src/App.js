import logo from './logo.svg';
import './App.css';
import TextBar from './components/textBar';
import Navbar from './components/Navbar';
import Card from './components/Card';
import Form from './components/Form';

const text = ["blablablablablablablabla", "blablablablablablablabla", "blablablablablablablabla"];

function App() {
  return (
    
    <div class="container">
      <Navbar />
      <Form />
      <Card data={text}/>
    </div>
  );
}

export default App;
