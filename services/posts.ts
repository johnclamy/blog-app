import posts, { postId } from './data'
import BlogPost from '@/interfaces/post'


export default function getPosts(): BlogPost[] {
    return posts
}


export function addPost(post: Omit<BlogPost, 'id'>): BlogPost {
    const newPost = { ...post, id: postId.getNextId() }
    
    posts.push(newPost)
    return newPost
}
