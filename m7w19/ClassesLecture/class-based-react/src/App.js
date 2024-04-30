import logo from './logo.svg';
import './App.css';
import Counter from './components/Counter';
import Title from './components/Title';
import ClassuseEffect from './components/ClassuseEffect';
import ClassCounter from './components/ClassCounter';
import { useState } from 'react';
import ClassFetch from './components/ClassFetch';

// I would say to stick with either functional components or class based components, not both.
function App() {
  const [deleteComponent, setDeleteComponent] = useState(true)
  return (
    <div className="App">
      <header className="App-header">
        {/* <Title /> */}
        {/* <button onClick={()=> setDeleteComponent(false)}>Delete the ClassCounter component!</button> */}
        {/* <ClassuseEffect /> */}
        {/* {deleteComponent && <ClassCounter/>} */}
        <ClassFetch />
      </header>
    </div>
  );
}

export default App;
