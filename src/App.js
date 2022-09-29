
import './App.css';
import NavBar from './components/NavBar';
import TextForm from './components/TextForm';

function App()
{
  return (
    <div className="App">
    <NavBar />
      <div className='container p-5'>
        <TextForm />
      </div>
    </div>
  );
}

export default App;
