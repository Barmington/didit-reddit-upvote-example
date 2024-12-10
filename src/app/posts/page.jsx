import { db } from '@/db';

export default async function Posts() {
  const result = await db.query('SELECT * FROM posts');

  const posts = result.rows;
  console.log(posts);
  return (
    <div>
      <h2>Posts</h2>
      {posts.map(post => {
        return (
          <div key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </div>
        );
      })}
    </div>
  );
}
