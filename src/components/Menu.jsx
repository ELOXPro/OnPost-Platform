import { motion } from "framer-motion"

export const Menu = (props) => {
    const {ChangePage} = props;
  return (
    <div className="fixed top-0 left-0 h-full w-11 md:w-1/5 bg-black border-zinc-600 border-r-2">
        <div className="flex flex-col md:flex-row gap-4 justify-center md:justify-start  items-center p-2 md:p-4 overflow-hidden mt-4 md:mt-auto">
         <img src="/Assets/logo.png" alt="logo" className="visible md:invisible w-11 md:w-1 h-11 md:h-16"/>
         <h3 className="invisible md:visible text-3xl text-white font-mono font-extrabold">OnPost</h3>
        </div>
        <div className="flex flex-col mx-4 justify-start h-full mt-4 gap-2 md:gap-4 overflow-hidden md:overflow-auto">       
         <MenuButton label="Home" imgUrl="/Assets/home.png" onClick={() => alert("Work In Progress")}/>
         <MenuButton label="Search" imgUrl="/Assets/search.png" onClick={() => alert("Work In Progress")}/>
         <MenuButton label="Explore" imgUrl="/Assets/explore.png" onClick={() => alert("Work In Progress")}/>
         <MenuButton label="Reels" imgUrl="/Assets/reels.png" onClick={() => alert("Work In Progress")}/>
         <MenuButton label="Messages" imgUrl="/Assets/dm.png" onClick={() => alert("Work In Progress")}/>
         <MenuButton label="Notifications" imgUrl="/Assets/notifications.png" onClick={() => alert("Work In Progress")}/>
         <MenuButton label="Create Post" imgUrl="/Assets/photos.png" onClick={() => alert("Work In Progress")}/>
         <MenuButton label="Profile" imgUrl="/Assets/user.png" onClick={() => alert("Work In Progress")}/>
        </div>
    </div>
  )
}

const MenuButton = (props) => {
    const {label, onClick, imgUrl} = props;
    return (
        <button
            onClick ={onClick}
            className="text-xl focus:font-bold cursor-pointer text-white w-full flex flex-row p-2 gap-2 justify-start items-start md:items-center bg-black  hover:bg-zinc-800 rounded-lg transition-all">
            <img src={imgUrl} alt="MenuItem" className="w-6 h-6"/>
            <div className="invisible md:visible">
            {label}
            </div>
        </button>

    );
  };