
import './App.css';
import useWindowResize from './useWindowResize';

function App() {
  let {height,width}=useWindowResize();

  return (
    <div className="App">
      <h1>Window Resize Custom Hook</h1>
      <p>height :{height}</p>
      <p>width :{width}</p>
    </div>
  );
}

export default App;
