import logo from './logo.svg';
import './App.css';
import Blogs from './Components/Blogs';
import Podcast from './Components/Podcast';

function App() {
  return (
    <div className='App'>
      {/* <Blogs className='blog' /> */}
      <Podcast></Podcast>
    </div>
  );
}

export default App;
