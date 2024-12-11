import { db } from '@/db';
// import { metadata } from 'next';

// export async function generateMetadata({ params }) {
//   const id = (await params).id;
//   const result = await db.query('SELECT * FROM posts');
//   const post = result.rows;
//   console.log('View the metadata post title:', post.title);
//   return {
//     title: `${params.title}`,

//     description: 'A social app like Reddit or Hacker News',
//   };
// }

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
