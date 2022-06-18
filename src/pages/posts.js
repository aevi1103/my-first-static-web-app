import { useEffect, useState } from "react";

export default function Posts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://random-data-api.com/api/cannabis/random_cannabis?size=10")
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);

  return (
    <ul>
      {posts.map((post) => (
        <li>
          <pre>{JSON.stringify(post, 2, null)}</pre>
        </li>
      ))}
    </ul>
  );
}
