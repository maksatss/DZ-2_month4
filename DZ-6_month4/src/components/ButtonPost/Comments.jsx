import React, {useEffect, useState} from "react";

import styles from '/src/components/ButtonPost/comments.module.css'

const Comments = ({ postId }) => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${postId}/comments`
      );
      const data = await res.json();
      setComments(data);
    }
    fetchData();
  }, [postId]);

  return (
    <ul>
      {comments.map((c) => (
        <li className={styles.Comments} key={c.id}>{c.body}</li>
      ))}
    </ul>
  );
};

export default Comments