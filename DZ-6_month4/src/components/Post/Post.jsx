import React, { useState, useEffect } from 'react';
import Comments from "../ButtonPost/Comments.jsx";
import styles from '/src/components/Post/post.module.css'

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [clickedPostId, setClickedPostId] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch('https://jsonplaceholder.typicode.com/posts/');
      const data = await res.json();
      setPosts(data);
    }
    fetchData();
  }, []);

  const toggleComments = (postId) => {
    setClickedPostId(clickedPostId === postId ? null : postId);
  };

  return (
    <ul>
      {posts.map((p) => (
        <li className={styles.post} key={p.id}>
          {p.title}
          <button className={styles.cb} onClick={() => toggleComments(p.id)}>
            {clickedPostId === p.id ? 'COMMENTS' : 'COMMENTS'}
          </button>
          {clickedPostId === p.id && <Comments postId={p.id} />}
        </li>
      ))}
    </ul>
  );
};

export default Posts;
