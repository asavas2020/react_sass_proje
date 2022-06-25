import './App.scss'
import Main from './components/Main/Main';
import Header from './components/Navbar/Header/Header';
import Navbar from './components/Navbar/Navbar/Navbar';

const App = () =>{
  return(
    <div className="App">
      <Navbar/>
      <Header/>
      <Main/>
    </div>
  )
}

export default App;