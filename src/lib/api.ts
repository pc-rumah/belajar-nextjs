import { Post } from "@/types/post";

export async function getLastPost():Promise<Post[]> {
  const rest = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=5");
  const posts = await rest.json();
  return posts;
}

export async function getDetailPost(id:number):Promise<Post> {
  const rest = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const posts = await rest.json();
  return posts;
}

export async function getAllPost():Promise<Post[]> {
  const rest = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await rest.json();
  return posts;
}