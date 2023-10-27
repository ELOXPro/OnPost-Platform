import { motion } from "framer-motion"
import { Post } from "./Post"

export const Home = () => {
  return (
    <div className="h-full w-full md:w-3/5 overflow-y-scroll scrollbar-hide flex justify-end md:justify-normal">
     <div className="w-full py-10 px-2 md:px-32">
     {profiles.map((profile, index) => (
          <Post key={index} username={profile.username} image={profile.image} caption={profile.caption} location={profile.location} likes={profile.likes}/>
        ))}
          </div>
    </div>
  )
}

const profiles = [
        {
            username: 'elox',
            image: 'Posts/elox.jpg',
            caption: 'This is My Profile Picture',
            location: 'Kimironko, Rwanda',
            likes: 100,
        },
        {
            username: 'amy',
            image: 'Posts/amy.jpeg',
            caption: 'Always Enjoying My Life',
            location: 'Los Angeles, USA',
            likes: 450,
            
        },
        {
            username: 'ange',
            image: 'Posts/ange.jpeg',
            caption: 'I live A Life I Love',
            location: 'Kacyiru, Rwanda',
            likes: 360,
        },
        {
            username: 'avatar',
            image: 'Posts/avatar.jpeg',
            caption: 'I just Love Praying Movies.',
            location: 'Gikondo, Rwanda',
            likes: 1401,
        },
        {
            username: 'cedric',
            image: 'Posts/cedric.jpeg',
            caption: 'I am Working Hard right now',
            location: 'Nyamirambo, Rwanda',
            likes: 5678,
        },
        {
            username: 'claudine',
            image: 'Posts/claudine.jpeg',
            caption: 'Loving Everything About It',
            location: 'Kabeza, Rwanda',
            likes: 6588,
        },
        {
            username: 'daniel',
            image: 'Posts/daniel.jpeg',
            caption: 'I love Devloping Softwares',
            location: 'Kanombe, Rwanda',
            likes: 6786,
        },
        {
            username: 'elodie',
            image: 'Posts/amy.jpeg',
            caption: 'Always Blessed',
            location: 'Kimironko, Rwanda',
            likes: 3239,
        },
        {
            username: 'mucyo',
            image: 'Posts/mucyo.jpeg',
            caption: 'I am Muhanga Boy',
            location: 'Muhanga, Rwanda',
            likes: 987,
        },
        {
            username: 'savimbi',
            image: 'Posts/savimbi.jpeg',
            caption: "I don't Know man",
            location: 'Remera, Rwanda',
            likes: 2453,
        },
];