import { PostList } from '../components/PostList';

export const metadata = {
  title: 'Home Page - Awesome Website',
  description: 'Welcome to the home page of my awesome website',
};

export default async function Home() {
  return <PostList />;
}
