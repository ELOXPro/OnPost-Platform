import { motion } from "framer-motion"
import { useState,useEffect } from "react"

export const Post = ({ username, image }) => {
   const path = 'postData' + username;

    const saveData = (data) => {
        localStorage.setItem(path, JSON.stringify(data));
      };
      const loadData = () => {
        const data = JSON.parse(localStorage.getItem(path));
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
    <div className="w-full justify-center items-center border-b-2 border-zinc-200 dark:border-zinc-800"
    >
     <div className=" flex flex-row w-full p-2 justify-start gap-4 items-center rounded-t-lg">
       <img src={image} alt="UserProfile" className="w-11 h-11 rounded-full"/>
       <h3 className="text-xl font-mono font-bold text-black dark:text-white">{username}</h3>
     </div>
     <div className=" border-zinc-200 dark:border-zinc-800 border-2">
       <img src={image} alt="Post" className="w-full h-full"/>
     </div>
     <div className="z-10 flex flex-row w-full p-2 gap-6 justify-start items-center">
       <ReactButton onClick={LikeClicked} choice={Liked}/>
       <OtherButton
        imgUrl="M61.44,0a61.46,61.46,0,0,1,54.91,89l6.44,25.74a5.83,5.83,0,0,1-7.25,7L91.62,115A61.43,61.43,0,1,1,61.44,0ZM96.63,26.25a49.78,49.78,0,1,0-9,77.52A5.83,5.83,0,0,1,92.4,103L109,107.77l-4.5-18a5.86,5.86,0,0,1,.51-4.34,49.06,49.06,0,0,0,4.62-11.58,50,50,0,0,0-13-47.62Z" 
        onClick={() =>ViewComments(true)}/>
        <OtherButton
        imgUrl="M96.14,12.47l-76.71-1.1,28.3,27.85L96.14,12.47ZM53.27,49l9.88,39.17L102.1,22,53.27,49ZM117,1.6a5.59,5.59,0,0,1,4.9,8.75L66.06,105.21a5.6,5.6,0,0,1-10.44-1.15L41.74,49,1.67,9.57A5.59,5.59,0,0,1,5.65,0L117,1.6Z" 
        onClick={() =>alert('Work in Progress')}/>
     </div>
     <div className=" flex flex-col w-full py-2 justify-start gap-2">
     <textarea
            className="w-full shadow border rounded py-1 px-3 text-black dark:text-white font-mono font-bold focus:outline-none focus:shadow-outline bg-white dark:bg-black"
            name="comment"
            placeholder="Add Your Comment"
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
          />
          <div className="flex flex-row gap-2 pl-2">
        <button onClick={addComment} className="text-sm font-bold font-mono  text-zinc-500 hover:text-zinc-900  transition-all">Add Comment</button>
        <button onClick={deleteAll} className="text-sm font-bold font-mono text-zinc-500 hover:text-zinc-900 transition-all">Clear All</button>
        </div> 
     </div>
     {onview}
    </div>
  )
}

