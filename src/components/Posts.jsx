import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "../features/posts/postsSlice";
import "../styles/allstyles.css"

const Posts = () => {
  const dispatch = useDispatch();
  const { loading, posts, error } = useSelector((state) => state.posts);
  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  if (loading) return <p>Loading posts...</p>;
  if (error) return <p>Error: {error}</p>;

  // console.log(posts)
  return (
    <div>
      <h2>Posts</h2>
      <div className="grid gap-4">
        {posts.map((post) => (
        <div key={post.id} className="shadow  p-4 rounded-md hover:shadow-md text-gray-600  ">
          <h3 className="font-bold uppercase">{post.title}</h3>
          <p>{post.body}</p>
        </div>
      ))}
      </div>
    </div>
  );
};

export default Posts;
