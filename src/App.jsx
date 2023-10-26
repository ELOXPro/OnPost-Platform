import { useState } from 'react'
import './App.css'
import { Menu } from './components/Menu'
import { Home } from './components/Home'

function App() {
   const [Page, setPage] = useState(0);
   
  return (
    <div className="fixed -z-10 top-0 right-0 h-full w-full bg-black">
    <Menu ChangePage={setPage} />
    <div className="flex h-full w-full justify-center">
      <Home/>
    </div>
    </div>
  )
}

export default App
