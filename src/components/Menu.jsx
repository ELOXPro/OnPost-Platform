import { motion } from "framer-motion"

export const Menu = (props) => {
    const {ChangePage} = props;
  return (
    <div className="fixed top-0 left-0 h-full w-11 md:w-1/4 bg-slate-900">
        <div className="flex flex-col md:flex-row gap-4 justify-center items-center p-2 md:p-4 border-b-4 border-slate-800 overflow-hidden mt-4 md:mt-auto">
         <img src="/Assets/logo.png" alt="logo" className="w-11 md:w-16 h-11 md:h-16"/>
         <h3 className="invisible md:visible text-3xl text-slate-300 font-mono font-extrabold">OnPost</h3>
        </div>
        <div className="flex flex-col items-center justify-start h-full mt-4 gap-4 md:gap-8 overflow-hidden md:overflow-auto">       
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
            className="text-xl font-bold cursor-pointer text-white w-4/5 flex flex-row p-2 gap-2 justify-start items-start md:items-center bg-slate-900  hover:bg-slate-800 rounded-full transition-all">
            <img src={imgUrl} alt="MenuItem" className="w-5 h-5"/>
            <div className="invisible md:visible">
            {label}
            </div>
        </button>

    );
  };