const ReactButton = (props) => {
    const {onClick,choice} = props;
    let onview;
    let recolor;

    if (choice===false){
      onview = "M61.43,13.53C66.76,7.51,72.8,3.69,78.96,1.69c6.48-2.1,13.07-2.15,19.09-0.6c6.05,1.55,11.52,4.72,15.74,9.03 c5.58,5.7,9.09,13.36,9.09,22.02c0,13.7-6.6,26.75-17.42,39.37c-10.14,11.83-24.05,23.35-39.61,34.73 c-2.58,1.89-5.98,1.88-8.5,0.22l0,0.01l-0.03-0.02l0,0.01l-0.02-0.01l-0.21-0.15c-4.46-2.92-8.75-5.91-12.8-8.94 c-4.05-3.03-8.01-6.22-11.83-9.56C12.58,70.42,0,51.4,0,32.13c0-8.8,3.44-16.44,8.93-22.08c4.25-4.37,9.73-7.51,15.79-9.03V1.02 c5.99-1.5,12.57-1.4,19.05,0.69C49.99,3.71,56.09,7.54,61.43,13.53L61.43,13.53L61.43,13.53z M83.51,15.87 C78.02,17.65,72.51,22.02,68,29.78c-0.63,1.19-1.6,2.21-2.85,2.93c-3.56,2.05-8.11,0.82-10.15-2.74 c-4.5-7.82-10.14-12.27-15.78-14.08c-3.71-1.19-7.46-1.25-10.88-0.4l0,0l-0.02,0c-3.35,0.83-6.37,2.56-8.7,4.95 c-2.87,2.95-4.67,7-4.67,11.7c0,14.53,10.59,29.82,27.3,44.43c3.28,2.87,6.95,5.82,10.95,8.81c2.61,1.96,5.35,3.92,8.04,5.74 c13.03-9.76,24.53-19.53,32.9-29.3c8.58-10,13.8-19.92,13.8-29.68c0-4.55-1.84-8.58-4.76-11.57c-2.38-2.42-5.43-4.2-8.8-5.06 C90.98,14.63,87.23,14.67,83.51,15.87L83.51,15.87L83.51,15.87z"
      recolor = "fill-black dark:fill-white w-5 h-6"
    }
    else if (choice===true){
      onview = "M60.83,17.19C68.84,8.84,74.45,1.62,86.79,0.21c23.17-2.66,44.48,21.06,32.78,44.41 c-3.33,6.65-10.11,14.56-17.61,22.32c-8.23,8.52-17.34,16.87-23.72,23.2l-17.4,17.26L46.46,93.56C29.16,76.9,0.95,55.93,0.02,29.95 C-0.63,11.75,13.73,0.09,30.25,0.3C45.01,0.5,51.22,7.84,60.83,17.19L60.83,17.19L60.83,17.19z"
      recolor = "fill-red-500 w-5 h-6"
    }
    else {
      onview = "M61.43,13.53C66.76,7.51,72.8,3.69,78.96,1.69c6.48-2.1,13.07-2.15,19.09-0.6c6.05,1.55,11.52,4.72,15.74,9.03 c5.58,5.7,9.09,13.36,9.09,22.02c0,13.7-6.6,26.75-17.42,39.37c-10.14,11.83-24.05,23.35-39.61,34.73 c-2.58,1.89-5.98,1.88-8.5,0.22l0,0.01l-0.03-0.02l0,0.01l-0.02-0.01l-0.21-0.15c-4.46-2.92-8.75-5.91-12.8-8.94 c-4.05-3.03-8.01-6.22-11.83-9.56C12.58,70.42,0,51.4,0,32.13c0-8.8,3.44-16.44,8.93-22.08c4.25-4.37,9.73-7.51,15.79-9.03V1.02 c5.99-1.5,12.57-1.4,19.05,0.69C49.99,3.71,56.09,7.54,61.43,13.53L61.43,13.53L61.43,13.53z M83.51,15.87 C78.02,17.65,72.51,22.02,68,29.78c-0.63,1.19-1.6,2.21-2.85,2.93c-3.56,2.05-8.11,0.82-10.15-2.74 c-4.5-7.82-10.14-12.27-15.78-14.08c-3.71-1.19-7.46-1.25-10.88-0.4l0,0l-0.02,0c-3.35,0.83-6.37,2.56-8.7,4.95 c-2.87,2.95-4.67,7-4.67,11.7c0,14.53,10.59,29.82,27.3,44.43c3.28,2.87,6.95,5.82,10.95,8.81c2.61,1.96,5.35,3.92,8.04,5.74 c13.03-9.76,24.53-19.53,32.9-29.3c8.58-10,13.8-19.92,13.8-29.68c0-4.55-1.84-8.58-4.76-11.57c-2.38-2.42-5.43-4.2-8.8-5.06 C90.98,14.63,87.23,14.67,83.51,15.87L83.51,15.87L83.51,15.87z"
      recolor = "fill-black dark:fill-white w-5 h-6"
    }

    return (
      <button
      onClick ={onClick}
      className="hover:opacity-25"
      >
      <svg className={recolor}
      xmlns="http://www.w3.org/2000/svg" viewBox="0 0 122.88 112.07" >
      <path d={onview}/>
      <g>
      </g>
      </svg>
  </button>

    );
  };

  const OtherButton = (props) => {
    const {onClick, imgUrl} = props;
    return (
        <button
            onClick ={onClick}
            className="cursor-pointer w-5 transition-all opacity-100 hover:opacity-25">
            <svg className="fill-black dark:fill-white w-5 h-6"
            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 122.88 112.07" >
            <path d={imgUrl}/>
            <g>
            </g>
            </svg>
        </button>

    );
  };

  const CommentsBox = (props) => {
    const { comments, ViewComments,username } = props;
    return (
      <>
        <button
          className="absolute top-10 right-8 md:top-40 md:right-48 z-50 hover:opacity-25 transition-all"
          onClick={() => ViewComments(false)}
        >
          <svg className="fill-black dark:fill-white w-8 h-9"
            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 122.88 112.07" >
            <path d="M61.44,0c16.966,0,32.326,6.877,43.445,17.996c11.119,11.118,17.996,26.479,17.996,43.444 c0,16.967-6.877,32.326-17.996,43.444C93.766,116.003,78.406,122.88,61.44,122.88c-16.966,0-32.326-6.877-43.444-17.996 C6.877,93.766,0,78.406,0,61.439c0-16.965,6.877-32.326,17.996-43.444C29.114,6.877,44.474,0,61.44,0L61.44,0z M80.16,37.369 c1.301-1.302,3.412-1.302,4.713,0c1.301,1.301,1.301,3.411,0,4.713L65.512,61.444l19.361,19.362c1.301,1.301,1.301,3.411,0,4.713 c-1.301,1.301-3.412,1.301-4.713,0L60.798,66.157L41.436,85.52c-1.301,1.301-3.412,1.301-4.713,0c-1.301-1.302-1.301-3.412,0-4.713 l19.363-19.362L36.723,42.082c-1.301-1.302-1.301-3.412,0-4.713c1.301-1.302,3.412-1.302,4.713,0l19.363,19.362L80.16,37.369 L80.16,37.369z M100.172,22.708C90.26,12.796,76.566,6.666,61.44,6.666c-15.126,0-28.819,6.13-38.731,16.042 C12.797,32.62,6.666,46.314,6.666,61.439c0,15.126,6.131,28.82,16.042,38.732c9.912,9.911,23.605,16.042,38.731,16.042 c15.126,0,28.82-6.131,38.732-16.042c9.912-9.912,16.043-23.606,16.043-38.732C116.215,46.314,110.084,32.62,100.172,22.708 L100.172,22.708z"/>
            <g>
            </g>
            </svg>
        </button>
        <div className="fixed z-20 top-20 md:top-36 left-12 md:left-96 w-72 md:w-1/2 h-96 p-2 bg-white dark:bg-black border-zinc-400 dark:border-zinc-800 border-2 ">
          <h3 className="text-slate-500 text-base md:text-2xl font-bold font-mono my-4">All Comments on {username}'s Post</h3>
          <div className="flex justify-center">
            {comments.map((comment, index) => (
              <p key={index} className="text-base text-black dark:text-white font-mono font-bold truncate">
                {comment}
              </p>
            ))}
          </div>
        </div>
      </>
    );
  };
  