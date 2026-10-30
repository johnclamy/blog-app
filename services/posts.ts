import posts, { postId } from './data'


export default function getPosts(): typeof posts {
    return posts
}


export function addPost(post: Omit<typeof posts[number], 'id'>) {
    const newPost = { ...post, id: postId.getNextId() }
    
    posts.push(newPost)
    return newPost
}
