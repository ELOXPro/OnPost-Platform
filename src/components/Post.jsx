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
          setComments(data.comments || []);
        }
      };

    const [Liked, setLiked] = useState(false);
    const [CommentsVisible, ViewComments] = useState(false);
    const [newComment, setNewComment] = useState('');
    const [comments, setComments] = useState([]);
    let onview;
   if (CommentsVisible === true){
    onview = <CommentsBox ViewComments={ViewComments} comments={comments} username={username}/>;
   }
    const LikeClicked = () => {
      if (!Liked){
        setLiked(true);

        saveData({
          Liked: true,
          comments,
        });};
        if (Liked){
          setLiked(false);
          
          saveData({
            Liked: false,
            comments,
          });};
      };
      const addComment = () => {
        if (newComment) {
          const updatedComments = [...comments, newComment];
          setComments(updatedComments);
          setNewComment('');
          saveData({
            Liked,
            comments: updatedComments,
          });
        }
      };

      const deleteAll = () => {

        localStorage.clear();

        setLiked(false);
        setComments([]);
        setNewComment('');
      };

    useEffect(() => {
        loadData();
      }, []);

  return (
    <div className="w-full justify-center items-center border-b-2 border-zinc-800"
    >
     <div className=" flex flex-row w-full p-2 justify-start gap-4 items-center rounded-t-lg">
       <img src={image} alt="UserProfile" className="w-11 h-11 rounded-full"/>
       <h3 className="text-xl font-mono font-bold text-white">{username}</h3>
     </div>
     <div className=" border-zinc-800 border-2">
       <img src={image} alt="Post" className="w-full h-full"/>
     </div>
     <div className="z-10 flex flex-row w-full p-2 gap-6 justify-start items-center">
       <ReactButton imgUrl="/Assets/like.png" onClick={LikeClicked} choice={Liked}/>
       <CommentButton imgUrl="/Assets/comment.png" onClick={() =>ViewComments(true)}/>
     </div>
     <div className=" flex flex-col w-full py-2 justify-start gap-2">
     <textarea
            className="w-full shadow border rounded py-1 px-3 text-white font-mono font-bold focus:outline-none focus:shadow-outline bg-black"
            name="comment"
            placeholder="Add Your Comment"
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
          />
          <div className="flex flex-row gap-2 pl-2">
        <button onClick={addComment} className="text-sm font-bold font-mono  text-zinc-700 hover:text-zinc-900  transition-all">Add Comment</button>
        <button onClick={deleteAll} className="text-sm font-bold font-mono text-zinc-700 hover:text-zinc-900 transition-all">Clear All</button>
        </div> 
     </div>
     {onview}
    </div>
  )
}

const ReactButton = (props) => {
    const {onClick,choice} = props;
    let onview;

    if (choice===false){
      onview = <img src="/Assets/dislike.png" alt="MenuItem" className="w-5 h-5 opacity-50"/>;
    }
    else if (choice===true){
      onview = <img src="/Assets/like.png" alt="MenuItem" className="w-5 h-5 opacity-100"/>;
    }
    else {
      onview = <img src="/Assets/like.png" alt="MenuItem" className="w-5 h-5 opacity-100"/>;
    }

    return (
        <button
            onClick ={onClick}
            className={`z-10 cursor-pointer w-5 hover:opacity-25  transition-all`}>
            {onview}
        </button>

    );
  };

  const CommentButton = (props) => {
    const {onClick, imgUrl} = props;
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
        <div className="fixed z-50 top-20 md:top-36 left-12 md:left-96 w-72 md:w-1/2 h-96 p-2 bg-slate-700">
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
  