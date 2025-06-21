import { useState } from 'react'
import Content from './Components/Content';
import Navbar from './Components/navbar/Navbar';


function App() {
  const [ActiveTab, setActiveTab] = useState('home')

  return (
    <div>
      <Navbar ActiveTab={ActiveTab} setActiveTab={setActiveTab}/>
      <Content ActiveTab={ActiveTab}/>
    </div>
  )
}

export default App
