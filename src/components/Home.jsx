import { motion } from "framer-motion"
import { Post } from "./Post"

export const Home = () => {
  return (
    <div className=" h-full w-3/5 overflow-y-scroll scrollbar-hide">
     <div className="w-full p-32">
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