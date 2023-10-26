import { motion } from "framer-motion"
import { Post } from "./Post"

export const Home = () => {
  return (
    <div className="h-full w-full md:w-3/4 justify-center mt-5 items-center px-10">
     <h3 className="text-5xl font-mono font-extrabold text-white ml-10 md:ml-auto ">Home</h3>
     <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-4/5 md:w-full mx-5 md:mx-auto">
     {profiles.map((profile, index) => (
          <Post key={index} username={profile.username} image={profile.image} />
        ))}
          </div>
    </div>
  )
}

const profiles = [
        {
            username: 'elox',
            image: 'Posts/elox.jpg',
        },
        {
            username: 'amy',
            image: 'Posts/amy.jpeg',
        },
        {
            username: 'ange',
            image: 'Posts/ange.jpeg',
        },
        {
            username: 'avatar',
            image: 'Posts/avatar.jpeg',
        },
        {
            username: 'cedric',
            image: 'Posts/cedric.jpeg',
        },
        {
            username: 'claudine',
            image: 'Posts/claudine.jpeg',
        },
        {
            username: 'daniel',
            image: 'Posts/daniel.jpeg',
        },
        {
            username: 'elodie',
            image: 'Posts/amy.jpeg',
        },
        {
            username: 'mucyo',
            image: 'Posts/mucyo.jpeg',
        },
        {
            username: 'savimbi',
            image: 'Posts/savimbi.jpeg',
        },
];