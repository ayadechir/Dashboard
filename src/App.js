import './App.css'
import Sidebar from './components/sidebar/Sidebar.jsx';
import Maindash from './components/maindash/Maindash.jsx';
function App() {
  return (
    <div className="App">
        <div className='AppGlass'>
         <Sidebar/>
         <Maindash/>
        </div>
    </div>
  );
}

export default App;