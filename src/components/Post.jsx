import { motion } from "framer-motion"
import { useState,useEffect } from "react"

export const Post = ({ username, image }) => {

    const saveData = (data) => {
        localStorage.setItem('postData', JSON.stringify(data));
      };
      const loadData = () => {
        const data = JSON.parse(localStorage.getItem('postData'));
        if (data) {
          setLiked(data.Liked);
          setDisliked(data.Disliked);
          setComments(data.comments || []);
        }
      };

    const [Liked, setLiked] = useState(50);
    const [Disliked, setDisliked] = useState(50);
    const [CommentsVisible, ViewComments] = useState(false);
    const [newComment, setNewComment] = useState('');
    const [comments, setComments] = useState([]);
    let onview;
   if (CommentsVisible === true){
    onview = <CommentsBox ViewComments={ViewComments} comments={comments} username={username}/>;
   }
    const LikeClicked = () => {
        setLiked(100);
        setDisliked(50);

        saveData({
            Liked: 100,
            Disliked: 50,
            comments,
          });
      };
    const DislikeClicked = () => {
        setLiked(50);
        setDisliked(100);

        saveData({
            Liked: 50,
            Disliked: 100,
            comments,
          });
      };
      const addComment = () => {
        if (newComment) {
          const updatedComments = [...comments, newComment];
          setComments(updatedComments);
          setNewComment('');
          saveData({
            Liked,
            Disliked,
            comments: updatedComments,
          });
        }
      };

      const deleteAll = () => {

        localStorage.clear();

        setLiked(50);
        setDisliked(50);
        setComments([]);
        setNewComment('');
      };

    useEffect(() => {
        loadData();
      }, []);

  return (
    <motion.div className="h-auto w-72 justify-center mt-10 bg-gradient-to-bl from-slate-900 via-slate-800 to-slate-700 rounded-lg"
    initial={{
        opacity: 0,
        y:50,
      }}
      whileInView={{
        opacity: 1,
        y:0,
        transition:{
          duration: 1,
          delay: 0.2,
        }
      }}
    >
     <div className=" flex flex-row w-full bg-slate-900 p-2 justify-start gap-4 items-center rounded-t-lg">
       <img src="/Assets/user.png" alt="UserProfile" className="w-11 h-11"/>
       <h3 className="text-xl font-mono font-bold text-white">{username}</h3>
     </div>
     <div className=" flex w-full bg-slate-700">
       <img src={image} alt="Post" className="w-full h-64"/>
     </div>
     <div className=" flex flex-row w-full bg-slate-900 p-2 gap-6 justify-start items-center">
       <ReactButton imgUrl="/Assets/like.png" onClick={LikeClicked} choice={Liked}/>
       <ReactButton imgUrl="/Assets/dislike.png" onClick={DislikeClicked} choice={Disliked}/>
       <CommentButton imgUrl="/Assets/comment.png" onClick={() =>ViewComments(true)}/>
     </div>
     <div className=" flex flex-col w-full p-2 justify-center items-center gap-4">
     <textarea
            className="w-full shadow border rounded py-1 px-3 text-white font-mono font-bold focus:outline-none focus:shadow-outline bg-slate-900"
            name="comment"
            placeholder="Add Your Comment"
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
          />
          <div className="flex flex-row gap-2">
        <button onClick={addComment} className="text-sm text-white font-bold font-mono p-2 bg-blue-700 hover:bg-blue-900 rounded-lg transition-all">Add Comment</button>
        <button onClick={deleteAll} className="text-sm text-white font-bold font-mono p-2 bg-blue-700 hover:bg-blue-900 rounded-lg transition-all">Clear All</button>
        </div> 
     </div>
     {onview}
    </motion.div>
  )
}

const ReactButton = (props) => {
    const {onClick, imgUrl,choice} = props;
    return (
        <button
            onClick ={onClick}
            className={`z-0 cursor-pointer w-5 hover:opacity-25 opacity-${choice} transition-all`}>
            <img src={imgUrl} alt="MenuItem" className="w-5 h-5"/>
        </button>

    );
  };

  const CommentButton = (props) => {
    const {label, onClick, imgUrl} = props;
    return (
        <button
            onClick ={onClick}
            className="cursor-pointer w-5 transition-all opacity-100 hover:opacity-25">
            <img src={imgUrl} alt="MenuItem" className="w-5 h-5"/>
        </button>

    );
  };

  const CommentsBox = (props) => {
    const { comments, ViewComments,username } = props;
    return (
      <>
        <button
          className="absolute top-20 right-6 md:top-40 md:right-48 z-50 hover:opacity-25 transition-all"
          onClick={() => ViewComments(false)}
        >
          <img src={"/Assets/close.png"} alt="MenuItem" className="w-8 md:w-11 h-8 md:h-11" />
        </button>
        <div className="fixed top-20 md:top-36 left-12 md:left-96 w-72 md:w-1/2 h-96 p-2 bg-slate-700">
          <h3 className="text-slate-500 text-base md:text-2xl font-bold font-mono my-4">All Comments on {username}'s Post</h3>
          <div className="flex justify-center">
            {comments.map((comment, index) => (
              <p key={index} className="text-base text-white font-mono font-bold truncate">
                {comment}
              </p>
            ))}
          </div>
        </div>
      </>
    );
  };
  