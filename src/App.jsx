import { useState } from 'react'
import './App.css'
import { Menu } from './components/Menu'
import { Home } from './components/Home'
import { LikedPhotos } from './components/LikedPhotos';
import { LikedReels } from './components/LikedReels';

function App() {
   const [Page, setPage] = useState(0);
   let onview;
   if (Page === 0){
    onview = <Home />;
   }
   else if (Page === 1){
    onview = <LikedPhotos/>
   }
   else{
    onview = <LikedReels />
   }
  return (
    <div className="fixed -z-10 top-0 right-0 h-full w-full bg-slate-800">
    <Menu ChangePage={setPage} />
    <div className="flex h-full w-full justify-end overflow-scroll">
      {onview}
    </div>
    </div>
  )
}

export default App
