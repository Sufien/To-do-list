import './App.css';
import Navbar from './components/Navbar';
import ContentManager from './components/ContentManager';

const text = ["First thing to do", "Second thing to do", "Third thing to do"];

function App() {
  return (
    
    <div class="container">
      <Navbar />
      <ContentManager data={text}/>
    </div>
  );
}

export default App;
