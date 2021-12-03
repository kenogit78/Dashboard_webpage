import React, {useState} from 'react'
import './App.css';
import Content from './components/content/Content';
import Sidebar from './components/sidebar/Sidebar';
import SideDashboard from './components/SideDashboard/SideDashboard';



function App() {

  const [isOpen, setIsOpen] = useState(false)

const toggle = () => {
  setIsOpen(!isOpen)
}
  return (
    <div className="App">

      <SideDashboard isOpen={isOpen} toggle={toggle} />

      <Sidebar />
      <Content toggle={toggle} />
    </div>
  );
}

export default App;
