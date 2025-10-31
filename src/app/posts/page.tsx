import { getAllPost } from "@/lib/api";
import PostList from "@/Components/PostList";

export default async function Pages() {
  const posts = await getAllPost();
  return (
    <>
    <div className="main-heading">
      <h2>Daftar Tulisan</h2>
      <p className="subtitle">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum quaerat facere a incidunt eius, suscipit nisi perspiciatis molestiae sed veritatis!</p>
    </div>
    <PostList posts={posts}/>
    </>
    
  );
}
